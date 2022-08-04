$(document).ready(function() {

    $('#table-empresa').on('click', 'button.btn-view', function(e) {

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
            url: 'src/empresa/modelo/view-empresa.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/empresa/visao/form-empresa.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')
                        $('#CELULAR').val(dado.dados.CELULAR)
                        $('#CELULAR').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-empresa').modal('show')
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