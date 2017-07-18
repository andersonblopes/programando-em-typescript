//Utilizando template string
const precoProdutos = ['10','55','95','125'];
console.log(precoProdutos.map(preco =>  `R$ ${preco},00`));