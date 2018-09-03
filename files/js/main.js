$(document).ready(function(){

    $/* ('.link').on('click', function(e){
        e.preventDefault();
        var self = $(this);
        var id = self.attr('data-id');

        $('.link').removeClass('active');
        self.addClass('active');

        $('.sidebar__content').removeClass('active');
        $('#sidebar__content_'+id).addClass('active');
    }); */

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
      
/*     $window.on('resize scroll', function() {

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            // Haven't scrolled in 250ms

            $('.lhs_section_div').each(function() {
                self = $(this);
                var section = self.attr('data-id');
                var main_img = self.attr('data-img');
                var content = self.data('content');
                //var content_parse = JSON.parse(content); (won't work)
                //var content_parse = eval('(' + content+ ')');
                var content_parse = JSON.parse(content.replace(/'/g, '"'));
                

    
                if ($(this).isFullyInViewport()) {
                    $('#sidebar__news_title').html(section);
                    if(main_img != '') {
                        $('#sidebar__image').show();
                        $('#sidebar__image').find('img').attr('src', main_img);
                    } else {
                        $('#sidebar__image').hide();
                    }
                    console.log(typeof(content_parse));
                    var generated_content = '';
                    for(key in content_parse) {
                        generated_content += '<div class="content_div animated fadeIn"><h5>'+key+'</h5><div class="content_div__container"><p id="">'+content_parse[key]+'</p></div></div>';
                    }
                    //console.log(generated_content);


                    $('#generated_content').html(generated_content);
                    
                } 

            });

        }, 250));

      }); */
      
/*     $window.on('resize scroll', function() {

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            // Haven't scrolled in 250ms

            $('.lhs_section_div').each(function() {
                self = $(this);
                var section = self.attr('data-id');
                var main_img = self.attr('data-img');
                var content = self.data('content');
                //var content_parse = JSON.parse(content); (won't work)
                //var content_parse = eval('(' + content+ ')');
                var content_parse = JSON.parse(content.replace(/'/g, '"'));
                
                

    
                if ($(this).isFullyInViewport()) {

                    //console.log(content_parse);

                    var generated_content = '';
                    var i = 0;
                    for(var key in content_parse) {
                        
                        //console.log(typeof(content_parse[key]))

                        i = ++i;

                        if(typeof(content_parse[key]) == 'string') {
                            generated_content += '<div class="content_div"><div class="img_text_container"><div class="card_img"><img src="files/images/'+i+'.jpeg" alt=""></div><div class="card_text"><div class="card_heading"><h5>'+key+'</h5></div><div class="card_description"><p>'+content_parse[key]+'</p></div></div><div class="card_expand_icon"><i class="fas fa-chevron-down"></i></div></div></div>';
                        } else if(typeof(content_parse[key]) == 'object') {
                            i = 4;
                            generated_content += '<div class="horizontal_card_container">';
                            for(var horizontal_key in content_parse[key]) {
                                i = ++i;
                                //generated_content += horizontal_key+' : '+content_parse[key][horizontal_key];

                                generated_content += '<div class="content_div h_card"> <div class="img_text_container"> <div class="card_img"><img src="files/images/'+i+'.jpeg" alt=""></div> <div class="card_text"> <div class="card_heading"> <h5>'+horizontal_key+'</h5> </div> <div class="card_description"> <p>'+content_parse[key][horizontal_key]+'</p> </div> </div> <div class="card_expand_icon"> <i class="fas fa-chevron-down"></i> </div> </div> </div>';
                                
                                
                            
                            }

                            generated_content += '</div>';

                            //$('.horizontal_card_container').mCustomScrollbar('update');

                            
                        }

                    }
                    //console.log(generated_content);
                    

                    $('#generated_content').html(generated_content);

                    // For converting the dynamically loaded div to a scrollable div
                    $(".horizontal_card_container").mCustomScrollbar({
                        axis: "x",
                        theme:"minimal-dark",
                        advanced:{
                            autoScrollOnFocus: false,
                            updateOnContentResize: true
                        }
                    });
                   
                    
                } 

            });

        }, 250));

        

      }); */



    /* var eTop = $('#content_lhs').offset().top; //get the offset top of the element
    console.log(eTop - $(window).scrollTop()); //position of the ele w.r.t window
    
    $(window).scroll(function() { //when window is scrolled
        console.log(eTop - $(window).scrollTop());
    }); */

    /* $window.on('resize scroll', function() {

            $('.article_summary').each(function() {
                var self = $(this);
                
                var eTop = self.offset().top; //get the offset top of the element
                var position_top_para = eTop - $(window).scrollTop();

                if(position_top_para>0) { //visible
                    //console.log(position_top_para);
                    //console.log(typeof(position_top_para));

                    var generated_content = '';

                    $('.more_info').each(function() {
                        var self = $(this);
                        var info_title = self.html();

                        var eTop = self.offset().top; //get the offset top of the element
                        var position_top_info = eTop - $(window).scrollTop();

                        if(position_top_info>0) { //visible
                            //console.log(position_top_info);
                            //console.log(typeof(position_top_info));
                            console.log(info_title);
                            var generated_content = '<div';
                        } else if(position_top_info<0) {
                            console.log('info invisible');
                        }
                    });
                } else if(position_top_para<0) {
                    console.log('para invisible');
                }
                
            });

    }); */

    $window.on('resize scroll', function() {

            $('.more_info').each(function() {
                var self = $(this);
                var keyword = self.html();

                var content = self.data('info');
                var content_parse = JSON.parse(content.replace(/'/g, '"'));

                //console.log(content_parse);
                
                var eTop = self.offset().top; //get the offset top of the element
                var position_top = eTop - $(window).scrollTop() - 90;

                /* if(position_top>0) { //visible
                    console.log(position_top);
                    //console.log(typeof(position_top));
                } else if(position_top<0) {
                    console.log('Keyword invisible');
                } */
                if(self.isFullyInViewport()) {
                    var generated_content = '';

                    //console.log(content_parse.text);
                    //console.log(content_parse.img);

                    console.log(position_top);


                    //if(typeof(content_parse[key]) == 'string') {
                        generated_content += '<div class="content_div" style="position:relative; top:'+position_top+'px"><div class="img_text_container"><div class="card_img"><img src="'+content_parse.img+'" alt=""></div><div class="card_text"><div class="card_heading"><h5>'+keyword+'</h5></div><div class="card_description"><p>'+content_parse.text+'</p></div></div><div class="card_expand_icon"><i class="fas fa-chevron-down"></i></div></div></div>';
                    //}


                    generated_content += '</div>';

                    //console.log(generated_content);
                    $('#generated_content').html(generated_content);
                }
                
            });

            

    });




    $(document).on('click', '.content_div', function(){
        var self = $(this);

        //$('.content_div').removeClass('active');
        self.toggleClass('active');
        self.find('i').toggleClass('fa-chevron-up fa-chevron-down');
    });

    $(document).on('click', '.h_card', function(){
        var self = $(this);

        
    });

    

    /* Custom Scrollbar */
   /*  $(".sidebar__content").mCustomScrollbar({
        theme:"minimal-dark"
    }); */

    $(".horizontal_card_container").mCustomScrollbar({
        axis: "x",
        theme:"minimal-dark",
        advanced:{
            autoScrollOnFocus: false,
            updateOnContentResize: true
        }
    });
    /* Custom Scrollbar */
    
});