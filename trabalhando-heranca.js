var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.pagarImposto = function (imposto) {
        if (imposto === void 0) { imposto = 8.0; }
        console.log("R$ " + this.salario * imposto / 100 + ",00 de imposto pagos por " + this.nome);
    };
    return Funcionario;
}());
var Ajudante = (function (_super) {
    __extends(Ajudante, _super);
    function Ajudante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ajudante;
}(Funcionario));
var Gerente = (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.pagarImposto = function (imposto) {
        if (imposto === void 0) { imposto = 25.0; }
        console.log("Pr\u00F3ximo funcion\u00E1rio \u00E9 a gerente " + this.nome);
        _super.prototype.pagarImposto.call(this, imposto);
    };
    return Gerente;
}(Funcionario));
var elaine = new Ajudante("Elaine", 2500);
elaine.pagarImposto();
var helena = new Gerente("Helena", 2500);
helena.pagarImposto();
//Hock methods
var Impressora = (function () {
    function Impressora() {
    }
    Impressora.prototype.testeImpressao = function () {
        this.imprimir("Texte de impressão!");
    };
    return Impressora;
}());
var ImpressoraHP = (function (_super) {
    __extends(ImpressoraHP, _super);
    function ImpressoraHP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImpressoraHP.prototype.imprimir = function (texto) {
        console.log(texto);
    };
    return ImpressoraHP;
}(Impressora));
var impressora = new ImpressoraHP();
impressora.testeImpressao();
