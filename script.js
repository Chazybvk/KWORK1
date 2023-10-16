var prev = document.querySelector('.previous');
var next = document.querySelector('.next');
var first = document.querySelector('.sliderImage:nth-child(1)');
var second = document.querySelector('.sliderImage:nth-child(2)');
var third = document.querySelector('.sliderImage:nth-child(3)');



var itterationCount = 2;
	
	function changeCount(){
		if (itterationCount < 1) {
			itterationCount = 3;
		}
		else if (itterationCount > 3) {
			itterationCount = 1;
		}
		else {
			itterationCount = itterationCount;
		}
		count();
	}

function count(){
	if (itterationCount == 1) {
		first.style = "transform: translateX(0%);";
		first.style.scale = "1";
		first.style.zIndex = "2";
        first.style.opacity = "1";
		second.style = "transform: translateX(100%);";
		second.style.scale = "0.8";
		second.style.zIndex = "1";
        second.style.opacity = "0";
		third.style = "transform: translateX(200%);";
		third.style.scale = "0.8";
		third.style.zIndex = "1";
        third.style.opacity = "0";
	}
	else if (itterationCount == 2) {
		first.style = "transform: translateX(-100%);";
		first.style.scale = "0.8";
		first.style.zIndex = "1";
        first.style.opacity = "0";
		second.style = "transform: translateX(0%);";
		second.style.scale = "1";
		second.style.zIndex = "2";
        second.style.opacity = "1";
		third.style = "transform: translateX(100%);";
		third.style.scale = "0.8";
		third.style.zIndex = "1";
        third.style.opacity = "0";
	}
	else if (itterationCount == 3) {
		first.style = "transform: translateX(-200%);";
		first.style.scale = "0.8";
		first.style.zIndex = "1";
        first.style.opacity = "0";
		second.style = "transform: translateX(-100%);";
		second.style.scale = "0.8";
		second.style.zIndex = "1";
        second.style.opacity = "0";
		third.style = "transform: translateX(0%);";
		third.style.scale = "1";
		third.style.zIndex = "2";
        third.style.opacity = "1";
	}
}


function previousSlide(){
	itterationCount = itterationCount -1;
	changeCount();
}	

function nextSlide(){
	itterationCount = itterationCount +1;
	changeCount();
}

prev.addEventListener('click', function () {
	previousSlide();
}
);

next.addEventListener('click', function () {
	nextSlide();
}
);

count();

