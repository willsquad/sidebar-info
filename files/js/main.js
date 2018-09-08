$(document).ready(function(){

    /* Scrollspeed change */
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
        
    /* Scrollspeed change */

    /* Offscreen check */
    $.extend($.expr[':'], {
        'off-top': function(el) {
            return $(el).offset().top < $(window).scrollTop();
        },
        'off-right': function(el) {
            return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
        },
        'off-bottom': function(el) {
            return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
        },
        'off-left': function(el) {
            return $(el).offset().left < $(window).scrollLeft();
        },
        'off-screen': function(el) {
            return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
        }
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

    var generated_content = ''; // Do not remove this. Otherwise, it will display '[object HTMLDivElement]' on adding content in addition to the content (https://linustechtips.com/main/topic/293402-object-htmldivelement/).

    var each_compare = [];

    $('.more_info').each(function(i) { //parameter i has been passed for counting 'each' element
        //$(this).data("serial", i);
        //i++;

        
        var self = $(this);

        self.attr("data-serial", i); // counting (i) attached to the card. Start count from 0.
        //console.log(i);

        var keyword = self.html(); // get the keyword

        var content = self.data('info');
        var content_parse = JSON.parse(content.replace(/'/g, '"'));

        //var div_id = keyword.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'); // create the unique id based on the keyword, only alphanumeric characters for matching with the ids created while LOADING the page [Removed: Will cause problems for keywords with same name. Replaced with "#content_i"]

        var eTop = self.offset().top; //get the offset top of the element
        var position_top = eTop - $(window).scrollTop() - 120; //120: 65px+15px+40px (65px:Height of the Article title section at the top of the Sidebar + 15px:Padding of the sidear content + 40px: half the height of the Card
        position_top = position_top - (i * 115); //115px: (100px: Height of each card + 15px:margin-bottom)

        //console.log(keyword);
        //console.log(self.offset());
        ///console.log($(window).scrollTop());

        //console.log(div_id+' : '+position_top);

        //console.log(position_top);
        //each_compare.push(position_top);
        //console.log(each_compare);

        
        // If position is GREATER than or EQUAL TO 100px (single card height), don't change it, else set it to 0
        if(position_top >= 100) {
            position_top = position_top;

        } else if(position_top < 100) {
            position_top = 0;
        }
        

        if(content_parse.img != '') {
            generated_img_div = '<div class="card_img"><img src="'+content_parse.img+'" alt=""></div>';
        } else {
            generated_img_div = '';
        }
        
        
        // Cards generated on load
        generated_content += '<div class="content_div" id="content_'+i+'" data-serial="'+i+'" style="position:relative; top:'+position_top+'px"><div class="img_text_container">'+generated_img_div+'<div class="card_text"><div class="card_heading"><h5>'+keyword+'</h5></div><div class="card_description"><p>'+content_parse.text+'</p></div></div><div class="card_expand_icon"><i class="fas fa-chevron-down"></i></div></div></div>';

        // Cards generated on load added to the sidebar
        $('#generated_content').html(generated_content);

    });

    

    $window.on('resize scroll', function() {

            $('.more_info').each(function(i) { //parameter i has been passed for counting 'each' element
                var self = $(this);

                self.attr("data-serial", i); // counting (i) attached to the card. Start count from 0.
                //console.log(i);

                var keyword = self.html(); //get the keyaord

                //var div_id = keyword.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'); // create the unique id based on the keyword, only alphanumeric characters for matching with the ids created while LOADING the page [Removed: Will cause problems for keywords with same name. Replaced with "#content_i"]

                //var content = self.data('info');
                //var content_parse = JSON.parse(content.replace(/'/g, '"'));

                //console.log(content_parse);
                
                var eTop = self.offset().top; //get the offset top of the element
                var position_top = eTop - $(window).scrollTop() - 120; //120: 65px+15px+40px (65px:Height of the Article title section at the top of the Sidebar + 15px:Padding of the sidear content + 40px: half the height of the Card
                position_top = position_top - (i * 115); //115px: (100px: Height of each card + 15px:margin-bottom)

                //console.log(self.offset());
                //console.log($(window).scrollTop());

                /* if(position_top>0) { //visible
                    console.log(position_top);
                    //console.log(typeof(position_top));
                } else if(position_top<0) {
                    console.log('Keyword invisible');
                } */
                //if(self.isFullyInViewport()) {
                    //var generated_content = '';

                    //console.log(content_parse.text);
                    //console.log(content_parse.img);

                    // /console.log(position_top);

                /* // If position is greater than 0, don't change it, else set it to 0
                if(position_top >= 0) {
                    position_top = position_top;
        
                } else if(position_top < 0) {
                    position_top = 0;
                } */

                // If position is GREATER than or EQUAL TO 100px (single card height), don't change it, else set it to 0
                position_top_non_zero = position_top;

                if(position_top >= 100) {
                    position_top = position_top;
                } else if(position_top < 100) {
                    position_top = 0;
                }

                //console.log(position_top);
                //console.log(div_id+' : '+position_top);

                // Modify the position based on the ID of the RHS '.content_div's

                //console.log('content_'+i+' : '+position_top);

                $('#content_'+i).css({'position':'relative','top':position_top+'px'});

                $(".sidebar__content").mCustomScrollbar('scrollTo', 'top');

                if((self).is(':off-top')) {
                    //console.log('position_top_non_zero'+i+ ' : '+position_top_non_zero);
                    //$('#content_'+i).hide();

                    $('#content_'+i).css({'position':'absolute','top':-500+'px'});
                    

                    //$('#content_'+i).css({'display':'none'});
                    //$('#content_'+i).fadeOut();
                } else {
                    //$('#content_'+i).show();
                    
                    $('#content_'+i).css({'position':'relative','top':position_top+'px'});
                    
                    //$('#content_'+i).css({'display':'block'});
                    //$('#content_'+i).fadeIn();
                }
                

               // $(".sidebar__content").mCustomScrollbar('scrollTo', '#content_'+i);


                /* var scroll_top = $(window).scrollTop();
                if (self.offset().top >= scroll_top && self.is(':visible')){
                    console.log(keyword);
                } */
                       
            });

            //console.log($(window).scrollTop());

            /* var scroll_top = $(window).scrollTop();
            var elements = $(".more_info");
            var el;
            for (var i=0; i<elements.length; i++) {
                el = $(elements[i]);
                console.log(el+' : '+el.offset().top);
                if (el.offset().top >= scroll_top && el.is(':visible')){
                    // "el" is the first visible element here!
                    // Do something fancy with it

                    

                    // Quit the loop
                    break;
                }
            } */




            //var content_div_count = 0;
            
            /* $('.content_div').each(function() {
                var self = $(this);

                var serial = self.attr("data-serial");

                

                if ($(this).isFullyInViewport()) {
                   //content_div_count++;
                   console.log(serial);
                   

                   var mq = window.matchMedia( "(max-width: 1368px)" );
                    if (mq.matches) {
                        // window width is at less than 1367px
                        serial_difference = serial - 4;
                        if(serial - 0 >=5 ) {
                            $(".sidebar__content").mCustomScrollbar('scrollTo', '#content_'+serial_difference);
                       } else if(serial - 0 < 4 ) {
                            $(".sidebar__content").mCustomScrollbar('scrollTo', 'top');
                       }
                    }
                    else {
                        // window width is greater than 1367px
                        serial_difference = serial - 5;
                        if(serial - 0 >=6 ) {
                            $(".sidebar__content").mCustomScrollbar('scrollTo', '#content_'+serial_difference);
                       } else if(serial - 0 < 5 ) {
                            $(".sidebar__content").mCustomScrollbar('scrollTo', 'top');
                       }
                    }

                   
                } 
            }); */
            
            /* console.log(content_div_count);

            if(content_div_count >= 5) {
                $(".sidebar__content").mCustomScrollbar('scrollTo', '-=115');
            } else if (content_div_count < 5) {
                $(".sidebar__content").mCustomScrollbar('scrollTo', '+=115');
            } else if (content_div_count < 4) {
                $(".sidebar__content").mCustomScrollbar('scrollTo', 'top');
            } */
    });




    $(document).on('click', '.content_div', function(){
        var self = $(this);

        //$('.content_div').removeClass('active');
        //self.toggleClass('active');

        if(self.hasClass('active')) {
            $('.content_div').removeClass('active');
        } else {
            $('.content_div').removeClass('active');
            self.addClass('active');
        }

        self.find('i').toggleClass('fa-chevron-up fa-chevron-down');
    });


    
    $(document).on('click', '.more_info', function(e){
        e.preventDefault();
        var self = $(this);
        
        var serial = self.attr('data-serial');

        //$(".sidebar__content").mCustomScrollbar('scrollTo', '#content_'+serial);

        $("#content_"+serial).click();
        
        //$(".sidebar__content").mCustomScrollbar('scrollTo', '#content_'+serial);
    });

    $(document).on('click', '.h_card', function(){
        var self = $(this);

        
    });

    

    /* Custom Scrollbar */
    $(".sidebar__content").mCustomScrollbar({
        theme:"minimal-dark"
    });

    $(".horizontal_card_container").mCustomScrollbar({
        axis: "x",
        theme:"minimal-dark",
        advanced:{
            autoScrollOnFocus: false,
            updateOnContentResize: true
        }
    });
    /* Custom Scrollbar */

    /* Change scrollspeed (step in px, duration in ms)*/
    jQuery.scrollSpeed(100, 1000);
    /* Change scrollspeed */
    

    function more_text() {
        var more_html = '<div class="article_summary"><p>The state is wedged between the Lakshadweep Sea and the Western Ghats. Kerala experiences the humid equatorial tropic climate. The state has a coast of 590 km (370 mi)[108] and the width of the state varies between 11 and 121 kilometres (7 and 75 mi).[109] Geographically, Kerala can be divided into three climatically distinct regions: the eastern highlands; rugged and cool mountainous terrain, the central mid-lands; rolling hills, and the western lowlands; coastal plains.[110] Pre-Cambrian and Pleistocene geological formations compose the bulk of Kerala\'s terrain.[111][112] A catastrophic flood in Kerala in 1341 CE drastically modified its terrain and consequently affected its history; it also created a natural harbour for spice transport.[113] The eastern region of Kerala consists of high mountains, gorges and deep-cut valleys immediately west of the Western Ghats\' rain shadow.[110] 41 of Kerala\'s west-flowing rivers,[114] and 3 of its east-flowing ones originate in this region.[115][116] The Western Ghats form a wall of mountains interrupted only near Palakkad; hence also known Palghat, where the Palakkad Gap breaks.[117] The Western Ghats rise on average to 1,500 metres (4,900 feet) above sea level,[118] while the highest peaks reach around 2,500 metres (8,200 feet).[119] Anamudi in the Idukki district is the highest peak in south India, is at an elevation of 2,695 m (8,842 ft).</p></div>';
        
        $("#article_end").append(more_html);
    }

    //more_text();
    //more_text();
    //more_text();
    //more_text();
});