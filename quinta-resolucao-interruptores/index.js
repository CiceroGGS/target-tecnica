const descobrirInterruptores = () => {
    console.log("Exercicio: Qual interruptor controla cada lâmpada:");
    console.log("\n1. Na sala dos interruptores:");
    console.log(" - Ligar o primeiro interruptor e aguardar um tempo para a lâmpada aquecer");
    console.log(" - Depois, desligar o primeiro interruptor e ligar o segundo.");

    console.log("\n2. Ir para a primeira sala das lâmpadas:");
    console.log(" - Se a lâmpada estiver acesa, ela é controlada pelo segundo interruptor, o último que deixamos ligado aquecendo.");
    console.log(" - Se a lâmpada estiver apagada e quente, ela é controlada pelo primeiro interruptor, porque deixamos ele ligado por um tempo.");
    console.log(" - Se a lâmpada estiver apagada e fria, ela é controlada pelo terceiro interruptor, que não mexemos em nenhum momento.");

    console.log("\n3. Ir para segunda sala das lâmpadas:");
    console.log(" - Se a lâmpada estiver acesa, ela é controlada pelo segundo interruptor.");
    console.log(" - Ligar o terceiro interruptor.");
    console.log(" - A lâmpada que acender será controlada pelo terceiro interruptor.");

    console.log("\nCom estas duas idas, nos teremos determinado qual interruptor controla cada lâmpada.");
    console.log("");
}

descobrirInterruptores();
