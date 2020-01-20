$(document).ready(function () {
    
    $('.header .slider').css({"top": ($('.header').height() * .5)-($('.header .slider').height()*.5)});
    
    $('.links ul li a').click(function(){
                $("html, body").animate({ scrollTop: $('#'+$(this).data('value')).offset().top}, ($('#'+$(this).data('value')).offset().top)*2.5);
    })
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
    
    
});
(function ($) {
var mixer = mixitup('.projects',{
	animation:{
		effectsOut:'fade translatex(-100%)',
	}
});


})(jQuery);	