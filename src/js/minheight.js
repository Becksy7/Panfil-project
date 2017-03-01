$(function () {
    var init = function() {
        var headerHeight = $('#header').outerHeight(),
            footerHeight = $('#footer').outerHeight(),
            contentHeight = $('main.content-contacts').outerHeight(),
            windowHeight = $(window).height();

        if (windowHeight > (headerHeight + footerHeight + contentHeight)) {
            var contentMinH = windowHeight - (headerHeight + footerHeight);
            $('main.content-contacts').css('min-height',contentMinH);
            $('section.contacts').css('height',contentMinH);
        } else {
            $('main.content-contacts').css('min-height',"");
        }
    };
    init();
    $(window).on('resize', init);
});
