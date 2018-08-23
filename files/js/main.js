$(document).ready(function(){

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

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            // Haven't scrolled in 250ms

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
    
                var tags_split = tags.split(" ");
                tags_output = '';
                for(i=0; i<tags_split.length; i++) {
                    tags_output += '<a href="'+tags_split[i].toLowerCase()+'">#'+tags_split[i]+'</a> ';
                }
    
                var images_split = images.split(" ");
                images_output = "";
                for(i=0; i<images_split.length; i++){
                    images_output += '<div class="image_div"><a href="'+images_split[i]+'" data-lightbox="news"><img src="'+images_split[i]+'" alt="News Images"></a></div>';
                }
    
                if ($(this).isFullyInViewport() || $(this).isOnScreen()) {
                    $('#category_name__h2').html(category);
                    $('#sidebar__news_title').html(title);
                    $('#sidebar__image').find('img').attr('src', main_img);
                    $('#author_name_container').find('img').attr('src', authorimg);
                    $('#author_name_container').find('img').attr('title', author);
                    $('#date_text').html(date);
                    $('#read_time_text').html(readtime);
                    $('#summary_text').html(summary);
                    $('#go_to_article_button').attr('href', link);
                    $('#tags_output_p').html(tags_output);
                    $('#news_rhs_image_container').html(images_output);
                } 
                /*if ($(this).isFullyInViewport()) {
                    console.log('Visible Div : '+location);
                }  else {
                    console.log('Not Visible');
                } */
            });

        }, 250));

      });


    /* $(document).on('scroll', function(){
        if($('#projects').visible(true)) {
            console.log('Projects');
        } else {
            console.log('Not found');
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
    
});