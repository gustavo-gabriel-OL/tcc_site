<?php 

    session_start();

    if(!isset($_SESSION['NOME']) && !isset($_SESSION['TIPO'])){

        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Você não está autenticado.'
        );

    }else{

        $sql ='SELECT * FROM USUARIO WHERE TIPO_ID = ? LIMIT 1';
        $sql = DB: :instanciar()->prepare($sql);
        $sql ->execute(array($_SESSION['tipo_id']));
        $sql = $sql ->fetch(PDO::FETCH_ASSOC);

        $_SESSION ['id'] = $sql ['ID'];
        $_SESSION ['nome'] = $sql ['NOME'];
        $_SESSION ['tipo_id'] = $sql ["TIPO_ID"];

        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Seja bem vindo ' .$_SESSION ['NOME']
            
        );
        
    }

    echo json_encode($dados); 