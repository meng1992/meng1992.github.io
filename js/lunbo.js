//<![CDATA[
$(function(){
	(function(){
		var curr = 0;
		$(".banner_preo li").each(function(i){
			$(this).click(function(){
				curr = i;
			
				$(".banner .banner_sider li").eq(i).fadeIn("slow").siblings("li").fadeOut();
				$(this).siblings("li").removeClass("on").end().addClass("on");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true±íÊ¾Ç°·­£¬ false±íÊ¾ºó·­
			if (flag) {
				if (curr == 0) {
					todo = 1;
				} else {
					todo = (curr - 1) % 8;
				}
			} else {
				todo = (curr + 1) % 8;
			}
			$(".banner_preo li").eq(todo).click();
		};
		
		//×Ô¶¯·­
		var timer = setInterval(function(){
			todo = (curr + 1) % 8;
			$(".banner_preo li").eq(todo).click();
		},2000);
		
		//Êó±êÐüÍ£ÔÚ´¥·¢Æ÷ÉÏÊ±Í£Ö¹×Ô¶¯·­
		$(".banner .banner_sider li").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
				todo = (curr + 1) % 8;
				$(".banner_preo li").eq(todo).click();
				},2000);			
			}
		);
	})();
});




/*无缝滚动*/

window.onload=function(){
	var speed=30;
	var box=document.getElementById("box");
	var left=document.getElementById("left");
	var right=document.getElementById("right");

	right.innerHTML=left.innerHTML;

	var time=setInterval(fun,speed);
	function fun()
	{
		if(left.offsetWidth-box.scrollLeft<=0)
		{
			box.scrollLeft=0;
		}
		else
		{
			box.scrollLeft++;
		}
	}

	box.onmouseover=function()
		{
			clearInterval(time);
		}
		box.onmouseout=function()
		{
			time=setInterval(fun,speed)
		}


}





$(document).ready(function() {
/*UI作品展示 图片位移*/
	
	var sheep=500

	$(".icon_content a").each(function(index, el) {
		$(this).hover(function() {
			$(".icon_content a").stop().fadeTo(sheep,0.5);
			$(this).stop().fadeTo(sheep,1);
			$(this).children('img').stop().animate({marginLeft:-15,borderRadius:6}, sheep);
		}, function() {
			$(".icon_content a").stop().fadeTo(sheep,1);
			$(this).children('img').stop().animate({marginLeft:0,borderRadius:6}, sheep);
			
			
		});		
	});

	/*网页设计作品 切换*/

	/*$(".web_push li").click(function(event) {
		$(this).addClass('cur').siblings().removeClass('cur');
		alert($(this).index());
		$("#featured-area li").eq($(this).index()).show().siblings().hide();
	});*/

	$(".push_wrap li").click(function() {
		$(this).addClass('on').siblings().removeClass('on')

		$(".icon_content").eq($(this).index()).show().siblings().hide();
	});


	
		

		$(".study img").hover(function() {
			$(".nex_w").animate({"left":"860px","top":"10px"},6000);
			$(".new_w").fadeTo(6000,1);
		}, function() {
			
		});

		
		
	

	/*右側悬浮*/


	


	$(window).scroll(function(event) {

		$(".xuanfu2").fadeTo(0,0.4);
		var val=$(document).scrollTop();

		if(val<=200)
		{
			$(".xuanfu").hide();
		}
		else
		{
			$(".xuanfu").show();
			$(".xuanfu").stop().animate({top:val+100}, 3000)
		}
	
	});


	$(".yes").each(function(index, el) {
		$(this).hover(function() {
			$(this).addClass('curr')
		}, function() {
			$(this).removeClass('curr')
		});
	});





	var aboutme=$(".aboutme").offset().top;
	var profess=$(".profess").offset().top;
	var works=$(".works").offset().top;

	var contact=$(".contact").offset().top;
	var back=$(".back").offset().top;

	

	$(window).scroll(function(event) {
		var val=$(document).scrollTop();

		if(val>=contact)
		{

			$(".contact2").addClass('curr').siblings().removeClass('curr')
			$(".contact2").hover(function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			}, function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			});

		}
		else if(val>=works)
		{
			$(".works2").addClass('curr').siblings().removeClass('curr');
			$(".works2").hover(function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			}, function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			});
		}

		else if(val>=profess)
		{
			$(".profess2").addClass('curr').siblings().removeClass('curr');
			$(".profess2").hover(function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			}, function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			});

		}

		else
		{
			$(".aboutme2").addClass('curr').siblings().removeClass('curr');
			$(".aboutme2").hover(function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			}, function() {
				$(this).addClass('curr').siblings().removeClass('curr')
			});

			
		}
	});

	/*滑动部分*/
	$(".aboutme2").click(function(event) {
		$("html,body").animate({scrollTop:aboutme}, 1000);
		$(this).addClass('curr').siblings().removeClass('curr');
		
		
	});

	$(".profess2").click(function(event) {
		$("html,body").animate({scrollTop:profess}, 1000);
		$(this).addClass('curr').siblings().removeClass('curr');

	});

	$(".works2").click(function(){
		$("html,body").animate({scrollTop:works}, 1000);
		$(this).addClass('curr').siblings().removeClass('curr');
	})

	$(".contact2").click(function(event) {
		$("html,body").animate({scrollTop:contact}, 1000);
		$(this).addClass('curr').siblings().removeClass('curr');
	});

	$(".back").click(function(event) {
		$("html,body").animate({scrollTop:back},4000);
		$(this).addClass('curr').siblings().removeClass('curr');
	});







	/*网页设计作品 切换*/

	/*$(".web_push li").click(function(event) {
		$(this).addClass('cur').siblings().removeClass('cur');
		alert($(this).index());
		$("#featured-area li").eq($(this).index()).show().siblings().hide();
	});*/


	/*邮箱图标等用JQ实现*/

	
	$(".contact_bd_l dl dt").each(function(index, el) {
		var $num=-390-index*59;
		$(el).css('background-position', '-70px  '+$num+'px');

		$(this).hover(function() {
			$(this).css('background-position', '0px  '+$num+'px');
		}, function() {
			$(this).css('background-position', '-70px  '+$num+'px');
		});
		
	});
});



/*页面自动滑动*/
$(document).ready(function() {
		$(".header_btn a").click(function(event) {
		$("html,body").stop().animate({scrollTop:5000}, 10000)
	});

		$(".about_hd").fadeIn(1)
});


/**/

$(document).ready(function() {
	$(".about_bd_tl .about_cont").click(function(event) {
		$(this).animate({"left":"120px"}, 1000);
	});
});



	$(function(){
	var $key=0;
	var $num=0;
	var gao=$(window).height()/2-$(".xuanfu").height()/2;
	
	$(".xuanfu").css("top",gao);
	$("#box1").height($(window).height());

	$(document).mousewheel(function(event,delta){
		
		$num=$num-delta;
		$key=parseInt($num/2);

		if($key<0)
		{
			$key=0;
			$num=0;
		}

		else if($key>4)
		{
			$key=4;
			$num=8;
		}

		$("#box1").attr("class","no"+$key+"")
		$(".xuanfu p").eq($key).addClass('curr').siblings().removeClass('curr')
		

	})

	$(".xuanfu p").click(function(event) {
		var $index=$(this).index();
		// $key=$index;
		$key=1;

		$(this).addClass('curr').siblings().removeClass('curr');
		$("#box1").attr("class","no"+$index+"")
		donghua();
		
	
	});

	$(window).resize(function(){
		var gao=$(".about_bd").height()/3;
		
		if(gao==$(".about_bd").height()/3)
		{
			$(".about_bd_tr").fadeIn(3000);
			$(".tr_cir").addClass('xin')
		}else
		{
			$(".tr_cir").removeClass('xin');
		}
		$(".xuanfu").css("top",gao);

		$("#box1").height($(window).height());
		donghua();

	})

	function donghua()
	{
		if($key==1)
		{
			$(".about_bd_tr").fadeIn(3000);
			$(".tr_cir").addClass('xin')
		}else
		{
			$(".tr_cir").removeClass('xin');
		}
	}

	
})

$(document).ready(function(){

	$('#parallax').jparallax({
		triggerExposesEdges:true,
		yparallax:false
	},{
		yparallax:false
	},{
		yparallax:false
	},{
		yparallax:false
	},{
		yparallax:false
	});

});


