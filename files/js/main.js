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

    $.fn.isOnScreen = function(){
        var element = this.get(0);
        var bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
    }

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
            var category = self.attr('data-category');
            var title = self.attr('data-title');
            var author = self.attr('data-author');
            var authorimg = self.attr('data-authorimg');
            var tags = self.attr('data-tags');
            var date = self.attr('data-date');
            var readtime = self.attr('data-readtime');
            var images = self.attr('data-images');
            var summary = self.attr('data-summary');
            var main_img = self.attr('data-mainimg');
            var link = self.attr('data-link');

            if ($(this).isOnScreen() || $(this).isOnScreen()) {
                $('#category_name__h2').html(category);
                $('#sidebar__news_title').html(title);
                $('#sidebar__image').find('img').attr('src', main_img);
                $('#author_name_container').find('img').attr('src', authorimg);
                $('#author_name_container').find('img').attr('title', author);
                $('#date_text').html(date);
                $('#read_time_text').html(readtime);
                $('#summary_text').html(summary);
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