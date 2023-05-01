function gets(){
    return 10; 
}

function print(texto){
    console.log(texto);
}

function maiorValor(valores){
    let maiorValor = 0; 
    for(let i=0; i<valores.length; i++){
         if(valores[i] > maiorValor)
            maiorValor = valores[i];   
    }
    return maiorValor; 
}

module.exports = { gets, print ,maiorValor };