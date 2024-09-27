const calcularSoma = () => {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return SOMA;
}

const resultado = calcularSoma();
console.log(`O valor final da variável SOMA é: ${resultado}`);

