$(function(){
	var slides = $(".slideShow>li")
	var slideCount = 0
	var totalSlides = slides.length
	var arrayImages =[]

function loadImages(){
	if(slideCount<totalSlides) {
		arrayImages[slideCount] = new Image();
		arrayImages[slideCount].src = slides.eq(slideCount).find("img").attr("src");
		arrayImages[slideCount].onload = function() {
			slideCount++;
			loadImages();
		} 
	} else {
			slideCount = 0;
			slideShow();
	}
}

//Calling a function in a function = recursive programming

function slideShow() {
	slides.eq(slideCount).fadeIn(1000).delay(2000).fadeOut(1000, function(){
		//Ternary operators
		slideCount<totalSlides-1 ? slideCount++ : slideCount = 0;
		slideShow();

	})
}

loadImages();
})
