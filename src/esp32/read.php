<?php

include "../conexao/conn.php";

$uid = $_GET['UID'];

$sql = "SELECT PASS FROM CARTAO WHERE UID = '$uid'";
$result = $pdo->query($sql);
$r = $result->fetch();
$nPass = $r['PASS'];

if ($nPass == 0) {
    echo "negado";
} else {
    $update = "UPDATE CARTAO SET PASS= PASS - 1 WHERE UID = '$uid'";
    $resultado = $pdo->query($update);
    echo $nPass - 1;
}

unset($pdo);