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
    var oShrink = $("#orangeShrink");
    var startTxtY = $(".textStartY");
    var startTxtO = $(".textStartO");

    var scrollChild = $(".scrollChild");
    var scrollChild1 = $(".scrollChild1");
    var scrollChildElement = $(".scrollChildElement");
    var verticalScroll = document.getElementById("vertScroll");

    var stickyDiv = document.getElementById("stickyDiv");
    var topOffset = stickyDiv.offsetTop;
    scrollChild.stop();


    window.onscroll = function addSticky() {
        if (window.pageYOffset >= topOffset) {
            stickyDiv.classList.add("stickyAdd");
            scrollChild.stop().animate({
                height: '250px',
                opacity: 0.8,
                margin: "0px",
            }, "fast");

            scrollChild1.stop().animate({
                height: '250px',
                opacity: 0.8,
                margin: "0px",
            }, "fast");


            scrollChild.css('border-bottom', '2px solid white');
            scrollChild1.css('border-bottom', '2px solid white');
            verticalScroll.classList.add("verticalScroll");

            scrollChild1.hover(function () {
                $(this).addClass("hover");
                scrollChildElement.fadeIn(100);
                scrollChildElement.show();
            }, function () {
                $(this).removeClass("hover");
                scrollChildElement.fadeOut(100);
                scrollChildElement.hide();
            });

            scrollChild.hover(function () {
                $(this).addClass("hover");
            }, function () {
                $(this).removeClass("hover");
            });
        }
        if (window.pageYOffset <= topOffset) {
            stickyDiv.classList.remove("stickyAdd");
            scrollChild.stop().animate({
                height: '900px',
                opacity: 1.0,
                margin: "0px",
            }, "fast");

            scrollChild1.css('border-bottom', '0');
            scrollChild.css('border-bottom', '0');
            verticalScroll.classList.remove("verticalScroll");
        }
    }

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
                top: "0",
                padding: "60px",
            }, "slow");

            wrapY.delay(600).show(0);
        },
    });

    orange.on({
        "mousedown": function () {
            orange.animate({
                height: "300px",
                top: "0",
            }, "slow");

            startTxtO.animate({
                height: "100px",
                paddingTop: "20px",
                top: "0",
            }, "slow");

            wrapO.delay(160).fadeIn(600);

            oShrink.animate({
                height: "100px",
                top: "0",
            });
        },
    });

});