// loader

//===============================select tion====================================

var slEnd = 0;
var tx = document.getElementsByName('contentpost');

tx.item(0).onblur = function(){
	PosSel();
}

//b click
document.getElementById('b').onclick = function(){
	var x = tx.item(0).value;
	var l = x.length;
	var textstart = x.substring(0,slEnd);
	var textend = x.substring(slEnd,l);
	tx.item(0).value = textstart + "<b></b>" +textend
}
//u click
document.getElementById('u').onclick = function(){
	var x = tx.item(0).value;
	var l = x.length;
	var textstart = x.substring(0,slEnd);
	var textend = x.substring(slEnd,l);
	tx.item(0).value = textstart + "<u></u>" +textend
}
//i click
document.getElementById('i').onclick = function(){
	var x = tx.item(0).value;
	var l = x.length;
	var textstart = x.substring(0,slEnd);
	var textend = x.substring(slEnd,l);
	tx.item(0).value = textstart + "<i></i>" +textend
}
//p click
document.getElementById('p').onclick = function(){
	var x = tx.item(0).value;
	var l = x.length;
	var textstart = x.substring(0,slEnd);
	var textend = x.substring(slEnd,l);
	tx.item(0).value = textstart + "<p></p>" +textend
}
//p click
document.getElementById('e').onclick = function(){
	var x = tx.item(0).value;
	var l = x.length;
	var textstart = x.substring(0,slEnd);
	var textend = x.substring(slEnd,l);
	tx.item(0).value = textstart + "<br>" +textend
}
//p click
document.getElementById('h3').onclick = function(){
	var x = tx.item(0).value;
	var l = x.length;
	var textstart = x.substring(0,slEnd);
	var textend = x.substring(slEnd,l);
	tx.item(0).value = textstart + "<h3><h3>" +textend
}
//selectionstart--
function PosSel() {
  slEnd = tx.item(0).selectionEnd;
}	


//===============================sukien====================================

// load ajax captcha
var oop = document.getElementById('img_captcha');
document.getElementById('img_captcha').onclick = function(){
	ajax_captcha();
}

// hien form upload content
function show_file_content(){  
	document.getElementById('show').style.display = 'block';
	document.getElementById('frm_content').style.display = 'block';
	document.getElementById('img_content_click').style.display = 'block';
	document.getElementById('content_ok').style.display = "block";
	document.getElementById('loading_content').style.display = "block"
	ajax_load_anh_content()
}
// hien form upload header
function show_file_header(){  
	document.getElementById('show').style.display = 'block';
	document.getElementById('frm_header').style.display = 'block';
	document.getElementById('img_header_click').style.display = 'block';
	document.getElementById('header_ok').style.display = "block";
	document.getElementById('loading_header').style.display = "block"
	ajax_load_anh_dai_dien_ban_dau();
}

// dong div che- dong form up load
function hide_all(){
	var host = "http://" + window.location.hostname;
	//content
	document.getElementById('show').style.display = 'none';
	document.getElementById('frm_content').style.display = 'none';
	document.getElementById('img_content_click').style.display = 'none';
	document.getElementById('content_ok').style.display = "none";
	document.getElementById('loading_content').style.display = "none";
	
	document.getElementById('frm_header').style.display = "none";
	document.getElementById('img_header_click').style.display = "none";
	document.getElementById('header_ok').style.display = "none";
	document.getElementById('loading_header').style.display = "none";
}

// image set click

function set_src_border(src){
	var x = document.querySelectorAll('#img_header_click img');
	for (var i = 0 ; i < x.length; i++){
		x.item(i).style.boxShadow = '0px 0px 1px #000';
	}
	document.getElementById(src).style.boxShadow = '0px 0px 0px 5px blue';
	
	var i = document.getElementById(src).getAttribute('src');
	document.getElementById('show').textContent = i;
}
function set_src(src){
	var i = document.getElementById(src).getAttribute('src');
	//alert(i);
	document.getElementById('anh_dai_dien').src = i;
	document.getElementsByName('hide_anh_dai_dien').item(0).value = i;
	hide_all();
}

// image set click content
function set_src_ct_border(src){
	var x = document.querySelectorAll('#img_content_click img');
	for (var i = 0 ; i < x.length; i++){
		x.item(i).style.boxShadow = '0px 0px 1px #000';
	}
	document.getElementById(src).style.boxShadow = '0px 0px 0px 5px blue';
	var i = document.getElementById(src).getAttribute('src');
	x = "<img src ='"+ i + "' />";
	document.getElementById('show').textContent = x;
}
// image set click content
function set_src_ct(src){
	var i = document.getElementById(src).getAttribute('src');
	z = "<img src ='"+ i + "' />";
	
	var x = tx.item(0).value;
	var l = x.length;
	var textstart = x.substring(0,slEnd);
	var textend = x.substring(slEnd,l);
	tx.item(0).value = textstart + z + textend
	hide_all();
}

/*
btclick
*/
function bt_set_src(){
	var i = document.getElementById('show').textContent;
	document.getElementById('anh_dai_dien').src = i;
	document.getElementsByName('hide_anh_dai_dien').item(0).value = i;
	hide_all();
}
function bt_set_src_ct(){
	var i = document.getElementById('show').textContent;
	var y = document.getElementsByTagName('textarea').item(0).value
	document.getElementsByTagName('textarea').item(0).value =  y + i;
	hide_all();
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
	var host = "http://" + window.location.hostname;
	xmlhttp.open("GET",host + '/users/captcha',true);
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
	var host = "http://" + window.location.hostname;
	document.getElementById('loading_header').style.display = "block"
	document.getElementById('img_header_click').innerHTML = '';
	
	var files = document.getElementById('id_file_header').files; 
	for (i=0;i<files.length;i++) {
		uploadFile(files[i], i);
	}
	return false;
}
function doUpload_content() {
	var host = "http://" + window.location.hostname;
	document.getElementById('loading_content').style.display = "block"
	document.getElementById('img_content_click').innerHTML = '';	
	
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
			document.getElementById('loading_header').style.display = "none"
			return;
		}
	}
	var data = new FormData();
	data.append('filename', file.name);
	data.append('file_header', file);
	
	var host = "http://" + window.location.hostname;
	http.open('POST', host + '/posts/upload', true);
	http.send(data);
}



function uploadFile_content(file, index) {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(event) {
  		if (http.readyState==4 && http.status==200) {
			document.getElementById('loading_content').style.display = "none"
    		document.getElementById("img_content_click").innerHTML =  http.responseText;
			return;
		}
	}
	var data = new FormData();
	data.append('filename', file.name);
	data.append('file_header', file);
	var host = "http://" + window.location.hostname;
	http.open('POST', host + '/posts/uploadContent', true);
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
	if (window.XMLHttpRequest) {
	    xmlhttp=new XMLHttpRequest();
	}else{
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");	
	}
	xmlhttp.onreadystatechange=function(){
	   if (xmlhttp.readyState==4 && xmlhttp.status==200){
		   document.getElementById("img_header_click").innerHTML=xmlhttp.responseText;
	       document.getElementById('loading_header').style.display = "none"
	   }
	}
	
	var host = "http://" + window.location.hostname;
	xmlhttp.open("GET",host + '/posts/loadAnhDaiDienBanDau',true);
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
	if (window.XMLHttpRequest){
	  xmlhttp=new XMLHttpRequest();
	}else{
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		  document.getElementById("img_content_click").innerHTML=xmlhttp.responseText;
		  document.getElementById('loading_content').style.display = "none"
	  }
	}
	
	var host = "http://" + window.location.hostname;
	xmlhttp.open("GET",host + '/posts/loadAnhContent',true);
	xmlhttp.send();
}
