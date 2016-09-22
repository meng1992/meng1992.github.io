

$(document).ready(function() {
/*UI作品展示 图片位移*/
	var sheep=500;


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
			$(".xuanfu").stop().animate({top:val+100}, sheep)
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

		}
		else if(val>=works)
		{
			$(".works2").addClass('curr').siblings().removeClass('curr');
		}

		else if(val>=profess)
		{
			$(".profess2").addClass('curr').siblings().removeClass('curr');

		}

		else
		{
			$(".aboutme2").addClass('curr').siblings().removeClass('curr');
			
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

	$(".web_push li").click(function(event) {
		$(this).addClass('cur').siblings().removeClass('cur');
		alert($(this).index());
		$("#featured-area li").eq($(this).index()).show().siblings().hide();
	});


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
});


/**/

$(document).ready(function() {
	$(".about_bd_tl .about_cont").click(function(event) {
		$(this).animate({"left":"120px"}, 1000);
	});
});
















	