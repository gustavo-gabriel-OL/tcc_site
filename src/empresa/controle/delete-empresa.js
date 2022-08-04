$(document).ready(function() {

    $('#table-empresa').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'TOP-RIFAS',
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
                    url: 'src/empresa/modelo/delete-empresa.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'FacilitaBus',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-empresa').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})