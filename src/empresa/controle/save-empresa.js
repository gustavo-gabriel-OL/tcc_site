$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()

        url = "src/empresa/modelo/save-empresa.php"

        var formData = new FormData(document.getElementById("form-empresa"))

        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            mimeType: "multipart/form-data",
            dataType: 'json',
            contentType: false,
            cache: false,
            processData: false,
            success: function(dados) {
                Swal.fire({
                    title: 'SGPO',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-trabalho').modal('hide')
            }
        })
    })
})