const verificarLetraA = (string) => {
    if (!string || typeof string !== 'string') {
        console.log("A entrada não é uma string válida.");
        return;
    }

    const ocorrenciasDeA = [...string].reduce((count, letra) => {
        return count + (letra.toLowerCase() === 'a' ? 1 : 0);
    }, 0);

    console.log(ocorrenciasDeA > 0
        ? `A letra 'a' foi encontrada ${ocorrenciasDeA} vez(es) na string.`
        : "A letra 'a' não foi encontrada na string."
    );
}

verificarLetraA("AbacaxiAAA");
verificarLetraA("Melancia");
verificarLetraA("Banana");
verificarLetraA("Uvo");
verificarLetraA();