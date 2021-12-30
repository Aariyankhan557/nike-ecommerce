(function($){
        $(document).ready(function(){
             $('.amar').owlCarousel({
                    loop                :true,
                    autoplay           :true,
                    nav                  :true,
                    center              :true,
                    margin             :10,
                    autoplayTimeout :20000,
                    autoplayHoverPause :true,
                    slideTransition: "linear",
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                        },
                        600:{
                            items:2,
                        },
                        800:{
                            items:3,
                        },
                       1000:{
                            items:4,
                        },
                    }
                });
        });
})(jQuery);