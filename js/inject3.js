isAddressDoSubmit = function(){
	if(document.body.innerText.indexOf("长沙艾森设备维护有限公司")!=-1){
		console.log("找到地址信息，开始最后订单提交");
		ec.order.checkOrder.doSubmit();
	}else{
		setTimeout(function() {
			isAddressDoSubmit();
		},200)
	}
}

isAddressDoSubmit();