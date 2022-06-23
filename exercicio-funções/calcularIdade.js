function calcularIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} 
    anos de idade.`;
}

const pessoa1 = {
    nome: 'Henrique',
    idade: 30
};

const pessoa2 = {
    nome: 'Marcia',
    idade: 23
};

const animal1 = {
    nome: 'ninu',
    idade: 2,
    raca: 'gato'
};
