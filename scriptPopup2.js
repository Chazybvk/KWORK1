var popup2 = document.querySelector('.popup2');
var popup_content2 = document.querySelector('.popup_content2');
var popup_open2 = document.querySelectorAll('.popup_open2');
var popup_close2 = document.querySelectorAll('.popup_close2');

function showPopUp2(){

popup2.style.opacity = "1";
popup2.style.visibility = "visible";
popup2.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
popup_content2.style.opacity = "1";
popup_content2.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
};


function closePopUp2(){
popup2.style.opacity = "0";
popup2.style.visibility = "hidden";
popup2.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
popup_content2.style.opacity = "0";
popup_content2.style.transform = "matrix(-1, 0, 0, 1, 0, 0)";	
};

popup_open2.forEach((item)=>{
    item.addEventListener('click', function () {
        showPopUp2();
        setTimeout(() => closePopUp2(), 1000);
    }
    );
    });

popup_close2.forEach((item)=>{
        item.addEventListener('click', function () {
            closePopUp2();
        }
        );
        });


