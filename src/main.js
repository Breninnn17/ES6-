const alunos = [
    { nome: 'Bento', nota: 7 },
    { nome: 'Gustavo', nota: 5 },
    { nome: 'Lucas', nota: 8 },
    { nome: 'Carol', nota: 3 },
    { nome: 'Yasmin', nota: 9 },
    { nome: 'Cleitin', nota: 3 },
    { nome: 'Breno', nota: 10 },
];

function AlunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

function AlunosReprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota <= 5);
}

const alunosAprovados = AlunosAprovados(alunos);
const alunosReprovados = AlunosReprovados(alunos);

console.log('Alunosaprovados');
console.log(alunosAprovados);

console.log('Alunosreprovados');
console.log(alunosReprovados);
