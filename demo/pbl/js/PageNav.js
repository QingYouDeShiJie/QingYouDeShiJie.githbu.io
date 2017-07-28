/*
* @Author: Marte
* @Date:   2017-05-18 14:33:27
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-20 09:45:48
*/

(function(){
    window.PageNav = PageNav;
    // 分页的构造函数
    function PageNav(param){
        // 自己的盒子
        this.$box = $("#"+param.boxid);
        // 自己的dom元素
        this.$leftBtn = null;
        this.$rightBtn = null;
        this.$ellipsis1 = null;
        this.$ellipsis2 = null;
        this.$btn1 = null;
        this.$btn2 = null;
        this.$btn3 = null;
        this.$btn4 = null;
        this.$btn5 = null;
        this.$btn6 = null;
        this.$btn7 = null;
        // 当前页
        // 定死一个页
        this.page = param.nowpage || 1;
        // 验证pageAmount是否是数字
        if( typeof param.pageAmount != "number" ){
            throw new Error("必须传入常规的参数，是数字类型")
            return;
        }
        // 总页数
        this.pageAmount = param.pageAmount;
        // 信号量（脏标记）
        this.flag = false;
        // 用户的委托函数
        this.fn = param.change;
        // 初始化
        this.init();
        // 去某一页的方法
        this.gotoPage(this.page);
        // 事件监听
        this.bindEvent();
    };
    PageNav.prototype.init = function(){
        // 我们夏娜所有的元素先创造出来，然后控制每一个显示和隐藏
        this.$leftBtn = $("<a href='javascript:void(0);'></a>").addClass("cBtn cPrev").html("上一页").appendTo(this.$box);
        this.$btn1 = $("<a href='javascript:void(0);'></a>").addClass("nBtn").appendTo(this.$box);
        this.$ellipsis1 = $("<a href='javascript:void(0);'></a>").addClass("ellipsis").html("...").appendTo(this.$box);
        this.$btn2 = $("<a href='javascript:void(0);'></a>").addClass("nBtn").appendTo(this.$box);
        this.$btn3 = $("<a href='javascript:void(0);'></a>").addClass("nBtn").appendTo(this.$box);
        this.$btn4 = $("<a href='javascript:void(0);'></a>").addClass("nBtn").appendTo(this.$box);
        this.$btn5 = $("<a href='javascript:void(0);'></a>").addClass("nBtn").appendTo(this.$box);
        this.$btn6 = $("<a href='javascript:void(0);'></a>").addClass("nBtn").appendTo(this.$box);
        this.$ellipsis2 = $("<a href='javascript:void(0);'></a>").addClass("ellipsis").html("...").appendTo(this.$box);
        this.$btn7 = $("<a href='javascript:void(0);'></a>").addClass("nBtn").appendTo(this.$box);
        this.$rightBtn = $("<a href='javascript:void(0);'></a>").addClass("cBtn cNext").html("下一页").appendTo(this.$box);
    };
    PageNav.prototype.gotoPage = function(number){
        // 验证number符合要求，一定在总页数之内
        if(number >= 1 && number <= this.pageAmount){

            this.page = number;
        }else{
            throw new Error("传入的当前页不符合要求！！！")
            return;
        }

        // 决定显示和隐藏元素和innerHTML
        if( this.pageAmount <= 7){
            // 省略号
            this.$ellipsis1.hide();
            this.$ellipsis2.hide();
            // 上下页按钮
            if(this.page == 1){
                this.$leftBtn.hide();
                this.$rightBtn.show();

            }else if( this.page == this.pageAmount){

                this.$leftBtn.show();
                this.$rightBtn.hide();
            };
            // 要显示多少普通数字的按钮
            this.$box.find(".nBtn:lt("+this.pageAmount+")").show();
            this.$box.find(".nBtn:gt("+(this.pageAmount-1)+")").hide();
            this.$btn1.html(1).attr("data-number",1);
            this.$btn2.html(2).attr("data-number",2);
            this.$btn3.html(3).attr("data-number",3);
            this.$btn4.html(4).attr("data-number",4);
            this.$btn5.html(5).attr("data-number",5);
            this.$btn6.html(6).attr("data-number",6);
            this.$btn7.html(7).attr("data-number",7);
            // 加cur
            this.$box.find("a.nBtn").eq(this.page-1).addClass('cur').siblings().removeClass("cur");
        }else if( this.page < 5){

            // 让第一个省略号隐藏
            this.$ellipsis1.hide();
            this.$ellipsis2.show();
            // 改变HTML
            this.$btn1.html(1).attr("data-number",1);
            this.$btn2.html(2).attr("data-number",2);
            this.$btn3.html(3).attr("data-number",3);
            this.$btn4.html(4).attr("data-number",4);
            this.$btn5.html(5).attr("data-number",5);
            this.$btn6.html(6).attr("data-number",6);
            this.$btn7.html(this.pageAmount).attr("data-number",this.pageAmount);
            // cur的显示
            this.$box.find("a.nBtn").eq(this.page-1).addClass('cur').siblings().removeClass("cur");
            // 决定上一页和下一页的显示和隐藏
            if(this.page == 1){
                this.$leftBtn.hide();
                this.$rightBtn.show();

            }else{
                this.$leftBtn.show();
                this.$rightBtn.show();
            };
        }else if( this.page <= this.pageAmount - 5){

            // 让省略号的显示和隐藏
            this.$ellipsis1.show();
            this.$ellipsis2.show();
            // 改变普通的按钮
            this.$btn1.html(1).attr("data-number",1);
            this.$btn2.html(this.page-2).attr("data-number",this.page-2);
            this.$btn3.html(this.page-1).attr("data-number",this.page-1);
            this.$btn4.html(this.page).attr("data-number",this.page);
            this.$btn5.html(this.page+1).attr("data-number",this.page+1);
            this.$btn6.html(this.page+2).attr("data-number",this.page+2);
            this.$btn7.html(this.pageAmount).attr("data-number",this.pageAmount);
            // cur的位置
            this.$btn4.addClass("cur").siblings().removeClass("cur");
            // 上下页
            this.$leftBtn.show();
            this.$rightBtn.show();
        }else{
            // 让省略号的显示和隐藏
            this.$ellipsis1.show();
            this.$ellipsis2.hide();
            // 改变普通的按钮
            // 改变HTML
            this.$btn1.html(1).attr("data-number",1);
            this.$btn2.html(this.pageAmount-5).attr("data-number",this.pageAmount-5);
            this.$btn3.html(this.pageAmount-4).attr("data-number",this.pageAmount-4);
            this.$btn4.html(this.pageAmount-3).attr("data-number",this.pageAmount-3);
            this.$btn5.html(this.pageAmount-2).attr("data-number",this.pageAmount-2);
            this.$btn6.html(this.pageAmount-1).attr("data-number",this.pageAmount-1);
            this.$btn7.html(this.pageAmount).attr("data-number",this.pageAmount);
            // cur的位置
            this.$box.find("a.nBtn").eq(this.page-this.pageAmount-1).addClass('cur').siblings().removeClass("cur");
            // 上下页
            if( this.page == this.pageAmount){
                this.$leftBtn.show();
                this.$rightBtn.hide();
            }else{
                this.$leftBtn.show();
                this.$rightBtn.show();
            }

        };

        //执行用户的委托函数
        if(this.flag){

            this.fn(this.page);
        }
        this.flag = true;
    };
    // 监听事件
    PageNav.prototype.bindEvent = function(){
        var self = this;
        $(".nBtn").click(function(){
            self.gotoPage(parseInt($(this).attr("data-number")));
        });
        $(".cPrev").click(function(){
            self.gotoPage(self.page-1);
        });
        $(".cNext").click(function(){
            self.gotoPage(self.page+1);
        });
    }
})();