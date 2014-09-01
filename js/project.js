/*created by: Walter Beller-Morales*/

//removes all the border classes from the project section
function borderClear(){
	$("#project-nav-bar").find(".project-title").removeClass("project-title-border");
	$("#project-nav-bar").find(".project-preview").removeClass("project-preview-border");
	$("#project-nav-bar").find(".project-link").removeClass("project-link-border");
	$(".project-content").removeClass("project-content-border");
}

$(document).ready(function(){
	//preparing title page load animations by adding animation class
	$("#welcome h1").addClass("animated flipInX");
	$("#section-container").addClass("animated fadeInDown");

	//hides accordion elements on load
	//if javascript is disabled the elemets should be open by default 
	$("dd").hide();
	//hides project descriptions on load
	$(".project-description p:gt(0)").hide();

});

//changes the text on the welcome header depending on screen size
$(window).on("resize",function(){ 

	if($(window).width()<700){
		$("#welcome h1").html("Walter");
	}
	else{
		$("#welcome h1").html("Walter Beller-Morales");
	}
});

$(window).load(function(){

	var viewWidth = $(window).width();

	//on-load change to text on welcome header based on on screen size
	if(viewWidth<700){
		$("#welcome h1").html("Walter");
	}

	//animate welcome header and section container on load
	$("#welcome h1").show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$("#section-container").show();
		$("#tagline, footer").fadeIn(1200);
	});


	//accordion menu
	//on click shows each section and highlights section header
	$("#section-container").on("click", "dt", function(){

		if($(this).next("dd").is(":hidden")){
			$(this).children("span").removeClass("brackets").addClass("brackets-on");
			$(this).nextUntil("dt","dd").slideDown(1000);
		}
		else{
			$(this).children("span").removeClass("brackets-on").addClass("brackets");
			$(this).nextUntil("dt","dd").slideUp(1000);
		}
	});	

	//mousenter on project section adds border and changes content image
	$("#project-nav-bar").on("mouseenter",".project-link", function(){
			borderClear();

			//adds border class to each piece
			//border on project section is irregular and composed of 4 diffrent border sections
			$(this).toggleClass("project-link-border");
			$(this).children(".project-title").toggleClass("project-title-border");
			$(this).children(".project-preview").toggleClass("project-preview-border");
			$(".project-content").toggleClass("project-content-border");

			//animates project content using a lareg composite image and background positioning
			var computedPosition = ($(this).index()/($(this).length))*100;
			$(".project-content .img-roll").css({"background-position-y":computedPosition.toString()+"%"});

			//show correponding project description based on link index
			if($(".project-description p:eq("+$(this).index()+")").is(":visible") === false){
				$(".project-description p").hide();
				$(".project-description p:eq("+$(this).index()+")").fadeIn("slow");
			}
	});

	//removes border and highlighting on mouseleave from project section
	$("#project-container").mouseleave(borderClear);


});










