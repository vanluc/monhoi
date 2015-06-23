/* view.fs
	* hiển thị form gửi bình luận
	* thực thi afax lưu vào csdl bình luận
	* load thêm dữ liệu khi nhấn nút xem thêm
*/

/* ===================================================================================================================== */
/* chức năng  hiển thị form trả lời 
	* 1 hiển thị form trả lời cấp 1
	* 2 hiển thị form trả lời cấp 2
*/
// hiện form cấp 1
function show_tra_loi(a){
	var x = document.getElementById(a)
	if(x === null){
		var noi_dung_load = document.getElementById('noi_dung_load');
		var comment_sub = document.getElementById('comment_sub_'+a);
		
		var c_tx_sub = document.createElement('textarea');
		c_tx_sub.id = a;
		c_tx_sub.className = 'box_form_sub';
		
		var c_click = document.createElement('p');
		c_click.id = 'p' + a;
		c_click.className = 'tra_loi_sub';
		c_click.textContent = 'gửi';
		c_click.setAttribute('onclick','tra_loi_sub(' + a + ')');
		
		var pbox = document.createElement('div');
		pbox.id = 'loading_1' + a;
		pbox.className = 'loading2';
		pbox.style.display = 'none';
		
		
		var loading = document.createElement('img');
		loading.className = 'loading';
		var host = "http://" + window.location.hostname;
		loading.src = host + '/images/logo/loading.gif';
		
		pbox.appendChild(loading);
		
		noi_dung_load.insertBefore(c_tx_sub,comment_sub)
		noi_dung_load.insertBefore(pbox,comment_sub)
		noi_dung_load.insertBefore(c_click,comment_sub)
	}else{
		var ds = vL_get_pro(a, 'display')
		
		if(ds == 'block'){	
			x.style.display = 'none';
			document.getElementById('p' + a).style.display = 'none'
		}else{
			x.style.display = 'block';
			document.getElementById('p' + a).style.display = 'block'
		}
	}

}
// hiện form cấp 2
function show_tra_loi_sub(a,b){
	var x = document.getElementById('sub_tx_' + a)
	if(x === null){
		var sub_a = document.getElementById('sub_' + a);
		
		var c_sub_tx = document.createElement('textarea');
		c_sub_tx.id = 'sub_tx_' + a;
		c_sub_tx.className = 'box_form_sub_sub';
		
		
		var pbox = document.createElement('div');
		pbox.id = 'loading_2' + a;
		pbox.className = 'loading3';
		pbox.style.display = 'none';
		
		var loading = document.createElement('img');
		loading.className = 'loading';
		var host = "http://" + window.location.hostname;
		loading.src = host + '/images/logo/loading.gif';
		
		pbox.appendChild(loading);
		
		var c_click = document.createElement('p');
		c_click.id = 'p_sub_' + a;
		c_click.className = 'tra_loi_sub_sub';
		c_click.textContent = 'gửi';
		c_click.setAttribute('onclick','tra_loi_sub_sub(' + a + ','  + b +   ')')
		
		sub_a.appendChild(c_sub_tx);
		sub_a.appendChild(pbox)
		sub_a.appendChild(c_click)
	}else{
		var ds = vL_get_pro('sub_tx_' + a, 'display')
		
		if(ds == 'block'){	
			x.style.display = 'none';
			document.getElementById('p_sub_' + a).style.display = 'none'
		}else{
			x.style.display = 'block';
			document.getElementById('p_sub_' + a).style.display = 'block'
		}
	}
}
/* ===================================================================================================================== */
/* chức năng thực thi kho nhấn nút gửi 
	* 1 nhấn nút gửi cấp 1
	* 2 nhấn nút gửi cấp 2
	* 3 nhấn nút gửi cấp 3
*/

//nhấn nút gửi cấp 1
function tra_loi(){
	var x = document.getElementsByName('contentcomment').item(0).value;
	if(x.length > 0){
		document.getElementById('loading1').style.display = 'block';	
				
		var id = document.getElementById('ma_bai_dang').textContent;
		var ten_commnet = document.getElementById('ten_comment').textContent;	
		var anh_commnet = document.getElementById('anh_comment').textContent;	
		var noi_dung_comment = document.getElementsByName('contentcomment').item(0).value;

		loadXMLDoc_luu_binh_luan(id,ten_commnet,anh_commnet,noi_dung_comment)		
	}else{
		alert('bạn chưa nhập nội dung')
	}
}
//nhấn nút gửi cấp 2
function tra_loi_sub(a){
	var x = document.getElementById(a).value;
	if(x.length > 0){
		
		document.getElementById('loading_1' + a).style.display = 'block';	
				
		var id = a;
		var ten_commnet = document.getElementById('ten_comment').textContent;	
		var anh_commnet = document.getElementById('anh_comment').textContent;	
		var noi_dung_comment = x;
		
		loadXMLDoc_luu_binh_luan_sub(id,ten_commnet,anh_commnet,noi_dung_comment)		
	}else{
		alert('bạn chưa nhập nội dung');
	}
}
//nhấn nút gửi cấp 3
function tra_loi_sub_sub(a,b){
	var x = document.getElementById('sub_tx_' + a).value;
	if(x.length > 0){
		document.getElementById('loading_2' + a).style.display = 'block';	
				
		var id = b;
		var ten_commnet = document.getElementById('ten_comment').textContent;	
		var anh_commnet = document.getElementById('anh_comment').textContent;	
		var noi_dung_comment = x;
		
		loadXMLDoc_luu_binh_luan_sub_sub(id,ten_commnet,anh_commnet,noi_dung_comment,a)		
	}else{
		alert('bạn chưa nhập nội dung');
	}
}
/* ===================================================================================================================== */
/* chức năng gửi afax lưu bài trả lời 
	* 1 lưu bài cấp 1
	* 2 lưu bài cấp 2
	* 3 lưu bài cấp 3
*/
//lưu bài cấp 1
function loadXMLDoc_luu_binh_luan(a,b,c,d){
	var xmlhttp;
	if (window.XMLHttpRequest){
  		xmlhttp=new XMLHttpRequest();
  	}else{
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function(){
 		if(xmlhttp.readyState==4 && xmlhttp.status==200){
    		var result = xmlhttp.responseText;
			
			document.getElementById('loading1').style.display = 'none';	
			document.getElementsByName('contentcomment').item(0).value = '';
			
			var x = document.getElementById('tong_trang').textContent;
			var x = parseInt(x);
			var z = x + 1;
			document.getElementById('tong_trang').textContent = z;
			
			
			
			document.getElementById("noi_dung_load").innerHTML = result + document.getElementById("noi_dung_load").innerHTML;
			
    	}
	}
	
	var host = "http://" + window.location.hostname;
	xmlhttp.open("POST",host + '/posts/luu_bai_binh_luan',true);
	
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("id="+ a + "&name=" + b + "&anh=" + c + "&noidung=" + d);	
	xmlhttp.send();
}
//lưu bài cấp 2
function loadXMLDoc_luu_binh_luan_sub(a,b,c,d){
	var xmlhttp;
	if (window.XMLHttpRequest){
  		xmlhttp=new XMLHttpRequest();
  	}else{
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function(){
 		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			var result = xmlhttp.responseText;
			document.getElementById('comment_sub_' + a ).innerHTML = result + document.getElementById('comment_sub_' + a ).innerHTML ;			
			
			document.getElementById('loading_1' + a).style.display = 'none';	
			
			document.getElementById(a).style.display = 'none';	
			document.getElementById(a).value='';	
			document.getElementById('p' + a).style.display = 'none';
			
    	}
	}
	
	var host = "http://" + window.location.hostname;
	xmlhttp.open("POST",host + '/posts/luu_bai_binh_luan_sub',true);
	
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("id="+ a + "&name=" + b + "&anh=" + c + "&noidung=" + d);	
	xmlhttp.send();
}

//lưu bài cấp 3
function loadXMLDoc_luu_binh_luan_sub_sub(a,b,c,d,e){
	var xmlhttp;
	if (window.XMLHttpRequest){
  		xmlhttp=new XMLHttpRequest();
  	}else{
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function(){
 		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			var result = xmlhttp.responseText;
			document.getElementById('comment_sub_' + a ).innerHTML = result + document.getElementById('comment_sub_' + a ).innerHTML ;			
			
			document.getElementById('loading_2' + e).style.display = 'none';	
			
			document.getElementById('sub_tx_' + e).style.display = 'none';	
			document.getElementById('sub_tx_' + e).value = '';	
			document.getElementById('p_sub_' + e).style.display = 'none';
			
    	}
	}
	
	var host = "http://" + window.location.hostname;
	xmlhttp.open("POST",host + '/posts/luu_bai_binh_luan_sub',true);
	
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("id="+ a + "&name=" + b + "&anh=" + c + "&noidung=" + d);	
	xmlhttp.send();
}

/* ==================================== các chức năng xem thêm dữ liệu ========================================== */
//load thêm dữ liệu khi nhấn nút xem thêm
function load_view(){
	document.getElementById('box_loading_xem_them').style.display = 'block';
	
	var a = document.getElementById('post_id').textContent;
	var b = document.getElementById('id').textContent;
	ajax_view_load(a,b);
}
/*
	* thi hành afax khi nhấn nút xem thêm
*/
function ajax_view_load(a,b){
	var xmlhttp;;
	if (window.XMLHttpRequest){
  		xmlhttp=new XMLHttpRequest();
  	}else{
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function(){
 		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById('box_loading_xem_them').style.display = 'none';
			
			var ct = document.getElementById("noi_dung_load").innerHTML;
			document.getElementById("noi_dung_load").innerHTML=ct + xmlhttp.responseText;
			var x = document.getElementById('id').textContent;
			var x = parseInt(x);
			var z = x + 20;
			document.getElementById('id').textContent = z;
    	}
	}
	var host = "http://" + window.location.hostname;
	xmlhttp.open("GET",host + '/posts/phantrangview/' + a + "/" + b,true);
	xmlhttp.send();
}

/* ==================================== các hàm chung ========================================== */
function vL_get_pro(id, pro){
	var elem = document.getElementById(id);
	var left = window.getComputedStyle(elem,null).getPropertyValue(pro);
	return left;
}












