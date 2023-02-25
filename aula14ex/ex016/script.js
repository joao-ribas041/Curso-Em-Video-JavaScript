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
        var passo = Number(txtpasso.value)

        if (passo <= 0) {
            passo = Number(1)
            alert(`Passo invalido, considerando passo 1.`)
        }
        
        res.innerHTML = `Contando: <br>`
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} `
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} `
            }
        }
    }
}
