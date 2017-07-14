// var, let e const

//var: hoisting se encarrega de resolver o escopo das variáveis
//let: Restringe variáveis ao escopo em que foi criada.
//const: Após declarada não poderá ser mudada.

//var
function iniciarJogo(iniciajogo: boolean){
    let nome: string = 'Ceará';
    let cidade: string = "em Natal";
    const data: string = "Amanhã.";

    if(iniciajogo){
        cidade = "em fortaleza!";
    }

    console.log(`${nome} vai jogar ${cidade} ${data}`);
}

iniciarJogo(false);