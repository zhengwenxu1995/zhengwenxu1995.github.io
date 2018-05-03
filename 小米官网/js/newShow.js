$(".nav_main_menu #show").hover(function (){
    $(".all_shop_show").stop();
    $(".all_shop_show").toggle();
});
$("#show1").hover(function (){
    $(".item_list_menu > .show_mad1").stop();
    $(".item_list_menu > .show_mad1").toggle();
});
$("#show2").hover(function (){
    $(".item_list_menu > .show_mad2").stop();
    $(".item_list_menu > .show_mad2").toggle();
});
$("#show3").hover(function (){
    $(".item_list_menu > .show_mad3").stop();
    $(".item_list_menu > .show_mad3").toggle();
});
$("#show4").hover(function (){
    $(".item_list_menu > .show_mad4").stop();
    $(".item_list_menu > .show_mad4").toggle();
});
$("#show5").hover(function (){
    $(".item_list_menu > .show_mad5").stop();
    $(".item_list_menu > .show_mad5").toggle();
});
$("#show6").hover(function (){
    $(".item_list_menu > .show_mad6").stop();
    $(".item_list_menu > .show_mad6").toggle();
});
$("#show7").hover(function (){
    $(".item_list_menu .show_mad7").stop();
    $(".item_list_menu .show_mad7").toggle();
});
$("#show8").hover(function (){
    $(".item_list_menu .show_mad8").stop();
    $(".item_list_menu .show_mad8").toggle();
});
$("#show9").hover(function (){
    $(".item_list_menu .show_mad9").stop();
    $(".item_list_menu .show_mad9").toggle();
});
$("#show10").hover(function (){
    $(".item_list_menu .show_mad10").stop();
    $(".item_list_menu .show_mad10").toggle();
});
//淡进淡出轮播图
var index=0;
var $button=$('.btn_list>li');
$('.lbtn').click(function  (){
    fadeShow("l");
    }
);
$('.rbtn').click(function  (){
    fadeShow("r");
    }
);
function fadeShow(btn){
    if(btn==="r"){
        index-=1;
    }else if(btn==="l"){
        index +=1;
    }else{
        index+=1;
    }
    if(index<0){
        index=2;
    }else if(index>2){
        index=1;
    }
    console.log(index);
    $button.removeClass("check");
    $button.eq(index-1).addClass("check");
    $(".img_list1").stop();
    $(".img_list1").fadeToggle(1000);
}

var removeInerval=setInterval(fadeShow,4000);
$('.cont_reveal').mouseover(function (){
    clearInterval(removeInerval);
});
$(".cont_reveal").mouseout(function (){
    // setTimeout(aaa,4000);
});

// 内容鼠标指向变换位置
$('#hot_mad').mouseover(function (){
    $(this).css({"box-shadow":"3px 0px 15px #444","top":"-3px"});
});
$('#hot_mad').mouseout(function (){
    $(this).css({"box-shadow":"0px 0px 0px #fff","top":"0px"});
});

