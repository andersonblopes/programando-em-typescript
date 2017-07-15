var produtos = ["Caderno", "Lápis", "Borracha"];
// Mostrando indices com in
for (var i in produtos) {
    console.log(i);
}
// Mostrando valores com of
for (var _i = 0, produtos_1 = produtos; _i < produtos_1.length; _i++) {
    var produto = produtos_1[_i];
    console.log(produto);
}
