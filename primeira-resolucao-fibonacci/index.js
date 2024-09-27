const Fibonacci = (num) => {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b < num) {
        let proximo = a + b;
        a = b;
        b = proximo;
    }

    return b === num;
}

const verificarFibonacci = (num) => {
    const pertence = Fibonacci(num);
    if (pertence) {
        console.log(`${num} Pertence à sequência Fibonacci`);
    } else {
        console.log(`${num} Não pertence à sequência Fibonacci`);
    }
}

verificarFibonacci(3);
verificarFibonacci(10);
