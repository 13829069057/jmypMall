 // 头部
 header()
     // 底部
 footer()
 $('.sc_hover').mouseover(function() {
     $('#header_pop_subAct').show('1.2s', 'linear')
 });

 $('#header_pop_subAct').mouseleave(function() {
     $('#header_pop_subAct').hide('1.2s', 'linear')
 });







 // 内容渲染
 pAjax({
     url: '../api/index.php',
 }).then(res => {
     let str = "";
     let mian = document.querySelector(".mian")
     res1 = res.list
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
     str +=
         `<ul class="haiwai">
     <li>

     </li>
 </ul>`
     res1.forEach(item => {

         str += `
         <div class="mian_product clearfix" pid=${item.pid}>
     <div class="product_l">
         <img src="${item.pro_def}" alt="">

     </div>
     <div class="product_r clearfix">
         <div class="product_time clearfix">
             <img src="${item.pro_from}" alt="">
             <ul>
                 <li>bangzi</li>
                 <li>韩国</li>
             </ul>
             <P class="diff">
                 <span>距结束还剩</span>
                 <span>
              ${item.time_string}    
                 </span>
             </P>
         </div>
         <div class="product_int">
             <p>
                 <span>${item.medium_name}</span> 
                 AGE20'S爱敬精华气垫1 8新版三色拉花14g*2,内含气垫壳+替换芯*2+粉扑*2,相当于正装+替换芯,问题肌肤的救星，遮痘印的同时，还能修饰毛孔!让底妆-次搞定,给你无法识破的美肌修饰,时，还能修饰毛孔!让底妆-次搞定,给你无法识破的美肌修饰,打造自然裸妆效果。三色外盒不同主打特色:盆遮瑕、粉盒保
             </p>

             <p class="price">
                 ￥
                 <span>${item.price_home}
                 </span>
                 <em>包邮</em>
             </p>
             <div class="goumai">
                 <span>${item.buyer_number}</span>人以购买
             </div>
         </div>

     </div>
     <div class="mian_details">
     </div>
 </div>


     `
     })
     mian.innerHTML = str;
     let mianProduct = document.querySelectorAll(".mian_product")
     mianProduct.forEach(item => {
         item.onclick = function() {

             let pid = item.getAttribute('pid');
             console.log(pid);

             window.location = `./detail.html?pid=${pid}`;

         }
     })
 })



 let locationStop = document.querySelector(".locations_top")
 window.onscroll = function() {
     if (scrollY > 500) {
         locationStop.style.display = "block"
     }
     if (scrollY <= 500) {
         locationStop.style.display = "none"
     }
 }

 locationStop.onclick = function() {
     scrollTo({
         top: 0,
         behavior: "smooth"
     })
 }