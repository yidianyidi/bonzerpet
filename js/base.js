// JavaScript Document

$(function (){
		
		
		(function (){
			$(".nav li").hover(function (){
				$(this).find("ul").slideDown(500);
			},function (){
				$(this).find("ul").slideUp(500);
			}); 
			var len=$(".nav li").length;
			$(".nav .nav_li").eq(len-1).css("background-image","none");
			
		})();
		
		
		//图片轮播渐变
		(function (){
				$scroll_btn=function (obj,btn,time){
					var i=0;
					var t=time||3000;
					var len=$(obj).length;
					var timer=null;
					$scroll=function (index){
						clearInterval(timer);
						timer=setInterval(function (){
							index++;
							if(index==len){index=0;}
							$(obj).fadeOut(160);
							$(obj).eq(index).fadeIn(160);
							$(btn).removeClass("on");
							$(btn).eq(index).addClass("on");
							
						},t);
					};
					$scroll(i);
					
					$(btn).hover(function (){
						clearInterval(timer);
						i=$(this).index();
						$(obj).fadeOut(160);
						$(obj).eq(i).fadeIn(160);
						$(btn).removeClass("on");
						$(this).addClass("on");
					},function (){
						$scroll(i);
					});
				};
				
		})();
		$(window).load(function(){
			//$scroll_btn('#homeBannerImgBox img','#homeBannerBtnBox .homeBannerBtn',4000);
		});
		
		(function (){
			$(window).load(function(){
			
				var index=0;
				var w=$("#bannerScrollUl li").eq(0).width();
				var timer;
				var len=$("#bannerScrollUl li").length;
				$("#bannerScrollUl").css("width",w*len);
				$_bannerscr=function (){
					clearInterval(timer);
					timer=setInterval(function (){
						index++;
						if(index==len){index=0;$("#bannerScrollUl").animate({left:-w*index},500);}
						$("#bannerScrollUl").animate({left:-w*index},500);
						$("#homeBannerBtnBox .homeBannerBtn").removeClass("on");
						$("#homeBannerBtnBox .homeBannerBtn").eq(index).addClass("on");
					},4000);
				};
				$_bannerscr();
				$("#homeBannerBtnBox .homeBannerBtn").hover(function (){
					clearInterval(timer);
					index=$(this).index();
					$("#bannerScrollUl").animate({left:-w*index},500);
					$("#homeBannerBtnBox .homeBannerBtn").removeClass("on");
					$("#homeBannerBtnBox .homeBannerBtn").eq(index).addClass("on");
				},function (){
					$_bannerscr();
				});
				$(".homeBanner").hover(function (){
					clearInterval(timer);
				},function (){
					$_bannerscr();
				});
			});
		})();
		/*选项卡*/
		(function (){
			$tab=function (obj1,obj2){
				var index=0;
				$(obj1).click(function (){
					index=$(this).index();
					
					$(obj1).removeClass("on");
					$(obj1).eq(index).addClass("on");
					$(obj2).removeClass("on");
					$(obj2).eq(index).addClass("on");
				});
			};
		})();
		
		
		
		
	

		/*无缝左*/
		(function (){
			$scroll_left=function (obj_box,obj_son,ul1,ul2,num){
				
				var $oBox=$(obj_box);
				var $oSon=$(obj_son);
				var $oUl1=$(ul1);
				var $oUl2=$(ul2);
				var timer;
				//复制一份内容
				$oUl2.html($oUl1.html());
				//算宽度
				var wid=$oUl1.width();
				$oSon.css("width",wid*2+100);
				var W=$oUl1.width();
				var left=0;
				(function (_timer){
					$scrollLeft=function (){
						clearInterval(_timer);
						_timer=setInterval(function(){
							//改left-的数值就可调节速度减得越多速度越快
							left-=num/100;
							$oSon.css("left",(left%W-W)%W);
						},30);
					};
					$scrollLeft();
					$oBox.hover(function (){
						clearInterval(_timer);
					},function (){
						_timer=setInterval(function(){
							//改left-的数值就可调节速度减得越多速度越快
							left-=num/100;
							$oSon.css("left",(left%W-W)%W);
						},30);
					});
				
				})($oBox.time);
				
			};
			
		})();
		$(window).load(function(){
			$scroll_left("#my_sc_box","#my_scroll","#my_div1","#my_div2",150);
		});
		
	(function (){
		var index=0;
		var w=326;
		var timer;
		$("#introduceScroll").html($("#introduceScroll").html()+$("#introduceScroll").html());
		var len=$(".introduceScrollDiv").length;
		$("#introduceScroll").css("width",w*len);
		$_scr=function (){
			timer=setInterval(function (){
				index++;
				if(index>len-3){index=0;$("#introduceScroll").animate({left:-w*index},0);}
				$("#introduceScroll").animate({left:-w*index},500);
			},2000);
		};
		$("#introducePrev").click(function (){
			index--;
			if(index<-1){index=len-4;$("#introduceScroll").animate({left:-w*index},0);}
			$("#introduceScroll").animate({left:-w*index},500);
		});
		$("#introduceNext").click(function (){
			index++;
			if(index>len-3){index=0;$("#introduceScroll").animate({left:-w*index},0);}
			$("#introduceScroll").animate({left:-w*index},500);
		});
		$(window).load(function(){
			$_scr();
			$(".introduce").hover(function (){
				clearInterval(timer);
			},function (){
				$_scr();
			});
		});
	})();
	
	
	(function (){
		$(".introduceScrollDiv").mouseover(function (){
			$(this).find(".introduce_zhezhaoBox").show();
		});
		$(".introduce_zhezhaoBox").mouseout(function (){
			$(this).hide();
		});
	})();
	
	//goTop
		function b(){
			h = 100;
			t = $(document).scrollTop();
			if(t > h){
				$('#goTop').show();
			}else{
				$('#goTop').hide();
			}
		}
		$(window).scroll(function(e){
			b();		
		})


});