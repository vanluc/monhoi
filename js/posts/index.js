function load_index(){
	document.getElementById('loading_id').style.display = 'block';
	
	var x = document.getElementById('id').textContent;
	ajax_index_load(x);
}


/*
	* load noi dung phan trang
*/
function ajax_index_load(a){
	var xmlhttp;;
	if (window.XMLHttpRequest){
  		xmlhttp=new XMLHttpRequest();
  	}else{
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function(){
 		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById('loading_id').style.display = 'none';
			
			var ct = document.getElementById("noi_dung_load").innerHTML;
			document.getElementById("noi_dung_load").innerHTML=ct + xmlhttp.responseText;
			var x = document.getElementById('id').textContent;
			var x = parseInt(x);
			var z = x + 20;
			document.getElementById('id').textContent = z;
    	}
	}
	var host = "http://" + window.location.hostname;
	xmlhttp.open("GET",host + '/posts/phantrangindex/' + a,true);
	xmlhttp.send();
}
