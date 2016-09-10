// JavaScript Document

//微信二维码弹出

function setErweiam(_id,_id2){
	var _obj = $('#'+_id);
	var _show = $('#'+_id2);
	var _t;
	_obj.hover(function(){
		clearInterval(_t);
		_show.slideDown('slow');
	},function(){
		_t = setInterval(function(){
			_show.slideUp('slow');
		},300)
	})
	_show.hover(function(){
		clearInterval(_t);
		_show.show();
	},function(){
		_t = setInterval(function(){
			_show.slideUp('slow');
		},300)
	})
}

//input 提示框
function setInputFocus(_obj){
	$.each($(_obj),function(i,e){
		var _this = $(e);
		
		if(_this.val() == ''){
			_this.css('color','#afafaf').val(_this.attr('prompt'));
		}else{
			_this.css('color','#414141');
		}
		
		_this.focus(function(){
			_this.css('color','#414141');
			if(_this.val() == _this.attr('prompt')){
				_this.val('');
			}
		}).blur(function(){
			_this.css('color','#414141');
			if(_this.val() == '' || _this.val() == _this.attr('prompt')){
				_this.css('color','#afafaf').val(_this.attr('prompt'));
			}
		});
	})
}

//加入购物车
function addCart(){
	var _pro = $('.product');
	var _li = _pro.find('.list li');
	$.each(_li,function(i,e){
		var _this = $(e);
		_this.hover(function(){
			$(this).find('.add-cart').show();	
		},function(){
			$(this).find('.add-cart').hide();	
		})	
	})
		
}

function addCartBig(){
	var _pro = $('.pro');
	var _li = _pro.find('.pro-right li');
	$.each(_li,function(i,e){
		var _this = $(e);
		_this.hover(function(){
			$(this).find('.pro-box .add-cart').show();	
		},function(){
			$(this).find('.pro-box .add-cart').hide();	
		})	
	})
		
}

//侧边功能键
function setSlide(_id){
	var _obj = $('#'+_id);
	var _myCart = _obj.find('.my-cart');
	var _w = $(window).width();
	if(_w < 1200){
		_obj.css('right',0);	
	}else{
		_obj.css('right',(_w-1200)/2-80);	
	}
	
	var flag = true;
	var _a = _obj.find('a');
	$.each(_a,function(i,e){
		var _this = $(e);
		_this.click(function(){
			if($(this).hasClass('bottom')){
				$('body').scrollTop(0);	
			}else if($(this).hasClass('first')){
				if(flag == true){
					_myCart.show();
					_myCart.animate({left:"-370px"});
					flag = false;
					
				}else{
					_myCart.slideToggle();
					_myCart.animate({left:"0px"});
					flag = true;
				}
			}	
		})	
	})
	
}
//返回顶部
function getTop(_id){
	var _obj = $('#'+_id);	
	_obj.find('a.bottom').css('visibility','hidden');
	$(document).scroll(function(){
		var _top = $(document).scrollTop();
		if(_top>0){
			_obj.find('a.bottom').css('visibility','visible');
		}else{
			_obj.find('a.bottom').css('visibility','hidden');
		}	
	})
}

//购物车
function OnClickCart(_id){
	var _obj = $('#'+_id);	
	var _cart = _obj.find('.cart');
	var _list = _obj.find('.my-list');
	var _li = _list.find('li');
	_cart.click(function(){
		if(_li.length>0){
			_obj.addClass('hovered');
		}else{
			_obj.removeClass('hovered');
		}	
		return false;
	})
	$(document).click(function(){
		_obj.removeClass('hovered');	
	})
	
}