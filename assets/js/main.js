$(function() {

    function scrollFunction() {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 200) {
                $("#main_nav").css({"background-color": "white", "position": "fixed"});
                $("#navbar-links").find("a").addClass("black");
            } else{
                $("#main_nav").css({"background-color": "transparent"});
                $("#navbar-links").find("a").removeClass("black");
            }
        });
    }

    function main() {
        $(document).ready(function(){
            scrollFunction();

            /*! Fades in page on load */
            $('body').css('display', 'none');
            $('body').delay(500).fadeIn(1500);

            if(window.location.href.indexOf("whoweare") > -1) {
                var a = new TypeIt('#cfi', {
                    speed: 150
                })
                .type("WHO WE ARE");
    
                setTimeout(function() {
                    a.go();
                }, 1500);
        
                $("#tagline1").delay(5000).fadeIn(1000);
                $("#tagline2").delay(7000).fadeIn(1000);
                $("#buttons").delay(8500).fadeIn(500);
            } else {
                var a = new TypeIt('#cfi', {
                    speed: 150
                })
                .type("CODING FOR IMPACT");
    
                setTimeout(function() {
                    a.go();
                }, 1500);
        
                $("#tagline1").delay(5000).fadeIn(1000);
                $("#tagline2").delay(7000).fadeIn(1000);
                $("#buttons").delay(8500).fadeIn(500);
            }
    
            });
    }



    main();
});