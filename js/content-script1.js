console.log('====content-script1');

document.addEventListener('DOMContentLoaded', function()
{
	injectCustomJs();
});

function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject1.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}