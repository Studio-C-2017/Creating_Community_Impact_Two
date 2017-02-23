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

function rightArrowClick() {

	if (j < 1) {	
		j++;
		videoSel[j].style.marginLeft = "-105%";
	} else {
		j = -2;
		videoSel[0].style.marginLeft = "0%";
	}
}

rightArrow.addEventListener('click', function() {

	alert(j);

	rightArrowClick();

});

/*b = j -1;
c = a;

function leftArrowClick() {

	videoSel[b].style.marginLeft = "0%";
	videoSel[c].style.marginLeft = "-100%";
}


leftArrow.addEventListener('click', function() {

	leftArrowClick();

});*/
/*function leftArrowClick() {
	var a = j--;
	foodpopdis[a].style.marginLeft = "3.5%";
}

leftArrow.addEventListener('click', function() {

	leftArrowClick();

});*/




