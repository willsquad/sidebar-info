$(document).ready(function(){

/*     var sliderContainer = $(".slider_container");
  
    sliderContainer.each(function() {
        if ($(this).is(".menu_slider_container")){
            $(this).slick({
                dots:false,
                prevArrow: false,
                nextArrow: false,
                initialSlide: 0,
                slidesToShow: 4,
                swipeToSlide: true,
                centerMode: false,
                centerPadding: '20px',
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    },
                    {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                    },
                    {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:3,
                        slidesToScroll: 1
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                    },
                    {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                    }
                ]
            });
          } else {
            $(this).slick();
          }
    }); */


    $(".sidebar__content").mCustomScrollbar({
        theme:"minimal-dark"
    });

    $(".image_container").mCustomScrollbar({
        axis: "x",
        theme:"minimal-dark"
    });

   /*  $("#sidebar__menu").mCustomScrollbar({
        axis: "x",
        theme:"minimal-dark"
    }); */


    $('.link').on('click', function(e){
        e.preventDefault();
        var self = $(this);
        var id = self.attr('data-id');

        $('.link').removeClass('active');
        self.addClass('active');

        $('.sidebar__content').removeClass('active');
        $('#sidebar__content_'+id).addClass('active');
    });
});