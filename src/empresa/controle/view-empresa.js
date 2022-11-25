$(document).ready(function() {

    $('#table-empresa').on('click', 'button.btn-view', function(e) {

        e.preventDefault()
        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de empresa cadastrada')

        let IDEMPRESA = `IDEMPRESA=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDEMPRESA,
            url: 'src/empresa/modelo/view-empresa.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/empresa/visao/form-empresa.html', function() {
                        $('#NOME').val(dado.dados.TITULO)
                        $('#NOME').attr('readonly', 'true')
                        $('#RESUMO').val(dado.dados.RESUMO)
                        $('#RESUMO').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-empresa').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'SGPO', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})