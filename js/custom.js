//--------start slider
$(function(){      
    $(".next").click(function(){
        var $next = $('.active').removeClass("active").next();
        if ($next.length) {
            $next.addClass('active'); 
        }
        else {
            $(".slider-item:first").addClass('active');
        }
    });
});

$(function(){      
    $(".prev").click(function(){
        var $prev = $('.active').removeClass("active").prev();
        if ($prev.length) {
            $prev.addClass('active'); 
        }
        else {
            $(".slider-item:last").addClass('active');
        }
    });
});

//--------start back to top btn
$(function(){      
    $(window).scroll(function(){
      if($(window).scrollTop() > 200){
           $(".back-top-btn").css("display","block");
      }else{
          $(".back-top-btn").css("display","none");
      }  
    });
}); 

$(function(){      
    $(".back-top-btn").click(function(){ 
        $('html').animate({scrollTop:0}, 70);
    });
});
