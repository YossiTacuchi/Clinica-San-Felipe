$(document).ready(function() {

    $('.colapsar').click(function(e){
        e.preventDefault();
        if( $(this).find('.mas').hasClass('ocultar') ){
            $(this).find('.mas').removeClass('ocultar');
            $(this).find('.menos').addClass('ocultar');

            $('.list-tags .tag').addClass('ocultar');
        }else{
            $(this).find('.mas').addClass('ocultar');
            $(this).find('.menos').removeClass('ocultar');

            $('.list-tags .tag').removeClass('ocultar');
        }
        
    });

    $('.owl-carousel-ultimas').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

});