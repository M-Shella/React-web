<?php
    $serverName = "";
    $userName = "";
    $password = "";
    $dbName = "";
    $conn = mysqli_connect($serverName, $userName, $password, $dbName);

    $sql = "SELECT * FROM `portfolio` ORDER BY `portfolio`.`date` DESC";
    $data = array();
    $query = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_assoc($query)){
        $data[] = $row;   
    }
    print json_encode($data);
?>