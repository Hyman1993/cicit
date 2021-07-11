$(function(){  //文档加载完毕时调用  
 
  // load data from json and create map page
  loadDataAndCreatePage()

}); 

// 加载json数据并创建map对象
function initializeMapByJson(data)
{

    var myCenter = new google.maps.LatLng(data[0].addressX, data[0].addressY);
   var mapProp = {
        center:myCenter,
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
   };
   var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var infoWindow = new google.maps.InfoWindow();
    for(var i=0;i<data.length;i++){
      var companyItem = data[i];

         // 创建map对象
       var myPosition = new google.maps.LatLng(companyItem.addressX, companyItem.addressY);
        
      // 制作定位图标
      var marker=new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position:myPosition,
        });

       // 将定位图标加载进map
      marker.setMap(map);

      //使用谷歌地图定义的事件，给这个marker添加点击事件
      (function (marker, companyItem) {
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent("<strong>1.社名：</strong><a href="+companyItem.homepage+" target=_Blank>"+companyItem.companyName+"</a><br><strong>2.設立年月：</strong>"+companyItem.date+"<br><strong>3.資本金：</strong>"+companyItem.capitalBase+"<br><strong>4.売上高：</strong>"+companyItem.revenue+"<br><strong>5.従業員数：</strong>"+companyItem.scale+"");
                    infoWindow.open(map, marker);
                });
        })(marker, companyItem);

    }

}


// load company json data
function loadDataAndCreatePage() {
         $.ajax({
                url: "http://tokyocoder.com/cicit/data/data.json",//json文件位置，文件名
                type: "GET",//请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {//请求成功完成后要执行的方法 
                   initializeMapByJson(data)
                },
                error: function(e) {  //请求失败后返回
                 console.log('Request Error.');
               }
            })

}
