$(document).ready(function() {

    $('#table-cartao').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'FacilitaBus',
            text: 'Deseja realmente excluir esse registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/cartao/modelo/delete-CARTAO.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'FacilitaBus',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-cartao').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})