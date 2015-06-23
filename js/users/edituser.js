

//anh click
function anh(){
	var mucchon = document.getElementById('muc_chon').textContent = 'anh';
	document.getElementById('show').style.display = "block";
	document.getElementById('frm_anh').style.display = "block";
	document.getElementById('nut_xac_nhan').style.display = "block";
	document.getElementById('box_show_anh').style.display = "block";
}
//anh  click
function boder(x){
	var z = document.getElementById(x);
	z.style.border = '5px solid blue';
	var t = z.getAttribute('src');
	document.getElementById('noi_dung_anh').textContent = t;
}
//anh douple click
function upload_go(){
	var b = document.getElementById('noi_dung_anh').textContent;
	if (b.length >0){
		
		document.getElementById('show_loading_image').style.display = "block"
		document.getElementById('frm_anh').style.display = "none";
		document.getElementById('nut_xac_nhan').style.display = "none";
		document.getElementById('box_show_anh').style.display = "none";
		
		var a = document.getElementById('muc_chon').textContent;
		var b = document.getElementById('noi_dung_anh').textContent;
		var c = document.getElementById('id_user').textContent;
		loadXMLDoc_edit_user(a,b,c)
	}else{
		alert('bạn chưa chọn ảnh');
	}
}
//tenhienthi click
function tenhienthi(x){
	var mucchon = document.getElementById('muc_chon').textContent = 'user';
	var tx = document.getElementById(x).textContent;
	document.getElementsByName('noi_dung_edit').item(0).value = tx;
}
//phone click
function phone(x){
	var mucchon = document.getElementById('muc_chon').textContent = 'dienthoai';
	var tx = document.getElementById(x).textContent;
	document.getElementsByName('noi_dung_edit').item(0).value = tx;
}
//email click
function email(x){
	var mucchon = document.getElementById('muc_chon').textContent = 'email';
	var tx = document.getElementById(x).textContent;
	document.getElementsByName('noi_dung_edit').item(0).value = tx;
}
//sua click
function sua(){
	var a = document.getElementById('muc_chon').textContent;
	if(a.length < 1){
		alert('bạn chưa chọn mục cần sửa');
	}else{
		document.getElementById('show').style.display = 'block';
		document.getElementById('show_loading').style.display = 'block';
		
		var tx = document.getElementsByName('noi_dung_edit').item(0).value;
		if (tx.length > 0){
			var a = document.getElementById('muc_chon').textContent;
			var b = tx;
			var c = document.getElementById('id_user').textContent;
			loadXMLDoc_edit_user(a,b,c)
		}else{
			alert('bạn chưa nhập nội dung');
		}
	}
}
//chuc nang edit_user
function loadXMLDoc_edit_user(a,b,c)
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
  
xmlhttp.onreadystatechange=function(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    	var x = xmlhttp.responseText;
		if(x == 'ok'){
			alert('sữa thành công')
			var host = "http://" + window.location.hostname;
			var s = document.getElementById('id_user').textContent;
			window.open(host + "/users/edituser/" + s,"_self")
		}else{
			alert(x)
		}
   }
}
  
  
var host = "http://" + window.location.hostname;
xmlhttp.open("POST",host + '/users/updateuser',true);

xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("name=" + a + "&content=" + b + "&id_user=" + c);
}


//chuc nang upload anh
function doUpload() {
	var host = "http://" + window.location.hostname;
	document.getElementById('show_loading_image').style.display = "block"
	
	var files = document.getElementById('file_anh').files; 
	for (i=0;i<files.length;i++) {
		uploadFile(files[i], i);
	}
	return false;
}

/*
	* chuc nang : uploadFile();
*/
function uploadFile(file, index) {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(event) {
  		if (http.readyState==4 && http.status==200) {
    		document.getElementById("box_show_anh").innerHTML =  http.responseText;
			document.getElementById('show_loading_image').style.display = "none"
			return;
		}
	}
	var data = new FormData();
	data.append('filename', file.name);
	data.append('file_header', file);
	
	var host = "http://" + window.location.hostname;
	http.open('POST', host + '/posts/upload_edit', true);
	http.send(data);
}


