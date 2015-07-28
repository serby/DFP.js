/**
 * DFP.js 1.3.0
 * 
 * Copyright (c) 2015 Cameron Terry
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var googletag=googletag||{};googletag.cmd=googletag.cmd||[],function(e){var t=document.createElement("script");t.async=!0,t.type="text/javascript";var a="https:"==document.location.protocol;t.src=(a?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o);var n={collapsable:!1,ad_slots:[],network:"",targeting_all:[],zone:"",defineSlots:function(){e('div[rel="advert"][data-ad-complete!="yes"]:visible').each(function(){var t=e(this),a=n.getID(t),o=null;o="yes"===t.data("oop")?googletag.defineOutOfPageSlot(n.network+n.zone,a):googletag.defineSlot(n.network+n.zone,n.getSizes(t.data("sizes")),a),n.setTargetingSingle(t.data("targeting"),o),n.setCompanionSingle(t.data("companion"),o),o.addService(googletag.pubads()),n.ad_slots[a]=o})},getID:function(e){if(e.attr("id"))return e.attr("id");var t="div-gpt-ad-"+Math.random().toString(36).substr(2,9);return e.prop("id",t),t},getSizes:function(t){return e.map(t.split(","),function(e){var t=e.split("x");return[[Number(t[0]),Number(t[1])]]})},setCompanionSingle:function(e,t){e&&"yes"===e&&t.addService(googletag.companionAds())},setTargetingAll:function(){for(var e=0;e<n.targeting_all.length;++e)googletag.pubads().setTargeting(n.targeting_all[e].key,n.targeting_all[e].value)},setTargetingSingle:function(e,t){if(e)for(var a=e.split("|"),o=0;o<a.length;++o){var n=a[o].split("=");t.setTargeting(n[0],-1===n[1].indexOf(",")?n[1]:n[1].split(","))}},cycle:function(){n.defineSlots();for(var e=n.display(),t=[],a=0;a<e.length;++a)t.push(n.ad_slots[e[a]]);googletag.pubads().refresh(t)},display:function(){var t=[];return e('div[rel="advert"][data-ad-complete!="yes"]').each(function(){var a=e(this),o=a.attr("id");googletag.cmd.push(function(){googletag.display(o)}),a.attr("data-ad-complete","yes"),t.push(o)}),t},enable:function(){googletag.cmd.push(function(){n.defineSlots(),n.setTargetingAll(),googletag.pubads().enableAsyncRendering(),googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(n.collapsable),googletag.enableServices(),n.display()})},refresh:function(e){googletag.pubads().refresh([n.ad_slots[e]])},refreshAll:function(){googletag.pubads().refresh()},takeover:function(t){var a=e("body"),o=e('<a class="takeover" href="'+t.url+'" target="_blank"></a>');o.css("background-image","url("+t.image+")"),t.impressiontracker&&""!==e.trim(t.impressiontracker)&&a.prepend('<img src="'+t.impressiontracker+'" style="display:none;" />'),a.prepend(o)}};window.dfp=n}(jQuery);