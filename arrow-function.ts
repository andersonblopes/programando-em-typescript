const precos = ['10','55','95','125'];

//Maneira convencional
const precosFormatado = precos.map(function(preco){
    return "R$ " + preco + ",00";
});

console.log("Maneira convencional:");
console.log(precosFormatado);

//Utilizando arrow-functions
const precosFormatados2 = precos.map((preco2) => {return "R$ " + preco2 + ",00"});
console.log("Utilizando arrow-functions:");
console.log(precosFormatados2);

//Utilizando arrow-functions - resumindo sentença
const precosFormatados3 = precos.map(preco2 =>  "R$ " + preco2 + ",00");
console.log("Utilizando arrow-functions - resumindo sentença:");
console.log(precosFormatados2);

//Utilizando arrow-functions - filtrando valores
const precosAcimaDeCem = precos.filter(preco => preco > 100);
console.log("Utilizando arrow-functions - filtrando valores:");
console.log(precosAcimaDeCem);

//Utilizando arrow-functions - encadeando sentenças(filtrando valores e formatando)
const precosAcimaDeCem2 = precos.filter(preco => preco > 100).map(preco =>  "R$ " + preco + ",00");
console.log("Utilizando arrow-functions - encadeando sentenças(filtrando valores e formatando):");
console.log(precosAcimaDeCem2);