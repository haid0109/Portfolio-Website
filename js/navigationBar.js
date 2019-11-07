$(document).ready(function(){
    $(window).scroll(function(){

        if($(window).scrollTop() > 50) { $('nav').css('background', 'rgba(30,33,36,1)'); }
        else { $('nav').css('background', 'rgba(30,33,36,0)'); }

    });
});