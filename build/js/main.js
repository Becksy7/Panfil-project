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
    $('.product-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1
    });

});

$(function(){
    $("#phone").mask("+7(999) 999-99-99");

});

