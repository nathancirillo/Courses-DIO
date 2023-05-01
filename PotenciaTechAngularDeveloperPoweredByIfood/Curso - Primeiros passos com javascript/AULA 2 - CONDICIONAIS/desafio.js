let combustivelUsado = 'etanol';
let precoEtanol = 3.79;
let kmPorLitroEtanol = 10;
let precoGasolina = 5.79;
let kmPorLitroGasolina = 15;
let distanciaViagem = 200;
let valorViagem = 0;

if (combustivelUsado.toLowerCase() === 'gasolina') {
    valorViagem = (distanciaViagem / kmPorLitroGasolina) * precoGasolina;
} else if (combustivelUsado.toLocaleLowerCase() === 'etanol') {
    valorViagem = (distanciaViagem / kmPorLitroEtanol) * precoEtanol;
}

//uma string em JS pode ser representada por asplas simples, asplas duplas ou crase. Evite usar as aspas duplas
//e de preferência para a simples. As duplas serão usadas muito em HTML. 
console.log('Usando ' + combustivelUsado.toLowerCase() + ' o valor gasto será ' + valorViagem.toFixed(2));

