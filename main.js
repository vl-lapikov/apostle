const constraints = {
    video: {
        facingMode: "user",
    },
    audio: false,
};

var apostel = 1;

$( document ).ready(function() {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        const settings = stream.getVideoTracks()[0].getSettings();
        const webcam = document.getElementById("webcam-stream");

        const ratio = settings.aspectRatio;
        const webcamClass = ratio > 1 ? "webcam-landscape" : "webcam-portrait";

        $( "#orientation" ).html(webcamClass);
        webcam.classList.add(webcamClass);
        webcam.style.transform = "scale(-1,1)";
        webcam.srcObject = stream;
        webcam.play();
    });

    $('.control-left').click(function() {
        apostel = (apostel === 1) ? 5 : apostel - 1
        $('#foreground').fadeOut(1000, function() {
            $(this).attr('src', 'svg/' + apostel + '.svg');
            $(this).fadeIn(1000)
        });
    });

    $('.control-right').click(function() {
        apostel = (apostel === 5) ? 1 : apostel + 1
        $('#foreground').fadeOut(1000, function() {
            $(this).attr('src', 'svg/' + apostel + '.svg');
            $(this).fadeIn(1000)
        });
    });

    $('.nav').mouseover(function() {
        var $navSvg = $(this).find('span');
        if ($navSvg.hasClass('nav-left-up')) {
            $navSvg.addClass('nav-left-up-white').removeClass('nav-left-up');
        }
        if ($navSvg.hasClass('nav-right-down')) {
            $navSvg.addClass('nav-right-down-white').removeClass('nav-right-down');
        }
    })

    $('.nav').mouseout(function() {
        var $navSvg = $(this).find('span');
        if ($navSvg.hasClass('nav-left-up-white')) {
            $navSvg.addClass('nav-left-up').removeClass('nav-left-up-white');
        }
        if ($navSvg.hasClass('nav-right-down-white')) {
            $navSvg.addClass('nav-right-down').removeClass('nav-right-down-white');
        }
    })
    $(window).on("orientationchange", function( event ) {
        isPortrait = false
        if (typeof event.orientation !== "undefined") {
            if (event.orientation === 'portrait') {
                isPortrait = true
            }
        } else if (window.orientation === 0 || window.orientation === 180) {
            isPortrait = true
        }
        if (isPortrait) {
            $( "#orientation" ).html('webcam-portrait');
            $('#webcam-stream').addClass('webcam-portrait').removeClass('webcam-landscape');
        } else {
            $( "#orientation" ).html('webcam-landscape');
            $('#webcam-stream').addClass('webcam-landscape').removeClass('webcam-portrait');
        }
    });
});