header()

footer()

let reg = /id=(\d+)/;

if (!reg.test(location.search)) {
    location.href = '../html/list.html'
}

let pid = reg.exec(location.search)[1];


pAjax({
    url: '../api/goodlist.php',
    data: {
        pid,
    }
}).then(res => {



    let mian = document.querySelector(".mian")
    let res1 = res.detail
    let str = ""

    str += `


<div class="main_detail" pid=${res1.pid}>
<div class="detail_l">
<div class="detail_tit">
   <p>
       ${res1.medium_name}</p>
   <div class="numtimer_box time">
       <span class="tips">距特卖结束${res1.time_string}</span>
   </div>
</div>
<div class="main_pic">
<div class="show">
<img src="${res1.pro_def}" alt="">
<div class="mask"></div>
</div>

<div class="enlarge">

</div>
   

</div>
<div class="product_info">
   <div class="product_info_list fl">
       <a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=保湿&amp;from=home_deal_detail_sidebar_functions">保湿</a>
       <a target="_blank" href="http://search.jumei.com/?filter=0-11-1&amp;search=补水&amp;from=home_deal_detail_sidebar_functions">补水</a>
   </div>
   <div class="jiathis_style fr">
       <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico_jiathis" target="_blank">分享到 &gt;</a>
   </div>
</div>
</div>
<div class="detail_r">
<div class="first clearfix">
   <img src="http://p0.jmstatic.com/brand/logo_180/7634.jpg" alt="">
   <div class="detail_box">
       <img src="${res1.pro_from}" alt="">
       <ul>
           <li>
               <a href="">韩国品牌</a>
           </li>
           <li>
               <a href="">Korea</a>
           </li>

       </ul>
   </div>
</div>
<div class="r_second">
   <ul>
       <li>
           <p><em>￥</em><span>${res1.price_home}</span>
               <del>￥${res1.prices}</del>
       </li>
   </ul>
   <div class="r_wrap">
       <p class="r_policy">
           <em>减</em>
           <span>爆款专区限时满99元减10元</span>

       </p>
   </div>
</div>

<div class="people clearfix">
   <div class="num fl"><em>${res1.buyer_number}</em>人已购买</div>
</div>
<div class="r_third">
   <p>包邮政策: 本商品单件包邮 (新疆部分区域除外)</p>
   <p>服务政策: 本商品不支持退货</p>
   <p>型&nbsp&nbsp&nbsp&nbsp&nbsp号<input type="text" placeholder="请选择型号" class="btn">
       <ul class="xinhao">
           <li>型号1</li>
           <li>型号2</li>
           <li>型号3</li>
       </ul></p>
</div>

<div class="r_fourth">
   <a href="">加入购物车  <i></i></a>
</div>
</div>

</div>
<div class="ptb_30">
<div id="spxx" class="content_nav_con  content_book" loaded="loaded">
<div class="detail_content guts_box"></div>
<div class="content_text">
   <div class="deal_con_content">
       <table border="0" cellpadding="0" cellspacing="0" style="font-family:arial;">

       </table>
   </div>
</div>
<div class="content_img">
   <img src="http://f0.jmstatic.com/btstatic/pc_static/xf-book.png" alt="gyhwg_img">
</div>
</div>

<div id="spxq" class="content_nav_con" loaded="loaded">
<div class="detail_content spxq_box"></div>
<div class="content_text"><img src="http://p12.jmstatic.com/global/image/202001/04/1578118132.0684.jpg" alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/201912/30/1577694108.1565.jpg" alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793396.0024.jpg"
       alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793396.4322.jpg" alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793396.9778.jpg" alt=""
       style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793398.3618.jpg" alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793399.0048.jpg" alt="" style="white-space:normal;">
   <img src="http://p12.jmstatic.com/global/image/202007/15/1594793435.6177.jpg" alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793436.3433.jpg" alt="" style="white-space:normal;">
   <img src="http://p12.jmstatic.com/global/image/202007/15/1594793436.9739.jpg" alt="" style="white-space:normal;">
   <img src="http://p12.jmstatic.com/global/image/202007/15/1594793437.5366.jpg" alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793438.1642.jpg" alt="" style="white-space:normal;">
   <span style="white-space:normal;"></span><img src="http://p12.jmstatic.com/global/image/202007/15/1594793399.6378.jpg" alt="" style="white-space:normal;"><img src="http://p12.jmstatic.com/global/image/202007/15/1594793400.247.jpg"
       alt="" style="white-space:normal;">
   <img src="http://p12.jmstatic.com/global/image/202007/15/1594793400.9685.jpg" alt="" style="white-space:normal;"></div>
</div>

<div id="syff" class="content_nav_con" loaded="loaded">
<div class="detail_content syff_box"></div>
<div class="content_text">
   <p><img src="http://p12.jmstatic.com/global/image/201908/27/1566876236.5793.jpg" alt=""></p>
</div>
</div>


<div id="spsp" class="content_nav_con" loaded="loaded">
<div class="detail_content spsp_box"></div>
<div class="content_text"><img src="http://p12.jmstatic.com/global/image/201908/27/1566876187.6779.jpg" alt=""><img src="http://p12.jmstatic.com/global/image/201908/27/1566876188.3425.jpg" alt=""><img src="http://p12.jmstatic.com/global/image/201908/27/1566876188.9587.jpg"
       alt=""></div>
</div>

<!--划线价说明图片-->
<img src="http://p0.jmstatic.com/mobile/other/other/marketprice_pc.png" class="marketprice_pc">
<!--划线价说明图片 end-->

<div id="yhkb" class="content_nav_con yhkb" loaded="loaded">
<div class="detail_content yhkb_box" id="deal_koubei"></div>
<div class="content_text" id="script_koubei" koubeiwrap="script_koubei" productid="4987754"></div>
</div>
<div id="cjwt" class="content_nav_con" loaded="loaded">
<div class="detail_content gyhwg_box"></div>
<div class="content_img">
   <a href="http://www.jumeiglobal.com/about/?from=footer" class="static_img" style="display: block;" target="_blank">
       <img src="http://mp5.jmstatic.com/jmhtml/pc/3_03_1.jpg" alt="gyhwg_img01">
   </a>
   <img src="http://p1.global.jmstatic.com/assets/global/3_08.jpg" alt="gyhwg_img02">
</div>
</div>
<div id="lxjm" class="content_nav_con lxjm">
<div class="detail_content lxjm_box"></div>
<div class="content_img">
   <img src="http://mp5.jmstatic.com/jmhtml/api/global_kefu.png" alt="lxjm_img">
   <a class="myfaq" id="detailfaq" href="javascript:;"></a>
   <a class="myticket" href="http://www.jumei.com/i/RMA/show" target="_blank"></a>
</div>
</div>
<div id="jmcjwt" class="content_nav_con jmcjwt">
<div class="detail_content jmcjwt_box"></div>
<div class="content_img">
   <div id="jmcjwt_img" class="jmcjwt_img">
       <!-- 常见问题 -->
       <div class="cjwt clearfix">
           <div class="leftcon clearfix">
               <div class="question">
                   <div class="title">
                       Q . 聚美极速免税店如何保证提供海外正品并确保低价
                   </div>
                   <div class="main">
                       <div class="top"></div>
                       <div class="content clearfix">
                           <div class="left">A .</div>
                           <div class="right">
                               我们的专业招商团队只从品牌官方或具有官方授权的贸易集团批量进货，商品从海外发货后直接进入政府监管的仓库保存，取消传统层层代理，让您直接享受海外价格的正品爆款。
                           </div>
                       </div>
                       <div class="bottom"></div>
                   </div>
               </div>
               <div class="question">
                   <div class="title">
                       Q . 什么时候发货？多久可以收到？
                   </div>
                   <div class="main">
                       <div class="top"></div>
                       <div class="content clearfix">
                           <div class="left">A .</div>
                           <div class="right">
                               您的商品将在12小时内包装出库提交海关查验，通常24小时即可过关转由国内快递送货，平均3天可到达您手上<span class="small">（偏远地区除外）</span>，您可通过订单发货状态实时监控。海外直邮商品，24小时内发货（香港节假日除外），预计7－15天到货（偏远区域除外）。
                           </div>
                       </div>
                       <div class="bottom"></div>
                   </div>
               </div>
           </div>
           <div class="rightcon clearfix">
               <div class="question">
                   <div class="title">
                       Q . 为什么极速免税店可以从海关保税区发货而不是海外？
                   </div>
                   <div class="main">
                       <div class="top"></div>
                       <div class="content clearfix">
                           <div class="left">A .</div>
                           <div class="right">
                               传统海淘从海外发货时间长、容易丢、运费贵缺点非常多，聚美极速免税店通过与政府部门合作，商品经过政府各项查验后直接用国内物流发货，保真省钱的同时至少为您节省7-20天收货时间。
                           </div>
                       </div>
                       <div class="bottom"></div>
                   </div>
               </div>

               <div class="question">
                   <div class="title">
                       Q . 既然是海外商品，退货会不会很麻烦？
                   </div>
                   <div class="main">
                       <div class="top"></div>
                       <div class="content clearfix">
                           <div class="left">A .</div>
                           <div class="right">
                               不会！聚美极速免税店提供和聚美优品化妆品相同的7天拆封无理由退货服务；并且退货只需寄回国内仓库，聚美极速免税店为您承担最高10元邮费。特殊商品不支持退货，请您注意查看页面提示。
                           </div>
                       </div>
                       <div class="bottom"></div>
                   </div>
               </div>
           </div>
       </div>
       <!-- 常见为题结束 -->
   </div>
   <div id="btn" class="btn">点击查看 +</div>
</div>
</div>

</div>

`
    mian.innerHTML = str;
    let btn = document.querySelector(".btn")
    let xinhao = document.querySelector(".xinhao")
    let li = document.querySelectorAll(".xinhao li")
    btn.onfocus = function() {
        xinhao.style.display = "block"
        li.forEach((item, index) => {
            item.onmousedown = function() {
                if (index == 0) {
                    btn.value = item.innerHTML
                }
                if (index == 1) {
                    btn.value = item.innerHTML
                }
                if (index == 2) {
                    btn.value = item.innerHTML
                }
            }
        })
    }


    btn.onblur = function() {

        xinhao.style.display = "none"
    }


    let show = document.querySelector(".show")

    $('.enlarge').css('background-image', `url(${ $('.show img').attr('src')})`);
    new Enlarge(".main_pic")



    let fourth = document.querySelector(".r_fourth")
    let num = 0

    function getCartNum() {
        let username = getCookie('login')
        if (username) {
            pAjax({
                url: "../api/getCar.php",
                data: {
                    username,
                },
            }).then(res => {
                res.list.forEach(item => {
                    num = num + item.data_num * 1
                })
                let numDom = document.querySelector(".num")
                numDom.innerHTML = num;
            })
        }

    }
    getCartNum()

    // let num2 = num;
    fourth.onclick = function(e) {

        e.preventDefault()
        num++
        if (!(btn.value == "")) {

            let username = getCookie('login')
            let proDef = res1.pro_def
            let proFrom = res1.pro_from
            let timeString = res1.time_string
            let mediumName = res1.medium_name
            let pricEhome = res1.price_home
            let buyerNumber = res1.buyer_number
            let prices = res1.prices

            let numDom = document.querySelector(".num")

            numDom.innerHTML = num;






            pAjax({
                url: '../api/addcar.php',
                data: {
                    pid,
                    proDef,
                    proFrom,
                    timeString,
                    mediumName,
                    pricEhome,
                    buyerNumber,
                    username,
                    prices,
                }
            }).then(res => {
                alert("添加成功")
                pAjax({
                    url: '../api/getcar.php',
                    data: {
                        username,
                    }
                }).then(res1 => {
                    let len = res1.list
                    let lens = len.length
                })
            })

        } else {
            alert("请选择型号")
        }


    }

})