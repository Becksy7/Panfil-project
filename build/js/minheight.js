$(function () {
    var init = function() {
        var headerHeight = $('#header').outerHeight(),
            footerHeight = $('#footer').outerHeight(),
            contentHeight = $('main.layout-main').outerHeight(),
            windowHeight = $(window).height();

        if (windowHeight > (headerHeight + footerHeight + contentHeight)) {
            var contentMinH = windowHeight - (headerHeight + footerHeight);
            $('main.layout-main').css('min-height',contentMinH);
            $('section.contacts').css('height',contentMinH);
        } else {
            $('main.layout-main').css('min-height',"");
        }
    };
    init();
    $(window).on('resize', init);
});
