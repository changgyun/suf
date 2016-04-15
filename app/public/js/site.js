$(document).ready(function(){
    var winheight = $(window).height();
    $(".scrollbars").css('height', winheight);


    $('.scrollbars').mCustomScrollbar({
        setTop: 100,
        callbacks:{
            onScroll:function(){
                myCustomFn(this);
            }
        }
    });

    function myCustomFn(el){

        if (el.mcs.top <= -70) {
            $('.header').addClass("scroll-header");
        } else if  (el.mcs.top >= -70) {
            $('.header').removeClass("scroll-header");
        }

        console.log(el.mcs.top);
    }

});


$(window).load(function(){
    $(".scrollbars").mCustomScrollbar();
});


$(function(){
    $('.link-active').click(function(){
        $(this).toggleClass('is-active');
    });
});

