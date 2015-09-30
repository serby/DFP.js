/**
 * DFP.js 1.4.0
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
var googletag=googletag||{};googletag.cmd=googletag.cmd||[],function(a){var b=document.createElement("script");b.async=!0,b.type="text/javascript";var c="https:"==document.location.protocol;b.src=(c?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d);var e={collapsable:!1,video:!1,ad_slots:[],ad_slots_requested:0,ad_slots_rendered:0,network:"",targeting_all:[],zone:"",defineSlots:function(){a('div[rel="advert"][data-ad-complete!="yes"]:visible').each(function(){var b=a(this),c=e.getID(b),d=null;d="yes"===b.data("oop")?googletag.defineOutOfPageSlot(e.network+e.zone,c):googletag.defineSlot(e.network+e.zone,e.getSizes(b.data("sizes")),c),e.setTargetingSingle(b.data("targeting"),d),e.setCompanionSingle(b.data("companion"),d),d.addService(googletag.pubads()),e.ad_slots_requested++,e.ad_slots[c]=d})},get:function(b){for(var c in e.ad_slots)if(b===e.ad_slots[c])return a("#"+c)},getID:function(a){if(a.attr("id"))return a.attr("id");var b="div-gpt-ad-"+Math.random().toString(36).substr(2,9);return a.prop("id",b),b},getSizes:function(b){return a.map(b.split(","),function(a,b){var c=a.split("x");return[[Number(c[0]),Number(c[1])]]})},setCompanionSingle:function(a,b){a&&"yes"===a&&b.addService(googletag.companionAds())},setTargetingAll:function(){for(var a=0;a<e.targeting_all.length;++a)googletag.pubads().setTargeting(e.targeting_all[a].key,e.targeting_all[a].value)},setTargetingSingle:function(a,b){if(a)for(var c=a.split("|"),d=0;d<c.length;++d){var e=c[d].split("=");b.setTargeting(e[0],-1===e[1].indexOf(",")?e[1]:e[1].split(","))}},cycle:function(){e.defineSlots();for(var a=e.display(),b=[],c=0;c<a.length;++c)b.push(e.ad_slots[a[c]]);googletag.pubads().refresh(b)},display:function(){var b=[];return a('div[rel="advert"][data-ad-complete!="yes"]').each(function(){var c=a(this),d=c.attr("id");googletag.cmd.push(function(){googletag.display(d)}),c.attr("data-ad-complete","yes"),b.push(d)}),b},enable:function(){googletag.cmd.push(function(){e.defineSlots(),e.setTargetingAll(),googletag.pubads().enableAsyncRendering(),googletag.pubads().enableSingleRequest(),googletag.pubads().addEventListener("slotRenderEnded",function(b){e.ad_slots_rendered++;var c=e.get(b.slot),f=({creative_id:b.creativeId,is_empty:b.isEmpty,el:c,line_item_id:b.lineItemId,size:b.size},a.Event("rendered"));if(c.trigger(f,b),b.isEmpty){var g=a.Event("empty");c.trigger(g,b)}a(window.dfp).trigger("slot_rendered",b),console.log(e.ad_slots_rendered===e.ad_slots_requested,e.ad_slots_rendered,e.ad_slots_requested),e.ad_slots_rendered===e.ad_slots_requested&&a(window.dfp).trigger("complete")}),googletag.pubads().collapseEmptyDivs(e.collapsable),googletag.enableServices(),e.display()})},refresh:function(a){googletag.pubads().refresh([e.ad_slots[a]])},refreshAll:function(){googletag.pubads().refresh()},takeover:function(b){var c=a("body"),d=a('<a class="takeover" href="'+b.url+'" target="_blank"></a>');d.css("background-image","url("+b.image+")"),b.impressiontracker&&""!==a.trim(b.impressiontracker)&&c.prepend('<img src="'+b.impressiontracker+'" style="display:none;" />'),c.prepend(d)}};window.dfp=e}(jQuery);