$(function() {

    function scrollFunction() {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 100) {
                /*
                $("#main_nav").css({"background-color": "white"});
                $("#navbar-links").find("a").addClass("black");
                $("#main_nav").addClass("box-shadow");
                */
               $("#main_nav").addClass("sticky");
            } else {
                /*
                $("#main_nav").css({"background-color": "transparent"});
                $("#navbar-links").find("a").removeClass("black");
                $("#main_nav").removeClass("box-shadow");
                */
                $("#main_nav").removeClass("sticky");
            }
        });
    }

    function main() {
        $(document).ready(function(){

            /*! Fades in page on load */
            $('body').css('display', 'none');
            $('body').delay(500).fadeIn(1500);

            if(window.location.href.indexOf("whoweare") > -1) {
                var a = new TypeIt('#cfi', {
                    speed: 150
                })
                .type("WHO WE ARE");

                var b = new TypeIt('#tagline2', {
                    speed: 120,
                    loop: true
                })
                .type("SOCIAL GOOD.")
                .delete()
                .type("CHARITIES.")
                .delete()
                .type("NONPROFITS")
    
                setTimeout(function() {
                    a.go();
                }, 1500);

                setTimeout(function() {
                    b.go();
                }, 7000);
            } else {
                var a = new TypeIt('#cfi', {
                    speed: 150
                })
                .type("CODING FOR IMPACT");

                var b = new TypeIt('#tagline2', {
                    speed: 100,
                    loop: true
                })
                .type("SOCIAL GOOD.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("CHARITIES.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("NONPROFITS.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("POSITIVE CHANGE.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("WEBSITES WITHOUT A PRESENCE.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("MAKING A DIFFERENCE.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("BETTERING OUR COMMUNITY.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("BETTERING OUR SOCIETY.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
                .type("CHANGING OUR WORLD.", {delay:1500})
                .delete(null, {speed: 320, delay: 1000})
    
                setTimeout(function() {
                    a.go();
                }, 1500);

                setTimeout(function() {
                    $("#for").fadeIn()
                }, 6250);

                setTimeout(function() {
                    b.go();
                }, 6500);
        
                $("#tagline1").delay(5000).fadeIn(1000);
                $("#topCarousel").delay(7000).fadeIn(1000);
                $("#buttons").delay(9500).fadeIn(500);
            }
    
            });

            particlesJS.load('particles', '/assets/js/particles.json', function() {
                console.log('callback - particles.js config loaded');
              });
    }


    scrollFunction();
    main();
});