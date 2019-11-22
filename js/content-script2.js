console.log('====content-script2');


document.addEventListener('DOMContentLoaded', function()
{
	injectCustomJs();
	initCustomPanel();
});

function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject2.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}


function initCustomPanel()
{
	var panel = document.createElement('div');
	panel.className = 'chrome-plugin-demo-panel';
	panel.innerHTML = `
		<h2>操作：</h2>
		<div class="btn-area">
			<button onclick="setStopFlag('0')">开始</button><br>
			<button onclick="setStopFlag('1')">暂停</button><br>
			<button onclick="initConfig()">初始化配置</button>
		</div>
	`;
	document.body.appendChild(panel);
}