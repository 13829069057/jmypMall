<?php

$con = mysqli_connect('localhost','root','123456','jmyp');

  $tel = $_GET['tel'];
  $password = $_GET['password'];
//   $tel = '13829069057';
//   $password = '666666a';
//   `tel`='13829069057' AND `password`='666666a'

  $sql = "SELECT * FROM `login` WHERE `tel`='$tel' AND `password`='$password'";

  $res = mysqli_query($con,$sql);

  if (!$res) {
    die('error for mysql: ' . mysqli_error());
  }

  $row = mysqli_fetch_assoc($res);

  if (!$row) {
    // 没有匹配的数据 登录失败
    $arr = array("code"=>0,"msg"=>"登录失败,手机号或者密码错误");
        print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
  } else {
    // 有匹配的数据 登录成功
    $arr = array("code"=>1,"msg"=>"登录成功");
    print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
  }

?>
