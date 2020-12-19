  // jQuery
  $(function($) {
      $(".confirm ").click(function() {
          $(".alert-box-mask").css({
              display: "none"
          })
      })
  })

  // js原生

  let tel = document.querySelector("#tel")
  let password = document.querySelector("#password")
  let telCw = document.querySelector(".telCw")
  let telDui = document.querySelector(".telDui")
  let yzm = document.querySelector("#yzm")
  let yzmCw = document.querySelector(".yzmCw")
  let yzmDui = document.querySelector(".yzmDui")
  let pswCw = document.querySelector(".pswCw")
  let pswDui = document.querySelector(".pswDui")
  let repe = document.querySelector("#repe")
  let repeCw = document.querySelector(".repeCw")
  let repeDui = document.querySelector(".repeDui")







  // 验证码
  let verifyCode = new GVerify({
      id: "gVerify",
      length: 4
  });




  // 正则
  let reg1 = /^1[2-9]\d{9}$/;
  let reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;




  // 手机号验证
  function telYz() {
      if (!reg1.test(tel.value)) {
          telCw.innerHTML = "请输入11位数的手机号码"
          telDui.style.display = "none"
          return false


      } else {
          telDui.style.display = "block"
          telCw.innerHTML = ""
          return true
      }
  }
  tel.onblur = function() {
      if (tel.value == "") {
          return
      }
      telYz()
  }



  // 验证码验证

  function yzmYz() {
      let res = verifyCode.validate(yzm.value)
      if (res) {
          yzmCw.innerHTML = ""
          yzmDui.style.display = "block"
          return true
      } else {
          yzmCw.innerHTML = "请输入正确的验证码"
          yzmDui.style.display = "none"
          return false
      }

  }
  yzm.onblur = function() {
      if (yzm.value == "") {
          return
      }
      yzmYz()
  }


  // 密码验证
  function pswYz() {

      if (!reg2.test(password.value)) {
          pswCw.innerHTML = "请输入6到16为数字和字母混合的密码"
          pswDui.style.display = "none"
          return false

      } else {
          pswDui.style.display = "block"
          pswCw.innerHTML = ""
          return true
      }

  }
  password.onblur = function() {
      if (password.value == "") {
          return
      }
      pswYz()
  }


  // 密码重复验证


  function repeYz() {
      if (repe.value == password.value && repe.value != "") {
          repeDui.style.display = "block"
          repeCw.innerHTML = ""
          return true
      } else {
          repeCw.innerHTML = "请输入重复的密码"
          repeDui.style.display = "none"
          return false

      }

  }
  repe.onblur = function() {
      if (repe.value == "") {
          return
      }
      repeYz()
  }


  // 点击注册
  let btn = document.querySelector(".btn")


  btn.onclick = function(e) {
      e.preventDefault()
      if (tel.value == "" || password.value == "" || repe.value == "" || yzm.value == "") {
          alert("信息不能为空")
          return
      }
      if (!telYz()) {
          alert("请输入正确的手机号")
          return
      }
      if (!yzmYz()) {
          alert("请输入正确的验证码")
          return
      }
      if (!pswYz()) {
          alert("请输入正确的密码")
          return
      }
      if (!repeYz()) {
          alert("请重新输入重复密码")
          return
      }
      if (telYz() && yzmYz() && pswYz() && repeYz()) {
          pAjax({
              url: '../api/getaddData.php',
              data: {
                  tel: tel.value,
                  password: password.value
              }

          }).then(res2 => {
              if (res2.code == 0) {
                  alert(`${res2.msg}`)
                  return
              }
              alert("注册成功")
              window.location = `./login.html`;
          })
      }


  }