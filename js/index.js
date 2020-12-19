      // 头部
      header()
          // 底部
      footer()




      let car = document.querySelector(".car")
      let scCar = document.querySelector(".car_close")
      let data = document.querySelector("#data")
      let locations = document.querySelector(".locations")
      let tax = document.querySelector(".tax")
      let special = document.querySelector(".special")
      let navList = document.querySelector(".nav_list")
      let navGj = document.querySelector(".nav_gj")
      let navFz = document.querySelector(".nav_fz")
      let navXiebao = document.querySelector(".nav_xiebao")
      let navSc = document.querySelector(".sc_hover")







      // 点击tax
      //   navList.onclick = function(e) {

      //           e.preventDefault()
      //           if (e.target.className == tax || special || navGj || navFz || navXiebao || navSc) {
      //               window.location = "../html/list.html";

      //           }


      //       }
      // http://www.jumeiglobal.com/ajax_new/getDealsByPage?type=new&pagesize=20&index=10&page=index2&callback=global_load_callback&pageflag=2020121414c791dbed94c8b087ef17d65b30fc5f9e

      // 购物车显示隐藏效果
      car.onmouseover = function() {

          scCar.style.display = "block ";

      }
      car.onmouseleave = function() {
              scCar.style.display = "none ";
          }
          // 动画效果
      $('.sc_hover').mouseover(function() {
          $('#header_pop_subAct').show('1.2s', 'linear')
      });

      $('#header_pop_subAct').mouseleave(function() {
          $('#header_pop_subAct').hide('1.2s', 'linear')
      });


      //   搜索
      $("#search").click(function() {

          getData()
      })

      //   排序
      $(".up").click(function() {
          getData(1)
      })
      $(".down").click(function() {
          getData(2)
      })


      getData()
          // 发送请求获取数据
      function getData(order = '') {
          let newData = {}
          let val = $(".input").val() || 　''
          newData.search = val
          newData.order = order
          pAjax({
              url: '../api/index.php',
              data: newData
          }).then(res => {
              res1 = res.list
              console.log(res1);

              let str = " "
              if (res1.length == 0) {
                  str = "你搜索的商品暂时没有"
                  data.innerHTML = str;
                  return
              }
              res1.forEach(item => {
                  str += ele(item)


              })
              data.innerHTML = str;
              // scrollTo(0, 0)

              var addCar = document.querySelectorAll(".addCar")
              var dataLi = document.querySelectorAll(".data_li")
              var data_dw_tow = document.querySelectorAll(".data_dw_tow")






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





              dataLi.forEach((item, index) => {
                  // console.log(pid);

                  item.onclick = function(e) {
                      if (!getCookie('login')) {
                          alert("你没有登录")
                          window.location = `../html/login.html`;
                          return
                      }

                      e.preventDefault()

                      if (e.target.classList.contains('addCar')) {
                          e.stopPropagation()
                          num++
                          let pid = res1[index].pid
                          let proDef = res1[index].pro_def
                          let proFrom = res1[index].pro_from
                          let timeString = res1[index].time_string
                          let mediumName = res1[index].medium_name
                          let pricEhome = res1[index].price_home
                          let buyerNumber = res1[index].buyer_number
                          let prices = res1[index].prices
                          let username = getCookie('login')

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
                          })


                      } else {
                          let pid = item.getAttribute('pid')
                          window.location = `./detail.html?pid=${pid}`;
                      }




                  }
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
          })



      }


      function ele(item) {
          return `
      <li class="data_li" pid=${item.pid}>
          <span class="speed"></span>
          <a href=""><img src="${item.pro_def}" alt=" " class="data_pic"></a>

          <p class="data_text">
              <a href="">${item.medium_name}</a></p>
          <div>

              <p class="data_price">
                  <a href="">￥<span>${item.price_home}</span></a></p>
          </div>
          <div class="data_dw">
              <div class="data_message">
                  <p><a href="">海外直踩 海外价格 闪电发货</a></p>
              </div>
          </div>
          <div class="data_dw_tow">
              <p class="addCar">
                  加入购物车
              </p>
          </div>

      </li>
      `
      }


      // 轮播图

      var mySwiper = new Swiper('.swiper-container', {
          autoplay: true, //可选选项，自动滑动
          loop: true,
          autoplay: {
              delay: 2000, //2秒切换一次
              disableOnInteraction: false,
          },
      })