const constraints = {
    video: {
        facingMode: "user",
    },
    audio: false,
};

var apostel = 1;

$( document ).ready(function() {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        const webcam = document.getElementById("webcam-stream");

        webcam.srcObject = stream;
        webcam.play();
    });

    $('.control-left').click(function() {
        apostel = (apostel === 1) ? 5 : apostel - 1
        $('#foreground').fadeOut(1000, function() {
            $(this).attr('src', 'svg/' + apostel + '.svg');
            $('#foreground').fadeIn(1000)
        });
    });

    $('.control-right').click(function() {
        apostel = (apostel === 5) ? 1 : apostel + 1
        $('#foreground').fadeOut(1000, function() {
            $(this).attr('src', 'svg/' + apostel + '.svg');
            $('#foreground').fadeIn(1000)
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
});