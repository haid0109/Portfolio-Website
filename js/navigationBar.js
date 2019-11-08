$(document).ready(function(){
    $(window).scroll(function darkenNavbar(){
        if($(window).scrollTop() === 0) { $('nav').css('background', 'rgba(30,33,36,0)'); }
        else { $('nav').css('background', 'rgba(30,33,36,1)'); }
    });

    $(".navbar-toggler").click(function () {
        $('nav').css('background', 'rgba(30,33,36,1)');
        $('nav').css('text-align', 'center');
    });

    $(this).on('scroll click', function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.navbar').on('hidden.bs.collapse', function () {
        if($(window).scrollTop() === 0) { $('nav').css('background', 'rgba(30,33,36,0)'); }
        else { $('nav').css('background', 'rgba(30,33,36,1)'); }
    })  
});