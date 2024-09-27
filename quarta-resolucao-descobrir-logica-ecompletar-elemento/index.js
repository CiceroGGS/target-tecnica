
/*
------------------------------------------------------------------------
a) 1, 3, 5, 7, ___
(Lógica: Esta é uma sequência de números ímpares, onde cada número é incrementado em 2.)

R: Próximo elemento é o 9
------------------------------------------------------------------------
b) 2, 4, 8, 16, 32, 64, ____
(Lógica: Esta sequência é uma progressão de potências de 2, onde cada número é o dobro do anterior.)

R: Próximo elemento 128 que seria = (64 × 2)
------------------------------------------------------------------------
c) 0, 1, 4, 9, 16, 25, 36, ____
(Lógica: Esta é a sequência dos quadrados perfeitos (0², 1², 2², 3², 4², 5², 6²))

R:Próximo elemento 49 que seria = (7²)
------------------------------------------------------------------------
d) 4, 16, 36, 64, ____
(Lógica: Esta sequência contém os quadrados dos números pares (2², 4², 6², 8²))

R: Próximo elemento 100 que seria  = (10²)
------------------------------------------------------------------------
e) 1, 1, 2, 3, 5, 8, ____
(Lógica: Esta é a sequência de Fibonacci, onde cada número é a soma dos dois anteriores)

R: Próximo elemento: 13 quer seria = (5 + 8)
------------------------------------------------------------------------
f) 2, 10, 12, 16, 17, 18, 19, ____
(Lógica: A sequência alterna entre números e uma contagem de números em ordem. A sequência parece adicionar números em sequência após o número 10)

R: Próximo elemento 20 (seguindo a contagem de números)
------------------------------------------------------------------------
Então temos:

a) 9
b) 128
c) 49
d) 100
e) 13
f) 20
------------------------------------------------------------------------
*/

// Codigo e logica para descobrimos o proximo elemento \\

const descobrirProximoElemento = (sequencia, nome) => {
    let proximo;

    switch (nome) {
        case 'a':
            if (sequencia.every((num, index) => index === 0 || num === sequencia[index - 1] + 2))
                proximo = sequencia[sequencia.length - 1] + 2;
            break;
        case 'b':
            proximo = sequencia[sequencia.length - 1] * 2;
            break;
        case 'c':
            proximo = (sequencia.length) ** 2;
            break;
        case 'd':
            proximo = ((sequencia.length + 1) * 2) ** 2;
            break;
        case 'e':
            proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
            break;
        case 'f':
            proximo = sequencia[sequencia.length - 1] + 1;
            break;
        default:
            return "Sequência não reconhecida";
    }

    return proximo;
};

const sequencias = {
    a: [1, 3, 5, 7],
    b: [2, 4, 8, 16, 32, 64],
    c: [0, 1, 4, 9, 16, 25, 36],
    d: [4, 16, 36, 64],
    e: [1, 1, 2, 3, 5, 8],
    f: [2, 10, 12, 16, 17, 18, 19]
};

Object.entries(sequencias).forEach(([nome, sequencia]) => {
    const proximo = descobrirProximoElemento(sequencia, nome);
    console.log(`${nome}) ${sequencia.join(', ')}, próximo: ${proximo}`);
});

