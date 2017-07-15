//Boolean
let ativo: boolean = true;

//Number
let idade: number = 35;
let ano: number = 2017;

//String
let empresa: string = "Boa vista tecnologia.";
let funcionario: string = "Anderson";

if(ativo){
console.log(`Oi! meu nome é ${funcionario}, em ${ano}, tenho ${idade} anos, e trabalho na ${empresa}`);
}else{
    console.log(`Oi! meu nome é ${funcionario}, em ${ano} tenho ${idade} anos, e não estou trabalhando.`);
}

//Array
let notas: number[] = [0, 1, 2, 3, 4];
console.log(`Testando variável do tipo ARRAY: ${notas[0]}`);

//Tupla
let alunos: [number, string, boolean] = [10, "Anderson", true];
console.log(`Testando variável do tipo TUPLA: ${alunos[0]}`);

//Enum
enum Sexo {Masculino, Feminino};
let sexoAluno: Sexo = Sexo.Masculino;
console.log(`Testando variável do tipo ENUM: ${sexoAluno}`);

//any
let qualquerCoisa: any = 4;
console.log(`Teste 1 variável do tipo any: ${qualquerCoisa}`);
qualquerCoisa = "Teste";
console.log(`Teste 2 variável do tipo any: ${qualquerCoisa}`);
qualquerCoisa = true;
console.log(`Teste 3 variável do tipo any: ${qualquerCoisa}`);

//any: utilizado para uso de biblioteca de terceiros
//any: utilizado para migração de javascript para typescript
//any: utilizado em array com tipos de dados variados.

//void: Utilizado em retornos(estabelece que função não retornará nada) de funções
//null e undefined são subtipos dos demais tipos.
