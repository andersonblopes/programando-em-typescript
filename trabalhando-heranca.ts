class Funcionario{
    nome: string;
    salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(imposto: number = 8.0){
        console.log(`R$ ${this.salario * imposto / 100},00 de imposto pagos por ${this.nome}`);
    }
}

class Ajudante extends Funcionario{
}

class Gerente extends Funcionario{

   pagarImposto(imposto: number = 25.0){
       console.log(`Próximo funcionário é a gerente ${this.nome}`);
       super.pagarImposto(imposto);        
    }
}

let elaine: Ajudante = new Ajudante("Elaine", 2500);
elaine.pagarImposto(); 

let helena: Gerente = new Gerente("Helena", 2500);
helena.pagarImposto(); 


//Hock methods
abstract class Impressora {

   testeImpressao(): void {
        this.imprimir("Texte de impressão!");
    }

    abstract imprimir(texto: string): void;
}

class ImpressoraHP extends Impressora {

    imprimir(texto: string): void {
        console.log(texto);
    }
}

let impressora = new ImpressoraHP();
impressora.testeImpressao();