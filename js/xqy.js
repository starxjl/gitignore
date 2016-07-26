$(function(){
			var $smallPic =$('.smallPic img');
			var $smallCousor =$('.smallCousor');
			var $bigCousor =$('.bigCousor');
			var $bigPic =$('.bigCousor img');

			$('.shower ul>li>img').mouseenter(function(e){
				console.log(e.target)
				$smallPic.attr('src',e.target.src);
				$bigPic.attr('src',e.target.src);
				$(e.target).addClass('active').parent().siblings().find('img').removeClass('active');
			})
	
			$smallCousor.width($smallPic.outerWidth()*$bigCousor.outerWidth()/800);
			$smallCousor.height($smallPic.outerHeight()*$bigCousor.outerHeight()/800);

			var dw =$smallCousor.outerWidth();
			var scale = $bigCousor.outerWidth()/dw;

			$('.smallPic').mousemove(function(e){
				e=window.event||e;
				var $disX = e.pageX-$smallPic.offset().left-dw/2;
				var $disY = e.pageY-$smallPic.offset().top-dw/2;

				$smallCousor.css('display','block');
				$bigCousor.css('display','block');

				if($disX<=0){
					$disX=0
				}
				if($disX>=$smallPic.outerWidth()-dw){
					$disX=$smallPic.outerWidth()-dw
				}
				if($disY<=0){
					$disY =0;
				}
				if($disY>=$smallPic.outerHeight()-dw){
					$disY=$smallPic.outerHeight()-dw;
				}
				$smallCousor.css({left:$disX,top:$disY});
				$bigPic.css({left:-$disX*scale,top:-$disY*scale});


			})

			$('.smallPic').mouseleave(function(){
				 $smallCousor.css('display','none');
				 $bigCousor.css('display','none');
			})
		})