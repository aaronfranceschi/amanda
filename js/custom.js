//FIXED NAVBAR
$(window).scroll(function(){
	if($(window).width() > 991) {
		if($(window).scrollTop() > 50) {
			$('.navbar').addClass('navbar-offset');
			$('.navbar').removeClass('navbar-static-top');
			$('.navbar').addClass('navbar-fixed-top');
			$('body').css("padding-top","70px");
		}
		else {
			$('.navbar').removeClass('navbar-offset');
			$('.navbar').removeClass('navbar-fixed-top');
			$('.navbar').addClass('navbar-static-top');
			$('body').css("padding-top","0px");
		}
	}
	
	else {
		if($(window).scrollTop()) {
			$('.navbar').addClass('navbar-offset');
			$('.navbar').removeClass('navbar-static-top');
			$('.navbar').addClass('navbar-fixed-top');
			$('body').css("padding-top","40px");
		}
		else {
			$('.navbar').removeClass('navbar-offset');
			$('.navbar').removeClass('navbar-fixed-top');
			$('.navbar').addClass('navbar-static-top');
			$('body').css("padding-top","0px");
		}
	}
});


$(document).ready(function() {	
	//NAVBAR
	$('.navbar-main-menu > li.dropdown').mouseenter(function() {
		$(this).addClass('open');
	});
	
	$('.navbar-main-menu > li.dropdown').mouseleave(function() {
		$(this).removeClass('open');
	});
	
	var minimum = 1250;
	var maximum = 1500;
	
	$( "#slider-range" ).slider({
      range: true,
      min: minimum,
      max: maximum,
      values: [ minimum, maximum ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] );
		$( "#amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
	$( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));
		
	//SCROLLING
	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - 110}, 1000, function(){window.location.hash = hash;});
	});
	
	//TOOLTIP
	$('.tooltip-init').tooltip();
	
	//POPOVER
	$('.popover-init').popover();
	
	//PORTFOLIO - ISOTOPE
	var $container = $('.portfolio-wrapper');
	$container.isotope({
	  	itemSelector: '.portfolio-item',
	});
	
	$('.portfolio-filter li a').click(function(e) {
		$('.portfolio-filter li a').removeClass('active');
		$(this).addClass('active');
		
        var category = $(this).attr('data-filter');
		$container.isotope({
			filter: category
		});
    });
	
	//FORM TOGGLE
	$('#reset-password-toggle').click(function() {
        $('#reset-password').slideToggle(500);
    });
	
	//ESHOP TOGGLE
	$(".addtocart").click(function() {
        $("#eshop-cart-alert").toggleClass("active");
    });
	
	$("#eshop-cart-alert .close").click(function() {
        $("#eshop-cart-alert").toggleClass("active");
    });
	
	$('#billing-address-toggle').click(function() {
        $('#billing-address').slideToggle(500);
    });	
		
	//MAGNIFIC POPUP
	$('.show-image').magnificPopup({type:'image'});
		
	//OWL CAROUSEL
	$("#section-partners #partners-slider").owlCarousel({
		autoPlay: 3000,
		pagination : false,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2]
  	});
		
	$("#jumbotron-slider").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		pagination : true,
		transitionStyle : "true",
		autoPlay: 5000,
		slideSpeed : 500,
		navigationText : ["<i class='fa fa-angle-left'>22</i>","<i class='fa fa-angle-right'>33</i>"]
  	});
	
	$("#about-slider").owlCarousel({
		autoPlay: 5000, 
		singleItem : true
  	});
	
	$("#jumbotron-eshop-slider").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		transitionStyle : "fade",
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#eshop-slider").owlCarousel({
		autoPlay: 5000, 
		scrollPerPage : true,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2]
  	});
	
	$('#eshop-slider .item img').mouseenter(function(e) {
		var source = $(this).attr("src");
		$("#product-detail-image").attr("src",source);
		$("#product-detail-image-link").attr("href",source);
    });
	
	$("#portfolio-slider").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		slideSpeed : 500,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#about-us-slider").owlCarousel({
		autoPlay: 5000, 
		singleItem : true,
		/*transitionStyle : "fade"*/
  	});
    
	$("#text-highlight-slider").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		pagination : false,
        singleItem: true
		
  	});
    
    
    $("#desktop-highlight-slider").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		pagination : false,
        singleItem: true,
       lazyLoad : true,
        
		
  	});
    
     $("#ipad-highlight-slider").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		pagination : false,
        singleItem: true,
         lazyLoad : true,
		
  	});
    
    $("#mobile-highlight-slider").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		pagination : false,
        singleItem: true,
         lazyLoad : true,
		
  	});
    
    
	
	$("#testimonials-slider").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		transitionStyle : "fadeUp"
  	});
	
		$("#testimonials-slider1").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		transitionStyle : "fadeUp"
  	});
	
	$("#features-default-carousel #owl-carousel-default").owlCarousel({
		autoPlay: 5000, 
		navigation : true,
		singleItem : true,
		slideSpeed : 500,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#features-fade-carousel #owl-carousel-fade").owlCarousel({
		autoPlay: 5000, 
		navigation : false,
		singleItem : true,
		pagination : false,
		transitionStyle : "fade",
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
    
    $("#features-fade-carousel-footer #owl-carousel-fade-footer").owlCarousel({
		autoPlay: 5000, 
		navigation : false,
		singleItem : true,
		pagination : false,
		transitionStyle : "fade",
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
	$("#features-owl-carousel #carousel-wrapper").owlCarousel({
		autoPlay: 3000, 
		items : 4,
		pagination : false,
		stopOnHover : true,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2],
		
  	});
	
	//OWL CAROUSEL - HIDDEN CONTROLS
	$(".owl-carousel.hidden-control").mouseenter(function(e) {
		$(this).find(".owl-prev").animate({opacity:1,left:"20px"});
		$(this).find(".owl-next").animate({opacity:1,right:"20px"});
    });
	
	$(".owl-carousel.hidden-control").mouseleave(function(e) {
		$(this).find(".owl-prev").animate({opacity:0,left:"40px"});
		$(this).find(".owl-next").animate({opacity:0,right:"40px"});
    });
    
    
    
    /*
 ----------------------------------------------------------------------
 Magnific Popup
 ----------------------------------------------------------------------
 */

$(document).ready(function(){

    "use strict";

    /*
     ----------------------------------------------------------------------
     Portfolio
     ----------------------------------------------------------------------
     */
    $('.popup-gallery').magnificPopup({
        delegate: ".popup-content",
        type: 'inline',
        midClick: true,
        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [0,2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }


    });


    $("#portfolio-grid .port-item-cont").on("click", function(){
        $("#portfolio-grid .port-item-cont").removeClass("touch");
        $(this).addClass("touch");
    });

    $(".mfp-close").on("click", function(){
        $("#portfolio-grid .port-item-cont").removeClass("touch");
    });

    $(".portfolio li").on("click", function() {
        $(".portfolio li").removeClass("active");
        $(this).addClass("active");
    });



    $(".portfolio-item").each(function(i) {
        $(this).find("a.view-work").attr("href", "#work-" + i);
        $(this).find(".podrt-desc").attr("id", "work-" + i);
    });


}); // End $(document).ready(function(){


$(document).ready(function () {
    var xH
    $('.executeart-popup').hover(
    function () {
        xH = $(this).children("img").css("height");
        xH = parseInt(xH);
        xH = xH - 300;
        xH = "-" + xH + "px";
        $(this).children("img").css("top", xH);
    }, function () {
        $(this).children("img").css("top", "0px");
    });
});
	
		
});



/***client slider***/
	
		$(window).load(function() { 
				
			/* basic - default settings */
				$('.str1').liMarquee();
				
				/* some custom settings */
				$('.str2').liMarquee({
					direction: 'left',	
					loop:-1,			
					scrolldelay: 500,	
					scrollamount:90,	
					circular: false,
					hoverstop:false,	
					drag: false			
				});
				
				$('.str3').liMarquee({
					direction: 'left',	
					loop:-1,			
					scrolldelay: 0,		
					scrollamount:80,	
					circular: true,		
					drag: true	,
				});
				
				$('.str3-2').liMarquee({
					direction: 'left',	
					loop:-1,			
					scrolldelay: 0,		
					scrollamount:120,	
					circular: true,		
					drag: true			
				});
				
				$('.str4').liMarquee({
					direction: 'up',	
					loop:-1,			
					scrolldelay: 0,		
					scrollamount:30,	
					circular: true,		
					drag: true			
				});
				
				$('.str5').liMarquee({
					direction: 'down',	
					loop:-1,			
					scrolldelay: 0,		
					scrollamount:30,	
					circular: true	,	
					drag: false			
				});
				
				$('.str6').liMarquee({
					direction: 'up',	
					loop:-1,			
					scrolldelay: 0,		
					scrollamount:30,	
					circular: false	,	
					drag: true,			
					runshort:false		
				});
				
				
				$('.str8').liMarquee({
					direction: 'down',	
					loop:-1,			
					scrolldelay: 0,		
					scrollamount:30,	
					circular: false	,	
					drag: true			
				});
				
				$('.str9').liMarquee({
					direction: 'right'	
				});
				
			})
		
		/***end***/