$(document).ready(function() {

    $('#table-cartao').on('click', 'button.btn-view', function(e) {

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
                        $('#NOME').attr('readonly', 'true')
                        $('#CELULAR').val(dado.dados.CELULAR)
                        $('#CELULAR').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
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