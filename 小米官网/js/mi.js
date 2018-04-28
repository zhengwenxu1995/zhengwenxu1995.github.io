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
	$('.shop_car_btn').mouseover(function(){
		var shop_car=document.getElementsByClassName("shop_car")[0];
		var show=shop_car.getElementsByTagName('ul');
		show[0].setAttribute('class','show');
	});
	$('.shop_car_btn').mouseout(function(){
		var shop_car=document.getElementsByClassName("shop_car")[0];
		var show=shop_car.getElementsByTagName('ul');
		show[0].setAttribute('class','');
	});
}

function showNav(){
	// var per=document.getElementsByClassName('cont_bottom')[0];
	// var imglist=document.getElementById('img_list');
	var cont_img_list=document.getElementsByTagName('image_list');
	// var img_btn=document.getElementById("img_btn");
	var cont_img_btn_list=document.getElementsByTagName('img_chick');
	var now=0;
	$('#rbtn').click(function (){
		now++;
		if (now===4) {
			now=0;
		}	
		tagBtn(now);
	});
	$('#lbtn').click(function (){
		now--;
		if (now===-1) {
			now=4;
		}
		tagBtn(now);
	});

	
	for(var i=0;i<cont_img_btn_list.lenght;i++){
		cont_img_btn_list.index=i;
		cont_img_btn_list[i].onclick(function (){
			now=this.index;
			tagBtn(now);
		});
	}


	function tagBtn(event){
		for(var i=0;i<cont_img_list.lenght;i++){
			cont_img_list[i].className="";
			cont_img_btn_list[i].className="";
		}
		cont_img_list[event].className='image_list show';
		cont_img_btn_list[event].className='img_chick btn_show';
	}
}

function flashShow(){
	var goods=document.getElementById('goods_chose');
}





















addLoadEvent(showNav);
addLoadEvent(shopCar);