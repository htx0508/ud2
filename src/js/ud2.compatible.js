﻿(function () {
	/* 让旧版浏览器支持HTML5标签 */
	var isNotOldIE = /*@cc_on!@*/true;
	if (isNotOldIE) return;
	var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, figure, footer, header, mark, menu, meter, nav, output, progress, section, time, video".split(', '),
		i = e.length;
	while (i--) document.createElement(e[i]);
})();