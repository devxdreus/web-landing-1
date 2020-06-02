// Paralax

$(window).on('load', function () {
    $('.info-panel .panel').each(function (i) {
        setTimeout(function () {
            $('.info-panel .panel').eq(i).addClass('panel-show');
        }, 250 * (i + 1));
    });
});


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron a').css({
        'transform': 'translate(0px, ' + wScroll / 1.4 + '%)'
    });

    // workingspace
    if (wScroll > $('.workingspace').offset().top - 400) {
        $('.workingspace .fade-left').addClass('fade-show');
        $('.workingspace .fade-right').addClass('fade-show');
    }

});