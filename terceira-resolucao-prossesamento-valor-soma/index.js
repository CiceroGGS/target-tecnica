/* A função calcularSoma calcula a soma dos números de 2 a 12. Ela inicializa INDICE como 12, SOMA como 0 e K como 1. Em um laço while, K é incrementado e seu valor é adicionado a SOMA enquanto for menor que INDICE. */

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
/* Ao final do processamento, qual será o valor da variável SOMA? nesse caso 77 */
