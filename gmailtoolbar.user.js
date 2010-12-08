// ==UserScript==
// @name          GMail Toolbar
// @namespace     http://www.strongasanox.co.uk/greasemonkey
// @description		Gives the GMail toolbar at the top of GMail fixed positioning
// @match        	http://mail.google.com/*
// @match        	https://mail.google.com/*
// ==/UserScript==
(function() {
	
	function fixToolbar (bg) {
		console.log(bg);
		var tmp = bg.replace('rgb(', 'rgba(');
		tmp = tmp.replace(')', ', 0.9)');
		console.log(tmp);
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
		console.log('css added');
	}
	
	function isCanvasFrameLoaded() {
		var canvasFrm = document.getElementById('canvas_frame');
		if (canvasFrm && canvasFrm.contentDocument && canvasFrm.contentDocument.readyState == 'complete'
				&& canvasFrm.contentDocument.querySelector('body.cP > div > div.nH > div.nH > div.aC > div.nH > div.nH:nth-child(2)')) {
			var canvasBody = canvasFrm.contentDocument.body;
			var bodyStyle = getComputedStyle(canvasBody, null);
			var backgroundColor = bodyStyle.getPropertyValue('background-color');
			fixToolbar(backgroundColor);
			return;
		}
		
		// Check whether the iframe has loaded again after waiting a while
		var timer = setTimeout(function() {
			isCanvasFrameLoaded();
		}, 200);
	}
	
	isCanvasFrameLoaded();
	
})();