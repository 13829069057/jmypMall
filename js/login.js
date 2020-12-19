let btn = document.querySelector(".btn")
let tel = document.querySelector("#tel")
let password = document.querySelector("#password")
let telCw = document.querySelector(".telCw")
let pswCw = document.querySelector(".pswCw")

// 正则
let reg1 = /^1[2-9]\d{9}$/;
let reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

// 手机号验证
function telYz() {

    tel.onblur = function() {
        if (tel.value == "") {
            return
        }
        if (!reg1.test(tel.value)) {
            telCw.innerHTML = "请输入11位数的手机号码"
            telDui.style.display = "none"

        } else {
            telDui.style.display = "block"
            telCw.innerHTML = ""
            return true
        }
    }
}

// 密码验证
function pswYz() {
    password.onblur = function() {
        if (password.value == "") {
            return
        }
        if (!reg2.test(password.value)) {
            pswCw.innerHTML = "请输入6到16为数字和字母混合的密码"
            pswDui.style.display = "none"

        } else {
            pswDui.style.display = "block"
            pswCw.innerHTML = ""
            return true
        }
    }

}
pswYz()


// 点击登录
btn.onclick = function(e) {
    e.preventDefault()
    pAjax({
        url: '../api/getLogin.php',
        data: {
            tel: tel.value,
            password: password.value
        }

    }).then(res => {
        console.log(res.code);
        if (res.code == 0) {
            alert(`${res.msg}`)
            return
        }

        setCookie('login', tel.value)
        alert("登录成功")
        window.location = `./list.html`;
    })
}