$(function () {
    var init = function() {
        var headerHeight = $('#header').outerHeight(),
            footerHeight = $('#footer').outerHeight(),
            contentHeight = $('main.layout-main').outerHeight(),
            windowHeight = $(window).height();

        var contentMinH = windowHeight - footerHeight;
        if (windowHeight > (footerHeight + contentHeight)) {
            $('main.layout-main').css('min-height',contentMinH);
        } else {
            $('main.layout-main').css('min-height',"");
        }
        $('section.contacts').css('height',contentMinH);
    };
    init();
    $(window).on('resize', init);
});
