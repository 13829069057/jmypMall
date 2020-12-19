let login = getCookie('login')
let main = document.querySelector(".main")

if (!login) {
    window.location = `./login.html`;
}

pAjax({
    url: '../api/getCar.php',
    data: {
        username: login,
    }
}).then(res => {
    console.log(res);

    localStorage.setItem('goodsList', JSON.stringify(res.list));



    render(res.list)
})




function render(data) {
    console.log(data);
    let str = "";


    if (!data.length) {
        main.innerHTML = `  <div class="mian_c">
            <img src="http://s0.jmstatic.com/assets/images/jumei/cart_v2/empty_icon.jpg" alt="" class="main_pic">
            <div class="main_r">
                <h2>您的购物车中没有商品，请先去挑选心爱的商品吧！</h2>
                <p>你可以 <a href="../html/index.html">返回首页</a> 挑选你喜欢的商品</p>
            </div>
        </div>`;
        return
    }

    let allChecked = data.every(item => {
        return item.is_select == 1;
    });

    let total = shopNum(data);

    console.log(total.totalPrice);
    str += `
                    <table class="main_table">
                    <thead class="t_head">
                        <tr class="t_header">
                            <th class="t_one"><input type="checkbox" class="all" ${allChecked?'checked' :''}>
                                <h2> 保税仓发货 </h2>
                            </th>
                            <th>聚美价（元）</th>
                            <th>数量</th>
                            <th>小计（元）</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody class="t_tbody">
                        `
    data.forEach(item => {

        str += `
        
                        <tr class ="t_boder" pid="${item.pid}">
                            <td>
                                <div class="t_i"> <input type="checkbox" ${item.is_select==1 ?'checked':''} class="check"  pid="${item.pid}"></div>

                            <div class="rl">
                                <img src="${item.pro_def}" alt="">
                                <div class="t_text">
                                    <p>${item.medium_name}</p>
                                    <p> 容量：555ml</p>
                                </div>
                            </div>

                        </td>
                        <td class="jiage">
                            <p>${item.price_home}</p>
                            <del>${item.prices}</del>

                        </td>
                        <td>
                            <span class="subtract reduce">-</span>
                            <input type="text" value="${item.data_num}">
                            <span class="add">+</span>

                        </td>
                        <td>
                            <p>${item.price_home * item.data_num}</p>
                            <p>省：${(item.prices - item.price_home)* item.data_num}</p>

                        </td>
                        <td>
                            <div>
                                <span class = "del" pid="${item.pid}"></span>
                            </div>

                        </td>
                    </tr>
                    `
    })
    str += `
                </tbody>
                <tfoot class="t_foot">
                    <tr>
                        <td colspan="5">商品金额<span>￥${total.totalPrice}</span></td>
                    </tr>
                </tfoot>


            </table>

    `

    str += `<div class="common_handler">
                <div class="handler_l">
                    <input type="checkbox" class="all" ${allChecked?'checked' :''}><label for="">全选</label>
                    <a href="./list.html">继续购物 </a> | <span class="empty">清空购物车</span>
                </div>
                <div class="handler_r">
                    <div>共<span>${total.totalNum} </span> 件商品 商品应付总额：<em>￥${total.totalPrice}</em> <i class="close">去结算</i></div>

                </div>


            </div>`

    main.innerHTML = str;

}



main.onclick = function() {
    let e = window.event;
    // 全选
    if (e.target.className == 'all') {
        let data = JSON.parse(localStorage.getItem('goodsList'));
        data.forEach(item => {
            e.target.checked ? item.is_select = 1 : item.is_select = 0
        });
        localStorage.setItem('goodsList', JSON.stringify(data));
        render(data);
    }

    // // 单选
    if (e.target.className == 'check') {
        let id = e.target.getAttribute('pid');
        let data = JSON.parse(localStorage.getItem('goodsList'));
        data.forEach(item => {
                if (item.pid == id) {
                    item.is_select = e.target.checked ? 1 : 0;
                }
            })
            // 需要把 修改够的数据存储本地存储中
        localStorage.setItem('goodsList', JSON.stringify(data));
        render(data);
    }


    if (e.target.classList.contains('del')) {
        // 删除数据库中 和 本地存储中对应的数据 
        let pid = e.target.getAttribute('pid');
        pAjax({
            url: '../api/removeCarData.php',
            data: {
                username: login,
                pid,
            }
        }).then(res => {
            if (res.code) {
                // 先获取本地存储中的数据
                let data = JSON.parse(localStorage.getItem('goodsList'));
                let res = data.filter(item => {
                    return item.pid != pid;
                });

                localStorage.setItem('goodsList', JSON.stringify(res));
                render(res);
            }
        })
    }


    if (e.target.classList.contains('reduce')) {
        // 进行数量减法
        let data = JSON.parse(localStorage.getItem('goodsList'));
        let pid = e.target.parentNode.parentNode.getAttribute('pid');

        let obj = data.filter(item => {
            return item.pid == pid
        })[0];

        let num = obj.data_num * 1;
        if (num <= 1) {
            num = 1
        } else {
            num--
        }
        pAjax({
            url: '../api/updCarData.php',
            data: {
                username: login,
                pid,
                data_num: num
            }
        }).then(res => {
            if (res.code) {
                obj.data_num = num;
                localStorage.setItem('goodsList', JSON.stringify(data));
                render(data);
            }
        })
    }
    // 加法
    if (e.target.classList.contains('add')) {
        // 进行数量减法
        let data = JSON.parse(localStorage.getItem('goodsList'));
        let pid = e.target.parentNode.parentNode.getAttribute('pid');

        let obj = data.filter(item => {
            return item.pid == pid
        })[0];

        let num = obj.data_num * 1;
        if (num < 1) {
            num = 1
        } else {
            num++
        }
        pAjax({
            url: '../api/updCarData.php',
            data: {
                username: login,
                pid,
                data_num: num
            }
        }).then(res => {
            if (res.code) {
                obj.data_num = num;
                localStorage.setItem('goodsList', JSON.stringify(data));
                render(data);
            }
        })
    }

    // 清空购物车 
    if (e.target.classList.contains('empty')) {
        let data = JSON.parse(localStorage.getItem('goodsList'));
        let res = data.filter(item => {
            return item.is_select == 1
        });
        if (res.length <= 0) {
            alert('请先勾选需要购买的商品')
            return
        }

        res.forEach(item => {
            $.ajax({
                url: '../api/removeCarData.php',
                data: {
                    username: login,
                    pid: item.pid,
                },
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    if (res.code) {
                        let data = JSON.parse(localStorage.getItem('goodsList'));
                        console.log(data);
                        let res1 = data.filter(item1 => {
                            console.log(item1.pid, item.pid);
                            return item1.pid != item.pid
                        });
                        console.log(res1);
                        localStorage.setItem('goodsList', JSON.stringify(res1));
                        render(res1);
                    }
                }
            })
        })
    }

    if (e.target.classList.contains('close')) {
        let data = JSON.parse(localStorage.getItem('goodsList'));
        let res = data.filter(item => {
            return item.is_select == 1
        });
        if (res.length <= 0) {
            alert('请先勾选需要结算的商品')
            return
        }

        res.forEach(item => {
            $.ajax({
                url: '../api/removeCarData.php',
                data: {
                    username: login,
                    pid: item.pid,
                },
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    if (res.code) {
                        let data = JSON.parse(localStorage.getItem('goodsList'));
                        console.log(data);
                        let res1 = data.filter(item1 => {
                            console.log(item1.pid, item.pid);
                            return item1.pid != item.pid
                        });
                        console.log(res1);
                        localStorage.setItem('goodsList', JSON.stringify(res1));
                        render(res1);
                    }
                }
            })
        })
    }
    // 结算










}


let jmyp = document.querySelector(".header_jmyp")

if (getCookie('login')) {
    jmyp.innerHTML = `  聚美优品欢迎您，${getCookie('login')}`
} else {
    jmyp.innerHTML = `  聚美优品欢迎您，<a href="./login.html">登录</a>|<a href="./register.html">免费注册</a>`
}





function shopNum(goods) {

    let res = goods.filter(item => {
        return item.is_select == 1
    })

    // 计算选中商品的数量
    let totalNum = res.reduce((pre, item) => {
        return pre + item.data_num * 1
    }, 0);


    // 计算选中商品的总价格
    let totalPrice = res.reduce((pre, item) => {
        return pre + item.price_home * item.data_num
    }, 0);

    return {
        totalPrice,
        totalNum
    }

}