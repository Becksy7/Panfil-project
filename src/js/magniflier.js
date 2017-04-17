//Эффект лупы
$(document).ready(function(){
    var native_width = 0;
    var native_height = 0;
    var mouse = {x: 0, y: 0};
    var page = {x: 0, y: 0};
    var magnify;
    var cur_img;

    var ui = {
        magniflier: $('.magniflier')
    };

    if (ui.magniflier.length) {
        var div = document.createElement('div');
        div.setAttribute('class', 'glass');
        ui.glass = $(div);

        $('body').append(div);
    }

    $('.slick-dots').click(function () {
        ui.glass.fadeOut(100);
    });

    $(document).mouseup(function (e){
        var div = $('.magniflier');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            ui.glass.fadeOut(100);
        }
    });


    var mouseClick = function(e) {

        var magnify_offset = cur_img.offset();
        mouse.x = page.x - magnify_offset.left;
        mouse.y = page.y - magnify_offset.top;
        if (
            mouse.x < cur_img.width() &&
            mouse.y < cur_img.height() &&
            mouse.x > 0 &&
            mouse.y > 0
        ) {
            magnify(e);
        }
        else {
            ui.glass.fadeOut(100);
        }

        return;
    };

    var magnify = function(e) {

        var rx = Math.round(mouse.x/cur_img.width()*native_width - ui.glass.width()/2)*-1;
        var ry = Math.round(mouse.y/cur_img.height()*native_height - ui.glass.height()/2)*-1;
        var bg_pos = rx + "px " + ry + "px";

        var glass_left = page.x - ui.glass.width() / 2;
        var glass_top  = page.y - ui.glass.height() / 2;

        ui.glass.css({
            left: glass_left,
            top: glass_top,
            backgroundPosition: bg_pos
        });

        return;
    };

    $(ui.magniflier).on('click', function(e) {
        ui.glass.fadeIn(100);
        cur_img = $(this);
        var src = cur_img.attr('src');

        page.x = e.pageX;
        page.y = e.pageY;

        if (src) {
            ui.glass.css({
                'background-image': 'url(' + src + ')',
                'background-repeat': 'no-repeat'
            });
        }

        if (!cur_img.data('native_width')) {


            var image_object = new Image();

            image_object.onload = function() {

                native_width = image_object.width;
                native_height = image_object.height;

                cur_img.data('native_width', native_width);
                cur_img.data('native_height', native_height);

                mouseClick.apply(this, arguments);
                ui.glass.on('click', mouseClick);

            };

            image_object.src = src;

            return;
        } else {
            native_width = cur_img.data('native_width');
            native_height = cur_img.data('native_height');
        }

        mouseClick.apply(this, arguments);
        ui.glass.on('click', mouseClick);
    });
});