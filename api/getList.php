<?php


$con = mysqli_connect('localhost','root','123456','jmyp');

$id = $_GET['id'];



$sql = "SELECT * FROM `datas` WHERE `deal_pid`='$id'";

  $res = mysqli_query($con,$sql);

  if (!$res) {
    die('error for mysql: ' . mysqli_error());
  }

  $row = mysqli_fetch_assoc($res);
  
  if (!$row) {
    // 没有匹配的数据 登录失败
    $arr = array("code"=>0,"msg"=>"登录失败,id错误");
        print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
  } else {
    // 有匹配的数据 登录成功
    $arr = array("code"=>1,"msg"=>"登录成功");
    print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
  }

?> 

