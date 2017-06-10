$(function() {

    var App = (function(){

        return {
            init : function() {
                DummyModule.init();
            }
        }
    })()

    /**
     * Dummy Module Example
     */
    ,DummyModule = (function(){
        return {
            init : function() {
                // do something
            }
        }
    })()

    ;App.init();

});

$(function() {
    $('.actions-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    });

});
$(function() {
    $('#product-slider').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        asNavFor: '#product-sm-slider',
        slidesToShow: 1
    });
    $('#product-sm-slider').slick({
        infinite: true,
        arrows: true,
        asNavFor: '#product-slider',
        vertical: true,
        speed: 500,
        slidesToShow: 6,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 6,
                    vertical: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    vertical: false
                }
            }
        ]
    });

});

$(function(){
    $("#phone").mask("+7(999) 999-99-99");

});

$(function () {
    $(document).ready(function() {
        $(".fancybox").fancybox({
            openEffect	: 'elastic',
            closeEffect	: 'elastic'
        });
    });
});