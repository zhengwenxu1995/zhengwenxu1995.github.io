function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof(window.onload)!='function'){

		func();
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
// 购物车事件添加
function shopCar(){
	$('.shop_car').hover(function(){
		$("#shop_car_con").stop();
		$("#shop_car_con").slideToggle(300);
	});
	// $('.shop_car_btn').mouseout(function(){
	// 	$("#shop_car_con").slideToggle(300);
	// });
}
$(".show_menu").hover(function (){
	$(".show_list").stop();
	$(".show_list").slideToggle(1000);
});
$(function (){
	// 轮播图

});

addLoadEvent(shopCar); 