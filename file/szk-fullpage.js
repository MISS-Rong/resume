// JavaScript Document

$(function(){
    $('#fullpage').fullpage({
		verticalCentered:false,
		resize:false,
		navigation:true,
		navigationTooltips:['首页','技能','作品','评价','致谢'],
		slidesNavigation:true,
		css3:true,
		continuousVertical:true
	});
	
	
	var oDiv = document.getElementById('wrap');
	var aDiv = oDiv.getElementsByTagName('div');
	var aA = oDiv.getElementsByTagName('a');
	
	var now = 0;
	var target;
	var onOff = true;
	
	setTimeout(function(){
		Tab(now);
	},200)
	
	for(var j=0;j<aA.length;j++){
				aA[j].className = 'hide';
				aA[j].onclick = function(e){
					e.cancelBubble = true;
				// e.stopPropagation();
				}
			}
	aA[0].className = 'active';
	for( var i=0; i<aDiv.length;i++){
		aDiv[i].index = i;
		aDiv[i].onclick = function(){
			//alert(this.index)
			for(var j=0;j<aA.length;j++){
				aA[j].className = 'hide';
				
			}
			aA[this.index].className = 'active';
			this.children[1].className = 'active';
			
			if(!onOff){
				return
			}
			
			onOff = false;
			target = this.index;
			
			if( target > now ){
				if( target - now <= 3) {
					goNext();	
				}else{
					goPrev();
				}
			}else{
				if(target + 7 - now <= 3){
					goNext();
				}else{
					goPrev();
				}
			}
		}
	}
	
	
	function goNext(){//调用函数使图片往下一张切换
		now ++;
		if(now > 6){
			now = 0;
		}
		Tab(now);
		if(now == target){//运动完成
			onOff = true;
			return;
		}
		setTimeout(function(){
			goNext();
		},700)
	}
	
	function goPrev(){//调用函数使图片往上一张切换
		now --;
		if(now < 0){
			now = 6;
		}
		Tab(now);
		if(now == target){//运动完成
			onOff = true;
			return;
		}
		setTimeout(function(){
			goPrev();
		},700)
	}
	
	function Tab(n){	// 图片位置
		for(var i=0;i<3;i++){
			var Left = n - 1 - i;
			if( Left<0){
				Left = Left + 7;
			}
			aDiv[Left].style.transform = 'translateX('+(-150*(i+1))+'px) translateZ('+(200-i*100)+'px) rotateY(30deg)';
			var Right = n + 1 + i;
			if( Right>6){
				Right = Right - 7;
			}
			aDiv[Right].style.transform = 'translateX('+(150*(i+1))+'px) translateZ('+(200-i*100)+'px) rotateY(-30deg)';
		}
		aDiv[n].style.transform = 'translateZ(300px)';
	}
	
});

$(window).load(function(){
	var a=$(window).width();
	if(a>1000){
		$('.page1 .szk').css('margin-top','1%');
		$('.page1 h1').css('font-size','5vw');
		$('.page1 h2').css('font-size','2vw');

		$('.page2 h1').css({'padding-top':'10%','font-size':'8vw'});
		$('.page2 span').css({'width':'8vw','height':'8vw','line-height':'8vw','font-size':'1vw'});

		$('.page3 h1').css({'padding-top':'8%','font-size':'8vw'});

		$('.page4 h1').css({'padding-top':'2%','font-size':'8vw'});
		$('.page4 p').css({'font-size':'1.5vw'});
		$('.page4 .me').css({'margin-top':'2%'});

		$('.page5 h1').css({'padding-top':'8%','font-size':'8vw','padding-bottom':'6%'});
		$('.page5 h2').css({'font-size':'2vw'});
		// $('.page4 span').css({'width':'8vw','height':'8vw','line-height':'8vw','font-size':'1vw'});
	}
})