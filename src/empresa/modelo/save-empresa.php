<?php

    session_start();

    if ( isset( $_FILES[ 'HORARIO' ][ 'name' ] ) && $_FILES[ 'HORARIO' ][ 'error' ] == 0 ) {

        $arquivo_tmp = $_FILES[ 'HORARIO' ][ 'tmp_name' ];
        $nome = $_FILES[ 'HORARIO' ][ 'name' ];

        
        $extensao = pathinfo ( $nome, PATHINFO_EXTENSION );

        $extensao = strtolower ( $extensao );

        // Somente imagens, .jpg;.jpeg;.gif;.png
        // Aqui eu enfileiro as extensões permitidas e separo por ';'
        // Isso serve apenas para eu poder pesquisar dentro desta String
        if ( strstr ( '.jpg;.jpeg;.gif;.png', $extensao ) ) {
            // Cria um nome único para esta imagem
            // Evita que duplique as imagens no servidor.
            // Evita nomes com acentos, espaços e caracteres não alfanuméricos
            $novoNome = uniqid ( time () ) . '.' . $extensao;

            $destino = '../HORARIO/' . $novoNome;

            if ( @move_uploaded_file ( $arquivo_tmp, $destino ) ) {
                
                include('../../conexao/conn.php');

                $requestData = $_REQUEST;

               
                if(empty($requestData['TITULO'])){
                   
                    $dados = array(
                        "tipo" => 'error',
                        "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
                    );
                } else {
                    $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
                    $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

                    if($operacao == 'insert'){
                        try{
                            $stmt = $pdo->prepare('INSERT INTO EMPRESA (NOME, RESUMO, HORARIO, IDEMPRESA) VALUES (:a, :b, :c, :d)');
                            $stmt->execute(array(
                                ':a' => utf8_decode($_REQUEST['NOME']),
                                ':b' => utf8_decode($_REQUEST['RESUMO']),
                                ':c' => $novoNome,
                                ':d' => $_SESSION['IDEMPRESA']
                            ));
                            
                            $retorno = array(
                                "tipo" => 'success',
                                "mensagem" => 'Registro cadastrado com sucesso.'
                            );
                        } catch(PDOException $e) {
                            $retorno = array(
                                "tipo" => 'error',
                                "mensagem" => 'Não foi possível efetuar o cadastro do registro.'.$e
                            );
                        }
                    } else {
                        // Se minha variável operação estiver vazia então devo gerar os scripts de update
                        try{
                            $stmt = $pdo->prepare('UPDATE EMPRESA SET NOME = :a, RESUMO = :b, HORARIO = :c, IDEMPRESA = :d WHERE ID = :id');
                            $stmt->execute(array(
                                ':id' => $ID,
                                ':a' => utf8_decode($_REQUEST['NOME']),
                                ':b' => utf8_decode($_REQUEST['RESUMO']),
                                ':c' => $novoNome,
                                ':d' => $_SESSION['IDEMPRESA']
                            ));

                            $retorno = array(
                                "tipo" => 'success',
                                "mensagem" => 'Registro atualizado com sucesso.'
                            );
                        } catch (PDOException $e) {
                            $retorno = array(
                                "tipo" => 'error',
                                "mensagem" => 'Não foi possível efetuar o alteração do registro.'.$e
                            );
                        }
                    }
                }
            }
            else
                $retorno = array ('mensagem' => 'Erro ao salvar a empresa. Aparentemente você não tem permissão de escrita.');
        }
        else
        $retorno = array ('mensagem' => 'Você poderá enviar apenas arquivos "*.PDF"');
    }
    else
        $retorno = array ('mensagem' => 'Você não enviou nenhum arquivo!');


    echo json_encode($retorno);