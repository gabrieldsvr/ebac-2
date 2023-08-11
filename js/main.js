var valor1 = null;
var valor2 = null;

var operacaoSinal = null;


function zerar() {
    let tela = document.getElementById('visor');
    tela.innerHTML = "0";
    valor1 = null;
    valor2 = null;
    operacaoSinal = null;
}

function teclaNumeroTela(num) {
    let tela = document.getElementById('visor');
    let valorTela = tela.innerHTML;

    let valorAtual = valorTela.includes(sinalOperacao(operacaoSinal)) ? valorTela.split(sinalOperacao(operacaoSinal))[1] : valorTela;


    if (valorAtual.length < 8) {
        if (valorTela === '0' && num !== "."){
            tela.innerHTML = num;
        } else if (operacaoSinal === 5 ) {
            tela.innerHTML = num;
            operacaoSinal = null;
        } else {
            if (valorAtual.includes(".")) {
                if (num !== ".") {
                    tela.innerHTML = valorTela + num;
                }
                // if (valorAtual){
                //   console.log(valorAtual)
                //   tela.innerHTML = valorTela + num;
                // }
            } else {
                tela.innerHTML = valorTela + num;
            }
        }
    }
}

function sinalOperacao(operacao) {
    switch (operacao) {
        case 1:
            return "+";
        case 2:
            return "-";
        case 3:
            return "*";
        case 4:
            return "/";
    }
}

function teclaOperacao(operacao) {
    let tela = document.getElementById('visor');
    if (!valor1) {
        valor1 = tela.innerHTML;
        tela.innerHTML = valor1 + "" + sinalOperacao(operacao);
    } else if (operacao === 0) {
        teclaResult();
        tela.innerHTML = '0';
    } else {
        teclaResult();
    }
    operacaoSinal = operacao;
}

function teclaResult() {
    let tela = document.getElementById('visor');
    valor2 = tela.innerHTML.replace(valor1 + sinalOperacao(operacaoSinal), "")
    if (valor1 && valor2) {

        let resultado = 0;
        switch (operacaoSinal) {
            case 1:
                resultado = parseFloat(valor1) + parseFloat(valor2);
                break;
            case 2:
                resultado = parseFloat(valor1) - parseFloat(valor2);
                break;
            case 3:
                resultado = parseFloat(valor1) * parseFloat(valor2);
                break;
            case 4:
                resultado = parseFloat(valor1) / parseFloat(valor2);
                break;
        }
        tela.innerHTML = resultado.toFixed(1);
        valor1 = null;
        valor2 = null;
        operacaoSinal = 5;

    }




}
window.addEventListener("keydown", function(event) {
    if (event.code === "Numpad0" || event.code === "Numpad1" || event.code === "Numpad2" || event.code === "Numpad3" || event.code === "Numpad4" || event.code === "Numpad5" || event.code === "Numpad6" || event.code === "Numpad7" || event.code === "Numpad8" || event.code === "Numpad9" || event.code === "Digit0" || event.code === "Digit1" ||event.code === "Digit2"|| event.code === "Digit3" || event.code === "Digit4" || event.code === "Digit5" || event.code === "Digit6" || event.code === "Digit7" ||event.code === "Digit8" ||event.code === "Digit9") {
        teclaNumeroTela(event.key);
    }

    if (event.code === "NumpadAdd") {
        teclaOperacao(1);
    }
    if (event.code === "NumpadSubtract") {
        teclaOperacao(2);
    }
    if (event.code === "NumpadMultiply") {
        teclaOperacao(3);
    }
    if (event.code === "NumpadDivide") {
        teclaOperacao(4);
    }
    if (event.code === "NumpadEnter"  || event.code === "Enter") {
        teclaResult();
    }
});