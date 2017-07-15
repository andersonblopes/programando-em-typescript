function exibeIdade(aluna) {
    console.log(aluna.idade);
}
/*
    O atributo idade define o contrato do uso desta função,
    ou seja, quem chamar esta função deverá no objeto passado como parâmetro
    um atributo de nome idade e do tipo number. mantendo a integridade desta interface(exibeIdade).
*/
var helenaLopes = { nome: 'Helena', idade: 8 };
exibeIdade(helenaLopes);
// Mesmo exemplo escrito de forma OO
console.log("Utilizando Orienta\u00E7\u00E3o a objetos...");
function exibeIdadeOO(aluno) {
    if (!aluno.naturalidade) {
        console.log(aluno.idade + " - " + aluno.naturalidade);
    }
    else {
        console.log("" + aluno.idade);
    }
}
var elaineLopes = { nome: "Elaine Lopes", idade: 29, naturalidade: "Fortaleza-CE" };
var andersonLopes = { nome: "Anderson Lopes", idade: 35 };
exibeIdadeOO(elaineLopes);
exibeIdadeOO(andersonLopes);
