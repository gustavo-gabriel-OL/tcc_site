$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo empresa')

        $('.modal-body').load('src/empresa/visao/form-empresa.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-empresa').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-empresa').modal('hide')
    })
})