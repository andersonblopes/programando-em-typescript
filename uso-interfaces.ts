function exibeIdade(aluna : {idade: number}){
    console.log(aluna.idade);
}

/*
    O atributo idade define o contrato do uso desta função,
    ou seja, quem chamar esta função deverá no objeto passado como parâmetro
    um atributo de nome idade e do tipo number. mantendo a integridade desta interface(exibeIdade).
*/
let helenaLopes = {nome: 'Helena', idade: 8};

exibeIdade(helenaLopes);

// Mesmo exemplo escrito de forma OO

console.log(`Utilizando Orientação a objetos...`);

interface Aluno{
    idade: number;
    // '?' após o atributo tira a obrigatoriedade de fornecer o mesmo
    naturalidade?: string;
}

function exibeIdadeOO(aluno : Aluno){
    if(!aluno.naturalidade){
        console.log(`${aluno.idade} - ${aluno.naturalidade}`);
    }else{
        console.log(`${aluno.idade}`);
    }    
}

let elaineLopes = {nome: `Elaine Lopes`, idade: 29, naturalidade: "Fortaleza-CE"};
let andersonLopes = {nome: `Anderson Lopes`, idade: 35};

exibeIdadeOO(elaineLopes);
exibeIdadeOO(andersonLopes);