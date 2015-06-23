
//key enter
function vL_keyEnter(e) {
    if (e.keyCode == 13) {
		var x = document.getElementsByName('password').item(0).value;
		if(x.length < 6 ){
			document.getElementsByName('password').item(0).value = '';
		}else{
			document.getElementById('show_loading').style.display = 'block';
			document.getElementsByName('password').item(0).style.display = 'none';
			loadXMLDoc_check_user(x)
		}
		
    }
}


//chuc nang check user
function loadXMLDoc_check_user(a)
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
			alert('đăng nhập thành công')
			var host = "http://" + window.location.hostname;
			window.open(host + "/users/admin","_self")
		}else{
			alert('đăng nhập thất bại')
			document.getElementsByName('password').item(0).style.display = 'block';
			document.getElementsByName('password').item(0).value = '';
			document.getElementsByName('password').item(0).focus();
			document.getElementById('show_loading').style.display = 'none';
			document.getElementById('show').style.display = 'block';
		}
   }
}
  
  
var host = "http://" + window.location.hostname;
xmlhttp.open("POST",host + '/users/admintest',true);

xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("name=" + a);
}
