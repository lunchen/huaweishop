//导航
(function(){
	//导航栏下
	var $diva=$("<div class='firstPro clearfloat'></div>"),
		classcolor=["hui","lv","huang","fen"];
	for(var i=0;i<4;i++){
		$diva.append("<div class='eachPro1 "+ classcolor[i] +"'>"
						+"<a>"
							+"<div class='pro-img'>"
								+"<img src="+data.data[i].imgSrc+">"
							+"</div>"
							+"<div class='cont'>"
								+"<div class='pro-name'>"+data.data[i].name+"</div>"
								+"<div class='pro-shining'>"
									+"<span class='tit1'>"+data.data[i].description+"</span>"
									+"<span class='tit2'>"+data.data[i].title+"</span>"
								+"</div>"
								+"<div class='pro-price'>"
									+"<em>￥</em>"
									+"<span class='prices'>"+data.data[i].price+"</span>"
								+"</div>"
								+"<div class='pro-button'>立即抢购</div>"
							+"</div>"
						+"</a>"
					+"</div>"
					)
	}
	$(".floot1").prepend($diva);
})();

//生成楼层
(function(){
	var build=[
				{"asd1":"手机","asd2":"华为精品手机","asd3":["荣耀","荣耀畅玩","华为 Mate/P系列","华为 G/Y系列","运营商合约"]},
				{"asd1":"平板 & 穿戴","asd2":"华为精品平板","asd3":["平板电脑 ","手环","手表"]},
				{"asd1":"笔记本电脑","asd2":"移动办公","asd3":["MateBook","扩展坞","触控笔","二合一键盘"]},
				{"asd1":"智能家居","asd2":"上网必备","asd3":["子母路由","电视盒子","路由器","电力猫","随行wifi"]},
				{"asd1":"专属配件","asd2":"配件与服务","asd3":["保护壳","保护套","贴膜","盒子专属配件","表带","电容笔"]},
				{"asd1":"每日特价","asd2":"精品推荐","asd3":["每日特价"]},
			];
	console.log(build[0].asd3.length);
	for(var i=0,bulidlen = build.length;i<bulidlen;i++){
		var a="";
		for(var j=0,asd3len=build[i].asd3.length;j<asd3len;j++){
			a+="<a>" + build[i].asd3[j] +"</a>"
		}
		$(".footer").before("<div class='floot width1200'>"
									+"<div class='floot-nav clearfloat'>"
										+"<div class='floot-nav-tit-left'>"
											+"<a>" + build[i].asd1 + "</a>"
											+"<span>" + build[i].asd2 + "</span>"
										+"</div>"
										+"<div class='floot-nav-tit-right'>"
											+a
										+"</div>"
									+"</div>"
								+"</div>"
		)
	}
})();

//楼内内容
(function(){
	//生成styl1
	function styl1(i){
		var $styl1 = $(
			"<div class='pro-list styl1'>"
						+"<a>"
							+"<div class='pro-img'>"
								+"<img src="+data.data[i].imgSrc+">"
							+"</div>"
							+"<div class='cont'>"
								+"<div class='pro-name'>"+data.data[i].name+"</div>"
								+"<div class='pro-shining'>"
									+"<span class='tit1'>"+data.data[i].description+"</span>"
									+"<span class='tit2'>"+data.data[i].title+"</span>"
								+"</div>"
								+"<div class='pro-price'>"
									+"<em>￥</em>"
									+"<span class='prices'>"+data.data[i].price+"</span>"
								+"</div>"
								+"<div class='pro-button'>立即抢购</div>"
							+"</div>"
						+"</a>"
					+"</div>"
			)
		return $styl1;
	}
	//生成styl2
	function styl2(i){
		var $styl2 = $(
			"<div class='pro-list styl2'>"
						+"<a>"
							+"<div class='pro-img'>"
								+"<img src="+data.data[i].imgSrc+">"
							+"</div>"
							+"<div class='cont'>"
								+"<div class='pro-name'>"+data.data[i].name
									+"<span class='tit1'>"+data.data[i].description+"</span>"
								+"</div>"
								+"<div class='pro-price'>"
									+"<em>￥</em>"
									+"<span class='prices'>"+data.data[i].price+"</span>"
								+"</div>"
							+"</div>"
						+"</a>"
					+"</div>"
			)
		return $styl2;
	};
	var turntimes=[0,15,11,3,7,23,3],
		color=["lv","hui","fen","huang","zi","lan"],
		a=0,
		all1=turntimes[0],
		all2=turntimes[1];
	for(var i=0;i<6;i++){
		$flootpro = $("<div class='floot-pro clearfloat'></div>");
		for(var j=0+all1;j<all2;j++){
			j==all1　?　$flootpro.append(styl1(5)) : $flootpro.append(styl2(5));
		}
		all1=all2;
		all2+=turntimes[i+2];
		$(".floot").eq(i).append($flootpro);
		a+i>3 ? a =i-a : a++;
		$(".floot").eq(i).find(".pro-list").eq(0).addClass(color[a+0]);
		$(".floot").eq(i).find(".pro-list").eq(1).addClass(color[a+1]);
		$(".floot").eq(i).find(".pro-list").eq(2).addClass(color[a+2]);
	}
})();








