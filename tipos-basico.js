//Boolean
var ativo = true;
//Number
var idade = 35;
var ano = 2017;
//String
var empresa = "Boa vista tecnologia.";
var funcionario = "Anderson";
if (ativo) {
    console.log("Oi! meu nome \u00E9 " + funcionario + ", em " + ano + ", tenho " + idade + " anos, e trabalho na " + empresa);
}
else {
    console.log("Oi! meu nome \u00E9 " + funcionario + ", em " + ano + " tenho " + idade + " anos, e n\u00E3o estou trabalhando.");
}
//Array
var notas = [0, 1, 2, 3, 4];
console.log("Testando vari\u00E1vel do tipo ARRAY: " + notas[0]);
//Tupla
var alunos = [10, "Anderson", true];
console.log("Testando vari\u00E1vel do tipo TUPLA: " + alunos[0]);
//Enum
var Sexo;
(function (Sexo) {
    Sexo[Sexo["Masculino"] = 0] = "Masculino";
    Sexo[Sexo["Feminino"] = 1] = "Feminino";
})(Sexo || (Sexo = {}));
;
var sexoAluno = Sexo.Masculino;
console.log("Testando vari\u00E1vel do tipo ENUM: " + sexoAluno);
//any
var qualquerCoisa = 4;
console.log("Teste 1 vari\u00E1vel do tipo any: " + qualquerCoisa);
qualquerCoisa = "Teste";
console.log("Teste 2 vari\u00E1vel do tipo any: " + qualquerCoisa);
qualquerCoisa = true;
console.log("Teste 3 vari\u00E1vel do tipo any: " + qualquerCoisa);
//any: utilizado para uso de biblioteca de terceiros
//any: utilizado para migração de javascript para typescript
//any: utilizado em array com tipos de dados variados.
//void: Utilizado em retornos(estabelece que função não retornará nada) de funções
//null e undefined são subtipos dos demais tipos.
