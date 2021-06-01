$(function(){  //文档加载完毕时调用  
 
  
  initialize()

}); 

// 创建map 对象 method
function initialize()
{
    var myCenter1 = new google.maps.LatLng(35.66813268750143, 139.75021342354796);

	// 制作一个定位图标
	var marker1=new google.maps.Marker({
	  animation: google.maps.Animation.DROP,
	  position:myCenter1,
	  });
	  
	var myCenter2 = new google.maps.LatLng(35.6856762387266, 139.78011624335238);

	// 制作一个定位图标
	var marker2=new google.maps.Marker({
	  animation: google.maps.Animation.DROP,
	  position:myCenter2,
	  });
	
	// 创建map对象
	var mapProp = {
	  center:myCenter1,
	  zoom:12,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    // 将定位图标加载进map
	marker1.setMap(map);
	marker2.setMap(map);

    // 创建InfoWindow
	var infowindow1 = new google.maps.InfoWindow({content: "<strong>1.公司名：</strong><a href=https://e-business.co.jp/ target=_Blank>株式会社イー・ビジネス</a><br><strong>2.成立年月：</strong>2007年6月<br><strong>3.资本金：</strong>8,800万円<br><strong>4.营业额：</strong>35.5億円<br><strong>5.规模：</strong>201名（2020年4月現在）" });
	var infowindow2 = new google.maps.InfoWindow({content: "<strong>1.公司名：</strong><br><strong>2.成立年月：</strong><br><strong>3.资本金：</strong><br><strong>4.营业额：</strong><br><strong>5.规模：</strong><br><strong>6.官网：</strong>" }); 


	//使用谷歌地图定义的事件，给这个marker添加点击事件
	google.maps.event.addListener(marker1, "click", function(){
		infowindow1.open(map,marker1);//把这个infoWindow绑定在选定的marker上面
	});
	
	google.maps.event.addListener(marker2, "click", function(){
		infowindow2.open(map,marker2);//把这个infoWindow绑定在选定的marker上面
	});
	


}