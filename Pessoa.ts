class Pessoa {
    nomeCompleto: string;
    dataAniversario: string;
    idade: number;

    //Só pode haver este construtor
    constructor(nomeCompleto: string, idade: number){
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
    }

    setDataAniversario(dataAniversario: string){
        this.dataAniversario = dataAniversario;
    }

    getDataAniversario(){
        return this.dataAniversario;
    }

    imprimir(){
        return `Oi! Meu nome é ${this.nomeCompleto} e tenho ${this.idade} anos `;
    }
}


let anderson: Pessoa = new Pessoa('Anderson', 35);
console.log(anderson.imprimir());
anderson.setDataAniversario("13/12/1981");
console.log(anderson.getDataAniversario());