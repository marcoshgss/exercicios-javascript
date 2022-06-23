const alunos = [
    {
        nome: 'Andre',
        nota: 5,
        turma: 'A'
    },
    {
        nome: 'Julia',
        nota: 9,
        turma: 'C'
    },
    {
        nome: 'Felipe',
        nota: 6,
        turma: 'B'
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];
    for (let i = 0; i < array.length; i++) {
       const {nota, nome} = array[i];

        if(array[i].nota >= media) {
            aprovados.push(array[i].nome);
        }
    }
    return aprovados;
}