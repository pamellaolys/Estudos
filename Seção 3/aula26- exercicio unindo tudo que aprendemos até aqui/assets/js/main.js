// parar o envio padrão de formulario capturando o evento de submit

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();


    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    //transforma o valor dos input em Number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //validar se peso e altura para que os dados sejam number
    if (!peso) {
        setResultado('Peso inválido', false)
        return; //se for um NaN funçao para neste local
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    //calculo do imc
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    //checou o array de traz pra frente
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
    //quando o codigo do if é de somente uma linha podemos implificar dessa maneira acima tirando os blocos de chave e deixando tudo na mesma linha 
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//funçao para criar paragrafo
function criaP() {
    const p = document.createElement('p');
    // p.classList.add('paragrafo-resultado')criou classe pelo javascript
    return p;
}

//coloca o resultado dentro da div resultado no arquivo html
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}