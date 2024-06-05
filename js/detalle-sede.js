$(document).ready(function() {

    $('.beneficio-item a').click(function(e){
        e.preventDefault();
        $('.beneficio-item a').parent().removeClass('show');
        $(this).parent().addClass('show');
    });

    $('.ver-especialidades').click(function(e){
        e.preventDefault();
        if($(this).hasClass('todos')){
            $(this).text("Ver más");
            $(this).removeClass('todos');
            $('.owl-carousel-especialidades').show();
            $('.grid-especialidades').addClass('ocultar');
        }else{
            $(this).addClass('todos')
            $(this).text("Ver menos");
            $('.owl-carousel-especialidades').hide();
            $('.grid-especialidades').removeClass('ocultar');
        }
    });

    $('.owl-carousel-detalle-sede').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-carousel-especialidades').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      });

});