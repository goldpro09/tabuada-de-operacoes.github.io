function gerarTabuada() {
    var tabuadaElement = document.getElementById('tabuada');
    var numeroElement = document.getElementById('numero');
    let limite = Number(document.getElementById('limite_input').value);

    if(numeroElement.value.length == 0 || limite < 0) {
        alert("Digite um número válido!");
    } else {
        let numero = Number(numeroElement.value);
        tabuadaElement.innerHTML = "";
        for (let c = 0; c <= limite; c++) {
            let item = document.createElement('option');
            item.text = `${numero} / ${c} = ${numero/c}`;
            if(item.text == `${numero} / ${c} = Infinity`) {
                item.text = `${numero} / ${c} = Infinito`;
            }
            tabuadaElement.appendChild(item);
        }
    }
}