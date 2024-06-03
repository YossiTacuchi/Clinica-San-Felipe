$(document).ready(function() {

    $('.colapsar').click(function(e){
        e.preventDefault();
        if( $(this).find('.mas').hasClass('ocultar') ){
            $(this).find('.mas').removeClass('ocultar');
            $(this).find('.menos').addClass('ocultar');

            $('.list-tags .tag').addClass('ocultar');
        }else{
            $(this).find('.m