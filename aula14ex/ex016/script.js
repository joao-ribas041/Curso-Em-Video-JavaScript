function contador() {
    var txtinicio = document.querySelector('input#txtinicio')
    var txtfim = document.querySelector('input#txtfim')
    var txtpasso = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#resultado')

    if (txtinicio.value == '' || txtfim.value == '' || txtpasso.value == '') {
        res.innerHTML = 'Impossivel contar'
    } else {

        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)

        if (txtpasso.value == 0) {
            passo = Number(1)
            alert(`Passo invalido, considerando passo 1.`)
        } else {
            passo = Number(txtpasso.value)
        }
        
        res.innerHTML = `Contando: <br>`
        for (inicio; inicio <= fim; inicio += passo) {
            res.innerHTML += `${inicio} `
        }
    }
}
