<?php
    include("../../conexao/conn.php");

    $ID = $_REQUEST['IDEMPRESA'];
    $sql = "DELETE FROM EMPRESA WHERE IDEMPRESA = $ID";
    $resultado = $pdo->query($sql);

    if($resultado){
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Registro excluído com sucesso!'
        );
    } else {
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possível excluir o registro'
        );
    }

    echo json_encode($dados);