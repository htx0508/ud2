/*! ud2(oldbrowser) - v0.0.0
 * (c) 2015 Peak(peak@udtwo.com) */
!function(){function a(){}var b=Object.prototype,c=Array.prototype,d=Function.prototype,e=c.slice,f=Function.prototype.call,g=function(a){if(null==a)throw new TypeError("不能强制转换 "+a+" 为对象");return Object(a)},h=function(a){return a=+a,a!==a?a=0:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(a>0||-1)*Math.floor(Math.abs(a))),a},i={100:"参数应为function",101:"空数组执行reduce或reduceRight没有传入初始值"};d.bind||(d.bind=function(b){var c=this;if("function"!=typeof c)throw new TypeError("bind方法的传入参数应为Function");var d=e.call(arguments,1),f=function(){if(this instanceof f){var a=c.apply(this,d.concat(e.call(arguments)));return Object(a)===a?a:this}return c.apply(b,d.concat(e.call(arguments)))};return c.prototype&&(a.prototype=c.prototype,f.prototype=new a,a.prototype=null),f});var j=f.bind(b.toString);Array.isArray||(Array.isArray=function(a){return"[object Array]"==j(a)}),c.forEach||(c.forEach=function(a){var b=g(this),c=b.length>>>0,d=0,e=arguments[1];if("[object Function]"!==j(a))throw new TypeError(i[100]);for(;c>d;)d in b&&a.call(e,b[d],d,b),d++}),c.map||(c.map=function(a){var b,c=g(this),d=c.length>>>0,e=0,f=arguments[1];if("[object Function]"!==j(a))throw new TypeError(i[100]);for(b=Array(d);d>e;)e in c&&(b[e]=a.call(f,c[e],e,c)),e++;return b}),c.filter||(c.filter=function(a){var b=g(this),c=b.length>>>0,d=arguments[1],e=[];if("[object Function]"!==j(a))throw new TypeError(i[100]);for(var f=0;c>f;f++)f in b&&(value=b[f],a.call(d,value,f,b)&&e.push(value));return e}),c.every||(c.every=function(a){var b=g(this),c=b.length>>>0,d=arguments[1];if("[object Function]"!==j(a))throw new TypeError(i[100]);for(var e=0;c>e;e++)if(e in b&&!a.call(d,b[e],e,b))return!1;return!0}),c.some||(c.some=function(a){var b=g(this),c=b.length>>>0,d=arguments[1];if("[object Function]"!==j(a))throw new TypeError(i[100]);for(var e=0;c>e;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1}),c.reduce||(c.reduce=function(a){var b=g(this),c=b.length>>>0;if("[object Function]"!==j(a))throw new TypeError(i[100]);if(!c&&1===arguments.length)throw new TypeError(i[101]);var d,e=0,f=!1;for(arguments.length>1&&(f=!0,d=arguments[1]);c>e;++e)e in b&&(f?d=a(d,b[e],e,b):(d=b[e],f=!0));if(!f)throw new TypeError(i[101]);return d}),c.reduceRight||(c.reduceRight=function(a){var b=g(this),c=b.length>>>0;if("[object Function]"!==j(a))throw new TypeError(i[100]);if(!c&&1===arguments.length)throw new TypeError(i[101]);var d,e=c-1;if(arguments.length>1)d=arguments[1];else{for(;e>=0&&!e in b;)e--;if(0>e)throw new TypeError(i[101]);d=b[e--]}for(;e>=0;e--)e in b&&(d=a(d,b[e],e,b));return d}),c.indexOf||(c.indexOf=function(a){var b=g(this),c=b.length>>>0,d=0;if(0===c)return-1;for(arguments.length>1&&(d=h(arguments[1])),d=d>=0?d:Math.max(0,c+d);c>d;d++)if(d in b&&b[d]===a)return d;return-1}),c.lastIndexOf||(c.lastIndexOf=function(a){var b=g(this),c=b.length>>>0,d=c-1;if(0===c)return-1;for(arguments.length>1&&(d=Math.min(d,h(arguments[1]))),d=d>=0?d:c-Math.abs(d);d>=0;d--)if(d in b&&a===b[d])return d;return-1})}();
/* lasted： 2015-12-12 04:09:40 */