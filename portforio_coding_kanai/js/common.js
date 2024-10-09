$('.hamburger,.sp-nav a').on('click', function () {
    $('.sp-nav').fadeToggle();
    $('.hamburger').toggleClass('open');
});