
	// 购物车
	$('.shop_car').hover(function(){
		$("#shop_car_con").stop();
		$("#shop_car_con").slideToggle(100);
	});
	// 导航鼠标指向显示和隐藏
	$(".show_menu").hover(function (){
		$(".show_list").stop();
		$(".show_list").slideToggle(100);
	});
	// 鼠标指向出现内容出现和隐藏
	$(".cont_menu #mouseover_color1").hover(function (){
			$(".cont_menu #mouseover_color1 div").stop();
			$(".cont_menu #mouseover_color1 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color2").hover(function (){
		$(".cont_menu #mouseover_color2 div").stop();
		$(".cont_menu #mouseover_color2 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color3").hover(function (){
		$(".cont_menu #mouseover_color3 div").stop();
		$(".cont_menu #mouseover_color3 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color4").hover(function (){
		$(".cont_menu #mouseover_color4 div").stop();
		$(".cont_menu #mouseover_color4 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color5").hover(function (){
		$(".cont_menu #mouseover_color5 div").stop();
		$(".cont_menu #mouseover_color5 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color6").hover(function (){
		$(".cont_menu #mouseover_color6 div").stop();
		$(".cont_menu #mouseover_color6 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color7").hover(function (){
		$(".cont_menu #mouseover_color7 div").stop();
		$(".cont_menu #mouseover_color7 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color8").hover(function (){
		$(".cont_menu #mouseover_color8 div").stop();
		$(".cont_menu #mouseover_color8 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color9").hover(function (){
		$(".cont_menu #mouseover_color9 div").stop();
		$(".cont_menu #mouseover_color9 div").fadeToggle(300);
	});
	$(".cont_menu #mouseover_color10").hover(function (){
		$(".cont_menu #mouseover_color10 div").stop();
		$(".cont_menu #mouseover_color10 div").fadeToggle(300);
	});
// 轮播图
	var index=0;
	var $event=$('.cont_img')
	var $img_click=$(".img_chick");
	$(".cont_bottom #lbtn").click(function (){
		index-=1;
		RotationMap();
	});
	$("#rbtn").click(function (){
		index+=1;
		RotationMap();
	});
	function RotationMap(){
		if(index>4){
			index=0;
		}else if(index<0){
			index=4;
		}
		$img_click.removeClass("btn_show");
		$img_click.eq(index).addClass("btn_show");
		
		$event.stop();
		$event.animate({"left": -1226*index+"px" },300);
	}
	function RotationMapIndex(){
		index += 1;
		RotationMap();

	}
	var time = setInterval(RotationMapIndex,4000);
	$(".cont_img").mouseover(function (){
		console.log($(".cont_img"));
		clearInterval(time);
	});
	$(".cont_img").mouseout(function (){
		setTimeout(setInterval(RotationMap,4000),3000);
	});
	$(".img_chick").click(function (){
		index=$(this).index();
		RotationMap();
	});
