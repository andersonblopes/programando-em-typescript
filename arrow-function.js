var precos = ['10', '55', '95', '125'];
//Maneira convencional
var precosFormatado = precos.map(function (preco) {
    return "R$ " + preco + ",00";
});
console.log("Maneira convencional:");
console.log(precosFormatado);
//Utilizando arrow-functions
var precosFormatados2 = precos.map(function (preco2) { return "R$ " + preco2 + ",00"; });
console.log("Utilizando arrow-functions:");
console.log(precosFormatados2);
//Utilizando arrow-functions - resumindo sentença
var precosFormatados3 = precos.map(function (preco2) { return "R$ " + preco2 + ",00"; });
console.log("Utilizando arrow-functions - resumindo sentença:");
console.log(precosFormatados2);
//Utilizando arrow-functions - filtrando valores
var precosAcimaDeCem = precos.filter(function (preco) { return preco > 100; });
console.log("Utilizando arrow-functions - filtrando valores:");
console.log(precosAcimaDeCem);
//Utilizando arrow-functions - encadeando sentenças(filtrando valores e formatando)
var precosAcimaDeCem2 = precos.filter(function (preco) { return preco > 100; }).map(function (preco) { return "R$ " + preco + ",00"; });
console.log("Utilizando arrow-functions - encadeando sentenças(filtrando valores e formatando):");
console.log(precosAcimaDeCem2);
