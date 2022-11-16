// $(document).ready(function() {
//     // $("#cpf").mask("000.000.000-00")
//     // $("#telefone").mask("(00) 0000-0000")
//     // $("#cep").mask("00.000-000")
//     // $("#dataNascimento").mask("00/00/0000")
// })

$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/usuario/modelo/validate-usuario.php',
        success: function(dados) {

            if (dados.type == 'error') {

                $(location).attr('href', 'index.html');

            } else {
                $('#nome').append(dados.nome)
            }

        }
    })
})
