// 头部渲染
function kk() {
    delCookie('login')
    header()
}

function header() {
    let template = ''
    if (!getCookie('login')) {
        template = `<li>
            <a href="../html/login.html">请登录</a>
        </li>
        <li>
            <a href="../html/register.html">快速注册</a>
        </li>`
    } else {
        template = `<li>${getCookie('login')}</li><li id="logout" onclick="kk()">退出登录</li>`
    }
    let headerWarp = document.querySelector("#header_warp")


    let str = "";
    str += `
    <div id="header">
<div class="header_top clearfix">
<ul class="header_top_l">
    <li>
        <a href="">欢迎来到聚美！</a>
    </li>
  ${ template}
</ul>


<ul class="header_top_r">
    <li>
        <a href="">正品保证</a>
    </li>
    <li>
        <a href="">订单查询</a>
    </li>
    <li>
        <a href=""><i class="iconfont icon-aixin_shixin"></i>
            收藏的品牌</a>
    </li>
    <li class="hover">
        <a href="">我的聚美<i class="iconfont icon-arrow_down
            "></i></a>
        <ul class="ul_dw">
            <li><a href="">我的订单</a></li>
            <li><a href="">我的现金券</a></li>
            <li><a href="">我的红包</a></li>
            <li><a href="">我的余额 </a></li>
            <li><a href="">我的提现退款</a></li>
            <li><a href="">我的收藏</a></li>
            <li><a href="">我的心愿单</a></li>
            <li><a href="">会员中心</a></li>
            <li><a href="">礼品卡兑换</a></li>
        </ul>

    </li>
    <li class="tel">
        <a href=""><i class="iconfont icon-shouji"></i>手机聚美</a>
    </li>
    <li class="hover_tow">
        <a href="">更多<i class="iconfont icon-arrow_down
            "></i></a>
        <ul class="ul_dw_tow">
            <li><a href="">邀请好友</a></li>
            <li><a href="">加入收藏</a></li>
            <li><a href="">新浪微博</a></li>
            <li><a href="">聚美微信 </a></li>
            <li><a href="">百度贴吧</a></li>
            <li><a href="">腾讯微博</a></li>
            <li><a href="">人人公众主页</a></li>

        </ul>
    </li>


</ul>
</div>

</div>
<!-- header_conter -->
<div class="header_conter clearfix">
<!-- logo -->
<h1 class="logo">
<a href="../html/index.html"></a>
</h1>
<!-- 搜索框 -->
<div class="search">
<div>
    <input type="text" class="input">
    <p id="search">搜索</p>
</div>
<ul class="hot_word">
    <li><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E4%BF%9D%E6%B9%BF" target="_blank">保湿</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9D%A2%E8%86%9C">面膜</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=%E6%B4%97%E9%9D%A2%E5%A5%B6">洗面奶</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=%E8%A1%A5%E6%B0%B4">补水</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%A6%99%E6%B0%B4">香水</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%9C%BC%E9%9C%9C">眼霜</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%8F%A3%E7%BA%A2">口红</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=%E6%8A%A4%E8%82%A4%E5%A5%97%E8%A3%85">护肤套装</a><s class="line"></s></li>
    <li><a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=BB%E9%9C%9C">BB霜</a></li>
</ul>
</div>
<!-- 购物车 -->
<div class="car">
<a href="../html/car.html">
    <p> <em></em></p>
    <a href="../html/car.html"><span>去购物车结算 <i class="iconfont icon-arrow_down
    "></i></span></a>
</a>
<div class="car_close">

    <p>购物车中还没有商品，</p>

    <p> 快去挑选心爱的商品吧！</p>
</div>
</div>
</div>
<!-- nav -->
<div class="nav_warp clearfix">
<div class="nav">
<ul class="nav_list">
    <li class="shouye">
        <a href="../html/index.html">首页</a>
    </li>
    <li class="tax">
        <a href="../html/list.html">极速免税店</a>
    </li>
    <li class="special">
        <a href="../html/list.html">母婴特卖</a>
    </li>
    <li class="sc_hover">
        <a href="../html/list.html">美妆商城<i class="iconfont icon-arrow_down
            "></i></a>
    </li>
    <li class="nav_gj">
        <a href="../html/list.html">国际轻奢</a>
    </li>
    <li class="nav_fz">
        <a href="../html/list.html">服装运动</a>
    </li>
    <li class="nav_xiebao">
        <a href="../html/list.html">鞋包配饰</a>
    </li>
</ul>
<div class="header_pop_subAtc box-shadow" id="header_pop_subAct">
    <div class="mz_imglist ">
        <a target="_blank " href="http://beauty.jumei.com?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 "><img src="http://p0.jmstatic.com/banner/3481/30573_254_135_003-web.jpg "></a>
        <a target="_blank " href="http://mall.jumei.com/xihu?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 "><img src="http://p0.jmstatic.com/banner/3481/30573_254_135_005-web.jpg "></a>
    </div>
    <div class="mz_inner clearfix ">
        <dl style="border-left:none ">
            <dt class="item_int png "><a> 国际大牌</a></dt>
            <dd><a href="http://lancome.jumei.com/?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">兰蔻</a></dd>
            <dd><a href="http://clarins.jumei.com/?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">娇韵诗</a></dd>
            <dd><a href="http://arden.jumei.com/?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">伊丽莎白雅顿</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9B%85%E8%AF%97%E5%85%B0%E9%BB%9B&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">雅诗兰黛</a></dd>
            <dd><a href="http://loreal.jumei.com/?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">欧莱雅</a></dd>
            <dd><a href="http://laneige.jumei.com/?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">兰芝</a></dd>
            <dd><a href="http://clinique.jumei.com/?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">倩碧</a></dd>

            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9B%85%E6%BC%BE&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">雅漾</a></dd>
            <dd><a href="http://thefaceshop.jumei.com?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">菲诗小铺</a></dd>
            <dd><a href="http://innisfree.jumei.com?from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">悦诗风吟</a></dd>

        </dl>
        <dl>
            <dt class="item_hufu png "><a href="http://search.jumei.com/?filter=0-11-1&amp;search=护肤&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank "> 护肤</a></dt>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E6%B4%81%E9%9D%A2&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">洁面</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%88%BD%E8%82%A4%E6%B0%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">爽肤水</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%B2%BE%E5%8D%8E&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">精华</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E4%B9%B3%E6%B6%B2&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">乳液</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9D%A2%E9%9C%9C&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">面霜</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%9C%BC%E9%9C%9C&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">眼霜</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9D%A2%E8%86%9C&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">面膜</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E6%8A%A4%E8%82%A4%E5%A5%97%E8%A3%85&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">护肤套装</a></dd>
        </dl>
        <dl>
            <dt class="item_caizhuang png "><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%BD%A9%E5%A6%86&amp;from=all_null_index_top_nav_cosmetics&amp;cat=&amp;bid=1&amp;lo=3481&amp;mat=30573 " target="_blank ">彩妆</a></dt>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%8D%B8%E5%A6%86&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">卸妆</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=BB%E9%9C%9C&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">BB霜</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%B2%89%E5%BA%95%E6%B6%B2&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">粉底液</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%B2%89%E9%A5%BC&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">粉饼</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%9C%BC%E5%BD%B1&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">眼影</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%9C%BC%E7%BA%BF%E7%AC%94&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">眼线笔</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%9D%AB%E6%AF%9B%E8%86%8F&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">睫毛膏</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%9C%89%E7%AC%94&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">眉笔</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%8F%A3%E7%BA%A2&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">口红</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E8%85%AE%E7%BA%A2&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">腮红</a></dd>
        </dl>
        <dl style="border-bottom:none;border-left:none ">
            <dt class="item_xiangfen png "><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%A6%99%E6%B0%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">香氛</a></dt>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%A5%B3%E5%A3%AB%E9%A6%99%E6%B0%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">女士香水</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%94%B7%E5%A3%AB%E9%A6%99%E6%B0%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">男士香水</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E4%B8%AD%E6%80%A7%E9%A6%99%E6%B0%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">中性香水</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%A6%99%E6%B0%B4+5ml&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">Q版香水</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%A6%99%E6%B0%B4%E5%A5%97%E8%A3%85&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">香水套装</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%B2%BE%E6%B2%B9&amp;cat=197&amp;bid=2_c&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">精油</a></dd>
        </dl>
        <dl style="border-bottom:none ">
            <dt class="item_nanshi png "><a href="http://search.jumei.com/?filter=0-11-1&amp;search=男士护理&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">男士专区</a></dt>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E6%B4%81%E9%9D%A2&amp;cat=418&amp;bid=2_c&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">洁面</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%94%B7%E5%A3%AB%E7%88%BD%E8%82%A4%E6%B0%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">爽肤水</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9D%A2%E9%9C%9C&amp;cat=418&amp;bid=2_c&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">面霜</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%B2%BE%E5%8D%8E&amp;cat=418&amp;bid=2_c&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">精华</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%94%B7%E5%A3%AB%E5%A5%97%E8%A3%85&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">护肤套装</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%94%B7%E5%A3%AB%E6%B4%97%E5%8F%91&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">洗发</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%94%B7%E5%A3%AB%E6%B2%90%E6%B5%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">沐浴</a></dd>
        </dl>
        <dl style="border-bottom:none ">
            <dt class="item_hot png "><a>热门搜索</a></dt>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9D%A2%E8%86%9C%E8%B4%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">面膜贴</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E6%B4%97%E9%9D%A2%E5%A5%B6&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">洗面奶</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%94%87%E8%86%8F&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">唇膏</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%8E%BB%E9%BB%91%E5%A4%B4&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">去黑头</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%A5%9B%E6%96%91&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">祛斑</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E9%9A%94%E7%A6%BB&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">隔离</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E7%A5%9B%E7%97%98&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">祛痘</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E5%8E%BB%E8%A7%92%E8%B4%A8&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">去角质</a></dd>
            <dd><a href="http://search.jumei.com/?filter=0-11-1&amp;search=%E6%8C%87%E7%94%B2%E6%B2%B9&amp;from=all_null_index_top_nav_cosmetics&amp;lo=3481&amp;mat=30573 " target="_blank ">指甲油</a></dd>
        </dl>
    </div>
</div>
<span class="ture_one"></span>
<span class="ture_tow"></span>
</div>




<div class="locations">

<ul class="locations_list">
    <li>
        <a href="" class="use">
            <s></s>
        </a>
    </li>
    <li>
        <a href="../html/car.html" class="location_car">
            <span></span>
            <span></span>
            <p>购物车</p>
            <span class="num">0</span>
            <span></span>
        </a>
    </li>
    <li>
        <a href="" class="qian">
            <s></s>
        </a>
    </li>
    <li>
        <a href="" class="aixin">
            <s></s>
        </a>
    </li>
    <li>
        <a href="" class="jiaoy">
            <s></s>
        </a>
    </li>
    <li>
        <a href="" class="code">
            <s></s>
        </a>

    </li>
    <li>
        <a href="" class="toux">
            <s></s>
        </a>

    </li>
    <li>
        <a href="" class="locations_top">
            <s></s>
        </a>

    </li>
</ul>

</div>









</div>
`
    headerWarp.innerHTML = str
}




// 底部渲染
function footer() {
    let footer = document.querySelector(".footer_top")
    let str = "";
    str += `
    <ul class="footer_wom clearfix">
    <li>
        <a href="">
            <em></em>
            <span>值得信赖美妆电商</span>
            <span>四千万用户信赖</span>
        </a>
    </li>
    <li>
        <a href="">
            <em></em>
            <span>成功在美上市</span>
            <span>股票代码NYSE:JMEI</span>
        </a>
    </li>
    <li>
        <a href="">
            <em></em>
            <span>品牌防伪码</span>
            <span>支持品牌官网验真:JMEI</span>
        </a>
    </li>
    <li>
        <a href="">
            <em></em>
            <span>百万用户口碑</span>
            <span>帮你只选对的，不选贵的</span>
        </a>
    </li>
    <li>
        <a href="">
            <em></em>
            <span>订单闪电发货</span>
            <span>1.5小时订单急速出库</span>
        </a>
    </li>
    <li>
        <a href="">
            <em></em>
            <span>大牌明星热荐</span>
            <span>打造精致明星脸</span>
        </a>
    </li>
</ul>
<div class="footer_relation clearfix">
    <div class="footer_ul">
        <ul>
            <li class="links">
                <a href="">服务保障</a>
            </li>
            <li>
                <a href="">品牌真品防伪码</a>
            </li>
            <li>
                <a href="">正品保证</a>
            </li>
            <li>
                <a href="">专属客服服务</a>
            </li>
            <li>
                <a href="" class="zc">总裁邮箱ceo@jumei.com</a>
            </li>
        </ul>
        <ul>
            <li class="links">
                <a href="">使用帮助</a>
            </li>
            <li>
                <a href="">新手指南</a>
            </li>
            <li>
                <a href="">常见问题</a>
            </li>
            <li>
                <a href="">帮助中心</a>
            </li>
            <li>
                <a href="">用户协议</a>
            </li>
            <li>
                <a href="">公示制度</a>
            </li>
            <li>
                <a href="">聚美隐私权政策</a>
            </li>
            <li>
                <a href="">个人信息管理规则</a>
            </li>
            <li>
                <a href="">意见反馈及投诉举报规则</a>
            </li>
            <li>
                <a href="">知识产权维权处理规则</a>
            </li>
            <li>
                <a href="">评价管理规则</a>
            </li>
        </ul>
        <ul>
            <li class="links">
                <a href="">支付方式</a>
            </li>
            <li>
                <a href="">货到付款</a>
            </li>
            <li>
                <a href="">在线支付</a>
            </li>
            <li>
                <a href="">余额支付</a>
            </li>
            <li>
                <a href="">现金券支付</a>
            </li>

        </ul>
        <ul>
            <li class="links">
                <a href="">配送方式</a>
            </li>
            <li>
                <a href="">包邮政策</a>
            </li>
            <li>
                <a href="">配送说明</a>
            </li>
            <li>
                <a href="">运费说明</a>
            </li>
            <li>
                <a href="">验货签收</a>
            </li>
        </ul>
        <ul>
            <li class="links">
                <a href="">售后服务</a>
            </li>
            <li>
                <a href="">正品承诺</a>
            </li>
            <li>
                <a href="">售后咨询</a>
            </li>
            <li>
                <a href="">退货政策</a>
            </li>
            <li>
                <a href="">退货办理</a>
            </li>
        </ul>
    </div>
    <div class=" footer_r">
        <div>
            <p>手机聚美</p>
            <em></em>
            <span>下载移动客户端</span>
        </div>
        <div>
            <p>聚美微信</p>
            <em></em>
            <span>聚美官方微信</span>
        </div>
    </div>
</div>
<!-- 图片 -->
<div class="footer_dy">

</div>

<!-- con -->
<div class="footer_center">
    <div class="footer_con" id="footer_link">
        <a href="http://www.jumei.com/about/about_us?from=footer" target="_blank" rel="nofollow">关于聚美优品</a>
        <a href="http://ir.jumei.com?from=footer" target="_blank" rel="nofollow">INVESTOR RELATIONS</a>
        <a href="http://partner.jumei.com/join/lead?from=footer" target="_blank" rel="nofollow">合作招商</a>
        <a href="http://www.jumei.com/help/get_update?from=footer" target="_blank" rel="nofollow">获取更新</a>
        <a href="http://jumei.ihrscloud.com/outterSupport/jumei?from=footer" target="_blank" rel="nofollow">加入聚美</a>
        <a href="http://www.jumei.com/i/market/cooperation?from=footer" target="_blank" rel="nofollow">品牌合作专区</a>
        <!-- <a href="http://cps.jumei.com?from=footer" target="_blank" rel="nofollow">网站联盟</a> -->
        <a href="http://www.jumei.com/about/news_center?from=footer" target="_blank" rel="nofollow">媒体报道</a>
        <a href="http://www.jumei.com/about/business?from=footer" target="_blank" rel="nofollow">商务合作</a>
    </div>
</div>

<div class="footer_bot clearfix">
    <div class="footer_bot_center">

        <p class="copy">
            COPYRIGHT © 2010-2019 北京创锐文化传媒有限公司 JUMEI.COM 保留一切权利。 客服热线：400-123-8888
            <br> 京公网安备 11010102001226 | <a href="http://www.miibeian.gov.cn" target="_blank" rel="nofollow">京ICP证111033号</a> | <a href="http://mp5.jmstatic.com/mobile/pc/shipin_cr.jpg">食品经营许可证</a> | <a href="http://mp5.jmstatic.com/mobile/pc/yyzz_cr.jpg"
                target="_blank" rel="nofollow">营业执照</a> | <a href="http://mp5.jmstatic.com/mobile/pc/ICP_cr.jpg" target="_blank" rel="nofollow">ICP许可证</a> | <a href="http://mp5.jmstatic.com/mobile/pc/chuban_cr.jpg" target="_blank" rel="nofollow">出版物经营许可证</a>                    | <a href="http://mp5.jmstatic.com/mobile/pc/yiliao_cr.jpg" target="_blank" rel="nofollow">第二类医疗器械经营备案凭证</a> | <a href="http://mp5.jmstatic.com/mobile/pc/wlsp_cr.jpg" target="_blank" rel="nofollow">网络食品交易第三方平台提供者备案信息表</a> |
            <a href="http://mp5.jmstatic.com/mobile/pc/zzdx_cr.jpg" target="_blank" rel="nofollow">增值电信业务经营许可证</a>
        </p>

        <p class="footer_pic">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </p>
    </div>
</div>
    `
    footer.innerHTML = str;
}