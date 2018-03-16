function initxhr(){ 
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest(); 
	}else if(window.ActionXObject){
		xhr = new ActiveXObject("Msxml2.XMLHTTP"); 
	}else{
		throw new Error("xhr is not supported"); 
	}
}


function doajax(url, panelId){ 
	if(xhr == null){
		initxhr(); 
    }
	if(xhr != null){
		xhr.open("GET", url, true); 
		xhr.onreadystatechange = updatePanel(panelId); 
		xhr.send(null);
	}else{
		throw new Error("xhr is not inited");
	} 
}


function updatePanel(panelId){ 
	return function(){
		if(xhr.readyState == 4){
			var response = xhr.responseText;
			console.log("response:" + response);
			document.getElementById(panelId).innerHTML = response;
		} 
	}
}


var xhr;
doajax("","p");






