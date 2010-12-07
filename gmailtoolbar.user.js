// ==UserScript==
// @name           	gmailtoolbar
// @namespace      	http://www.strongasanox.co.uk/greasemonkey
// @description    	Gives the GMail toolbar at the top of GMail fixed positioning
// @match        		http://mail.google.*
// ==/UserScript==
(function() {
	window.addEventListener('load', function() {
		var css = [
			'body > div > div > div > div > div.nH > div > div[role="navigation"] {',
				'background:rgba(26, 32, 34, 0.9) !important;',
				'display:block;',
				'left:0;',
				'position: fixed;',
				'top:0;',
				'width:100%;',
				'z-index:1000;',
			'}',
			'body > div > div > div > div > div.nH > div:last-child {',
			'	margin-top:24px;',
			'}'
		];
		
		GM_addStyle(css.join(''));
	}, true);
})();