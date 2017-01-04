// head部分
$('#head-top .cent .gwc').mouseover(function(){
    $('#head-top .cent .hove').show();
    $(this).css({ color: "#FF6700", background: "#fff" });
});
$('#head-top .cent .hove').mouseover(function(){
    $('#head-top .cent .gwc').css({ color: "#FF6700", background: "#fff" });
}).mouseout(function(){
    $(this).hide();
    $('#head-top .cent .gwc').css({ color: "#b0b0b0", background: "#424242" });
});
// nav部分
$('#nav .cent .search input').focus(function(){
    $(this).css('border-color','#FF6700');
    $('#nav .cent .search button').css('border-color','#FF6700');
    $('#nav .cent .search .dis').show();
}).blur(function(){
    $(this).css('border-color','#e0e0e0');
    $('#nav .cent .search button').css('border-color','#e0e0e0');
    $('#nav .cent .search .dis').hide();
})
// main部分
/*        // 获取第一张图片的节点对象
        var firstImg = $(' #main .cent .top .lun li').first().clone();
        // 添加到最后的位置 并设置 ul 的宽度
        $(' #main .cent .top .lun').append(firstImg).width($(' #main .cent .top .lun li').length*$(' #main .cent .top .lun img').width());
        var i =0;
        var imgW = $(' #main .cent .top .lun img').width();
        var timer;
        // // 下一张
        // $('#next').click(function(){
        //     moveImg(++i);
        // });
        // // 上一张
        // $('#prev').click(function(){
        //     moveImg(--i);
        // });
        // 移动到指定的图片
        function moveImg(){
            // 最后一张
            if(i==$(' #main .cent .top .lun li').length){
                $(' #main .cent .top .lun').css({left:0})
                i=1;
            }
            // 是第一张的时候          
            if(i==-1){
                i = $(' #main .cent .top .lun li').length-2;
                $(' #main .cent .top .lun').css({left:($('#ul li').length-1)*-imgW});
            }
            // 移动图片动画
            $(' #main .cent .top .lun').stop().animate({left:i*-imgW},400);
            console.log(i);
            // // 换一下每个图片的小标记
            if(i==($(' #main .cent .top .lun li').length-1)){
                $(' #main .cent .top .lun .dian li').eq(0).addClass('bg').siblings().removeClass('bg');
            }else{
                $(' #main .cent .top .lun .dian li').eq(i).addClass('bg').siblings().removeClass('bg');
            }
        }
        // 点击小图片，跳转到指定的图片
        $(' #main .cent .top .lun .dian li').click(function(){
            i = $(this).index();
            moveImg();
        });
        function autoPlay(){
            timer = setInterval(function(){
                i++;
                moveImg();
            },3000);
        }
        autoPlay();
        // 鼠标移入幻灯片清除定时器
        $('#main').mouseover(function(){
            // $('#main button').show();
            clearInterval(timer)
        }).mouseout(function(){
            // 鼠标离开重新播放
            autoPlay();
            // $('#main button').hide();
        })*/
//淡入淡出轮播图
/*var run;
var j=0;
var i=0;
var mum=0;
function runsmall(){
    run = setInterval(function(){
        j++;
        if(j==360){
            j=0;
            //bar轮播图
            $('#main .cent .top .lun a').eq(i).fadeOut(0).next('#main .cent .top .lun a').fadeIn(500);
            //小轮播图 添加src 
            // $('#playnum li img').eq(i).removeAttr('src');
            //背景色数组
            // $('#main .cent').css('background','#'+arr[i+1]);

                i++;
                
                //判断临界点
                if(i>=$('#main .cent .top .lun a').length){
                    i=0;
                    $('#main .cent .top .lun a').eq(0).fadeIn(500);
                    $('#main .cent').css('background','#'+arr[0]);

                }   
            $('#playnum li img').eq(i).attr('src','images/num.png');
            }else{
                // $('#main .cent .top .lun li img').eq(i).css('transform','rotate('+j+'deg)');    
        }
    },10);
}
runsmall();*/ 
$(document).ready(function() { 
    var length, 
    currentIndex = 0, 
    interval, 
    hasStarted = false, //是否已经开始轮播 
    t = 3000; //轮播时间间隔 
    length = $('.slider-panel').length; 
     //将除了第一张图片隐藏 
     $('.slider-panel:not(:first)').hide(); 
     //将第一个slider-item设为激活状态 
     $('.slider-item:first').addClass('slider-item-selected'); 
    
     //隐藏向前、向后翻按钮 
     $('.slider-page').hide(); 

    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
    $('.slider-panel, .slider-pre, .slider-next').hover(function() { 
        stop(); 
        $('.slider-page').show();
    }, function() { 
        $('.slider-page').hide(); 
        start(); 
    }); 

    $('.slider-item').hover(function(e) { 
        stop(); 
        //索引当前图片序列号
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        // console.log(preIndex);
        currentIndex = $(this).index(); 
        console.log(currentIndex)
       

        play(preIndex, currentIndex); 
    }, function() { 
        start(); 
    });

    $('.slider-pre').unbind('click'); 
    $('.slider-pre').bind('click', function() { 
        pre(); 
    }); 

    $('.slider-next').unbind('click'); 
    $('.slider-next').bind('click', function() { 
        next(); 
    }); 
    /** 
        * 向前翻页 
   */
    function pre() { 
        var preIndex = currentIndex; 
        currentIndex = (--currentIndex + length) % length; 
        play(preIndex, currentIndex); 
    } 
    /** 
         * 向后翻页 
   */
    function next() { 
        var preIndex = currentIndex; 
        currentIndex = ++currentIndex % length; 
        play(preIndex, currentIndex); 
    } 
    /** 
       * 从preIndex页翻到currentIndex页 
       * preIndex 整数，翻页的起始页 
       * currentIndex 整数，翻到的那页 
   */
    function play(preIndex, currentIndex) { 
       $('.slider-panel').eq(preIndex).fadeOut(500) 
        .parent().children().eq(currentIndex).fadeIn(1000); 
       $('.slider-item').removeClass('slider-item-selected'); 
       $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
    } 
    /** 
        * 开始轮播 
   */
    function start() { 
       if(!hasStarted) { 
        hasStarted = true; 
        interval = setInterval(next, t); 
        } 
    } 
    /** 
   * 停止轮播 
   */
    function stop() { 
       clearInterval(interval); 
       hasStarted = false; 
    } 
    //开始轮播 
        start(); 
}); 
// floor1部分
$('#floor1 .cent h3 .prev').click(function(){
    $('#floor1 .cent .content').animate({'left':'-1288px'});
})
$('#floor1 .cent h3 .next').click(function(){
        $('#floor1 .cent .content').animate({'left':'0'});
   
})