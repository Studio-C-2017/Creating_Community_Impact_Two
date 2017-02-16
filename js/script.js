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


$(document).ready(function() {

	$("#left-click").click(function() {

		$("#vid-one").animate({

			left: "0%",

		}, 200);

		$("#vid-two").animate({

			right: "-100%",

		}, 200);

		$("#right-click").css("opacity", "0.5");

		$("#left-click").css("opacity", "1");

	});

	$("#right-click").click(function() {

		$("#vid-two").animate({

			right: "0%",

		}, 200);

		$("#vid-one").animate({

			left: "-100%",

		}, 200);

		$("#left-click").css("opacity", "0.5");

		$("#right-click").css("opacity", "1");

	});

});


