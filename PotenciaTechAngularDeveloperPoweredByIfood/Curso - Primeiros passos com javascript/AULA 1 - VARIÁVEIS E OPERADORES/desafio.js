let precoCombustivel = 4.79; 
let distanciaViagem = 200; 
let kmPorLitro = 10; 

let totalViagem = (distanciaViagem/kmPorLitro) * precoCombustivel; 
console.log('R$ ' + totalViagem.toFixed(2));

