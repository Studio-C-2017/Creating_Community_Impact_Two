$(document).ready(function(){

	$(".logo-button").click(function(){

		$(".logo-button").animate({

			right: "-5em",

		}, 200);

		$(".nav-ul").animate({
			
			right: "-5px",

		}, 200);

		$(".button").animate({

			right: "0em",

		}, 200);

	});

	$(".button").click(function() {

		$(".button").animate({

			right: "5em",

		}, 200);

		$(".nav-ul").animate({

			right: "-45%",

		}, 200);

		$(".logo-button").animate({

			right: "1em",

		}, 200);

	});

	$(".small-logo").click(function() {

		$(".nav-ul").animate({

			right: "-5px",

		}, 200);

		$(".small-logo").animate({

			right: "-3em",

		}, 200);

		$(".small-button").animate({

			right: "0em",

		}, 200);

	});

	$(".small-button").click(function() {

		$(".nav-ul").animate({

			right: "-125%",

		}, 200);

		$(".small-logo").animate({

			right: "0.5em",

		}, 200);

		$(".small-button").animate({

			right: "3em",

		}, 200);

	});

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
