~
function() {
	"use strict";

	function e(e) {
		function i(i) {
			for (var a = 0; i >= a; a++) $("<li><span class='" + e.tip + "'><i></i></span></li>").appendTo(e.liBox);
			t(o)
		}
		function t(i) {
			$(e.liBox).children("li").eq(i).addClass(e.cirCur).siblings().removeClass(e.cirCur)
		}
		var a = doArr;
		setTimeout(function() {
			a.inArr[0]()
		}, 1);
		var n = (e.pageInfoArr, !0),o = 0;
		i(e.objLen - 1), 
		$("#nextPage").click(function() {
			if (n) {
				var i = o;
				if (o++, 0 > o) return void(o = 0);
				if (o > e.objLen - 1) return void(o = e.objLen - 1);
				i != o && (n = !1, t(o), o > i ? (a.outArr[i](), a.inArr[o](), e.obj.eq(o).css("top", "100%"), e.obj.eq(i).animate({
					top: "-100%"
				}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
					top: "0%"
				}, e.animateTime, e.animateStyle)) : (a.outArr[i](), a.inArr[o](), e.obj.eq(o).css("top", "-100%"), e.obj.eq(i).animate({
					top: "100%"
				}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
					top: "0%"
				}, e.animateTime, e.animateStyle))), setTimeout(function() {
					n = !0
				}, e.unlockTime)
			}
		}), $(document).mousewheel(function(i, r) {
			if (!($(".markShadow").length > 0) && (i.preventDefault(), n)) {
				var m = o;
				if (o -= r, 0 > o) return void(o = 0);
				if (o > e.objLen - 1) return void(o = e.objLen - 1);
				m != o && (n = !1, t(o), o > m ? (a.outArr[m](), a.inArr[o](), e.obj.eq(o).css("top", "100%"), e.obj.eq(m).animate({
					top: "-100%"
				}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
					top: "0%"
				}, e.animateTime, e.animateStyle)) : (a.outArr[m](), a.inArr[o](), e.obj.eq(o).css("top", "-100%"), e.obj.eq(m).animate({
					top: "100%"
				}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
					top: "0%"
				}, e.animateTime, e.animateStyle))), setTimeout(function() {
					n = !0
				}, e.unlockTime)
			}
		}), $(e.liBox).children("li").click(function() {
			var i = o,
				n = $(this).index();
			o = n, i != o && (t(o), o > i ? (a.outArr[i](), a.inArr[o](), e.obj.eq(o).css("top", "100%"), e.obj.eq(i).animate({
				top: "-100%"
			}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
				top: "0%"
			}, e.animateTime, e.animateStyle)) : (a.outArr[i](), a.inArr[o](), e.obj.eq(o).css("top", "-100%"), e.obj.eq(i).animate({
				top: "100%"
			}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
				top: "0%"
			}, e.animateTime, e.animateStyle)))
		}), $(".header ul").children("li").click(function() {
			var i = o,
				n = $(this).index();
			o = n, i != o && (t(o), o > i ? (a.outArr[i](), a.inArr[o](), e.obj.eq(o).css("top", "100%"), e.obj.eq(i).animate({
				top: "-100%"
			}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
				top: "0%"
			}, e.animateTime, e.animateStyle)) : (a.outArr[i](), a.inArr[o](), e.obj.eq(o).css("top", "-100%"), e.obj.eq(i).animate({
				top: "100%"
			}, e.animateTime, e.animateStyle), e.obj.eq(o).animate({
				top: "0%"
			}, e.animateTime, e.animateStyle)))
		})
	}
	var i = 3e3 * Math.random() + 500;
	$("#pageMark").children(".pageProgress").animate({
		width: "100%"
	}, i, function() {
		$("#pageMark").fadeOut(500, function() {
			$(this).remove()
		}), e({
			obj: $("section.parts"),
			objLen: $("section.parts").length,
			liBox: ".N_Ul",
			cirCur: "cur",
			animateTime: 800,
			animateStyle: "easieEaseInOutSine",
			unlockTime: 1200,
			tip: "tip",
			pageInfoArr: ["INDEX", "PRODUCT", "PROJECT", "ABOUT", "CONTACT"]
		})
	})
}();