/* 
    js工具库：封装一些比较常用的函数
*/

// 计算任意参数之和
function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    // 把结果返回出去
    return sum;
}


function maxNum() {
    // 假设第一个为最大值
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max;
}


function minNum() {
    // 假设第一个为最小值
    var min = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]
        }
    }
    return min;
}


// 封装一个函数，求 n-m之间随机整数
function randomNumber(n, m) {
    if (n > m) {
        return parseInt(Math.random() * (n - m + 1) + m)
    } else {
        return parseInt(Math.random() * (m - n + 1) + n)
    }
}

// 封装一个函数 把url的参数转化为 对象
function changeObj(str) {
    var arr = str.split("&");
    var obj = {}; //定义一个空对象用
    arr.forEach(function(item) {
        var newArr = item.split("=");
        obj[newArr[0]] = newArr[1];
    });
    return obj
}

// 封装一个随机颜色函数
function randomColor() {
    return "rgb(" + randomNumber(0, 255) + "," + randomNumber(0, 255) + "," + randomNumber(0, 255) + ")";
}



/* 
    封装一个动画函数
    参数：
        目标值
        给谁做动画
        做什么样式的动画（css属性）


    思考：多属性的动画？
*/
// var timer;
function move(ele, attr, target) {
    // 获取元素的当前值
    let style;
    let speed;
    console.log(ele.timer);
    // 开启这次定时器之前 先清空定时器
    clearInterval(ele.timer);

    // 定义一个定时器 来执行动画的
    // 把定时器当成元素的属性存储起来
    ele.timer = setInterval(() => {
        // 没执行一次定时器的时候就需要获取元素的最新的当前值
        style = parseInt(getStyle(ele, attr));
        speed = (target - style) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        style += speed;
        console.log(1);
        if (target == style) {
            clearInterval(ele.timer);
        }
        ele.style[attr] = style + 'px';
    }, 50)
}

// 获取样式的函数
function getStyle(ele, attr) {
    var style;
    if (window.getComputedStyle) {
        style = window.getComputedStyle(ele)[attr];
    } else {
        style = ele.currentStyle[attr];
    }
    return style;
}


// 放大镜

class Enlarge {
    constructor(ele) {
        this.ele = document.querySelector(ele);
        this.show = this.ele.querySelector(".show");
        this.showImg = this.show.querySelector("img");
        this.mask = this.show.querySelector(".mask");

        this.btn = this.ele.querySelectorAll(".list p");
        this.enlarge = this.ele.querySelector(".enlarge");

        this.init();
    }

    init() {
        // 如果不想使用箭头函数 ，那么可以用子啊这个位置用一个变量把this存起来
        // let _this = this;
        this.show.onmouseover = () => {
            // _this.setStyle()
            this.mask.style.display = this.enlarge.style.display = 'block';
            this.setStyle();
        }

        this.show.onmouseout = () => {
            this.mask.style.display = this.enlarge.style.display = 'none';
        }

        this.show.onmousemove = () => {
                this.maskMove();
            }
            // 循环的给btn元素绑定点击事件
        this.btn.forEach((item, index) => {
            item.onclick = () => {
                let e = window.event;

                // item就是当前点击的元素
                this.changeImage(item, e.target)
            }
        })
    }

    setStyle() {
        /* 
            【1】放大镜的盒子的大小需要动态设置的，根据show盒子 show中mask遮罩层 和 放大镜的背景图来决定
                show       放大镜的背景图
                ----- === -----------------
                mask        放大镜盒子的宽度

            因为mask 和放大镜都是隐藏的，隐藏的时候是获取不到元素的宽高
            必须在鼠标滑过show盒子的时候显示mask和放大镜的时候在调用setStyle
        */
        this.showWidth = this.show.offsetWidth;
        this.showHeight = this.show.offsetHeight;

        this.maskWidth = this.mask.offsetWidth;
        this.maskHeight = this.mask.offsetHeight;

        let style = getStyle(this.enlarge, 'backgroundSize');
        // style = 750px 1000px
        // 获取背景图的宽高
        this.styleX = parseInt(style.split(" ")[0]);
        this.styleY = parseInt(style.split(" ")[1]);

        this.enlargeWidth = this.maskWidth * this.styleX / this.showWidth;
        this.enlargeHeight = this.maskHeight * this.styleY / this.showHeight;

        // 设置放大镜盒子的宽高
        this.enlarge.style.width = this.enlargeWidth + 'px';
        this.enlarge.style.height = this.enlargeHeight + 'px';

    }

    maskMove() {
        let e = window.event;
        // 求光标在show盒子中left 和 top值

        // 求鼠标在页面中 x 和 y  pageX pageY
        // 求大盒子的左边和上边的距离（偏移量） offsetLeft offsetTop
        let x = e.pageX - this.ele.offsetLeft;
        let y = e.pageY - this.ele.offsetTop;
        let left = x - this.maskWidth / 2;
        let top = y - this.maskHeight / 2;

        // 边界值的判断
        if (left <= 0) {
            left = 0
        }
        if (top <= 0) {
            top = 0;
        }
        if (left >= this.showWidth - this.maskWidth) {
            left = this.showWidth - this.maskWidth
        }
        if (top >= this.showHeight - this.maskHeight) {
            top = this.showHeight - this.maskHeight
        }

        this.mask.style.left = left + 'px';
        this.mask.style.top = top + 'px';

        //放大镜的背景图也跟着移动
        this.enlargeMove(left, top)
    }

    enlargeMove(x, y) {
        /* 
            mask在show盒子移动的距离      背景图移动的距离
            -----------------------  =  ------------------
               show盒子的宽度             背景图的宽度
            
           背景图移动X = x *背景图的宽度 / show盒子宽度
           背景图移动Y = y *背景图的高度 / show盒子高度

            背景图移动X = x *this.enlargeWidth / this.showWidth
            背景图移动Y = y *this.enlargeHeight / this.showHeight

            背景图的定位 background-position:x y
        */
        let bgX = x * this.styleX / this.showWidth;
        let bgY = y * this.styleY / this.showHeight;

        this.enlarge.style.backgroundPosition = `${-bgX}px ${-bgY}px`;

    }

    changeImage(curItem, target) {
        this.btn.forEach(item => {
            item.classList.remove('active')
        });
        // curItem 绑定点击事件的这元素
        curItem.classList.add('active');

        // target就是当前点击的这个元素
        let midelImg = target.getAttribute('midelimg');
        this.showImg.src = midelImg;

        let bigImg = target.getAttribute('bigimg');
        this.enlarge.style.backgroundImage = `url(${bigImg})`;
    }
}