let  produtos: string[] = ["Caderno", "Lápis", "Borracha"];

// Mostrando indices com in
for(let i in produtos){
    console.log(i);
}

// Mostrando valores com of
for(let produto of produtos){
    console.log(produto);
}