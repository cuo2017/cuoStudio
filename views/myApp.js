// var fs =require('fs');
var PIC1;
var PIC2;
var WORDS_LENGTH;
var WORDS_HEIGHT = [];
var WORDS_RIGHT;
var NEWS_LENGTH;
var NEWS_START = 0;
var NEWS_BAR = [{
	"id" : String,
}];


var COLOR = [
	"#4990E2",//蓝色
	"#FF3333",//红色
	"#9900FF",//紫色
	"#FF9900",//橙色
]
var admin = angular.module('admin',[]);
admin.controller('adminController', function($scope, $http){
	// use API


	$scope.uAbout = function(content){
		$http.post('/uAbout', content);
	};
	$scope.uPro = function(content){
		$http.post('/uPro', content);
	};
	$scope.uNews = function(content){
		$http.post('/uNews', content);
	};



	$scope.gStudio = function(){
		$scope.gAbout();
		$scope.gPro();
		$scope.gNews();
		$scope.gWords();
	};


	$scope.gAbout = function(){
		$http.get('/gAbout').then(function(data){
			$scope.about = data.data;
			// console.log($scope.about[0].content);
		});
	};
	$scope.gPro = function(){
		$http.get('/gPro').then(function(data){
			$scope.pro = data.data;
			// console.log($scope.pro[0].content);
		});
	};
	$scope.gNews = function(){
		$http.get('/gNews').then(function(data){
			$scope.news = data.data;
		});
	}
	$scope.gWords = function(){
		$http.get('/gWords').then(function(data){
			$scope.words = data.data;
		});
	}

	// EVENTS

	$scope.gStudio();

	$("#home").click(function(event) {
		/* Act on the event */

		var content1 = {
			"type" : 'about',
			"content" :$('#textarea1').val(),
		};
		var content2 = {
			"type": "pro",
			"title" : $('#typeahead').val(),
			"content" : $('#textarea2').val(),
			"img": PIC1,
		}
		// if(content2.img == PIC1){
		// 	console.log("yes");
		// }

		if(($('#textarea2').val() == "" || $('#typeahead').val() == "" || PIC1 == "" )&& $('#textarea1').val() != ""){
			
			alert('仅上传ABOUT');
			$scope.uAbout(content1);

		}
		else if(($('#textarea2').val() != "" || $('#typeahead').val() != "" || PIC1 != "" )&& $('#textarea1').val() == ""){
			alert('仅上传Products');
			$scope.uPro(content2);
		}
		else if($('#textarea2').val() != "" && $('#typeahead').val() != "" && PIC1 != "" && $('#textarea1').val() != ""){
			alert('上传ABOUT,PRODUCTS成功');
			$scope.uAbout(content1);
			$scope.uPro(content2);
		}
		else{
			alert('Content is not finished;')
		}

		// $scope.uAbout(content1);

		$('#textarea1').val("");
		$('#textarea2').val("");
		$('#typeahead').val("");
		$('#result img').attr("src",'');
	});

	$("#func").click(function(event) {
		/* Act on the event */
		var i = Math.floor(4*Math.random());
		var content3 = {
			"type" : "news",
			"title" : $('#typeahead2').val(),
			"content" : $('#textarea3').val(),
			"img": PIC2,
			"color": COLOR[i],
		}
		// $scope.uNews(content3);

		if($('#textarea3').val() == null || $('#typeahead2').val() == null || PIC2 == null){
			alert('请完成所有内容的上传');
		}
		else{
			$scope.uNews(content3);
		}
		$('#textarea3').val("");
		$('#typeahead2').val("");
		$('#result2 img').attr("src",'');
	});



// $('#test').click(function(event) {
// 		 Act on the event 
// 		// console.log(PIC1);;
// 	});



	$scope.base64 = function(files){
    	var file = files[0];
   	 	var reader = new FileReader();
    	reader.readAsDataURL(file);
    	reader.onload = function(theFile) {
        // console.log(theFile.target.result) //base64编码
        // $("#fileInput1").val(theFile.target.result); 
    		PIC1 = theFile.target.result;
    	// result.innerHTML='<img src="'+this.result+'" alt=""/>' ;
    		$('#result img').attr('src', PIC1);
    	// $('#result').html('<img src="'+PIC1+'" alt=""/>');
    	};
	}

	$scope.base642 = function(files){
    	var file = files[0];
    	var reader = new FileReader();
    	reader.readAsDataURL(file);
    	reader.onload = function(theFile) {
        // console.log(theFile.target.result) //base64编码
        // $("#fileInput1").val(theFile.target.result); 
    		PIC2 = theFile.target.result;
    	// result.innerHTML='<img src="'+this.result+'" alt=""/>' ;
    		$('#result2 img').attr('src', PIC2);
    	// $('#result').html('<img src="'+PIC1+'" alt=""/>');
    	};
	}
 
});



















var cyh = angular.module('cyh',[]);

cyh.controller('cyhController', function($scope, $http){


	// console.log('123');
	
	


	// use API
	$scope.gStudio = function(req,res,next){
		$http.get('/gAbout').then(function(data){
			$scope.about = data.data;
		});
		$http.get('/gPro').then(function(data){
			$scope.pro = data.data;
			$('.cuo-products-bars img').attr('src', $scope.pro[0].img);

		});
		$scope.gNews();
		$scope.gWords(0);

	}

	$scope.gNews = function(){
		$http.get('/gNews').then(function(data){
			getNews(data);
		});

	}

	$scope.gWords = function(index){
		if(index){
			$http.get('/gWords').then(function(data){
				getWordEasy(data);
			});
		}
		else{
			$http.get('/gWords').then(function(data){
				getWord(data);
			});
		}

	}

	$scope.aWords = function(content){
		$http.post('/aWords',content);
	}



// 监听repeat
	$scope.completeRepeat = function(){
		alert('1');
	};



	//functions

	function getNews(data){
		$scope.news = data.data;
		NEWS_LENGTH = data.data.length;
		for(y in $scope.news){
			$scope.news[y].date = moment($scope.news[y].date).format('llll');
			$scope.news[y].id = y; 
		}
		// console.log($scope.news);
	}
		
	var firstRow = [5];

	function getWord(data){
		var html  = '<div class="cuo-words-bar"><h1>{{x.words}}</h1><h2></h2><p>by @{{x.name}}</p></div>';

		$scope.words = data.data;
		WORDS_LENGTH = data.data.length;
		var barHeight = [];
		for(x in $scope.words){
			$scope.words[x].date = moment($scope.words[x].date).format('llll');
			$('.cuo-words-bar-container').append(html);
			// console.log(x);
			// console.log($('.cuo-words-bar-container').children('div')[x]);
			var a = $('.cuo-words-bar-container').children('div');
			var y = $('.cuo-words-bar-container').children('div')[x];
			$(y).css('background', $scope.words[x].color);
			$(y).children('h1').html($scope.words[x].words);
			$(y).children('p').html("by@"+$scope.words[x].name);
			$(y).children('h2').html($scope.words[x].date);
			barHeight[x] = $(y).outerHeight();

			if(x < 5){
				firstRow[x] = barHeight[x];
			}
			else{
				var j = x % 5;
				var minHeight = Math.min.apply(null, firstRow);
				var index;
				for(var i in firstRow){
					if(firstRow[i] == minHeight){
						index = i;
					}
				}
				$(y).css('position', 'absolute');
				$(y).css('top', minHeight+30);
				$(y).css('left',$(a[index]).get(0).offsetLeft -5 );
				firstRow[index] = minHeight +10+ $(y).outerHeight();

			}

		}

	}



	function getWordEasy(data){
		var html  = '<div class="cuo-words-bar"><h1>{{x.words}}</h1><h2></h2><p>by @{{x.name}}</p></div>';

		$scope.words = data.data;
		WORDS_LENGTH = data.data.length;
		var barHeight = [];
		var x = WORDS_LENGTH-1;
		// for(x in $scope.words){
			$scope.words[x].date = moment($scope.words[x].date).format('llll');
			$('.cuo-words-bar-container').append(html).after(function(){
				// console.log('zhixingl');
			})
			console.log($('.cuo-words-bar-container'));
			// console.log($('.cuo-words-bar-container').children('div')[x]);
			var a = $('.cuo-words-bar-container').children('div');
			var y = $('.cuo-words-bar-container').children('div')[x];
			$(y).css('background', $scope.words[x].color);
			$(y).children('h1').html($scope.words[x].words);
			$(y).children('p').html("by@"+$scope.words[x].name);
			$(y).children('h2').html($scope.words[x].date);
			barHeight[x] = $(y).outerHeight();

			if(x < 5){
				firstRow[x] = barHeight[x];
			}
			else{
				var minHeight = Math.min.apply(null, firstRow);
				var index;
				for(var i in firstRow){
					if(firstRow[i] == minHeight){
						index = i;
					}
				}
				$(y).css('position', 'absolute');
				$(y).css('top', minHeight+30);
				$(y).css('left',$(a[index]).get(0).offsetLeft -5 );
				firstRow[index] = minHeight +10+ $(y).outerHeight();
				// console.log($(y).outerHeight());
			}

		// }

	}


	











	// EVENTS

	$scope.gStudio();

// news
	
// words
	$('#modal-save').click(function(event) {
		/* Act on the event */
		var i = Math.floor(4*Math.random());
		var content = {
			"type": "words",
			"words": $('#modal-input-words').val(),
			"name": $('#modal-input-name').val(),
			"color": COLOR[i], 
		};
		if($('#modal-input-words').val() == "" || $('#modal-input-name').val() == ""){
			alert("Content cannot be null.");
		}
		else{
			$scope.aWords(content);
			$scope.gWords(1);
		}
		

	});

// console.log(NEWS_BAR);
	// alert($scope.news);


	


	
// 渲染完毕

//  $scope.repeatDone = function(){
//         console.log('ng-repeat完成，我要开始搞事情了！！！');
// 　　　　 //执行自己要执行的事件方法
// 		var a = [];
// 		a = $('.cuo-words-bar-container').children('div');
// 		// $(a[0]).css('position', 'absolute');
// 		// for(var i = 0;i< a.length; i++ ){
// 			// $(a[i]).css('position', 'absolute');
// 		// }
// 		console.log($(a[0]).outerHeight());
// 		console.log($(a[6]).get(0).offsetHeight);
// 		console.log($(a[2]).css('height'));
// 		$(a[6]).hide();
// 		// $(a[0]).css('height', b);
// 		// for(var i = 0;i< a.length; i++ ){
// 		// 	console.log($(a[i]).outerHeight());
// 		// }
//     }
// 操作ng-repeat
	

});


// cyh.directive('repeatFinish',function(){
//     return {
//         link: function(scope,element,attr){
//             // console.log(scope.$index);
//             if(scope.$last == true){
//                 scope.$eval( attr.repeatFinish );
//             }
//         }
//     }
// })







