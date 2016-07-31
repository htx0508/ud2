/*! ud2 - v1.0.0
 * (c) 2016 Peak(peak@udtwo.com)
 */
if("undefined"==typeof $)throw new Error("ud2库需要JQuery支持");var ud2=function(a,b){"use strict";function c(a,b){K.isObject(a)||(a={}),K.isObject(b)||(b={});for(var c in b)a[c]=b[c];return a}function d(a){var b=(a.attr(k)||"").split(" "),c=[];return b.forEach(function(a){0!==a.length&&c.push(a)}),c}function e(a){var b=a.split("-"),c=1,d=b.length;if(d>1)for(;d>c;c++)b[c].length>0&&(b[c]=b[c].substr(0,1).toUpperCase()+b[c].substr(1));return b.join("")}function f(a){return K.isJQuery(a)||(a=b(a)),a}var g,h=a.document,i=b(a),j=b(h),k="ud2",l="-",m=k+l,n=(" -webkit- -moz- -o- -ms- ".split(" "),a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(b){a.setTimeout(b,1e3/60)},{date:/^(?:[12]\d{3}([\.\-\/])(?:(?:0?[13578]|1[02])\1(?:0?[1-9]|[12]\d|3[01])|(?:0?[469]|11)\1(?:0?[1-9]|[12]\d|30)|0?2\1(?:0?[1-9]|1\d|2[0-8]))$|[12]\d(?:[02468][048]|[13579][26])([\.\-\/])(?:(?:0?[13578]|1[02])\2(?:0?[1-9]|[12]\d|3[01])|(?:0?[469]|11)\2(?:0?[1-9]|[12]\d|30)|0?2\2(?:0?[1-9]|1\d|2[0-9])))$/,mail:/^([\w-\.]+)@(([\w-]+\.)+)([a-zA-Z]{2,4})$/,phone:/^[1][3458][0-9]{9}$/,identityCard:/^(11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|97|98|99)[0-9]{4}((?:19|20)?(?:[0-9]{2}(?:(?:0[13578]|1[12])(?:0[1-9]|[12][0-9]|3[01])|(?:0[469]|11)(?:0[1-9]|[12][0-9]|30)|02(?:0[1-9]|1[0-9]|2[0-8]))|(?:[02468][048]|[13579][26])0229)[0-9]{3}[\dxX])$/,loginName:/^[a-zA-Z][a-zA-Z0-9]+$/}),o=Date.now||function(){return(new Date).getTime()},p=a.navigator.pointerEnabled,q=p?"pointerdown":"MSPointerDown",r=p?"pointermove":"MSPointerMove",s=p?"pointerup":"MSPointerUp",t=p?"pointercancel":"MSPointerCancel",u="touchstart",v="touchmove",w="touchend",x="touchcancel",y="mousedown",z="mousemove",A="mouseup",B="mouseout",C="click",D=1e8,E=b("<div />"),F=(b("<a />"),function(){}),G=/(^[a-z0-9]{1,}|[A-Z][a-z0-9]{0,})/g,H=[],I=!1,J={pageReady:b.Callbacks(),pageResize:b.Callbacks(),ctrlClose:b.Callbacks()},K=function(){function a(a){return function(b){return{}.toString.call(b)==="[object "+a+"]"}}function c(b){return a("Object")(b)}function d(b){return a("Function")(b)}function e(b){return a("String")(b)}function f(b){return a("Number")(b)}function g(a){return/^([1-9]\d+|[0-9])$/.test(a)}function h(a){return a instanceof b}return{isType:a,isObject:c,isFunction:d,isString:e,isNumber:f,isNaturalNumber:g,isJQuery:h}}(),L=(function(){function a(a){return isNaturalNumber(a)?+a:0}return{toNaturalNumber:a}}(),function(){function a(a){return K.isString(a)?a:""}function b(b,c,d){return b=a(b),c=c||Number.MAX_VALUE,"undefined"!=typeof d?(c>d&&(d=c),b.length<=d&&b.length>=c):b.length===c}function c(b,c){return b=a(b),c=c||0,b.length>=c}function d(b,c){return b=a(b),c=c||Number.MAX_VALUE,b.length<=c}function e(b){return b=a(b),n.phone.test(b)}function f(b){return b=a(b),n.mail.test(b)}function g(b){return b=a(b),n.date.test(b)}function h(b){return b=a(b),n.loginName.test(b)}function i(b){if(b=a(b),b=b.toUpperCase(),n.identityCard.test(b)){if(18===b.length){for(var c=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],d=["1","0","X","9","8","7","6","5","4","3","2"],e=b.split(""),f=0,g=0;17>g;g++)f+=e[g]*c[g];var h=d[f%11];if(h!==e[17])return!1}return!0}return!1}return{isLength:b,isMinLength:c,isMaxLength:d,isPhone:e,isMail:f,isDate:g,isLoginName:h,isIdentityCard:i}}(),function(){var b={},c=h.createElement("div"),d=a.navigator.userAgent;return b.safari=/constructor/i.test(a.HTMLElement),b.mobile=!!d.match(/mobile|mobi|mini/i),b.android=d.indexOf("Android")>-1,b.touch="ontouchstart"in a||a.DocumentTouch&&h instanceof DocumentTouch,b.pointer=p,b.msPointer=a.navigator.msPointerEnabled,b.touchAction=void 0!==c.style.touchAction||void 0!==c.style.msTouchAction||!1,b.perspective=void 0!==c.style.perspective||void 0!==c.style.msPerspective||void 0!==c.style.mozPerspective||void 0!==c.style.webkitPerspective||!1,b.transition=void 0!==c.style.transition||void 0!==c.style.msTransition||void 0!==c.style.mozTransition||void 0!==c.style.webkitTransition||void 0!==c.style.oTransition||!1,b.animation=void 0!==c.style.animation||void 0!==c.style.mozAnimation||void 0!==c.style.webkitAnimation||void 0!==c.style.oAnimation||!1,b}()),M=function(d,e){function h(a){return P.pan=a,N}function i(a){return P.tap=a,N}function k(a){return P.press=a,N}function l(a){return P.swipeLeft=a,N}function n(a){return P.swipeRight=a,N}function p(a){return P.swipeTop=a,N}function D(a){return P.swipeBottom=a,N}function G(a){return P.down=a,N}function H(a){return P.up=a,N}function I(a,b){function d(a){a&&(a.screenX&&(l.moveScreenX=a.screenX),a.screenY&&(l.moveScreenY=a.screenY),a.pageX&&(l.movePageX=a.pageX),a.pageY&&(l.movePageY=a.pageY),a.clientX&&(l.moveClientX=a.clientX),a.clientY&&(l.moveClientY=a.clientY))}function e(){return{x:l.movePageX-l.downPageX,y:l.movePageY-l.downPageY}}var f=b?b.screenX:0,g=b?b.screenY:0,h=b?b.pageX:0,i=b?b.pageY:0,j=b?b.clientX:0,k=b?b.clientY:0,l={del:!1,id:a,downScreenX:f,downScreenY:g,downPageX:h,downPageY:i,downClientX:j,downClientY:k,moveScreenX:f,moveScreenY:g,movePageX:h,movePageY:i,moveClientX:j,moveClientY:k};return c(l,{setMove:d,getMoveLength:e})}function J(b){function c(a){0===d()&&(S.id=a,S.time=o())}function d(){var a=0;for(var b in R)R[b].del||a++;return a}function e(){for(var a in R)R[a].del&&delete R[a]}function f(){if(L.mobile){var b,c=E.clone().css({position:"fixed",top:0,right:0,left:0,bottom:0,"z-index":999999999});g.append(c),c.on(u,function(a){a.stopPropagation(),a.preventDefault()}).on(C,function(d){d.stopPropagation(),d.preventDefault(),b&&a.clearTimeout(b),c.remove()}),b=a.setTimeout(function(){c.remove()},500)}}function h(a){O.stopPropagation&&a.stopPropagation();var b=a.originalEvent,e=b.pointerId;c(e),0===d()&&(j.on(Q[1],i),j.on(Q[2],k),j.on(Q[3],k)),R[e]&&!R[e].del||(R[e]=I(e,b),G(a,e))}function i(a){O.stopPropagation&&a.stopPropagation(),a.preventDefault();var b=a.originalEvent,c=b.pointerId;R[c]&&(R[c].setMove(b),H(a,c))}function k(a){O.stopPropagation&&a.stopPropagation();var b=a.originalEvent,c=b.pointerId;R[c]&&(J(a,c),R[c].del=!0,0===d()&&(j.off(Q[1],i),j.off(Q[2],k),j.off(Q[3],k)))}function l(a){O.stopPropagation&&a.stopPropagation();var e,f=a.type,g=a.originalEvent;if("touchstart"===f){e=g.changedTouches,0===d()&&(b.on(Q[5],n),b.on(Q[6],p),b.on(Q[7],p)),c(e[0].identifier);for(var h=0,i=e.length;i>h;h++)R[e[h].identifier]&&!R[e[h].identifier].del||(R[e[h].identifier]=I(e[h].identifier,e[h])),G(a,e[h].identifier)}else c(0),R[0]=I(0,g),G(a,0),j.on(Q[9],D),j.on(Q[10],F)}function n(a){O.stopPropagation&&a.stopPropagation(),a.preventDefault();for(var b=a.originalEvent,c=b.changedTouches,d=0,e=c.length;e>d;d++)R[c[d].identifier]&&R[c[d].identifier].setMove(c[d]),H(a,c[d].identifier)}function p(a){O.stopPropagation&&a.stopPropagation();for(var c=a.originalEvent,e=c.changedTouches,f=0,g=e.length;g>f;f++)J(a,e[f].identifier),R[e[f].identifier].del=!0;0===d()&&(b.off(Q[5],n),b.off(Q[6],p),b.off(Q[7],p))}function D(a){O.stopPropagation&&a.stopPropagation(),a.stopPropagation();var b=a.originalEvent;R[0]&&(R[0].setMove(b),H(a,0))}function F(a){O.stopPropagation&&a.stopPropagation(),R[0]&&(J(a,0),void 0!==R[0]&&R[0].del===!1&&(R[0].del=!0),j.off(Q[9],D),j.off(Q[10],F))}function G(a,c){T=!1;for(var d=b.parents(),e=d.length,f=0;e>f;f++)if("1"===d.eq(f).attr(m+"scroll-runing")){T=!0;break}P.down.call(b,a)}function H(a,c){var d=R[c].getMoveLength();a.preventDefault(),P.pan.call(b,d,a)}function J(a,c){var d=null,g=R[c].getMoveLength(),h={x:Math.abs(g.x),y:Math.abs(g.y)};S.id===c&&(d=new Date-S.time,S.id=null,S.time=null),d&&(h.x<O.pointerValidLength&&h.y<O.pointerValidLength&&(T||(d<O.tapMaxTime?(f(),P.tap.call(b,a)):P.press.call(b,a))),h.x>=O.pointerValidLength&&h.x>=h.y&&d<O.swipeMaxTime&&(g.x<0?(a.preventDefault(),P.swipeLeft.call(b,a)):(a.preventDefault(),P.swipeRight.call(b,a))),h.y>=O.pointerValidLength&&h.y>=h.x&&d<O.swipeMaxTime&&(g.y<0?(a.preventDefault(),P.swipeTop.call(b,a)):(a.preventDefault(),P.swipeBottom.call(b,a)))),P.up.call(b,a),e()}function K(a){var c=L.pointer||L.msPointer;a?(c?b.on(Q[0],h):b.on(Q[4]+" "+Q[8],l),b.css({"-ms-touch-action":"none","touch-action":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"})):(c?b.off(Q[0],h):b.off(Q[4]+" "+Q[8],l),b.css({"-ms-touch-action":"auto","touch-action":"auto","-webkit-user-select":"text","-moz-user-select":"text","-ms-user-select":"text","user-select":"text"}))}function M(){U||(U=!0,K(!0))}function N(){U&&(U=!1,K(!1))}var Q=[q,r,s,t,u,v,w,x,y,z,A,B],R={},S={id:null,time:null},T=!1,U=!1;return function(){M()}(),{bind:M,unbind:N}}function K(){Q.forEach(function(){arguments[0].bind()})}function M(){Q.forEach(function(){arguments[0].unbind()})}var N={},O=c({stopPropagation:!1,tapMaxTime:300,swipeMaxTime:500,pointerValidLength:5},e),P={pan:F,tap:F,press:F,swipeLeft:F,swipeRight:F,swipeTop:F,swipeBottom:F,down:F,up:F},Q=[];return function(){f(d).each(function(a,c){Q.push(J(b(c)))})}(),c(N,{setPan:h,setTap:i,setPress:k,setSwipeLeft:l,setSwipeRight:n,setSwipeTop:p,setSwipeBottom:D,setDown:G,setUp:H,on:K,off:M})},N=function(a){function d(a){return l.scroll=a,k}function e(a){return l.down=a,k}function g(a){return l.up=a,k}function h(a){function b(b){b.stopPropagation(),b.preventDefault();var c=b.originalEvent,d=c.deltaY/100||c.wheelDelta/-120||(Math.abs(c.detail)>2?c.detail/3:c.detail)||0;l.scroll.call(a,d,b),d>0?l.down.call(a,b):l.up.call(a,b)}function c(){e||(e=!0,a.on(m,b))}function d(){e&&(e=!1,a.off(m,b))}var e=!1;return function(){c()}(),{bind:c,unbind:d}}function i(){n.forEach(function(){arguments[0].bind()})}function j(){n.forEach(function(){arguments[0].unbind()})}var k={},l={scroll:F,down:F,up:F},m="DOMMouseScroll mousewheel",n=[];return function(){f(a).each(function(a,c){n.push(h(b(c)))})}(),c(k,{setScroll:d,setDown:e,setUp:g,on:i,off:j})},O=function(){for(var a={},b=["normal","info","success","warning","danger"],c=0,d=b.length;d>c;c++)a[b[c]]={name:b[c],no:c};return a}(),P=function(){var a={event:M,eventMouseWheel:N,style:O,controlCreate:function(){var c=b("["+k+"]");c.each(function(){var c=b(this),f=d(c);f.forEach(function(b,d){var f=e(b),g=c.attr(m+b+"-ready"),h=c.attr("ud2-id")||null;g||(h?a[f].create(h,c):a[f].create(c))})})}};return a}(),Q=function(a){function b(a,b){a=a||{},a.transfer=a.transfer||i.origin||null,a.accept=a.accept||i.current||null,a.attrReg=a.attrReg||null,a.transfer&&a.accept&&b(a.transfer,a.accept,a.attrReg)}function c(a,b){a=f(a),(b=b||F)(a)}function d(a){var b,c,d;if(a=f(a),b=a.parents(),a.get(0)!==i.current.get(0)){for(c=0,d=b.length;d>c;c++)if(b.eq(c).get(0)===i.current.get(0))return;i.autoClose()}}function e(a){if(void 0!==a){for(var b in O)i.style===O[b]&&i.current.removeClass(O[b].name);return i.style=a,i.current.addClass(a.name),i["public"]}return i.style}var g=this,h={},i={"public":{ud2:!0,collection:g["public"],type:a,appendTo:function(a){c(a,function(a){a.last().append(i.current)})},prependTo:function(a){c(a,function(a){a.last().prepend(i.current)})},insertBefore:function(a){c(a,function(a){a.last().before(i.current)})},insertAfter:function(a){c(a,function(a){a.last().after(i.current)})},style:e},origin:null,current:E.clone(),userOptions:h,getOriginAttr:function(a,b){a=function(){return H[a]||(H[a]=a.match(G).join(l).toLowerCase()),H[a]}();var c=b?a:g.className+l+a;return i.origin?i.origin.attr(c):null},getOptions:function(a,b){var c={};return a.forEach(function(a){c[a]=i.userOptions[a]||i.getOriginAttr(a,1)||i.getOriginAttr(a)}),b(c),c},transferStyles:function(a){b(a,function(a,b){b.attr("style",a.attr("style")).addClass(a.attr("class")),a.removeAttr("style").removeClass()})},transferAttrs:function(a){b(a,function(a,b,c){for(var d,e=a.get(0),f=b.get(0),g=e?e.attributes.length:0,h=new RegExp("^("+c+")"),i=0,j=0;g>i;i++)d=e.attributes[j],h.test(d.name)?(f.setAttribute(d.name,d.value),e.removeAttribute(d.name)):j++})},style:O.normal,autoClose:F};return J.ctrlClose.add(d),i},R=function(a){var b={"public":[],init:F,name:a,ctrlName:e(a),className:m+a};return b},S=function(){var a=0;return function(){return m+a++}}(),T=function(a,b){var d=R(a),e=function(){return g.apply(e,arguments)},g=function(){var b,h,i,j=Q.call(d,a),l=arguments,m=l.length;switch(m){case 0:return g.call(e,void 0,void 0,{});case 1:return K.isString(l[0])?g.call(e,l[0],void 0,void 0):K.isJQuery(l[0])?g.call(e,void 0,l[0],void 0):K.isObject(l[0])?g.call(e,void 0,void 0,l[0]):g.call(e);case 2:if(K.isString(l[0])&&(K.isJQuery(l[1])||K.isString(l[1])))return g.call(e,l[0],l[1],void 0);if(K.isString(l[0])&&K.isObject(l[1]))return g.call(e,l[0],void 0,l[1]);if(K.isJQuery(l[0])&&K.isObject(l[1]))return g.call(e,void 0,l[0],l[1]);break;case 3:b=K.isString(l[0])&&l[0].length>0?l[0]:S(),h=f(l[1]).first(),i=K.isObject(l[2])?l[2]:{}}return c(j,{origin:h,userOptions:i}),c(j["public"],{id:b}),d["public"].push(j["public"]),d["public"][b]=j["public"],j.current.attr(k,a).attr(k+"-id",b).attr(d.className+"-ready",!0).addClass(d.className),d.init(j)||j["public"]};return b(d),P[a]=e,d.name!==d.ctrlName&&(P[d.ctrlName]=e),e.create=g,e.collection=d["public"],e};return T("number",function(a){a.init=function(b){function d(a){return a=parseFloat(a),(isNaN(a)||m>a)&&(a=m),a>n&&(a=n),a=Math.round((a-m)/l)*(D*l)/D+m}function e(a){if(!x){if(x=!0,a&&o+l>n||!a&&m>o-l)return void(x=!1);var b='<input class="ud2-ctrl-txtbox" />',c=E.clone().addClass(p+"-view").html(b),d=E.clone().addClass(p+"-view").html(b);t.parent();o=a?Math.round((o+l)*D)/D:Math.round((o-l)*D)/D,c.children().val(o),d.children().val(o),t.before(c),t.after(d),w.animate({top:a?"-100%":"100%"},300,function(){x=!1,h(o),w.css("top",0),c.remove(),d.remove()})}}function f(){e(0)}function g(){e(1)}function h(a){void 0!==a&&(o=d(a),y.change.call(b["public"],o)),t.val(o)}function i(a){return void 0!==a?(h(a),b["public"]):o}function j(a){return y.change=a,b["public"]}function k(){M(u).setTap(f),M(v).setTap(g),N(t).setDown(g).setUp(f),t.keydown(function(a){switch(a.keyCode){case 13:t.blur();break;case 38:a.preventDefault(),f();break;case 40:a.preventDefault(),g()}}).focus(function(){J.ctrlClose.fire(s),s.addClass(p+"-on")}).blur(function(){h(t.val()),s.removeClass(p+"-on")})}var l,m,n,o,p=a.className,q=(b.getOptions(["step","min","max","value"],function(a){l=parseFloat(a.step),(isNaN(l)||0===l)&&(l=1),m=parseFloat(a.min),isNaN(m)&&(m=0),n=parseFloat(a.max),isNaN(n)&&(n=100),o=a.value,m>n&&(n=m),o=d(o)}),'<a class="'+p+'-ico">&#xe106;</a><div class="'+p+'-move"><input type="text" value="0" class="ud2-ctrl-txtbox" /></div><a class="'+p+'-ico">&#xe107;</a>'),r=b.current,s=r.html(q),t=s.find("input"),u=s.children("a:first"),v=s.children("a:last"),w=u.next(),x=!1,y={change:F};return function(){r=s,b.origin.after(s),b.origin.remove(),b.transferStyles(),b.transferAttrs({accept:t,attrReg:"name|tabindex"}),h(),k()}(),c(b["public"],{val:i,setChange:j})}}),function(){j.ready(function(){g=b("body"),L.safari&&h.body.addEventListener("touchstart",b.noop),J.pageReady.fire(),I=!0}),i.bind("resize orientationchange",function(){J.pageResize.fire()}),J.pageReady.add(P.controlCreate)}(),c(P,{type:K})}(window,jQuery);