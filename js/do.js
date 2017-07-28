var doArr = function () {
    var t = {
        inArr: [],
        outArr: []
    };
    t.inArr[0] = function () {
        $("#indexContent")
            .children(".decorateTop,.decorateBottom,.motto")
            .addClass("on"),
        setTimeout(function () {
            $("#indexContent")
                .children(".frontEndBtn")
                .addClass("on")
        }, 500),
        $("#nextPage").show()
    },
    t.outArr[0] = function () {
        $("#indexContent")
            .children()
            .removeClass("on")
    };
    var o = "",
        e = "",
        a = 0;
    return t.inArr[1] = function () {
        if ($("#nextPage").show(), $(".product .partTitle").velocity({
            translateY: 80,
            opacity: "0"
        }, 0), $(".product .partTitle").delay(800).velocity({
            translateY: 0,
            opacity: "1"
        }, 700), $(".productListNav").velocity({
            translateY: 80,
            opacity: "0"
        }, 0), $(".productListNav").delay(1600).velocity({
            translateY: 0,
            opacity: "1"
        }, 700), $("#productListBox")) 
            for (var t = $("#productListBox ul").children("li"), i = t.length, n = 0; i > n; n++) 
                !function (o) {
                    setTimeout(function () {
                        t
                            .eq(o)
                            .delay(400)
                            .velocity({
                                translateY: "0px",
                                opacity: "1"
                            }, 1e3)
                    }, 150 * o)
                }
            (n);
        if (!o) {
            var c = _.template($("#productTemp").html());
            $.get("data/product" + a + ".json", function (t) {
                if (0 === t.errno) {
                    var e = $("<ul></ul>");
                    _.each(t.product, function (t) {
                        var e = c(t);
                        o += e
                    }),
                    e
                        .html(o)
                        .appendTo("#productListBox"),
                    e
                        .children()
                        .velocity({
                            translateY: "200px",
                            opacity: "0"
                        }, 0);
                    for (var a = 0; 4 > a; a++) 
                        !function (t) {
                            setTimeout(function () {
                                e
                                    .children()
                                    .eq(t)
                                    .delay(400)
                                    .velocity({
                                        translateY: "0px",
                                        opacity: "1"
                                    }, 1e3)
                            }, 150 * t)
                        }
                    (a)
                }
            });
            var r = 0,
                l = !1,
                s = !1;
            $("#productPre").click(function () {
                if (!s) {
                    s = !0;
                    var t = $("#productListBox")
                        .find("ul")
                        .outerWidth() / 4;
                    r--,
                    0 == r && $("#productListNav")
                        .children("span")
                        .eq(0)
                        .addClass("cur")
                        .siblings()
                        .removeClass("cur"),
                    0 > r && (r = 0),
                    $("#productListBox")
                        .find("ul")
                        .stop()
                        .velocity({
                            translateX: -t
                        }, 500, function () {
                            s = !1
                        })
                }
            }),
            $("#productNext").click(function () {
                if (!s) {
                    s = !0;
                    var t = $("#productListBox")
                        .find("ul")
                        .outerWidth() / 4;
                    if (r++, 4 == r && $("#productListNav").children("span").eq(1).addClass("cur").siblings().removeClass("cur"), r > 4 && (r = 4), e) 
                        $("#productListBox").find("ul").stop().velocity({
                            translateX: -t
                        }, 500, function () {
                            s = !1
                        });
                    else {
                        if (l) 
                            return;
                        l = !0,
                        a++,
                        $.get("data/product" + a + ".json", function (o) {
                            if (0 === o.errno) {
                                var a = $("<ul></ul>");
                                _.each(o.product, function (t) {
                                    var o = c(t);
                                    e += o
                                }),
                                a
                                    .html(e)
                                    .appendTo("#productListBox"),
                                a.css("left", "100%"),
                                $("#productListBox")
                                    .find("ul")
                                    .stop()
                                    .velocity({
                                        translateX: -t
                                    }, 500, function () {
                                        s = !1
                                    })
                            }
                        })
                    }
                }
            }),
            $("#productListNav")
                .children("span")
                .click(function () {
                    if (!s) {
                        s = !0;
                        var t = $("#productListBox")
                                .find("ul")
                                .outerWidth() / 4,
                            o = $(this).index();
                        if ($(this).addClass("cur").siblings().removeClass("cur"), 0 == o) 
                            r = 0,
                            $("#productListBox").find("ul").stop().velocity({
                                translateX: t
                            }, 500, function () {
                                s = !1
                            });
                        else if (1 == o) 
                            if (e) 
                                r = 4,
                                $("#productListBox").find("ul").stop().velocity({
                                    translateX: -t
                                }, 500, function () {
                                    s = !1
                                });
                            else {
                                if (l) 
                                    return;
                                r = 4,
                                l = !0,
                                a++,
                                $.get("data/product" + a + ".json", function (o) {
                                    if (0 === o.errno) {
                                        var a = $("<ul></ul>");
                                        _.each(o.product, function (t) {
                                            var o = c(t);
                                            e += o
                                        }),
                                        a
                                            .html(e)
                                            .appendTo("#productListBox"),
                                        a.css("left", "100%"),
                                        $("#productListBox")
                                            .find("ul")
                                            .stop()
                                            .velocity({
                                                translateX: -t
                                            }, 500, function () {
                                                s = !1
                                            })
                                    }
                                })
                            }
                        }
                })
        }
    },
    t.outArr[1] = function () {
        for (var t = $("#productListBox ul").children("li"), o = t.length, e = 0; o > e; e++) 
            !function (o) {
                setTimeout(function () {
                    t
                        .eq(o)
                        .delay(400)
                        .velocity({
                            translateY: "200px",
                            opacity: "0"
                        }, 200)
                }, 50 * o)
            }
        (e)
    },
    t.inArr[2] = function () {
        $("#nextPage").show(),
        $(".about .partTitle").velocity({
            translateY: 80,
            opacity: "0"
        }, 0),
        $(".about .partTitle")
            .delay(500)
            .velocity({
                translateY: 0,
                opacity: "1"
            }, 700),
        $(".about_time").velocity({
            translateX: "-280px",
            opacity: "0"
        }, 0),
        $(".about_descripte").velocity({
            translateX: "280px",
            opacity: "0"
        }, 0);
        for (var t = 0; 4 > t; t++) 
            $(".about_time").eq(t).delay(200 * t + 300).velocity({
                translateX: "0px",
                opacity: "1"
            }, 700),
            $(".about_descripte").eq(t).delay(200 * t + 300).velocity({
                translateX: "0px",
                opacity: "1"
            }, 700)
    },
    t.outArr[2] = function () {
        for (var t = 0; 4 > t; t++) 
            $(".about_time").eq(t).delay(50 * t).velocity({
                translateX: "-220px",
                opacity: "0"
            }, 400),
            $(".about_descripte").eq(t).delay(50 * t).velocity({
                translateX: "220px",
                opacity: "0"
            }, 400);
        $(".about .partTitle").velocity({
            translateY: -80,
            opacity: "0"
        }, 200)
    },
    t.inArr[3] = function () {
        $(".project .partTitle").velocity({
            translateZ: 500
        }, 0),
        $(".project .partTitle")
            .delay(200)
            .velocity({
                translateZ: 0
            }, 500),
        $("#nextPage").show();
        for (var t = 0; 8 > t; t++) 
            !function (t) {
                setTimeout(function () {
                    $(".pjMain")
                        .find("li")
                        .eq(t)
                        .addClass("on")
                }, 280 * t)
            }
        (t)
    },
    t.outArr[3] = function () {},
    t.inArr[4] = function () {
        $("#nextPage").hide(),
        $(".contact .partTitle").velocity({
            translateY: -180,
            opacity: "0"
        }, 0),
        $(".contact .partTitle")
            .delay(200)
            .velocity({
                translateY: 0,
                opacity: "1"
            }, 700),
        $(".contactMethod").velocity({
            translateX: "-280px",
            opacity: "0"
        }, 0),
        $(".messagePad").velocity({
            translateX: "280px",
            opacity: "0"
        }, 0),
        $(".contactMethod")
            .delay(400)
            .velocity({
                translateX: "0px",
                opacity: "1"
            }, 700),
        $(".messagePad")
            .delay(400)
            .velocity({
                translateX: "0px",
                opacity: "1"
            }, 700)
    },
    t.outArr[4] = function () {
        $(".contact .partTitle").velocity({
            translateY: -180,
            opacity: "0"
        }, 700),
        $(".contactMethod").velocity({
            translateX: "-280px",
            opacity: "1"
        }, 700),
        $(".messagePad").velocity({
            translateX: "280px",
            opacity: "1"
        }, 700)
    },
    t
}();