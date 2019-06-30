$(document).ready(function () {
    $("#preloader").delay(1000).fadeOut("slow");
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('#counter').offset().top - window.innerHeight + 250;
        if (a == 0 && $(window).scrollTop() > oTop) {
            console.log("hola");
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {

                        duration: 5000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    });

    var isiPad = navigator.userAgent.match(/iPad/i) != null;

    if (isiPad) {
        $("body").on("touchstart", "section#home .container .row .op div", function () {
            var id = $(this).attr("id");
            var info = " ";
            if (id == 1) {
                info = "<h3>Experienced Development Team</h3> <hr/>"
            } else if (id == 2) {
                info = "<h3>Customized applications</h3> <hr/>"
            } else if (id == 3) {
                info = "<h3>Creative and futuristic design</h3> <hr/>"
            } else if (id == 4) {
                info = "<h3>Deliveries on the date</h3> <hr/>"
            }
            $("section#home .container .row .texto div").html(info);
            $("section#home .container .row .op div").addClass("outanim");
        });
        $("body").on("touchend", "section#home .container .row .op div", function () {
            $("section#home .container .row .op div").removeClass("outanim");
        });
    }
    $("body").on("mouseenter", "section#home .container .row .op div", function () {
        var id = $(this).attr("id");
        var info = " ";
        if (id == 1) {
            info = "<h3>Experienced Development Team</h3> <hr/>"
        } else if (id == 2) {
            info = "<h3>Customized applications</h3> <hr/>"
        } else if (id == 3) {
            info = "<h3>Creative and futuristic design</h3> <hr/>"
        } else if (id == 4) {
            info = "<h3>Deliveries on the date</h3> <hr/>"
        }
        $("section#home .container .row .texto div").html(info);
        $("section#home .container .row .op div").addClass("outanim");
    });
    $("body").on("mouseleave", "section#home .container .row .op div", function () {
        $("section#home .container .row .op div").removeClass("outanim");
    });
});

