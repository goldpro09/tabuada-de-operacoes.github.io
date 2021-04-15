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
            item.text = `${numero} √ ${c} = ${numero**(1/c)}`;
            if(item.text == `${numero} √ ${c} = Infinity`) {
                item.text = `${numero} √ ${c} = Infinito`;
            } else if (item.text == `${numero} √ ${c} = NaN`) {
                item.text = `${numero} √ ${c} = N/A`;
            }
            tabuadaElement.appendChild(item);
        }
    }
}