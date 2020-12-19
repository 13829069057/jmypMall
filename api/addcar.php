<?php
    // 添加到购物车接口(传用户的用户名和商品的ID)
    # 用户名 商品id
    $pid = $_GET['pid'];
    $proDef = $_GET['proDef'];
    $proFrom = $_GET['proFrom'];
    $timeString = $_GET['timeString'];
    $mediumName = $_GET['mediumName'];
    $pricEhome = $_GET['pricEhome'];
    $buyerNumber = $_GET['buyerNumber'];
    $username = $_GET['username'];
    $prices = $_GET['prices'];



    $con = mysqli_connect('localhost','root','123456','jmyp');


    $sql = "SELECT * FROM `detail` WHERE `pid`='$pid' AND `username`='$username'";
    $res = mysqli_query($con,$sql);

    if(!$res){
        die('error for mysql' . mysqli_error());
    }
    $row = mysqli_fetch_assoc($res);
     # 如果购物车表中存在该条数据，让这个条数据中的goods_num 值加 1
    if($row){
        $arr = array("code"=>0,"msg"=>"数据num加1");
        print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
        $data_num = $row['data_num']+ 1;
       $res2= mysqli_query($con,"UPDATE `detail` SET `data_num` = '$data_num'  WHERE `pid`='$pid'");
    }else{
   # 如果不存在，就往goodscar表中 添加数据
   $arr = array("code"=>0,"msg"=>"数据添加成功");
   print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
  

   $res2= mysqli_query($con,"INSERT INTO `detail` (`pid`, `pro_def`, `pro_from`, `time_string`, `medium_name`, `price_home`, `buyer_number`, `data_num`, `username`,`is_select`,`prices`) VALUES ('$pid', '$proDef', '$proFrom', '$timeString', '$mediumName', '$pricEhome', '$buyerNumber', '1', '$username','0','$prices')");

    }

    ?>
    
