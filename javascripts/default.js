$(document).ready(function(){
	//Scroll To
	$("button, a.animated, nav.breadcrumb a").on("click", function(e){
		e.preventDefault();
        $("html, body").animate({
            scrollTop: $( $.attr(this, "rel") ).offset().top
        }, 500);
	});
	
	//Side Breadcrumb Navigation
	$("nav.breadcrumb a").on("click", function(e){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
	});
	
	//Fixing styling for touch devices
	 $("*").on('touchend', function(){
		 $(this).css({
			 backgroundColor: inherit,
			 color: inherit
		 });
	 });
	 
	 //Cancel click on Personal Prefenreces
	 $("#personal a").on("click", function(e){
		 e.preventDefault();
		 return false;
	 });
	 
	 // Tracking GA Goals
	 $("footer > a:last").on("click", function(e){
		e.preventDefault();
		var url = $(this).attr("href");
		ga("send", "event", "links", "click", "email", 1, {"hitCallback": function(){
			document.location = url;
		}});
		return false;
	 });		
	 
	 $("footer > a:first").on("click", function(e){
		e.preventDefault();
		var url = $(this).attr("href");		
		ga("send", "event", "links", "click", "phone", 1, {"hitCallback": function(){
			document.location = url;
		}});
		return false;
	 });
	 //
	 $("footer nav a").on("click", function(e){
		e.preventDefault();
		var url = $(this).attr("href");		
		ga("send", "event", "links", "click", "social", 1, {"hitCallback": function(){
			document.location = url;
		}});
		return false;
	 });
});

$(window).load(function(){
	$(".loader-canvas").animate({top: "-100%", opacity:0}, 500, function(){
		$(".loader-canvas, .loader").remove();
	});
});

//Check for Touch Devices
function isTouch(){
	return window.ontouchstart !== undefined;
}