/* user-cart ceilinglamp.js Date:2015-02-03 15:51:16 */
var ceilinglamp=function(a){$.browser.isIE6=function(){return $.browser.msie&&6==$.browser.version},this.guid=0,this.options={arrive:null,arriveThreshold:0,hasWrap:!1,hasStyle:!1,currentClassName:"ui-ceilinglamp-current",zIndex:100,top:0,pos:0,bchange:0,sCss:"",dCss:"",callback:null},this.init=function(){this.el=a,this.guid++,this.offsetTop=this.el.offset().top,this.insert(),this.showInit(),this.bind()},this.insert=function(){this.deWidth=this.el.width(),this.el.css({width:this.deWidth,height:this.el.height()});var a="ui-ceilinglamp-"+this.guid;this.el.wrap('<div class="'+a+'"></div>'),this.eleWrap=$("."+a),this.eleWrap.css({width:this.el.outerWidth(),height:this.el.outerHeight()+parseInt(this.el.css("marginTop"),10)+parseInt(this.el.css("marginBottom"),10)}),this.currentClass=this.options.currentClassName;var b=this.options.zIndex,c=this.options.top-parseInt(this.el.css("marginTop"),10),d=1==this.options.pos?"bottom":"top",e="."+this.currentClass+"{position:fixed;"+d+":"+c+"px;z-index:"+b+"}";if($.browser.isIE6()){var f=this.offsetTop;e="."+this.currentClass+"{position:absolute;z-index:"+b+";"+d+":expression(eval((document.documentElement||document.body).scrollTop-"+f+"-"+c+"))}",$("html").eq(0).css("text-overflow","ellipsis")}this.insertStyles(e)},this.insertStyles=function(a){var b=document,c=b.getElementsByTagName("head"),d=b.createElement("style");if(d.setAttribute("type","text/css"),d.styleSheet)d.styleSheet.cssText=a;else{var e=b.createTextNode(a);d.appendChild(e)}c.length&&c[0].appendChild(d)},this.show=function(){this.options;this.el.addClass(this.currentClass),this.el.css({width:$(window).width()}),$.browser.isIE6()&&this.el.css({position:"absolute"}),this.options.bchange&&this.el.find("."+this.options.sCss).addClass(this.options.dCss),this.options.callback&&this.options.callback("show")},this.hide=function(){this.el.removeClass(this.currentClass),this.el.css({width:this.deWidth}),$.browser.isIE6()&&this.el.css({position:"static"}),this.options.bchange&&this.el.find("."+this.options.sCss).removeClass(this.options.dCss),this.options.callback&&this.options.callback("hide")},this.showInit=function(){this.el.hasClass(this.currentClass)||(this.offsetTop=this.el.offset().top);var a=$(document).scrollTop(),b=this.offsetTop;1==this.options.pos?(a=$(window).height()+a,b>a?this.show():this.hide()):0==this.options.pos&&(a>b?this.show():this.hide())},this.bind=function(){var a=this;$(window).scroll(function(){a.showInit()}),$(window).resize(function(){a.showInit()})}};
