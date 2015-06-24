/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-flexbox-mediaqueries-domprefixes-prefixes-printshiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in y){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),g.push((o?"":"no-")+s.join("-"))}}function i(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b.className=t)}function a(){var e=t.body;return e||(e=w("body"),e.fake=!0),e}function s(e,t,n,r){var o,i,s,l,u="modernizr",f=w("div"),c=a();if(parseInt(n,10))for(;n--;)s=w("div"),s.id=r?r[n]:u+(n+1),f.appendChild(s);return o=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),f.id=u,(c.fake?c:f).innerHTML+=o,c.appendChild(f),c.fake&&(c.style.background="",c.style.overflow="hidden",l=b.style.overflow,b.style.overflow="hidden",b.appendChild(c)),i=t(f,e),c.fake?(c.parentNode.removeChild(c),b.style.overflow=l,b.offsetHeight):f.parentNode.removeChild(f),!!i}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(t[o])+":"+r+")");return i=i.join(" or "),s("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function d(e,t,o,i){function a(){f&&(delete M.style,delete M.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var s=c(e,o);if(!r(s,"undefined"))return s}var f,d,p,m,h;for(M.style||(f=!0,M.modElem=w("modernizr"),M.style=M.modElem.style),p=e.length,d=0;p>d;d++)if(m=e[d],h=M.style[m],l(m,"-")&&(m=u(m)),M.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?m:!0;try{M.style[m]=o}catch(v){}if(M.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?p(o,n||t):o);return!1}function h(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+j.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?d(s,t,o,i):(s=(e+" "+x.join(a+" ")+a).split(" "),m(s,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var g=[];!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=T.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=T.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),T.elements=n+" "+e,u(t)}function i(e){var t=x[e[b]];return t||(t={},C++,e[b]=C,x[C]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():S.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||E.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return T.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(T,t.frag)}function u(e){e||(e=t);var r=i(e);return!T.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function f(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(c(t)));return a}function c(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(w+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+w+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!N||e.printShived?e:("undefined"==typeof s[w]&&s.add(w),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,u=[],c=l.length,p=Array(c);c--;)p[c]=l[c];for(;s=p.pop();)if(!s.disabled&&_.test(s.media)){try{i=s.imports,a=i.length}catch(m){a=0}for(c=0;a>c;c++)p.push(i[c]);try{u.push(s.cssText)}catch(m){}}u=d(u.reverse().join("")),o=f(e),r=n(e,u)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.2",y=e.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,S=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",C=0,x={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var T={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=T,u(t);var _=/^$|\b(?:all|print)\b/,w="html5shiv",N=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();T.type+=" print",T.shivPrint=m,m(t)}(this,t);var y=[],E={_version:"3.0.0-alpha.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var S=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];E._prefixes=S;var b=t.documentElement,C="Moz O ms Webkit",x=E._config.usePrefixes?C.toLowerCase().split(" "):[];E._domPrefixes=x;var T="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",T||_);var w=function(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):t.createElement.apply(t,arguments)},N=E.testStyles=s,j=E._config.usePrefixes?C.split(" "):[];E._cssomPrefixes=j;var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return s("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}(),z=E.mq=k;Modernizr.addTest("mediaqueries",z("only all"));var P={elem:w("modernizr")};Modernizr._q.push(function(){delete P.elem});var M={style:P.elem.style};Modernizr._q.unshift(function(){delete M.style});E.testProp=function(e,t,r){return d([e],n,t,r)};E.testAllProps=h,E.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in b.style)){var n;Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",N(n,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),o(),i(g),delete E.addTest,delete E.addAsyncTest;for(var F=0;F<Modernizr._q.length;F++)Modernizr._q[F]();e.Modernizr=Modernizr}(window,document);