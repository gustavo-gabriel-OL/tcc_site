$(document).ready(function() {

    $('.btn-login').click(function(e) {

        e.preventDefault();

        let dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/usuario/modelo/login-adm.php',
            success: function(dados) {

                if (dados.tipo == '1'){
                    $(location).attr('href', 'user.html')

                }else if(dados.tipo == '2'){
                    $(location).attr('href', 'adm.html')

                }else{
                    $(location).attr('href', 'index.html')
                    Swal.fire({
                        title: 'SGPO',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })

                }
            }
        })
    })

})