console.log('====content-script3');

document.addEventListener('DOMContentLoaded', function()
{
	injectCustomJs();
});

function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject3.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}