<?php

    $con = mysqli_connect('localhost','root','123456','jmyp');
    
    $tel = $_GET["tel"];
    $password = $_GET["password"];
  

    $sql1 = "SELECT * FROM `login` WHERE `tel`='$tel'";
 

    $res1 = mysqli_query($con,$sql1);

    $row = mysqli_fetch_assoc($res1);
   
    if($row){
        // $arr = array("code"=>3,"msg"=>"数据添加失败");
        
     
        $arr = array("code"=>0,"msg"=>"手机号已经存在");
        print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
        // print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
        // print_r("用户名已存在，请重新注册");
    }else{
        // print_r("用户名已经存在，请重新注册");
        $sql2 = " INSERT INTO `login` ( `tel`, `password`) VALUES ( '$tel', '$password')";

        $res2 = mysqli_query($con,$sql2);

        if(!$res2){
        $arr = array("code"=>0,"msg"=>"数据添加失败");
        print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));

        // print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
        }

    if($res2){
        // {code:1,mgs:"添加成功"}
        $arr = array("code"=>1,"msg"=>"数据添加成功");
        print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));

        // print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
    }
    }
    ?>
    