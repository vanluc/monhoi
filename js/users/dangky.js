// JavaScript Document
// JavaScript Document
var oop = document.getElementById('img_captcha');
oop.onclick = function(){
	loadXMLDoc();
}

function loadXMLDoc(){
	var xmlhttp;
	if (window.XMLHttpRequest){
  		xmlhttp=new XMLHttpRequest();
  	}else{
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function(){
 		if(xmlhttp.readyState==4 && xmlhttp.status==200){
    		document.getElementById("img_captcha").innerHTML=xmlhttp.responseText;
    	}
	}
	var host = "http://" + window.location.hostname;
	xmlhttp.open("GET",host + '/users/captcha',true);
	xmlhttp.send();
}

