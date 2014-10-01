$(document).ready(function() {
	// Ajax page Request
	var fileName = "";
	var xhr = new XMLHttpRequest();
	$('.nav').click(function() {
		//Adding selected class
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
		fileName = $(this).text() + ".html";
		console.log(fileName);
		$('.main-content').load(fileName);
		
	});

	// SlideShow
	function Slider(){
		$('.slider #1').fadeIn(500);
		$('.slider #1').delay(5500).fadeOut(500);

		var sc = $('.slider img').size();
		console.log(sc);

		var count=2;

		setInterval(function () {
			$('.slider #'+count).fadeIn(500);
			$('.slider #'+count).delay(3000).fadeOut(500);

			if(count === sc){
				count = 1;
			}else{
				count = count +1;
			}
		},4000);
		
	}

	Slider();

	// Change image Text background color

	$('.products li').on({
		mouseenter:function(){
			$(this).children("p").css("background-color", "yellow");
		},mouseleave:function(){
			$(this).children("p").css("background-color","white");
		}
	});

	// $('.products li').on("mouseenter",function(){
	// 	$(this).children("p").css("background-color","yellow");
	// 	console.log("Mouse entered");
	// }).on("mouseleave",function(){
	// 	$(this).children("p").css("background-color","white");
	// });

	// xhr.onreadystatechange = function() {
	// 		$('.main-content').html(xhr.responseText);
	// 	};
	// 	xhr.open('GET',fileName);
	// 	xhr.send();

});