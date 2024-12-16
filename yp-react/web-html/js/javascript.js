$(document).ready(function(){
    setInterval(function(){
        AOS.init();
    }, 100);

    var path = window.location.href;
    var link = $("header .headerBottom ul>li>a");
     link.each(function(){
        if(this.href === path){
            $(this).addClass("active");
        }
    });

    $('.testimonialSlider').owlCarousel({
        loop: true,
        autoplay:true,
        margin:30,
        items:1,
        nav: true,
        dots:false,
        navText: ['<i class="icon">&#xf178;</i>','<i class="icon">&#xf178;</i>'],
        responsiveClass:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0:   {item: 1},
            576: {items: 2},
            992: {items: 3},
        },
    });



    // $(window).on("load scroll", function() {    
    //     if ($(window).scrollTop() >= 50) {
    //         $("header").addClass("active");
    //         $("body > .top").fadeIn().css("display", "flex");
    //     } else {
    //         $("header").removeClass("active");
    //         $("body > .top").fadeOut();
    //     }
    // });
    $("body > .top").click(function(){
        $("html, body").animate({ scrollTop: "0" }, 500, "linear"); 
    });



    $("header .headerMiddle .menu").click(function(){
        $("header .headerBottom").fadeIn(500);
        $("i.top").fadeOut();
        $("header .headerBottom .container").animate({
            left:"100%",
        }, 500);
        $("body").css("overflow", "hidden");
    });
    $("header .headerBottom .logoClose .icon").click(function(){
        $("header .headerBottom").fadeOut(500);
        $("i.top").fadeIn();
        $("header .headerBottom .container").animate({
            left:"-100%",
        }, 500);
        $("body").css("overflow", "auto");
    });
});
// $(document).ready(function(){
//     var number = "+91-000-00-0000";
//     var email = "info@demo.com";
//     var website = "https://www.demo.com/";

//     $("a.number").each(function(){
//         this.attr("href", "fdsg")
//     });
//     $("a.email").each(function(){
//         this.attr("href", "mailto:info@demo.com")
//         this.find("span i").text("info@demo.com");
//     });
//     $("a.website").each(function(){
//         this.attr("href", "dsf")
//     });
// });

$(window).on("load", function(){
    let year = new Date().getFullYear();
    $(".copyright .year").html(year);
});

