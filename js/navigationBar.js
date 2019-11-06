$(document).ready(function(){
    $(window).scroll(function(){

        if($(window).scrollTop() > 50) { $('nav').css('background', 'rgba(0,0,0,.9)'); }
        else { $('nav').css('background', 'rgba(0,0,0,0)'); }

    });
});