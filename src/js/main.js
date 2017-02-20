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

