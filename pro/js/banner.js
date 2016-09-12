function createBannerImg(){
    for(var i=0;i<7;i++){
        $(".banner").append("<a class='banner-a'><img src='../image/banner"+(i+1)+".jpg' /></a>");
        index = i;
    };
};
createBannerImg();
function createBannerDots(){
    for(var i=0;i<7;i++){
        $(".banner1").find(".dots").append("<a class='dot'></a>");
    };
};
createBannerDots();
// banner 初始化
var $index = $(".dot"),
    _index,
    x = 0;
$(".banner a:eq(0)").find("img").css("display","block");
$(".dots .dot:eq("+ x +")").addClass("current");
// 点点切换
$(".dots .dot").mouseover(function(){
    for(var i = 0;i<$index.length;i++){
        $(this).addClass("current").siblings().removeClass("current");
        var _index = $(this).index();
    }
    $(".banner a:eq("+ _index + ")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
    $(".dots .dot:eq("+ _index + ")").addClass("current").siblings().removeClass("current");
    x =_index;
});

// 向右切换
$(".banner1 .banner-r").click(function(){
    clearInterval(time);
    x >=6 ? x = 0 : ++x;
    $(".banner a:eq("+ x +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
    $(".dots .dot:eq("+ x + ")").addClass("current").siblings().removeClass("current");
    time = setInterval(timer,2000);
});
// 向左切换
$(".banner1 .banner-l").click(function(){
    clearInterval(time);
    x <= 0 ? x = 6 : x--;
    $(".banner a:eq("+ x +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
    $(".dots .dot:eq("+ x + ")").addClass("current").siblings().removeClass("current");
    time = setInterval(timer,2000);
});
// 定时轮播
var timer = function(){
    x++;
    x ==7 ? $(".dots .dot:eq(0)").mouseover() : $(".dots .dot:eq("+ x +")").mouseover();
}
    time = setInterval(timer,2000);
$(".banner").mouseover(function(){
    clearInterval(time);
}).mouseleave(function(){
    time = setInterval(timer,2000);
});