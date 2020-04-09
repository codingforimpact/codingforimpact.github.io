(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          dots:false
      },
      767:{
          items:1,
          dots:false
      },
      992:{
          items:1
      }
  }
});
// review-active
$('.help_slider_active').owlCarousel({
  loop:true,
  margin:30,
  items:1,
  autoplay:true,
  navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  nav:false,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:2
      },
      992:{
          items:2
      },
      1200:{
          items:2
      },
      1500:{
          items:2
      }
  }
});

// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

  if ($("#cfi").attr("typed-section") === "ourWork") {
     /* // Typing animation
    var a = new TypeIt('#cfi', {
      speed: 80
    })
    .type("OUR WORK");

    setTimeout(function() {
      a.go();
  }, 1000);*/
  } else {
    /*
      // Typing animation
    var a = new TypeIt('#cfi', {
      speed: 50
    })
    .type("CODING FOR IMPACT");

    setTimeout(function() {
      a.go();
  }, 1000);
  */
  }

  if ($("#tagline2_encompass").length) {
    particlesJS.load('particles', 'js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    }); 
    var options = {
      strings: ['CODING FOR IMPACT'],
      typeSpeed: 80,
      onStringTyped: function() {
        return $("#cfi").siblings('.typed-cursor').remove();
      }
    };

    var options2 = {
      strings: ["SOCIAL GOOD.", "CHARITIES.", "NONPROFITS.", "POSITIVE CHANGE.", 
                "WEBSITES WITHOUT A PRESENCE.", "MAKING A DIFFERENCE.", "BETTERING OUR COMMUNITY.",
                "BETTERING OUR SOCIETY.", "CHANGING OUR WORLD."],
      typeSpeed: 80,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    }
    
    var typed = new Typed('#cfi', options);
    var typed2 = new Typed('#tagline2', options2);
    /*
    var b = new TypeIt('#tagline2', {
      speed: 70,
      loop: true
    })

    .type("SOCIAL GOOD.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("CHARITIES.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("NONPROFITS.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("POSITIVE CHANGE.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("WEBSITES WITHOUT A PRESENCE.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("MAKING A DIFFERENCE.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("BETTERING OUR COMMUNITY.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("BETTERING OUR SOCIETY.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000})
    .type("CHANGING OUR WORLD.", {delay:1500})
    .delete(null, {speed: 200, delay: 1000});

    SOCIAL GOOD., CHARITIES., NONPROFITS., POSITIVE CHANGE., WEBSITES WITHOUT A PRESENCE., MAKING A DIFFERENCE., BETTERING OUR COMMUNITY., BETTERING OUR SOCIETY., CHANGING OUR WORLD. 

    setTimeout(function() {
        b.go();
    }, 6000);*/

    $("#tagline2_encompass").delay(5000).fadeIn(1000);
  }

  if  ($("#tagline1").attr("typed-section") === "ourWork" && $("#learn").attr("typed-section") == "ourWork") {
    $("#tagline1").delay(3500).fadeIn(1000);
    $("#learn").delay(5000).fadeIn(1000);
  } else {
    $("#tagline1").delay(3000).fadeIn(1000);
    $("#learn").delay(7000).fadeIn(1000);
  }

  var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
  var is_chrome = !!window.chrome && !is_opera && !is_Edge;
  var is_explorer= typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
  var is_firefox = typeof window.InstallTrigger !== 'undefined';
  var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if(!is_chrome) {
    $(".slider_area").css({"background-attachment": "scroll"});
  }
});
//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



// Search Toggle
$("#search_input_box").hide();
$("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
});
$("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
});
// Search Toggle
$("#search_input_box").hide();
$("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".hideme").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom + 100) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

})(jQuery);	