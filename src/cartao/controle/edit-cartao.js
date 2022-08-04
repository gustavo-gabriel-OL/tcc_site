$(document).ready(function() {

    $('#table-cartao').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/cartao/modelo/view-cartao.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/cartao/visao/form-cartao.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#CELULAR').val(dado.dados.CELULAR)
                        $('#ID').val(dado.dados.ID)
                    })
                    $('.btn-save').removeAttr('data-operation', 'insert')
                    $('.btn-save').show()
                    $('#modal-cartao').modal('show')
                } else {
                    Swal.fire({
                        title: 'FacilitaBus',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})