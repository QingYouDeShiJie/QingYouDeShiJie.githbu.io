~ function () {
    function showMark(t) {
        this.markDom = $("<div class='markShadow'></div>"),
        this.con = $("<div class='con'></div>"),
        this.obj = t,
        this.mark(),
        this.init(),
        this.inAni()
    }
    var picIdx = 1,
        footerSign = !1;
    setInterval(function () {
        picIdx++,
        picIdx > 4 && (picIdx = 1),
        $("#index").css("background-image", "url(images/indexBg" + picIdx + ".jpg)")
    }, 8e3),
    $("#footerSwitch").click(function () {
        $("#footerSwitch")
            .animate({
                left: -16
            }, 100, function () {
                $(".footer").animate({
                    left: 0
                }, 500)
            })
    }),
    $("#closeFooter").click(function () {
        $(".footer")
            .animate({
                left: -140
            }, 500, function () {
                $("#footerSwitch").animate({
                    left: 0
                }, 100)
            })
    }),
    showMark.prototype.mark = function () {
        this
            .con
            .append(this.obj),
        this
            .markDom
            .append(this.con),
        $("body").append(this.markDom)
    },
    showMark.prototype.init = function () {
        this.w = this
            .obj
            .width() + 40,
        this.h = this
            .obj
            .width() + 40,
        this
            .con
            .css("margin-left", -this.w / 2),
        this
            .con
            .css({
                "margin-top": -this.h,
                opacity: 0
            })
    },
    showMark.prototype.inAni = function () {
        this
            .markDom
            .fadeIn(500),
        this
            .con
            .animate({
                "margin-top": -this.h / 1.5,
                opacity: 1
            }, 800)
    },
    showMark.prototype.outAni = function () {
        this
            .con
            .animate({
                "margin-top": -this.h,
                opacity: 0
            }, 800, function () {
                $(".markShadow").remove()
            })
    },
    $("#showWX").click(function () {
        $
            .get("data/weixin.json", function (t) {
                var i = [
                        "<div class='popup' style='width:228px'>", "<div class='WX_title popup-title'>" + t.weixin.title + "</div>",
                        "<img class='WX_img' src='images/" + t.weixin.img + "' />",
                        "<div class='WX_text popup-text'>" + t.weixin.text + "</div>",
                        "</div>"
                    ].join(""),
                    n = new showMark($(i));
                $(".markShadow").click(function () {
                    $(".markShadow").fadeOut(800),
                    n.outAni()
                })
            })
    }),
    $(".boardInp").focus(function () {
        $(this).addClass("on")
    });
    var nameOK = !1,
        phoneOK = !1;
    $(".boardInp").blur(function () {
        var t = $(this),
            i = $("#boardSubmit");
        "" != t.val()
            ? t.addClass("on")
            : t.removeClass("on"),
        t.hasClass("nameInp") && (/^.{2,12}$/.test(t.val())
            ? (t.removeClass("err"), nameOK = !0, nameOK && phoneOK && i.removeAttr("disabled"))
            : (t.addClass("err"), i.attr("disabled", "disabled"))),
        t.hasClass("phoneInp") && (/^1\d{10}$/.test(t.val())
            ? (phoneOK = !0, t.removeClass("err"), nameOK && phoneOK && i.removeAttr("disabled"))
            : (t.addClass("err"), i.attr("disabled", "disabled")))
    }),
    $("#boardSubmit").click(function () {
        if (nameOK && phoneOK) {
            var name = $(".nameInp").val(),
                phone = $(".phoneInp").val(),
                message = $(".messageInp").val();
            $.post("link/write.php", {
                name: name,
                phone: phone,
                message: message
            }, function (res) {
                var res = eval("(" + res + ")");
                "yes" == res.result
                    ? (alert("鐣欒█鎴愬姛"), $(".nameInp,.phoneInp,.messageInp").removeClass("on"), $(".nameInp,.phoneInp,.messageInp").animate({
                        "text-indent": "-500px"
                    }, 800, function () {
                        $(this).val(""),
                        $(this).css("text-indent", 0)
                    }))
                    : alert("鐣欒█澶辫触")
            })
        }
    })
}();
