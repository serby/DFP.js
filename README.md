# DFP.js

Built from hard knocks and frustration over several years of trying to get it to work in various types of website and scanning through Google's GPT documentation.

The DFP.js to library aim is simplify the implementation of DFP and provide some much needed flexibility when advertising managers decide to have random positions or random sizes!

Uglify makes use of; https://skalman.github.io/UglifyJS-online/

# Releases

## Release 1.4.1

* The new events now only fire if the Content of the slot has actually changed.
  * There could be a deficiency here for apps which need to reload new ads into pre-existing slots. 
* Fixed an issue where the "Complete" event to fire incorrectly for the dfp.cycle() method was used for AJAX'd adverts.
* Removed "Complete" event debug code which is no longer needed.

## Release 1.4.0 - Events

* Added support for Google Publisher Tag "SlotRenderEndedEvent"
  * https://developers.google.com/doubleclick-gpt/reference#googletageventsslotrenderendedevent
* Created a collection of events which can be used by theme developers to react to adverts once rendered.
  * window.dfp.complete - fires once all ad slots are rendered on the page.
  * window.dfp.slot_rendered - fires when an individual ad slot is rendered. The event data includes the ad slot element as a jQuery object.
  * $( ad_slot_el ).on( 'rendered' ) - same as slot_rendered but specific to an ad slot element.
* Readme updated to include new code.

## Release 1.3.0

* Added additional logic for impression trackers to be provided on Site Skins.

## Release 1.2.0

* Added support for Out of Page slots which can be defined by using the data-oop="yes" attribute instead of data-sizes="".
* [Bug Fix] Fixed a race condition when using dfp.cycle() on AJAX content which put the wrong sizes into the wrong slots.
* Added an example of an Out of Page slot to the HTML Ad Slots.

## Release 1.1.0

* Define Slots now checks to see if the advert is visible so that different slots can be defined in responsive designs.
* Added a minified version of the dfp.js file.
* Fixed an inaccuracy in the documentation for "Set Targeting for a Single Slot".
* Removed the dfp.display() call in "JavaScript Execute" of the Readme as it's not actually needed.

## Release 1.0.0

Initial Release.

# Dependencies

This JavaScript only has a single hard dependency; jQuery.  It is not a jQuery plugin but makes use of several jQuery methods to simplify the implementation.

# How To Use DFP.js

## Installation

Download the DFP.js or DFP.min.js from this repository and then include it under your jQuery include;

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/dfp.js"></script>
```

## Basic Setup

Once you have included the DFP.js file in the header, then the next step is to prepare the main call which calls DFP to include the relevant scripts.  It will also scan the main HTML document to find the adverts to be served.

### HTML Ad Slots

Place a piece of HTML like the below where you wish the adverts to appear on the page.

```html
<div rel="advert" data-sizes="728x90"></div>
<div rel="advert" data-sizes="300x250"></div>
<div rel="advert" data-oop="yes"></div>
```

### JavaScript Execute

And make sure the following JavaScript is either in the head or above the `</body>` tag on the page.

```javascript
( function ( $ ) {
    $( document ).ready( function () {
    	/**
    	 * Must-Have settings - this part sets the basic network and Zone for the overall page.
    	 */
        dfp.collapsable = true;
        dfp.network = '/NetworkCode/UnitName';
        dfp.zone = 'home';

        /**
         * Execute DFP cycle - both methods need to be called to get the ads on the page to serve.
         */
        dfp.enable();
    } );
} )( jQuery );
```

And you're done!

## Additional Implementation Information

Whilst the above will get you up and running in no time, the below will provide you with the additional information you'll need to get the ads doing ever increasing numbers of fancy things.

### Companion Ads

Need that leaderboard and MPU to serve a companion set?  That's easily done by adding the `data-companion="yes"` attribute to the `<div rel="advert"></div>`.

```html
<div rel="advert" data-companion="yes" data-sizes="728x90"></div>
<div rel="advert" data-companion="yes" data-sizes="300x250"></div>
```

### Multiple Sizes

If you wish to serve an MPU or double MPU in the same place, just add specify the sizes separated by a comma.

```html
<div rel="advert" data-sizes="300x250,300x600"></div>
``` 

### Set Targeting for All Slots

To set targeting for all slots, then add the entries to `dfp.targeting_all` array prior to calling the `dfp.enable()` method.

```javascript
( function ( $ ) {
    $( document ).ready( function () {
        dfp.collapsable = true;
        dfp.network = '/NetworkCode/UnitName';
        dfp.zone = 'home';

        /**
         * Set some additional targeting for the adverts.
         */
        dfp.targeting_all.push( { "key" : "interests", "value" : ["sports", "music", "movies"] } );

        dfp.enable();
        dfp.display();
    } );
} )( jQuery );
```

### Set Targeting for a Single Slot

Best example is if you have a page which contains two MPU adverts; one at the top and one at the bottom.  For obvious reasons, the top one will be most valuable especially if it's very long page and therefore advertisers will need to be able target it by itself.

That's achieved by adding the `data-targeting="pos=top"` attribute to the `<div rel="advert"></div>`.

```html
<div rel="advert" data-sizes="300x250" data-targeting="pos=top"></div>
```

Multiple targeting options can be specified by separating them with a pipe (|) and multiple values can be specified by separating them with a comma.

```html
<div rel="advert" data-sizes="300x250" data-targeting="pos=top|gender=male|interests=sports,music,movies"></div>
<div rel="advert" data-sizes="300x250" data-targeting="x=right|y=top"></div>
```

### Dynamic Ads

If your site performs AJAX, perhaps using some PJAX technique, and HTML contains new slots which need to be displayed, you can use `dfp.cycle()` method.

```javascript
$.ajax( {
	url : "test.html",
	cache : false
} ).done( function( html ) {
	$( "#results" ).append( html );
	dfp.cycle();
} );
```

### All Advert Events

```javascript
$( document ).ready( function () {
    /** Runs when all adverts are rendered. There is no arguments passed. */
    $( window.dfp ).on( 'complete', function () {
        console.log( 'Rejoice - all adverts on screen!' );
    } );

    /** Ad slot rendered. */
    $( window.dfp ).on( 'slot_renderd', function ( data ) {
        console.log( '3 elements of ads on the website, 3 elements of ads.' );

        /** jQuery object on the ad slot DOM element. */
        console.log( data.el );
    } );
} );
```

### Ad Specific Events

In order to make use of these events, it is best practice to manually specify an element ID for the HTML like so;

```html
<div id="myAD" rel="advert" data-sizes="300x250,300x600"></div>
```

And then target with events as follows;

```javascript
$( document ).ready( function () {
    /** Runs when the specific slot is empty */
    $( '#myAD' ).on( 'empty', function ( data ) {
        console.log( 'I need to sell more ads :-(' );
    } );

    /** Runs when the specific slot is rendered. */
    $( '#myAD' ).on( 'rendered', function ( data ) {
        if ( 600 === $( this ).height() ) {
            // change my layout for the bigger advert.
        }
    } );
} );
```

## Doesn't DFP require IDs for those divs?

Yes.  But the library will dynamically set a unique ID if the `<div rel="advert"></div>` element does not have one already.  So no need to worry about it!

## License

DFP.js is licensed under the MIT open source license.
