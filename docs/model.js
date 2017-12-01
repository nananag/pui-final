$(document).ready(function(){
    var iframe = document.getElementById( 'api-frame' );
    var version = '1.0.1';
    var urlid = '128eaf86077347648600428a66565627';

    // By default, the latest version of the viewer API will be used.
    var client = new Sketchfab(version, iframe);

    client.init( urlid, {
        success: function onSuccess( api ){
            api.start();
            api.addEventListener( 'viewerready', function() {
            // API is ready to use
                api.addEventListener( 'annotationFocus', function( index ) {
                    console.log( 'Reached annotation ' + index );
                    var current = "#aInfo-" + index;
                    $(current).removeClass("inactive");
                    $(current).addClass("active");
                    $('.aInfo').css("z-index", "1");
                } );

                console.log( 'Viewer is ready' );
                $('.loader').addClass("inactive");
                loadAnimation();
            });
        },
        error: function onError() {
            console.log( 'Viewer error' );
        },
        autostart: 1,
        autospin: .1,
        preload: 1,
        scrollwheel: 0,
        ui_stop: 0,
        transparent: 1
    });

    $('.closeIcon').click(function(){
        $('.aInfoC').removeClass("active");
        $('.aInfoC').addClass("inactive");
        $('.aInfo').css("z-index", "-100");
    });
});
