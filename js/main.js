$(function(){  //文档加载完毕时调用  
 
  // load data from json and create map page
  loadData()
  

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
                    infoWindow.setContent("<strong>1.公司名：</strong><a href="+companyItem.homepage+" target=_Blank>"+companyItem.companyName+"</a><br><strong>2.成立年月：</strong>"+companyItem.date+"<br><strong>3.资本金：</strong>"+companyItem.capitalBase+"<br><strong>4.营业额：</strong>"+companyItem.revenue+"<br><strong>5.规模：</strong>"+companyItem.scale+"");
                    infoWindow.open(map, marker);
                });
        })(marker, companyItem);

    }

}



// load company json data
function loadData() {
         $.ajax({
                url: "http://tokyocoder.com/cicit/data/data.json",//json文件位置，文件名
                type: "GET",//请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {//请求成功完成后要执行的方法 

                   for(var i=0;i<data.length;i++){
                       console.log(data[i].companyName);

                   }
                   initializeMapByJson(data)
                },
                error: function(e) {  //请求失败后返回
                 console.log('Request Error.');
               }
            })

}

// 创建默认map页面
function initializeMapByDefault()
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