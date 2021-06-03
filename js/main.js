$(function(){  //文档加载完毕时调用  
 
  
  initialize()
  createInfoWindows1()

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



function createInfoWindows1() {
         $.ajax({
                url: "/cicit/data/data.json",//json文件位置，文件名
                type: "GET",//请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {//请求成功完成后要执行的方法 
                   //给info赋值给定义好的变量
                   var pageData=data;
                   for(var i=0;i<data.length;i++){
                       console.log(pageData[i].companyName);
                   }
                }
            })

}

function createInfoWindows2() {
             // json文件url
              console.log("test3");
        $.getJSON ("/data/data.json", function (data)
        {
            $.each (data, function (i, item)
            {
               console.log(item.companyName);
            });
        });

}

function createInfoWindows3() {
	$.ajax({
	    type: "get", //规定请求的类型（GET 或 POST）。
	    url: "https://github.com/Hyman1993/cicit/blob/dev/data/data.json",  //规定发送请求的 URL。默认是当前页面。
	    dataType: "jsonp",  //预期的服务器响应的数据类型。
	    jsonp: "callback",  //在一个 jsonp 中重写回调函数的字符串。
	    success: function(data) {  //请求成功后返回
	        console.log(data);
	    },
	    error: function() {  //请求失败后返回
	        console.log('Request Error.');
	    }
	});
}

function createInfoWindows4() {
         $.ajax({
                url: "/data/data.json",//json文件位置，文件名
                type: "GET",//请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {//请求成功完成后要执行的方法 
                   //给info赋值给定义好的变量
                   var pageData=data;
                   for(var i=0;i<data.length;i++){
                       console.log(pageData[i].companyName);
                   }
                }
            })

}