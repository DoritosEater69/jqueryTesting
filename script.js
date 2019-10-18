var $ = jQuery;
$(document).ready(function () {

    var red = $("#red");
    var blue = $("#blue");
    var wrapR = $(".textWrapRed");
    var wrapB = $(".textWrapBlue");
    var startTxtR = $(".textStartR");
    var startTxtB = $(".textStartB");
    var yellow = $("#yellow");
    var orange = $("#orange");
    var wrapY = $(".textWrapYellow");
    var wrapO = $(".textWrapOrange");
    var startTxtY = $(".textStartY");
    var startTxtO = $(".textStartO");

    red.on({
        "mousedown": function () {
            startTxtR.css('display', 'none');
            red.css('box-shadow', '10px 0px 7px -5px rgba(0,0,0,0.4)');
            red.animate({
                opacity: 1.0,
                height: '600px',
            });

            wrapR.css('display', 'block').delay(150);
            wrapR.animate({
                opacity: 1.0,
                fontSize: '66px',
                color: '#FFFFFF',
                fontWeight: 'bold',
            });
        },
        "mouseup": function () {
            startTxtR.delay(360).show(0);
            red.animate({
                opacity: 0.5,
                height: '950px',
            });

            wrapR.animate({
                opacity: 0.0,
                fontSize: '16px',
            });
            startTxtR.delay(200).animate({
                opacity: 1.0,
            });
        },
    });

    blue.on({
        "mousedown": function () {
            blue.css('box-shadow', '0px 0px 7px 5px rgba(0,0,0,0.9)');
            blue.animate({
                opacity: 1.0,
            });
            blue.animate({
                opacity: 1.0,
            }, 120);
            blue.css("transform", "translateX(1000px)");
            blue.css("transition-duration", "1s");
            startTxtB.delay(500).hide(0);

            wrapB.css("font-size", "90px", "!important");
            wrapB.delay(360).show(0);

            wrapB.animate({
                fontSize: '30px',
            });
        },
    });

    yellow.on({
        "mousedown": function () {
            yellow.css('box-shadow', '10px 10px 7px -5px rgba(0,0,0,1.0)');
            yellow.animate({
                height: "300px",
                opacity: "1.0",
                marginTop: "40px",
                padding: "60px",
            }, "slow");
            wrapY.delay(600).show(0);
        },
    });

});