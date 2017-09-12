var arcAnimate = {
	easing: 'easeOutExpo',
	duration: 300,
};

var betaAnimate = {
	easing: 'easeInExpo',
	duration: 800,
}

function nhover(obj,num){
	if(num){
		
		
		$(obj).children('.n-board-mask').animate({
			"top":"0%",
			"height": "100%",
		}, arcAnimate);
		}
	else{
		$(obj).children('.n-board-content').children('img').attr('src', 'lib/images/cookery.png');
		$(obj).children('.n-board-mask').animate({
			"top":"50%",
			"height": "0%",
		}, arcAnimate);
	}
}

$('#n1').hover(function() {
	nhover(this,1);
	$(this).children('.n-board-content').children('p').css('color', '#fff');
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/cookery-x.png');

}, function() {
	nhover(this,0);
	$(this).children('.n-board-content').children('p').css('color', '#f96');	
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/cookery.png');
});

$('#n2').hover(function() {
	nhover(this,1);
	$(this).children('.n-board-content').children('p').css('color', '#fff');
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/coding-x.png');

}, function() {
	nhover(this,0);
	$(this).children('.n-board-content').children('p').css('color', '#4990E2');	
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/coding.png');
});

$('#n3').hover(function() {
	nhover(this,1);
	$(this).children('.n-board-content').children('p').css('color', '#fff');
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/pains-x.png');

}, function() {
	nhover(this,0);
	$(this).children('.n-board-content').children('p').css('color', '#90f');	

	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/pains.png');
});

$('#n4').hover(function() {
	nhover(this,1);

	$(this).children('.n-board-content').children('p').css('color', '#fff');
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/travel-x.png');

}, function() {
	nhover(this,0);
	$(this).children('.n-board-content').children('p').css('color', '#093');	
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/travel.png');
});

$('#n5').hover(function() {
	nhover(this,1);
	$(this).children('.n-board-content').children('p').css('color', '#fff');
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/mylove-x.png');

}, function() {
	nhover(this,0);
	$(this).children('.n-board-content').children('p').css('color', '#c01');	
	$(this).children('.n-board-content').children('img').attr('src', 'lib/images/mylove.png');
});




// click
$("#n1").click(function(event) {
	/* Act on the event */
	$(".n-board-bar").css('display', 'none');
	$(this).css('display', 'block').animate({
		"width":"100%",
	}, arcAnimate).animate({
		"height":"0",
	}, arcAnimate);
	$(".n-cookery").delay(600).animate({
		"top":"0%",
	}, arcAnimate);

});

$(".n-cookery-title p").click(function(event) {
	/* Act on the event */
	$(".n-board-bar").css('display', 'inline-block');
	$("#n1").animate({
		"width":"18%",
	}, arcAnimate).animate({
		"height":"80%",
	}, arcAnimate);
	$(".n-cookery").animate({
		"top":"100%",
	}, arcAnimate);
});
