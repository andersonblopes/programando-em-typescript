var Pessoa = (function () {
    //Só pode haver este construtor
    function Pessoa(nomeCompleto, idade) {
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
    }
    Pessoa.prototype.setDataAniversario = function (dataAniversario) {
        this.dataAniversario = dataAniversario;
    };
    Pessoa.prototype.getDataAniversario = function () {
        return this.dataAniversario;
    };
    Pessoa.prototype.imprimir = function () {
        return "Oi! Meu nome \u00E9 " + this.nomeCompleto + " e tenho " + this.idade + " anos ";
    };
    return Pessoa;
}());
var anderson = new Pessoa('Anderson', 35);
console.log(anderson.imprimir());
anderson.setDataAniversario("13/12/1981");
console.log(anderson.getDataAniversario());
