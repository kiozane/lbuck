function scroll() {
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('nav.navPrincipal').addClass('.top');
        }
        else{
            $('nav.navPrincipal').removeClass('.top');
        }
    });


}
// function MoveUp() {
//     $(window).on('click', function() {
//         window.scrollTo(0, 0);
//     });
// }
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }