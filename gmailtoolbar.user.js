// ==UserScript==
// @name          GMail Toolbar
// @namespace     http://www.strongasanox.co.uk/greasemonkey
// @description		Gives the GMail toolbar at the top of GMail fixed positioning
// @match        	http://mail.google.com/*
// @match        	https://mail.google.com/*
// ==/UserScript==
(function() {
	var css = [
		'body.cP > div > div.nH > div.nH > div.aC > div.nH > div.nH:nth-child(2) {',
			'background:rgba(26, 32, 34, 0.9) !important;',
			'display:block;',
			'left:0;',
			'position: fixed;',
			'top:0;',
			'width:100%;',
			'z-index:1000;',
		'}',
		'body.cP > div > div.nH > div.nH > div.aC > div.nH > div:last-child {',
		'	margin-top:26px;',
		'}'
	];
	
	GM_addStyle(css.join(''));
})();