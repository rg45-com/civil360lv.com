$(document).ready(function(){
    // Portfolio
    ////////////////////////////////////////////////////////////
    $(function() {
        var selectedClass = "";
        var portfolioBtn = $(".portfolio-btn");
        
        portfolioBtn.on('click', function(e) {
            e.preventDefault();
            portfolioBtn.removeClass('active');
            selectedClass = $(this).attr("data-rel"); 
            $(".portfolio-items").fadeTo(100, 0.1);
            $(".portfolio-items .item").not("."+selectedClass).fadeOut();
            $(this).addClass('active');

            setTimeout(function() {
              $("."+selectedClass).fadeIn();
              $(".portfolio-items").fadeTo(800, 1);
            }, 400); 
        });
    });
    
    // Sticky menu when scroll
    ////////////////////////////////////////////////////////////
    $(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $('.navbar').addClass('fixed-top');
        }
        if($(window).scrollTop() < 200) {
            $('.navbar').removeClass('fixed-top');
        }
    });
    
    // Scroll to top
    ////////////////////////////////////////////////////////////
    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

});