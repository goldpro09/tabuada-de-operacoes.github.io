function gerarTabuada() {
    var tabuadaElement = document.getElementById('tabuada');
    var numeroElement = document.getElementById('numero');
    let limite = Number(document.getElementById('limite_input').value);

    if(numeroElement.value.length == 0) {
        alert("Digite um número!");
    } else {
        let numero = Number(numeroElement.value || limite < 0);
        tabuadaElement.innerHTML = "";
        for (let c = 0; c <= limite; c++) {
            let item = document.createElement('option');
            item.text = `${numero} x ${c} = ${numero*c}`;
            tabuadaElement.appendChild(item);
        }
    }
}