function loadAnimation() {
    ////////////// statistics /////////////////////
    sr = ScrollReveal({ reset: true });
    sr.reveal('.revealUp',{
        duration: 600,
        scale: 1,
        distance: '80px',
        easing: 'ease-out'
    });

    sr.reveal('.statReveal',{
        duration: 600,
        scale: 1,
        distance: '80px',
        easing: 'ease-out',
        beforeReveal: function (domEl) {
            // initStat();
        },
    });

    sr.reveal('.numerical',{
        beforeReveal: function (domEl) {
            numerical.play();
        },
    });

    var obj = { percent: '0%' };
    var numerical = anime({
      targets: obj,
      percent: "95%",
      easing: 'linear',
      round: 1,
      autoplay: false,
      update: function() {
            var el = $(".numerical");
            el.text(obj.percent);
      }
    });

    initStat();

    function initStat(){
        var stat = $("input[name='stat']:checked").val();
        $('.statText').hide();
        $("#stat-" + stat).show();
    }

    $('input:radio[name=stat]').change(function(){
        console.log("changed to: " + this.value);
        $(".statText").hide();
        var current = "#stat-" + this.value;
        $(current).show();
    });
}