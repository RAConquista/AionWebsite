function plookup(a,b){if(typeof(b)!="number"){return b}if(_PDGData.currentPDG){return _PDGData.currentPDG.getLookup(a,b)}}function plookupitem(b){if(typeof(b)!="number"){return b}if(_PDGData.currentPDG){var a;a=_PDGData.currentPDG.getLookup("item",b);a.i=plookup("icon",a.i);return a}}var PlayataBrowser={};PlayataBrowser.ie=(navigator.appName.indexOf("Microsoft")!=-1);PlayataBrowser.ie6=(PlayataBrowser.ie&&navigator.appVersion.indexOf("MSIE 6")!=-1);PlayataBrowser.ie7=(PlayataBrowser.ie&&navigator.appVersion.indexOf("MSIE 7")!=-1);PlayataBrowser.opera=!!window.opera;PlayataBrowser.safari=(navigator.userAgent.search(/Safari/)!=-1);PlayataBrowser.gecko=(!PlayataBrowser.safari&&navigator.appName=="Netscape");PlayataBrowser.chrome=(navigator.appVersion.indexOf("Chrome")!=-1);function pge(a){return document.getElementById(a)}function pce(a,e){var d=document.createElement(a),c,b;if(e){for(c in e){if(c.charCodeAt(0)==95){d[c.substring(1)]=e[c]}else{d.style[c]=e[c]}}}if(arguments.length>2){for(b=2;b<arguments.length;b++){if(arguments[b]&&typeof(arguments[b])=="object"){d.appendChild(arguments[b])}else{d.appendChild(document.createTextNode(arguments[b]))}}}return d}function pnd(){return pce("span")}function pct(a){if(a===""){return pnd()}return document.createTextNode(a)}function pac(b){if(arguments.length>1){for(var a=1;a<arguments.length;a++){if(typeof(arguments[a])=="object"){b.appendChild(arguments[a])}else{b.appendChild(document.createTextNode(arguments[a]))}}}}function pcl(a){while(a.firstChild){a.removeChild(a.firstChild)}}function prmc(b){if(arguments.length>1){for(var a=1;a<arguments.length;a++){b.removeChild(arguments[a])}}}function prc(c,b){pcl(c);if(arguments.length>1){for(var a=1;a<arguments.length;a++){if(typeof(arguments[a])=="object"){c.appendChild(arguments[a])}else{c.appendChild(document.createTextNode(arguments[a]))}}}}function pae(a,b,c){if(a.attachEvent){a.attachEvent("on"+b,c)}else{a.addEventListener(b,c,false)}}Function.prototype.pbind=function(){var d,b,e,c,a;d=this;b=[];for(c=0,a=arguments.length;c<a;c++){b.push(arguments[c])}e=b.shift();return function(){for(c=0,a=arguments.length;c<a;c++){b.push(arguments[c])}return d.apply(e,b)}};function pimport(d,c){for(var e in c){if(true){d[e]=c[e]}}}function pcmp_string(d,c){if(d==c){return 0}if(d===null){return -1}if(c===null){return 1}return d<c?-1:1}function pcmp_number(d,c,e){return d[e]-c[e]}String.prototype.p_startsWith=function(a){return(this.match("^"+a)==a)};String.prototype.p_endsWith=function(a){return(this.match(a+"$")==a)};Array.prototype.p_contains=function(b){for(var a=0;a<this.length;a++){if(this[a]==b){return true}}return false};Array.prototype.p_remove=function(c,b){var a=this.slice((b||c)+1||this.length);this.length=c<0?this.length+c:c;return this.push.apply(this,a)};function p_getMousePosX(a){if(PlayataBrowser.ie){if(window.event){return window.event.clientX}else{return 0}}else{return a.pageX}}function p_getMousePosY(a){if(PlayataBrowser.ie){if(window.event){return window.event.clientY}else{return 0}}else{return a.pageY}}function p_getScrollX(){if(PlayataBrowser.gecko||PlayataBrowser.opera){return window.pageXOffset}else{if(document.documentElement&&document.documentElement.scrollLeft){return document.documentElement.scrollLeft}else{if(document.body&&document.body.scrollLeft){return document.body.scrollLeft}else{return 0}}}}function p_getScrollY(){if(PlayataBrowser.gecko||PlayataBrowser.opera){return window.pageYOffset}else{if(document.documentElement&&document.documentElement.scrollTop){return document.documentElement.scrollTop}else{if(document.body&&document.body.scrollTop){return document.body.scrollTop}else{return 0}}}}function p_getWindowWidth(){if(window.innerWidth){return window.innerWidth}else{if(document.documentElement&&document.documentElement.clientWidth){return document.documentElement.clientWidth}else{if(document.body&&document.body.clientWidth){return document.body.clientWidth}else{return 0}}}}function p_getWindowHeight(){if(window.innerHeight){return window.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){return document.documentElement.clientHeight}else{if(document.body&&document.body.clientHeight){return document.body.clientHeight}else{return 0}}}}function p_getElementLeftOffset(b){var a=b.offsetLeft;while((b=b.offsetParent)!==null){a+=b.offsetLeft}return a}function p_getElementTopOffset(b){var a=b.offsetTop;while((b=b.offsetParent)!==null){a+=b.offsetTop}return a}function p_getClientSize(){var b=0,a=0;if(typeof window.innerWidth=="number"){b=window.innerWidth;a=window.innerHeight}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){b=document.documentElement.clientWidth;a=document.documentElement.clientHeight}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){b=document.body.clientWidth;a=document.body.clientHeight}}}return{x:b,y:a}}function p_addListener(d,b,e,a){var c;if(window.addEventListener){c=function(h,g,f,i){i=i||false;h.addEventListener(g,f,i);return true};return c(d,b,e,a)}else{if(window.attachEvent){c=function(h,g,f,i){h.attachEvent("on"+g,f);return true};return c(d,b,e,a)}else{c=function(h,g,f,i){return false};return c(d,b,e,a)}}}function p_redirect(a){window.location.href=a}function p_refresh(){window.location.reload(true)}function p_getRequestParam(a){var b=window.top.location.search;var a=a+"=";if(b.length>0){begin=b.indexOf("?"+a);if(begin==-1){begin=b.indexOf("&"+a)}a.substring(1);if(begin!=-1){begin+=a.length+1;end=b.indexOf("&",begin);if(end==-1){end=b.length}return unescape(b.substring(begin,end))}}return null}function p_writeCookie(a,b){var c=new Date();c=new Date(c.getTime()+1000*60*60*24*365);document.cookie=a+"="+b+"; expires="+c.toGMTString()+"; path=/"}function p_readCookie(b){var e,a,d,f;e=b+"=";a=document.cookie.split(";");for(d=0;d<a.length;d++){f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)===0){return f.substring(e.length,f.length)}}return null}function p_preventLink(a){a.removeAttributeNode(a.getAttributeNode("href"));return false}function p_createShadowText(h,c,e,b,d){var i,g,f,a;if(!b){b="white"}if(!d){d="black"}i=pce("span",{bottom:"0px",right:"0px",margin:"1px 3px"});for(g=-1;g<=1;g++){for(f=-1;f<=1;f++){if(c&&e){a=pce("div",{width:c,align:e,position:"absolute",whiteSpace:"nowrap",top:f+"px",left:g+"px"},h)}else{a=pce("div",{position:"absolute",whiteSpace:"nowrap",top:f+"px",left:g+"px"},h)}if(g===0&&f===0){a.style.zIndex=10;a.style.color=b}else{a.style.color=d}pac(i,a)}}return i}function p_NumberFormat(v,u,t,s){var r,q,p,o,n,m,l;v=v.toString();l="";if(v.indexOf("-")==0){l="-";v=v*-1}v=Math.round(v*Math.pow(10,u))/Math.pow(10,u);r=v+"";q=r.split(".");if(!q[0]){q[0]="0"}if(!q[1]){q[1]=""}if(q[1].length<u){p=q[1];for(n=q[1].length+1;n<=u;n++){p+="0"}q[1]=p}if(s!=""&&q[0].length>3){o=q[0];q[0]="";for(m=3;m<o.length;m+=3){n=o.slice(o.length-m,o.length-m+3);q[0]=s+n+q[0]+""}m=o.substr(0,(o.length%3==0)?3:(o.length%3));q[0]=m+q[0]}t=(u<=0)?"":t;return l+q[0]+t+q[1]}function p_getClientDateTime(f){var g=new Array(p_("Sunday"),p_("Monday"),p_("Tuesday"),p_("Wednesday"),p_("Thursday"),p_("Friday"),p_("Saturday"));var a=new Array(p_("January"),p_("February"),p_("March"),p_("April"),p_("May"),p_("June"),p_("July"),p_("August"),p_("September"),p_("October"),p_("November"),p_("December"));var i=new Date();if(f){var l=i.getTime()+(f);i.setTime(l)}var k=i.getDay();var b=i.getDate();var h=i.getMonth();var j=1900+i.getYear();var e=i.getHours();if(e<10){e="0"+e}var c=i.getMinutes();if(c<10){c="0"+c}return{datetime:i,day:g[k],month:a[h],date:b,year:j,hour:e,minute:c}}function p_evalScript(a){try{if(a!=""&&a!=null){var b="";a=a.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){if(a!==null){b+=arguments[1]+"\n"}return""});if(b){(window.execScript)?window.execScript(b):window.setTimeout(b,0)}}return false}catch(c){}}function p_limitText(c,b,a){if(c.value.length>a){c.value=c.value.substring(0,a)}else{b.value=a-c.value.length}}function p_limitTextId(c,b,a){if(c.value.length>a){c.value=c.value.substring(0,a)}else{b.innerHTML=a-c.value.length}}function p_makeUrl(b,c,a){if(!a){return"/"+b+"/"+c}a=a.replace(/ä/g,"ae");a=a.replace(/ö/g,"oe");a=a.replace(/ü/g,"ue");a=a.replace(/Ä/g,"ae");a=a.replace(/Ö/g,"oe");a=a.replace(/Ü/g,"ue");a=a.replace(/ß/g,"ss");a=a.toLowerCase();a=a.replace(/[^a-z0-9']+/g,"-");a=a.replace(/-+$/g,"");return"/"+b+"/"+c+"/"+a}function PTooltip(b,a,c){var d=this;this._tooltipContainer=pge(b);this._tooltipContent=pge(a);this._tooltipIconContainer=pge(c);this._pinned=false;this._visible=false;this._tooltipIconVisible=false;this._tooltipIcon="";this._iconWidth=44;this._tooltipOffsetX=15;this._tooltipOffsetY=10;this.tooltipMouseOutEvent=function(f){d.hide()};this.tooltipMouseMoveEvent=function(f){if(d._attachedToId===null){return}d.show(d._attachedToId);d.setLocation(p_getMousePosX(f),p_getMousePosY(f))}}PTooltip.prototype.setTooltipOffsetX=function setTooltipOffsetX(a){this._tooltipOffsetX=a};PTooltip.prototype.getTooltipOffsetX=function getTooltipOffsetX(){return this._tooltipOffsetX};PTooltip.prototype.setTooltipOffsetY=function setTooltipOffsetY(a){this._tooltipOffsetY=a};PTooltip.prototype.getTooltipOffsetY=function getTooltipOffsetY(){return this._tooltipOffsetY};PTooltip.prototype.setTooltipIconWidth=function setTooltipIconWidth(a){this._iconWidth=a};PTooltip.prototype.setTooltipIconVisible=function setTooltipIconVisible(a){this._tooltipIconVisible=a;if(this._visible&&this._tooltipIconVisible&&this._tooltipIconContainer){this._tooltipIconContainer.style.display=""}else{if(this._tooltipIconVisible===false&&this._tooltipIconContainer){this._tooltipIconContainer.style.display="none"}}};PTooltip.prototype.isVisible=function isVisible(){return(this._tooltipIconContainer.style.display=="none"?false:true)};PTooltip.prototype.isTooltipIconVisible=function isTooltipIconVisible(){return this._tooltipIconVisible};PTooltip.prototype.show=function show(g,a){var f,d,c,e,b;if(this._visible){return}this._tooltipContainer.style.display="";f=pge(g);if(f){d=p_getClientSize();c=(a===true?0:f.offsetWidth);e=p_getElementLeftOffset(f)+c;b=p_getElementTopOffset(f)-this._tooltipContainer.offsetHeight;if(e<0){e=0}if(b<0){b=p_getElementTopOffset(f)+f.offsetHeight}if(a===true){if((e+this._tooltipContainer.offsetWidth)+1>=d.x){e=d.x-this._tooltipContainer.offsetWidth}}else{if((e+this._tooltipContainer.offsetWidth+c)+1>=d.x){e=p_getElementLeftOffset(f)-this._tooltipContainer.offsetWidth}}if((b+this._tooltipContainer.offsetHeight)+1>=d.y){b=p_getElementTopOffset(f)-this._tooltipContainer.offsetHeight}this._tooltipContainer.style.left=e+"px";this._tooltipContainer.style.top=b+"px"}this._visible=true;if(this._tooltipIconVisible&&this._tooltipIconContainer){this.refreshIconPosition();this._tooltipIconContainer.style.display=""}};PTooltip.prototype.setIcon=function setIcon(a){this._tooltipIconContainer.style.backgroundImage="url("+a+")"};PTooltip.prototype.hide=function hide(){if(this._pinned===true){return}this._tooltipContainer.style.display="none";this._visible=false;if(this._tooltipIconContainer){this._tooltipIconContainer.style.display="none"}};PTooltip.prototype.pin=function pin(){this._pinned=true};PTooltip.prototype.unpin=function unpin(){this._pinned=false};PTooltip.prototype.getX=function getX(){return parseInt(this._tooltipContainer.style.left.replace("px",""))};PTooltip.prototype.getY=function getY(){return parseInt(this._tooltipContainer.style.top.replace("px",""))};PTooltip.prototype.setLocation=function setLocation(k,e){var h,m,n,d,l,b,o,j,f,c,a,i,g;if(k==0&&e==0){return}h=p_getWindowWidth();m=p_getWindowHeight();n=this._tooltipContainer.clientHeight;d=this._tooltipContainer.clientWidth;l=this._tooltipOffsetX;b=this._tooltipOffsetY;o=p_getScrollX();j=p_getScrollY();f=0;c=0;a=5;if((k+l+d)>(h-a)){f=(h-a)-(k+l+d)}if((e+n)>(m-20)){c=-n-25+c}if(PlayataBrowser.ie===false){if((e+c)<j){c=0}}if(PlayataBrowser.gecko||PlayataBrowser.opera||PlayataBrowser.safari){i=k+l+f-12;g=e+b+c-0}else{i=k+l+f+(PlayataBrowser.ie?o:0);g=e+b+c+(PlayataBrowser.ie?j:0)}if(i-o<a){i=o+a}this._tooltipContainer.style.left=(i+"px");this._tooltipContainer.style.top=(g+"px");this._tooltipContainer.style.zIndex=101;if(this._tooltipIconContainer&&this._tooltipIconVisible){this.refreshIconPosition()}};PTooltip.prototype.setForcedLocation=function setForcedLocation(a,b){this._tooltipContainer.style.left=(a+"px");this._tooltipContainer.style.top=(b+"px")};PTooltip.prototype.refreshIconPosition=function refreshIconPosition(){var a;a=parseInt(this._tooltipContainer.style.left,10);this._tooltipIconContainer.style.left=((a-this._iconWidth-5)+"px");this._tooltipIconContainer.style.top=this._tooltipContainer.style.top;this._tooltipIconContainer.style.zIndex=102};PTooltip.prototype.attachTo=function attachTo(a){var b=pge(a);this._attachedToId=a;p_addListener(b,"mouseout",this.tooltipMouseOutEvent);p_addListener(b,"mousemove",this.tooltipMouseMoveEvent)};PTooltip.prototype.detachFrom=function dettachFrom(a){var b=pge(a);this._attachedToId=null;b.mouseout=null;b.mousemove=null};PTooltip.prototype.setContent=function setContent(a){this._tooltipContent.innerHTML=a};PTooltip.prototype.getContent=function getContent(){return this._tooltipContent.innerHTML};function PInjector(c,b){var a=this;this._applicationName=c;this._tooltipContentCache={};this._requestActive=false;this._requestElement=null;this._requestMouseEvent=null;this._requestModifierCallback=null;this._globalModifierCallback=null;this._autoStyleElements=[];this._createCompareTooltip=false;this._compareTooltip=null;this._compareTooltipCallback=null;if(b===null){alert('No InjectorHandler set for PInjector "'+c+'"!')}this._injectorHandler=b;this.injectorTooltipMouseOver=function(g){var f,d;f=g.target?g.target:g.srcElement;if(!f){return}while(f&&f.nodeName!="A"&&f.nodeName!="a"){f=f.parentNode}if(!f||(f.nodeName!="A"&&f.nodeName!="a")||!f.href.length){return}d=a.getInjectorHandler().getRequestParams(f.href);if(d){if(!f.onmousemove){f.onmousemove=a.injectorTooltipMouseMove;f.onmouseout=a.injectorTooltipMouseOut}a.loadTooltip(d,f,g,a._globalModifierCallback)}};this.injectorInjectedTooltipMouseOver=function(i,h,d,f){if(a._tooltip==null){return}var h,g;g=a.getInjectorHandler().getRequestParams(d);if(g){a.loadTooltip(g,h,i,f)}};this.injectorTooltipMouseMove=function(f){var d=p_getMousePosX(f);var g=p_getMousePosY(f);a._tooltip.show();a._tooltip.setLocation(d,g);if(a._compareTooltip){a._compareTooltip.setForcedLocation(a._tooltip.getX()+400,a._tooltip.getY())}};this.injectorTooltipMouseOut=function(d){a._requestActive=false;a._requestElement=null;a._requestModifierCallback=null;a._tooltip.hide();if(a._compareTooltip){a._compareTooltip.hide()}}}PInjector.prototype.injectTooltip=function injectTooltip(c,a,b){pae(c,"mouseover",this.injectorInjectedTooltipMouseOver.pbind(this,this,c,a,b));c.onmousemove=this.injectorTooltipMouseMove;c.onmouseout=this.injectorTooltipMouseOut};PInjector.prototype.getTooltipContainerId=function getTooltipContainerId(a){return this._applicationName+(a?a:"")+"_tooltipcontainer"};PInjector.prototype.getTooltipContentId=function getTooltipContentId(a){return this._applicationName+(a?a:"")+"_tooltipcontent"};PInjector.prototype.getTooltipIconContainerId=function getTooltipContainerId(a){return this._applicationName+(a?a:"")+"_tooltipiconcontainer"};PInjector.prototype.getInjectorHandler=function getInjectorHandler(){return this._injectorHandler};PInjector.prototype.setGlobalModifierCallback=function setGlobalModifierCallback(a){this._globalModifierCallback=a};PInjector.prototype.setCompareTooltipCallback=function setCompareTooltipCallback(a){this._compareTooltipCallback=a};PInjector.prototype.createCompareTooltip=function createCompareTooltip(a){this._createCompareTooltip=a};PInjector.prototype.injectStylesheet=function injectStylesheet(a){var b,c;b=document.getElementsByTagName("head")[0];if(b){c=document.createElement("link");c.type="text/css";c.href=a;c.rel="stylesheet";b.appendChild(c);return true}return false};PInjector.prototype.injectTooltipContainer=function injectTooltipContainer(e){var b,d,a,c;b=pge(this.getTooltipContainerId(e));if(!b){a=document.getElementsByTagName("body")[0];if(a){b=document.createElement("div");b.id=this.getTooltipContainerId(e);c=document.createAttribute("class");c.nodeValue=this._applicationName+"_tooltip";b.setAttributeNode(c);b.style.display="none";b.style.position="absolute";b.innerHTML='<table class="'+this._applicationName+'_tooltip_container"><tbody><tr><td class="'+this._applicationName+'_tooltip_border" style="padding-top:6px;padding-left:6px;" id="'+this.getTooltipContentId(e)+'"></td><th class="'+this._applicationName+'_tooltip_border" style="background-position: right top;"></th></tr><tr><th class="'+this._applicationName+'_tooltip_border" style="background-position: left bottom;"><img src="'+this._injectorHandler.getBaseUrl()+'img/1pxspacer.gif" width="1" height="1"></th><th class="'+this._applicationName+'_tooltip_border" style="background-position: right bottom;"><img src="'+this._injectorHandler.getBaseUrl()+'img/1pxspacer.gif" width="1" height="1"></th></tr></tbody></table>';a.appendChild(b);d=document.createElement("div");d.id=this.getTooltipIconContainerId(e);c=document.createAttribute("class");c.nodeValue=this._applicationName+"_tooltip_icon";d.setAttributeNode(c);d.style.display="none";d.style.position="absolute";d.innerHTML='<table class="'+this._applicationName+'_tooltip_icon_border"><tr><td></td></tr></table>';a.appendChild(d)}}};PInjector.prototype.injectTooltips=function injectTooltips(){this.injectTooltipContainer();p_addListener(document,"mouseover",this.injectorTooltipMouseOver);var a=this._injectorHandler.getTooltipIconWidth();this._tooltip=new PTooltip(this.getTooltipContainerId(),this.getTooltipContentId(),this.getTooltipIconContainerId());if(a&&a>0){this._tooltip.setTooltipIconWidth(a)}if(this._createCompareTooltip){this.injectTooltipContainer("cmp");this._compareTooltip=new PTooltip(this.getTooltipContainerId("cmp"),this.getTooltipContentId("cmp"),this.getTooltipIconContainerId("cmp"));if(a&&a>0){this._compareTooltip.setTooltipIconWidth(a)}}this._injectorHandler.injectStylesheets(this)};PInjector.prototype.loadTooltip=function loadTooltip(k,g,h,c){var a,j,l,d,i,b,f;this.createCache(k);a=this._tooltipContentCache[k.locale][k.type][k.version];if(!a[k.id]){if(h){j=this._injectorHandler.getRequestUrl(k);if(j){this._requestActive=true;this._requestElement=g;this._requestMouseEvent=h;this._requestModifierCallback=c;this._tooltip.setLocation(p_getMousePosX(h),p_getMousePosY(h));this._tooltip.setContent(this._injectorHandler.getLoadingContent());this._tooltip.setTooltipIconVisible(false);if(this._compareTooltip){this._compareTooltip.setForcedLocation(this._tooltip.getX()+400,this._tooltip.getY());this._compareTooltip.setContent(this._injectorHandler.getLoadingContent())}this.requestTooltip(j)}}}else{l=a[k.id].content;d=a[k.id].icon;this._tooltip.hide();if(c){l=c(k,g,l)}this._tooltip.setContent(l);this._tooltip.show();this._tooltip.setLocation(p_getMousePosX(h),p_getMousePosY(h));this._tooltip.refreshIconPosition();if(this._compareTooltip){if(this._compareTooltipCallback){compareTooltipContent=this._compareTooltipCallback(k,this._tooltip,this._compareTooltip)}this._compareTooltip.setContent(compareTooltipContent);this._compareTooltip.setForcedLocation(this._tooltip.getX()+400,this._tooltip.getY())}if(!d){this._tooltip.setTooltipIconVisible(false)}else{i=this._injectorHandler.getIconUrl(d);if(i){this._tooltip.setIcon(i);b=true;if(g){if(g.childNodes.length>0){f=g.childNodes[0].nodeName;if(f=="IMG"||f=="img"){if(g.childNodes[0].id){if(g.childNodes[0].id.p_startsWith("mp_")){b=true}else{b=false}}else{b=false}}}else{if(g.parentNode.className=="db-icon-fl"){b=false}}}this._tooltip.setTooltipIconVisible(b)}else{this._tooltip.setTooltipIconVisible(false)}}}};PInjector.prototype.requestTooltip=function requestTooltip(a){var d,c,b;d=this._applicationName+"trl";c=pge(d);b=document.getElementsByTagName("head")[0];c=document.createElement("script");c.id=d;c.type="text/javascript";c.src=a;b.appendChild(c)};PInjector.prototype.createCache=function createCache(a){if(!this._tooltipContentCache){this._tooltipContentCache=[]}if(!this._tooltipContentCache[a.locale]){this._tooltipContentCache[a.locale]=[]}if(!this._tooltipContentCache[a.locale][a.type]){this._tooltipContentCache[a.locale][a.type]=[]}if(!this._tooltipContentCache[a.locale][a.type][a.version]){this._tooltipContentCache[a.locale][a.type][a.version]=[]}};PInjector.prototype.addTooltip=function addTooltip(c){var b,d,a;if(!c||!c.type||!c.id||!c.locale||!c.version||!c.content){return}this.createCache(c);this._tooltipContentCache[c.locale][c.type][c.version][c.id]=c;if(this._requestActive){this.loadTooltip(c,this._requestElement,this._requestMouseEvent,this._requestModifierCallback)}b=this.getRequestParamsHashMapKey(c);if(this._autoStyleElements[b]){d=this._autoStyleElements[b];for(a=0;a<d.length;a++){this.processAutoStyleElement(d[a],c)}}};PInjector.prototype.injectAutoStyles=function injectAutoStyles(){var b,d,g,c,f,j,a,h,k,e;b=document.getElementsByTagName("a");d=new RegExp(this._injectorHandler.getAutoStylePattern());g=[];for(e=0;e<b.length;e++){c=b[e];f=d.exec(c.href);if(f){if(this._injectorHandler.isAutoStyleClass(c.className)){j=this._injectorHandler.getRequestParams(c.href);if(j){this.createCache(j);a=this._tooltipContentCache[j.locale][j.type][j.version];if(!a[j.id]){h=this._injectorHandler.getRequestUrl(j);if(h){k=this.getRequestParamsHashMapKey(j);if(!this._autoStyleElements[k]){this._autoStyleElements[k]=[]}this._autoStyleElements[k].push(c);if(!g.p_contains(h)){g.push(h)}}}else{this.processAutoStyleElement(c,a[j.id])}}}}}for(e=0;e<g.length;e++){this.requestTooltip(g[e])}};PInjector.prototype.getRequestParamsHashMapKey=function getRequestParamsHashMapKey(a){return a.locale+a.type+a.version+a.id};PInjector.prototype.processAutoStyleElement=function processAutoStyleElement(a,b){this._injectorHandler.processAutoStyleElement(a,b)};function PModelViewer(c,a,b){this._applicationName=c;this._url=a;this._showJavaLink=b}PModelViewer.prototype.openWindow=function openWindow(b,i,d,a,g,e){var c,f,h;c=(screen.width-b)/2;f=(screen.height-i)/2;if(this._showJavaLink){i+=40}h="left="+c+",top="+f+",location=no,menubar=no,toolbar=no,status=no";h+=",sizable=no,resizable=no,scrollbars=no,width="+b+",height="+i;externalString=(e)?"&external="+e:"";javaString=(this._showJavaLink)?"&java=1":"";window.open(this._url+"?loadType="+d+"&referenceId="+a+"&locale="+g+externalString+javaString,"viewer"+Math.abs(a),h)};function AionInjectorHandler(b,a,d){this._rootUrl=b;this._version=a;this._defaultLocale=d;var c=b;c=c.replace("//www.","//");c=c.replace("//de.","//");c=c.replace("//jp.","//");c=c.replace("//kr.","//");c=c.replace("//cn.","//");c=c.replace("//fr.","//");c=c.replace("//ru.","//");c=c.replace("http://","");this._paramRegex=new RegExp("^http://(www|de|kr|jp|cn|fr|ru)?\\.?"+c.replace(/\./g,"\\.")+"(item|skill|recipe|gathersource|npc|pet)/([0-9]+)");this._regexAutoStyle=c.replace(/\./g,"\\.")+"(item|skill|recipe|gathersource|npc|pet)"}AionInjectorHandler.prototype.getTooltipIconWidth=function getTooltipIconWidth(){return 44};AionInjectorHandler.prototype.getBaseUrl=function getBaseUrl(){return this._rootUrl};AionInjectorHandler.prototype.getLoadingContent=function getLoadingContent(){return'<table cellspacing="2"><tr><td class="aion_loading">Loading...</td></tr></table>'};AionInjectorHandler.prototype.injectStylesheets=function injectStylesheets(a){a.injectStylesheet(this._rootUrl+"css/tooltip-aion.css");if(PlayataBrowser.ie){a.injectStylesheet(this._rootUrl+"css/tooltip-aion-ext-ie.css")}};AionInjectorHandler.prototype.getIconUrl=function getIconUrl(a){if(a.indexOf("icon_emblem_")!=-1){return this._rootUrl+"img/aion/npcicons/40/"+a+".png"}return this._rootUrl+"res/icons/40/"+a+".png"};AionInjectorHandler.prototype.getAutoStylePattern=function getAutoStylePattern(){return this._regexAutoStyle};AionInjectorHandler.prototype.isAutoStyleClass=function isAutoStyleClass(a){return a.indexOf("aion-item-text")!=-1||a.indexOf("aion-item-full-small")!=-1||a.indexOf("aion-item-full-medium")!=-1||a.indexOf("aion-item-full-large")!=-1||a.indexOf("aion-item-icon-small")!=-1||a.indexOf("aion-item-icon-medium")!=-1||a.indexOf("aion-item-icon-large")!=-1||a.indexOf("aion-skill-text")!=-1||a.indexOf("aion-skill-full-small")!=-1||a.indexOf("aion-skill-full-medium")!=-1||a.indexOf("aion-skill-full-large")!=-1||a.indexOf("aion-skill-icon-small")!=-1||a.indexOf("aion-skill-icon-medium")!=-1||a.indexOf("aion-skill-icon-large")!=-1||a.indexOf("aion-recipe-text")!=-1||a.indexOf("aion-recipe-full-small")!=-1||a.indexOf("aion-recipe-full-medium")!=-1||a.indexOf("aion-recipe-full-large")!=-1||a.indexOf("aion-recipe-icon-small")!=-1||a.indexOf("aion-recipe-icon-medium")!=-1||a.indexOf("aion-recipe-icon-large")!=-1||a.indexOf("aion-npc-text")!=-1||a.indexOf("aion-npc-full-small")!=-1||a.indexOf("aion-npc-full-medium")!=-1||a.indexOf("aion-npc-full-large")!=-1||a.indexOf("aion-npc-icon-small")!=-1||a.indexOf("aion-npc-icon-medium")!=-1||a.indexOf("aion-npc-icon-large")!=-1||a.indexOf("aion-pet-text")!=-1||a.indexOf("aion-pet-full-small")!=-1||a.indexOf("aion-pet-full-medium")!=-1||a.indexOf("aion-pet-full-large")!=-1||a.indexOf("aion-pet-icon-small")!=-1||a.indexOf("aion-pet-icon-medium")!=-1||a.indexOf("aion-pet-icon-large")!=-1||a.indexOf("3dviewer")!=-1};AionInjectorHandler.prototype.processAutoStyleElement=function processAutoStyleElement(a,b){if(a.className.indexOf("aion-item-text")!=-1){a.className="aion_q"+b.quality;a.innerHTML=b.name}else{if(a.className.indexOf("aion-skill-text")!=-1){a.innerHTML=b.name}else{if(a.className.indexOf("aion-recipe-text")!=-1){a.className="aion_q"+b.quality;a.innerHTML=b.name}else{if(a.className.indexOf("aion-npc-text")!=-1){a.className="aion_npcr"+b.quality;a.innerHTML=b.name}else{if(a.className.indexOf("aion-pet-text")!=-1){a.innerHTML=b.name}else{if(a.className.indexOf("aion-item-full-small")!=-1||a.className.indexOf("aion-skill-full-small")!=-1||a.className.indexOf("aion-recipe-full-small")!=-1||a.className.indexOf("aion-npc-full-small")!=-1||a.className.indexOf("aion-item-icon-small")!=-1||a.className.indexOf("aion-skill-icon-small")!=-1||a.className.indexOf("aion-recipe-icon-small")!=-1||a.className.indexOf("aion-pet-icon-small")!=-1||a.className.indexOf("aion-npc-icon-small")!=-1){this.replaceAutoStyleLink(a,b,16,a.className.indexOf("icon")!=-1)}else{if(a.className.indexOf("aion-item-full-medium")!=-1||a.className.indexOf("aion-skill-full-medium")!=-1||a.className.indexOf("aion-recipe-full-medium")!=-1||a.className.indexOf("aion-npc-full-medium")!=-1||a.className.indexOf("aion-item-icon-medium")!=-1||a.className.indexOf("aion-skill-icon-medium")!=-1||a.className.indexOf("aion-recipe-icon-medium")!=-1||a.className.indexOf("aion-pet-icon-medium")!=-1||a.className.indexOf("aion-npc-icon-medium")!=-1){this.replaceAutoStyleLink(a,b,32,a.className.indexOf("icon")!=-1)}else{if(a.className.indexOf("aion-item-full-large")!=-1||a.className.indexOf("aion-skill-full-large")!=-1||a.className.indexOf("aion-recipe-full-large")!=-1||a.className.indexOf("aion-npc-full-large")!=-1||a.className.indexOf("aion-item-icon-large")!=-1||a.className.indexOf("aion-skill-icon-large")!=-1||a.className.indexOf("aion-recipe-icon-large")!=-1||a.className.indexOf("aion-pet-icon-large")!=-1||a.className.indexOf("aion-npc-icon-large")!=-1){this.replaceAutoStyleLink(a,b,40,a.className.indexOf("icon")!=-1)}else{if(a.className.indexOf("3dviewer")!=-1){requestParams=this.getRequestParams(a.href);if(requestParams){mvt=(requestParams.id>=110000000&&requestParams.id<=125300000&&requestParams.id!=115000000)?4:3;mvid=requestParams.id;winHeight=525;aiondb_locale=requestParams.locale;if(requestParams.type=="npc"){mvt=1}if(mvt==4||mvt==6){winHeight=550}newElement=pce("a",{_href:"javascript:aionModelViewer.openWindow(600, "+winHeight+", "+mvt+", "+mvid+", '"+aiondb_locale+"', '"+a.href+"');"});newElement.innerHTML=a.innerHTML;if(a.parentNode){a.parentNode.replaceChild(newElement,a)}}}}}}}}}}}};AionInjectorHandler.prototype.replaceAutoStyleLink=function replaceAutoStyleLink(c,d,b,g){var f,a,e;f=pce("div",{display:"inline"});a=pce("img",{_align:"absmiddle",width:b+"px",height:b+"px",_border:"0",_src:this._rootUrl+"/res/icons/"+b+"/"+d.icon+".png"});if(g==false){e=pce("a",{_href:c.href,_target:c.target,_className:"aion_q"+d.quality},pce("span",null,d.name));pac(f,a);pac(f,pct(" "));pac(f,e);c.parentNode.replaceChild(f,c)}else{pac(c,a)}};AionInjectorHandler.prototype.getRequestParams=function getRequestParams(e){var b,a,d,g,c,h,f;if(e.search(/#ctt/)!=-1){return null}a=this._defaultLocale;d="";g="";b=e.match(this._paramRegex);if(b){a=b[1];d=b[2];g=b[3]}else{b=window.location.hostname.match(/^(www|de|kr|jp|cn|fr|ru)?\.?aiondatabase\.com/);if(b){a=b[1];b=e.match(/^\/(item|skill|recipe|gathersource|npc|pet)\/([0-9]+)/);if(b){d=b[1];g=b[2]}}}if(!b){return null}if(a=="www"){a=this._defaultLocale}else{if(a===""){a=this._defaultLocale}else{if(a=="de"){a="de_DE"}else{if(a=="kr"){a="ko_KR"}else{if(a=="jp"){a="ja_JP"}else{if(a=="cn"){a="zh_CN"}else{if(a=="fr"){a="fr_FR"}else{if(a=="ru"){a="ru_RU"}else{a=this._defaultLocale}}}}}}}}h={};h.locale=a;h.type=d;h.version=this._version;h.id=g;return h};AionInjectorHandler.prototype.getRequestUrl=function getRequestUrl(b){var a=this._rootUrl+"res/tooltip/"+b.locale+"/"+(b.version.replace(/\./g,""))+"/"+b.type+"/js/"+b.id+".js";return a};var aionHandler=new AionInjectorHandler("http://www.aiondatabase.com/","2.1.0.5","en_US");var aionInjector=new PInjector("aion",aionHandler);var aionModelViewer=new PModelViewer("aion","http://www.aiondatabase.com/aionviewer.php");if(window.addEventListener){window.addEventListener("load",aiondatabase_init,false)}else{if(window.attachEvent){window.attachEvent("onload",aiondatabase_init)}}function aiondatabase_init(){aionInjector.injectTooltips();aionInjector.injectAutoStyles()};