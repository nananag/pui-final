
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var tv,
playerDefaults = {
    autoplay: 0,
    autohide: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3,
    loop: 1,
    playlist: 'THA_5cqAfCQ'
};

var vid = {videoId: 'THA_5cqAfCQ', startSeconds: 0, endSeconds:5, suggestedQuality: 'hd720'};

function onYouTubeIframeAPIReady(){
    tv = new YT.Player('player', {
        events: {'onReady': onPlayerReady},
        playerVars: playerDefaults
    });
}

function onPlayerReady(){
    tv.loadVideoById(vid);
    tv.mute();
}

function vidRescale(){
    var w = $(window).width(),
    h = $(window).height();

    if (w/h > 16/9){
        tv.setSize(w, w/16*9);
        $('#player').css({'margin-left': '0px'});
    }
    else {
        tv.setSize(h/9*16, h);
        $('#player').css({'margin-left': (w - $('#player').outerWidth())/2});
    }
}

$(window).on('load resize', function(){
    vidRescale();
});
