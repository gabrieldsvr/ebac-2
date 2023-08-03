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
