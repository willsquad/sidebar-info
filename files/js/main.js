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

    /* Visibility Check */
    $.fn.isFullyInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        return elementTop >= viewportTop && elementBottom <= viewportBottom;
    };

   /*  $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }; */
    /* Visibility Check */

    $window = $(window);
      
    $window.on('resize scroll', function() {
        $('.lhs_section_div').each(function() {

            self = $(this);
            var location = self.attr('data-id');
            var heading = self.attr('data-h2');
            var item_name = self.attr('data-item');
            var item_image = self.attr('data-img');
            var item_image = self.attr('data-img');
            var about_text = self.attr('data-about');
            var description_text = self.attr('data-description');
            var data_more = self.attr('data-more');
            var data_photos = self.attr('data-photos');

            if ($(this).isFullyInViewport()) {
                /* if(location == "about") {
                    
                } */
                $('#category_name__h2').html(heading);
                $('#sidebar__item_name__h3').html(item_name);
                $('#sidebar__image').find('img').attr('src', item_image);
                $('#about_text').html(about_text);
                $('#description_text').html(description_text);

                if(data_more == 1) {
                    $('#more_details').show()
                } else if(data_more == 0) {
                    $('#more_details').hide()
                }

                if(data_photos == 1) {
                    $('#photos_div').show()
                } else if(data_photos == 0) {
                    $('#photos_div').hide()
                }
            } 
            /*if ($(this).isFullyInViewport()) {
                console.log('Visible Div : '+location);
            }  else {
                console.log('Not Visible');
            } */
        });
      });


    /* $(document).on('scroll', function(){
        if($('#projects').visible(true)) {
            console.log('Projects');
        } else {
            console.log('Not found');
        }
    }); */
    
});