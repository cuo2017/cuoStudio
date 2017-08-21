var cuo_words_bar = '<div class="cuo-words-bar"><p>2017.8.4</p><div class="cuo-words-bar-deco"><div class="cuo-words-bar-ball"></div><div class="cuo-words-bar-line"></div></div><div class="cuo-words-bar-board"><h1>this is a great web!I love it ,I enjoy its UI design and its fluent animations.perfect!</h1><p>by @CP3</p></div></div>';


var animateType = {
	easing: 'easeOutExpo',
	duration: 300,
};




//menu弹出 
$('.cuo-nav-brand').click(function(event) {
	/* Act on the event */
	// 退出菜单
	if($('.cuo-menu').css('left') == '0px'){
		$('.cuo-menu').animate({'left':-100}, animateType);
		$('.navbar-right').css('display', 'block');
		$(this).html('MENU');
		$('.cuo-mask').hide(animateType);
		if($(window).scrollTop() > 0){
			$('.cuo-nav').css({
				borderBottom: '1px solid #ccc',
				background: 'none'
			});
			$(".cuo-nav-aa").css('cssText','color:#666 !important;');
			$('.nav-mask').css('opacity', '1');

		}
		else{
			$('.cuo-nav').css({
				borderBottom: 'none',
				background: 'none'

			});
			$(".cuo-nav-aa").css('cssText','color:#fff !important;');
			$('.nav-mask').css('opacity', '0');

		}
		// 
		$('body').css('overflow', 'scroll');
	}
	// 进入菜单
	else if($('.cuo-menu').css('left') == '-100px'){
		$('.cuo-menu').animate({'left':0}, animateType);
		$('.navbar-right').css('display', 'none');
		$(this).html('CUO');
		$('.cuo-mask').show(animateType);
		$('.nav-mask').css('opacity', '0');
		$('.cuo-nav').css({
			border: 'none',
			background: 'none'
		});
		$(".cuo-nav-aa").css('cssText','color:#fff !important;');

		// 禁止滑动

		$('body').css('overflow', 'hidden');

	}
});



// 滚动动画

jQuery(document).ready(function($) {
// 向下滚动到据顶部超过1000px时，回到顶部
// 加个stop（），优化动画，减少卡顿
// 加载动画
	// $('.loading-line').animate({
	// 	"width":"100%",
	// }, 3000).after(function(){
	// 	$('.loading').delay(3000).hide(1000);
	// });
	

	nav();
	$(window).scroll(function(){
	    nav();
 	});



});


function nav(){
	if($(this).scrollTop() > 0 ){
	        $('.cuo-nav').css({
	        	borderBottom :'1px solid #ccc',
	        }).stop().animate({
	        	'height': '50px'
	        }, animateType);

	        $('.nav-mask').stop().animate({
	        	'opacity': 1,
	        	'height':'50px'
	        },animateType);

	        $(".cuo-nav-aa").css('cssText','color:#666 !important;');
	         $(".cuo-nav-aa").css('cssText','color:#666 !important;');
	        $(".cuo-nav-fix").stop().animate({
	        	'top': 0
	        }, animateType);
	    }
	    else{
	    	$('.cuo-nav').css({
	        	borderBottom:'none',

	        }).stop().animate({
	        	'height':'100px',
	        }, animateType);

	        $('.nav-mask').stop().animate({
	        	'opacity':0 ,
	        	'height':'100px',
	        },animateType);
	        $(".cuo-nav-aa").css('cssText','color:#fff !important;');
	        $(".cuo-nav-fix").stop().animate({
	        	'top': 25
	        }, animateType);
	        
	    }

}

// hover动画
$(".cuo-nav-aa").hover(function() {
	/* Stuff to do when the mouse enters the element */
	 $(this).css('cssText','color:#4990E2 !important;');
}, function() {
	/* Stuff to do when the mouse leaves the element */
	if($(window).scrollTop() > 0){
			
			$(this).css('cssText','color:#666 !important;');
		}
		else{
			
			$(this).css('cssText','color:#fff !important;');
		}
});

$('.cuo-menu-text').hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(this).animate({
		'margin-left':'20px' 
	}, animateType);
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(this).animate({
		'margin-left':'0px' 
	}, animateType);
});

$('.cuo-products-bar').hover(function() {
	/* Stuff to do when the mouse enters the element */
	$('.cuo-products-mask').animate({
		'left':'0px'
	},animateType);
	$('.cuo-products-bar h3').animate({
		'left':'0px'
	},animateType);
}, function() {
	$('.cuo-products-mask').animate({
		'left':'400px',

	},animateType);

	$('.cuo-products-bar h3').animate({
		'left':'-400px'
	},animateType);
});



$('.cuo-news-btn').hover(function() {
	/* Stuff to do when the mouse enters the element */
	// alert('123');
	$(this).css('background', '#fff');
	$(this).children('p').css('color', '#4990E2');
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(this).css('background', '#4990E2');
	$(this).children('p').css('color', '#fff');
});


$('.cuo-words-add').hover(function() {
	/* Stuff to do when the mouse enters the element */
	// alert('123');
	$(this).css('background', '#fff');
	$('.cuo-words-add span').css('color', '#4990E2');
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(this).css('background', '#4990E2');
	$('.cuo-words-add span').css('color', '#fff');
});















// click动画

$('#nav-products').click(function(event) {
	/* Act on the event */
	$('html,body').animate({scrollTop:1450}, animateType);
});
$('#nav-words').click(function(event) {
	/* Act on the event */
	$('html,body').animate({scrollTop:2980}, animateType);
});

$('#menu-home').click(function(event) {
	/* Act on the event */
	$('.cuo-menu').animate({'left':-100}, animateType);
	$('.navbar-right').css('display', 'block');
	// $(this).html('MENU');
	$('.cuo-mask').hide(animateType);
	
		$('.cuo-nav').css({
			borderBottom: 'none',
			background: 'none'

		});
		$(".cuo-nav-aa").css('cssText','color:#fff !important;');
	
	// 
	$('body').css('overflow', 'scroll');


	$('html,body').animate({scrollTop:0}, animateType);
});

$('#menu-about').click(function(event) {
	/* Act on the event */
	$('.cuo-menu').animate({'left':-100}, animateType);
	$('.navbar-right').css('display', 'block');
	// $(this).html('MENU');
	$('.cuo-mask').hide(animateType);
	
		$('.cuo-nav').css({
			borderBottom: '1px solid #ccc',
			background: 'none'
		});
		$(".cuo-nav-aa").css('cssText','color:#666 !important;');
	
	
	// 
	$('body').css('overflow', 'scroll');


	$('html,body').animate({scrollTop:750}, animateType);
});

$('#menu-products').click(function(event) {
	/* Act on the event */
	$('.cuo-menu').animate({'left':-100}, animateType);
	$('.navbar-right').css('display', 'block');
	// $(this).html('MENU');
	$('.cuo-mask').hide(animateType);
	
		$('.cuo-nav').css({
			borderBottom: '1px solid #ccc',
			background: 'none'
		});
		$(".cuo-nav-aa").css('cssText','color:#666 !important;');
	
	// 
	$('body').css('overflow', 'scroll');


	$('html,body').animate({scrollTop:1450}, animateType);
});

$('#menu-news').click(function(event) {
	/* Act on the event */
	$('.cuo-menu').animate({'left':-100}, animateType);
	$('.navbar-right').css('display', 'block');
	// $(this).html('MENU');
	$('.cuo-mask').hide(animateType);
	
		$('.cuo-nav').css({
			borderBottom: '1px solid #ccc',
			background: 'none'
		});
		$(".cuo-nav-aa").css('cssText','color:#666 !important;');
	
	// 
	$('body').css('overflow', 'scroll');


	$('html,body').animate({scrollTop:2250}, animateType);
});

$('#menu-words').click(function(event) {
	/* Act on the event */
	$('.cuo-menu').animate({'left':-100}, animateType);
	$('.navbar-right').css('display', 'block');
	// $(this).html('MENU');
	$('.cuo-mask').hide(animateType);
	
		$('.cuo-nav').css({
			borderBottom: '1px solid #ccc',
			background: 'none'
		});
		$(".cuo-nav-aa").css('cssText','color:#666 !important;');
	
	// 
	$('body').css('overflow', 'scroll');


	$('html,body').animate({scrollTop:2980}, animateType);
});

$('#menu-contact').click(function(event) {
	/* Act on the event */
	$('.cuo-menu').animate({'left':-100}, animateType);
	$('.navbar-right').css('display', 'block');
	// $(this).html('MENU');
	$('.cuo-mask').hide(animateType);
	
		$('.cuo-nav').css({
			borderBottom: '1px solid #ccc',
			background: 'none'
		});
		$(".cuo-nav-aa").css('cssText','color:#666 !important;');
	
	// 
	$('body').css('overflow', 'scroll');


	$('html,body').animate({scrollTop:3750}, animateType);
});















$('#h31').click(function() {
	$('.cuo-products-bar').animate({
		"width":"400px",
		"height":"250px",
	}, animateType);
	$('.cuo-products-bar img').animate({
		'left':'0px'
	}, animateType);
	$('.cuo-products-bar-2').animate({
		"top":"150px",
		// "height":"250px",
	}, animateType);
	$('.cuo-products-mask').animate({
		"width":"400px",
	}, animateType);
	// $(this).html('go back');
	$('#h32').css('display', 'block');
	$('#h31').css('display', 'none');
});
$('#h32').click(function(event) {
	/* Act on the event */
	$('.cuo-products-bar').animate({
		"width":"200px",
		"height":"300px",
	}, animateType);
	$('.cuo-products-bar img').animate({
		'left':'-100px'
	}, animateType);
	$('.cuo-products-bar-2').animate({
		"top":"-200px",
		// "height":"250px",
	}, animateType);
	$('.cuo-products-mask').animate({
		"width":"200px",
	}, animateType);
	$('#h32').css('display', 'none');
	$('#h31').css('display', 'block');
});



// $('.cuo-words-add').click(function(event) {
// 	 Act on the event 
// 	// addWords();
// 	$('#myModal').css('display', 'block');
// });

// function addWords(){
// 	$('.cuo-words-bar-container').append(cuo_words_bar);

// }


// news


var NEWS_LENGTH_TEP = 0;
$('.cuo-news-btn1').click(function(event) {
		/* Act on the event */
		// $scope
	if(NEWS_LENGTH_TEP == 0){
		NEWS_LENGTH_TEP = NEWS_LENGTH-1;
	}

	else{
		NEWS_LENGTH_TEP = NEWS_LENGTH_TEP -1;
	}
	var newsBar = "#cuo-news-bar" + (NEWS_LENGTH_TEP);
	var newsBarNext = "#cuo-news-bar" + (NEWS_LENGTH_TEP -1) ;
	if($(newsBarNext)){
		$(newsBar).animate({
			'opacity' : .5,
			'left':'-100%',
		}, animateType);
	}
	else{
		NEWS_LENGTH_TEP = NEWS_LENGTH_TEP + 1;
		alert('没有了');
		// console.log(newsBar);
	}
});
$('.cuo-news-btn2').click(function(event) {
		/* Act on the event */
		// $scope
	if(NEWS_LENGTH_TEP == NEWS_LENGTH){
		NEWS_LENGTH_TEP = NEWS_LENGTH-1;
	}
	var newsBar = "#cuo-news-bar" + (NEWS_LENGTH_TEP);
	
	if(newsBar){
	$(newsBar).animate({
			'opacity' : 1,
			'left':'0%',
		}, animateType);
		NEWS_LENGTH_TEP = NEWS_LENGTH_TEP + 1;
	}
	else{
		alert('没有了');
	}
		// console.log(newsBar);
});











// words
$('.cuo-words-btn2').click(function(event) {
	/* Act on the event */
	// alert('p');
	if(parseInt($('.cuo-words-bars').css('left')) >  -1* WORDS_RIGHT){
		var x = parseInt($('.cuo-words-bars').css('left'));
		// alert(x); 
		$('.cuo-words-bars').animate({
			'left': x- 1200 + 'px',
		},animateType);
	}
	else {
		// alert(WORDS_RIGHT);

	}
});
$('.cuo-words-btn1').click(function(event) {
	/* Act on the event */
	// alert('p');
	// alert(WORDS_LENGTH);
	if(parseInt($('.cuo-words-bars').css('left')) < 0){
		var x = parseInt($('.cuo-words-bars').css('left'));
	// alert(x); 
		$('.cuo-words-bars').animate({
			'left': x + 1200 + 'px',
		},animateType);
	}
	else{
		// alert('wrong');
		// $(this).bac
		// alert(WORDS_LENGTH);
	}

	
});





// nodes-alert
$('.cuo-notes-alert').click(function(event) {
	/* Act on the event */
	alert('Still working on this. Please wait and you will get your surprise.')
});