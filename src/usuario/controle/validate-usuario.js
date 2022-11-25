$(document).ready(function() {

//     $.ajax({
//         type: 'POST',
//         dataType: 'json',
//         assync: true,
//         url: 'src/usuario/modelo/validate-usuario.php',
//         success: function(dados) {

//             if (dados.tipo == 'error') {
//                 $(location).attr('href', 'index.html')

//             } else {

//                 if (dados.tipo == '2'){
//                     $(location).attr('href', 'adm.html')

//                 }else if(dados.tipo == '1'){
//                     $(location).attr('href', 'user.html')

//                 }else{
//                     $(location).attr('href', 'index.html')
//                 }
//                 Swal.fire({
//                     title: 'SGPO',
//                     text: dados.mensagem,
//                     icon: dados.tipo,
//                     confirmButtonText: 'OK'
//                 })

//             }
//         }
//     })
// })