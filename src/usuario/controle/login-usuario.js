$(document).ready(function() {

    $('.btn-login').click(function(e) {

        e.preventDefault();

        let dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/usuario/modelo/login-usuario.php',
            success: function(dados) {

                if (dados.tipo == 'success') {
                    $(location).attr('href', 'sistema.html')
                } else {
                    Swal.fire({
                        title: 'FacilitaBus',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })

                }
            }
        })
    })

})