
$(function(){
    /* ********************************************** */
    $('.top_R li').mouseover(function(){
        $(this).find('.topjs').stop().show().siblings().find('.topjs').stop().hide();
        $(this).find('.tb').stop(true,true).addClass('selected').siblings().find('.tb').stop(true,true).removeClass('selected');
    })
    $('.top_R li').mouseout(function(){  
        $('.top_R li').find('.topjs').stop().hide(); 
        $('.top_R li').find('.tb').stop(true,true).removeClass('selected');       
    })
    /* ********************************************** */
    $('.hl_list dl').mouseover(function(){
        $(this).find('dd').stop(true,true).show().siblings().find('dd').stop(true,true).hide();
        $(this).find('dt').addClass('selected').siblings().find('dt').removeClass('selected');
        })
    $('.hl_list dl').mouseout(function(){
        $('.hl_list dl').find('dd').hide();
        $('.hl_list dl').find('dt').removeClass('selected');
        })  
    /* **********************轮播图************************ */
        var timer;
        var $lis = $('.banner_click li');
        $('.banner li').eq(0).show().siblings().hide();
       
        $lis.eq(0).addClass('active');
       
        $lis.hover(function(){
            clearInterval(timer);
            var i = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.banner li').eq(i).show().siblings().hide();
        },function(){
            star();
        })
        function star(){
            var index = 0;
            timer = setInterval(function(){
                index++;
                if(index == 5){
                    index=0;
                }
                $('.banner li').eq(index).show().siblings().hide();
                $('.banner_click li').eq(index).addClass('active').siblings().removeClass('active');
            },3000)
        }
        star();
/* **********************tab切换************************ */
    $("li").hover(function(){
        $(this).find('.pic2').stop().animate({top:-$(this).find(".pic2 > img").height()},200);                          
    },function(){
        $(this).find('.pic2').stop().animate({top:'0'},200);    
    });
    
    $('.nav_R ul li').mouseover(function(){
        $(this).stop().animate({width:115},300).siblings().stop().animate({width:30},300);
        $(this).find('span').show();
    })

/* **********************首页左侧定位Fixed导航************************ */
        var $meiri = $('.meiri dl');
        var $scrollTop;
        $(window).scroll(function(e){
            $scrollTop =  $(window).scrollTop();
            if($scrollTop >= 700){
                $('.meiri').slideDown(700);
            }else if($scrollTop < 700){
                $('.meiri').slideUp(700);
            }
            
            if($scrollTop >=700 && $scrollTop <1200){
                $meiri.eq(0).addClass('active').siblings().removeClass('active');
            }else if($scrollTop >=1200 && $scrollTop <1700){
                $meiri.eq(1).addClass('active').siblings().removeClass('active');
            }else if($scrollTop >=1700 && $scrollTop <2300){
                $meiri.eq(2).addClass('active').siblings().removeClass('active');
            }else if($scrollTop >=2300 && $scrollTop <2800){
                $meiri.eq(3).addClass('active').siblings().removeClass('active');
            }else if($scrollTop >=2800 && $scrollTop <3300){
                $meiri.eq(4).addClass('active').siblings().removeClass('active');
            }else if($scrollTop >=3300 && $scrollTop <3800){
                $meiri.eq(5).addClass('active').siblings().removeClass('active');
            }
        });
        
        $meiri.hover(function(){
            $(this).addClass('active').siblings().removeClass('active');
        }).click(function(){
            var index = $(this).index();
            switch(index){
                case 0:
                $('body').animate({scrollTop:700});
                break;
                case 1:
                $('body').animate({scrollTop:900});
                break;
                case 2:
                $('body').animate({scrollTop:1200});
                break;
                case 3:
                $('body').animate({scrollTop:1700});
                break;
                case 4:
                $('body').animate({scrollTop:2300});
                break;
                case 5:
                $('body').animate({scrollTop:3000});
                break;
                case 6:
                $('body').animate({scrollTop:0});
                break;
            }
        })
})
//滚动条事件
$(function(){
	var $fixLeft = $('.fixLeft');
	var $fixTop = $('.fixTop');
	var $Top = $('.fixRight')
	
	// 1、给window绑定scroll事件
	$(window).on('scroll',function(){
		// 获取滚动过的距离
		var scrollTop = $(window).scrollTop();
		//当滚动到一定距离时，显示左弹出层
		if(scrollTop >= 100){
			$fixLeft.fadeIn();
		}else{
			$fixLeft.fadeOut();
		}
		//当滚动到一定距离时，显示上弹出层
		if(scrollTop >= 700){
			$fixTop.fadeIn();
		}else{
			$fixTop.fadeOut();
		}


		// 2、点击返回，滚动到相应的楼层
		$Top.on('click','.Last',function(){
			$('html,body').stop().animate({scrollTop:0});
		})
	});
});