
function CalcularImc(peso, altura){
    return peso/Math.pow(altura,2);
}

function SituacaoImc(imc){
    if(imc < 18.5)
        console.log('Abaixo do peso - Imc: ' + imc.toFixed(2));
    else if(imc >= 18.5 && imc < 25)
        console.log('Peso normal - Imc: ' + imc.toFixed(2));
    else if(imc >= 25 && imc < 30)
        console.log('Acima do peso - Imc: ' + imc.toFixed(2));
    else if(imc >= 30 && imc < 40)
        console.log('Obeso - Imc: ' + imc.toFixed(2))
    else
        console.log('Obesidade grave - Imc: ' + imc.toFixed(2));
    
}


//aqui é mostrada outra maneira de invocar o método Main
(function (){
    let peso = 84; 
    let altura = 1.74; 
    let imc = CalcularImc(peso, altura);
    SituacaoImc(imc);
})();

//funções em javascript são valores também, ou seja, se comportam como objetos que conseguimos manipular. 
//dessa forma é possível, por exemplo, passar funções para outras funções.
//também é possível reatribuir valores  a ela. Veja o exemplo: 
// Main = function(){
//     console.log(1);
// }
// console.log(Main);

//forma tradicional de chamar o main
// Main();