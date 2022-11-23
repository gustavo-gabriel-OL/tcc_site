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
                    $('.modal-body').load('src/empresa/visao/form-trabalho.html', function() {
                        $('#TITULO').val(dado.dados.TITULO)
                        $('#TITULO').attr('readonly', 'true')
                        $('#ANO').val(dado.dados.ANO)
                        $('#ANO').attr('readonly', 'true')
                        $('#NROPAGINAS').val(dado.dados.NROPAGINAS)
                        $('#NROPAGINAS').attr('readonly', 'true')
                        $('#RESUMO').val(dado.dados.RESUMO)
                        $('#RESUMO').attr('readonly', 'true')
                        $('#ORIENTADOR').val(dado.dados.ORIENTADOR)
                        $('#ORIENTADOR').attr('readonly', 'true')
                        $('#COORIENTADOR').val(dado.dados.COORIENTADOR)
                        $('#COORIENTADOR').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-trabalho').modal('show')
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