function initMap() {
    $(window).resize(function(){
        var panfil = new google.maps.LatLng(55.774425, 37.588969);

        var screen_width = document.body.clientWidth;
        var image = {
            url: '../build/images/map-marker.png'
        };


        if (screen_width < 768) {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: panfil,
                zoom: 18,
                mapTypeControlOptions: {
                    mapTypeIds: google.maps.MapTypeId.ROADMAP
                },
                mapTypeControl: false,
                disableDefaultUI: true
            });
            image = {
                url: '../build/images/map-marker.png',
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(100, 100)
            };
        } else {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: panfil,
                zoom: 18,
                mapTypeControlOptions: {
                    mapTypeIds: google.maps.MapTypeId.ROADMAP
                },
                mapTypeControl: false,
                disableDefaultUI: true
            });
            image = {
                url: '../build/images/map-marker.png',
                size: new google.maps.Size(150, 150),
                scaledSize: new google.maps.Size(150, 150)
            };
        }
        var marker = new google.maps.Marker({
            map: map,
            position: panfil,
            icon: image});

    });
    $(window).resize();
}
