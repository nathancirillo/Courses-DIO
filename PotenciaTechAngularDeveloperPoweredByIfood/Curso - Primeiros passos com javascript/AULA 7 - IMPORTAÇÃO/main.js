//Essa seria a forma tradicional de importar o que está sendo exportado
//const funcoes = require('./funcoes-auxiliares');
//console.log(funcoes);
//console.log(funcoes.gets());
//console.log(funcoes.print('teste'));

//Também é possível fazer o destructuring do objeto 
const {gets, print, maiorValor} = require('./funcoes-auxiliares');
print(gets());


let numbers = [6,4,2,44,67,102,3,4]; 
console.log(maiorValor(numbers));