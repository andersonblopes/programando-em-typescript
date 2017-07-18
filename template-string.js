//Utilizando template string
var precoProdutos = ['10', '55', '95', '125'];
console.log(precoProdutos.map(function (preco) { return "R$ " + preco + ",00"; }));
