function menuScroll() {
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('.navPrincipal').addClass('top');
        }
        else{
            $('.navPrincipal').removeClass('top');
        }
    });


}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }