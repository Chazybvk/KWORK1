
var popup1 = document.querySelector('.popup1');
var popup_content1 = document.querySelector('.popup_content1');
var popup_open1 = document.querySelector('.popup_open1');
var popup_close1 = document.querySelector('.popup_close1');

function showPopUp1(){

popup1.style.opacity = "1";
popup1.style.visibility = "visible";
popup1.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
popup_content1.style.opacity = "1";
popup_content1.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
};


function closePopUp1(){
popup1.style.opacity = "0";
popup1.style.visibility = "hidden";
popup1.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
popup_content1.style.opacity = "0";
popup_content1.style.transform = "matrix(-1, 0, 0, 1, 0, 0)";	
};

popup_open1.addEventListener('click', function () {
	showPopUp1();
    setTimeout(() => closePopUp1(), 4000);
}
);
popup_close1.addEventListener('click', function () {
	closePopUp1();
}
);


