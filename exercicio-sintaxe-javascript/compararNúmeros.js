function comparaNumeros(N1, N2) {
    if(!N1 || !N2) return "Digite dois números!";

    const primeiraEtapa = criaEtapa(N1, N2);
    const segundaEtapa = criaSegundaetapa(N1, N2);

    return `${primeiraEtapa} ${segundaEtapa}`
}

function criaEtapa(N1, N2) {
    let saoIguais = '';
    if(N1 !== N2) {
        saoIguais = 'não'; 
    }
    return `Os números ${N1} e ${N2} ${saoIguais} são iguais.`
};

function criaSegundaetapa(N1, N2) {
    const soma = N1 + N2;
    
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros());