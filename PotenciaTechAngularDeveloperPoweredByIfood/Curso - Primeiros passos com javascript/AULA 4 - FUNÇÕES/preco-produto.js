function valorComDesconto(precoProduto, percentual){
    let desconto = (percentual/100) * precoProduto; 
    return precoProduto - desconto; 
}

function mostrarValorFinal(valorProduto, numParcelas, dinheiroPix){
    if(dinheiroPix)
        return valorComDesconto(valorProduto, 15); 
    else if(numParcelas === 1)
        return valorComDesconto(valorProduto,10);
    else if(numParcelas === 2)
        return valorProduto; 
    else if(numParcelas >= 3 )
        return valorComDesconto(valorProduto,10)
}

function main(){
    let valorProduto = 1000; 
    let numParcelas = 6; 
    let dinheiroPix = true; 
    let valorPago = mostrarValorFinal(valorProduto, numParcelas, dinheiroPix); 
    console.log('Valor a ser pago: ' + valorPago);
}
main();
