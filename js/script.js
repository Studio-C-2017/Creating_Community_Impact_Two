const documentWidth = $(document).width();
const logoButton = document.querySelectorAll('.logo-button');
const logoButtonSmall = document.querySelectorAll('.small-logo');
const navUl = document.querySelectorAll('.nav-ul');


$(logoButton[0]).click(function () {

	$(navUl[0]).toggleClass('nav-ul-out');

});

$(logoButtonSmall[0]).click(function() {

	$(navUl[0]).toggleClass('nav-ul-out-small');

});

const leftArrow = document.getElementById('left-click');
const rightArrow = document.getElementById('right-click');
const videoSel = document.getElementsByClassName('vid-sel');

var j = -1;  // first click 0, second click 1;
var a = 0; // first click 1, second click 2;

function rightArrowClick() {

	j++;
	a++;
	videoSel[j].style.right = "100%";
	videoSel[a].style.right = "0%";
}

rightArrow.addEventListener('click', function() {

	rightArrowClick();

});

function leftArrowClick() {

	j--;
	a--;

	videoSel[j].style.right = "0%";
	videoSel[a].style.right = "-100%";
}


leftArrow.addEventListener('click', function() {

	leftArrowClick();

});
/*function leftArrowClick() {
	var a = j--;
	foodpopdis[a].style.marginLeft = "3.5%";
}

leftArrow.addEventListener('click', function() {

	leftArrowClick();

});*/




