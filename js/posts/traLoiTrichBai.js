// loader

ajax_user();//load user


//===============================sukien====================================

// load ajax captcha
var oop = document.getElementById('img_captcha');
document.getElementById('img_captcha').onclick = function(){
	ajax_captcha();
}

// hien form upload header
function show_file_header(){  
	var t = window.scrollY;
	document.getElementById('frm_header').style.top = (t) + 'px';
	document.getElementById('show').style.display = 'block';
	document.getElementById('frm_header').style.display = 'block';
	document.getElementsByClassName('img_click').item(0).style.display = 'block';
	document.getElementsByClassName('img_click').item(0).style.top = (t + 20) + 'px';
	ajax_load_anh_dai_dien_ban_dau();
}

// hien form upload content
function show_file_content(){  
	var t = window.scrollY;
	document.getElementById('frm_content').style.top = (t) + 'px';
	document.getElementById('show').style.display = 'block';
	document.getElementById('frm_content').style.display = 'block';
	document.getElementsByClassName('img_click').item(1).style.display = 'block';
	document.getElementsByClassName('img_click').item(1).style.top = (t +20) + 'px';
	ajax_load_anh_content();
}

// dong div che- dong form up load
function hide_all(){
	document.getElementById('show').style.display = 'none';
	document.getElementById('frm_header').style.display = 'none';
	document.getElementById('frm_content').style.display = 'none';
	document.getElementById('img_header_click').style.display = 'none';
	document.getElementById('img_content_click').style.display = 'none';
}

// image set click
function set_src(src){
	var x = document.querySelectorAll('#img_header_click img');
	for (var i = 0 ; i < x.length; i++){
		x.item(i).style.boxShadow = '0px 0px 1px #000';
	}
	document.getElementById(src).style.boxShadow = '0px 0px 0px 5px blue';
	var i = document.getElementById(src).getAttribute('src');
	//alert(i);
	document.getElementById('anh_dai_dien').src = i;
	document.getElementsByName('hide_anh_dai_dien').item(0).value = i;
}
// image set click content
function set_src_ct(src){
	var x = document.querySelectorAll('#img_content_click img');
	for (var i = 0 ; i < x.length; i++){
		x.item(i).style.boxShadow = '0px 0px 1px #000';
	}
	document.getElementById(src).style.boxShadow = '0px 0px 0px 5px blue';
	var i = document.getElementById(src).getAttribute('src');
	x = "<p><img src ='"+ i + "' /></p>";
	var y = document.getElementsByTagName('textarea').item(0).value
	document.getElementsByTagName('textarea').item(0).value =  y + x
}

/*
===============================function====================================
*/
//loadUser
/*
	* chuc nang : ajax_captcha()
	* muc dich : load anh captcha
	* nguoi viet : nguyen van luc:
	* ngay viet : 27/05/2015//03:00 chieu
	* dt : 0948.036.018 
	* email: xmen.complete@gmail.com
*/
function ajax_captcha(){
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
	xmlhttp.open("GET","http://localhost/users/captcha",true);
	xmlhttp.send();
}
/*
	* chuc nang : ajax_user()
	* muc dich : load user dang nhap bang ajax
	* nguoi viet : van luc:
	* ngay viet : 27/05/2015//03:00 chieu
	* dt : 0948.036.018 
	* email: xmen.complete@gmail.com
*/
function ajax_user()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("user").innerHTML=xmlhttp.responseText;
    }
}
xmlhttp.open("GET","http://localhost/users/index",true);
xmlhttp.send();
}


/*
	* chuc nang : doUpload();
	* muc dich : upload file
	* nguoi viet : van luc:
	* ngay viet : 27/05/2015//03:00 chieu
	* dt : 0948.036.018 
	* email: xmen.complete@gmail.com
*/
function doUpload() {
	var files = document.getElementById('id_file_header').files; 
	for (i=0;i<files.length;i++) {
		uploadFile(files[i], i);
	}
	return false;
}
function doUpload_content() {
	var files = document.getElementById('id_file_content').files; 
	for (i=0;i<files.length;i++) {
		uploadFile_content(files[i], i);
	}
	return false;
}
/*
	* chuc nang : uploadFile();
	* muc dich : dung ajax upload anh
*/
function uploadFile(file, index) {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(event) {
  		if (http.readyState==4 && http.status==200) {
    		document.getElementById("img_header_click").innerHTML =  http.responseText;
			return;
  		}
	}
	var data = new FormData();
	data.append('filename', file.name);
	data.append('file_header', file);
	http.open('POST', 'http://localhost/posts/upload', true);
	http.send(data);
}
function uploadFile_content(file, index) {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(event) {
  		if (http.readyState==4 && http.status==200) {
    		document.getElementById("img_content_click").innerHTML =  http.responseText;
			return;
  		}
	}
	var data = new FormData();
	data.append('filename', file.name);
	data.append('file_header', file);
	http.open('POST', 'http://localhost/posts/uploadContent', true);
	http.send(data);
}
/* ======================================ajax===============================
	* chuc nang : ajax_user()
	* muc dich : load user dang nhap bang ajax
	* nguoi viet : van luc:
	* ngay viet : 27/05/2015//03:00 chieu
	* dt : 0948.036.018 
	* email: xmen.complete@gmail.com
*/
function ajax_load_anh_dai_dien_ban_dau(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("img_header_click").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET",'http://localhost/posts/loadAnhDaiDienBanDau',true);
	xmlhttp.send();
}
/* ======================================ajax===============================
	* chuc nang : ajax_user()
	* muc dich : load user dang nhap bang ajax
	* nguoi viet : van luc:
	* ngay viet : 27/05/2015//03:00 chieu
	* dt : 0948.036.018 
	* email: xmen.complete@gmail.com
*/
function ajax_load_anh_content(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("img_content_click").innerHTML=xmlhttp.responseText;
		}else{
			document.getElementById("img_content_click").innerHTML='load anh that bai';
		}
	}
	xmlhttp.open("GET",'http://localhost/posts/loadAnhContent',true);
	xmlhttp.send();
}
