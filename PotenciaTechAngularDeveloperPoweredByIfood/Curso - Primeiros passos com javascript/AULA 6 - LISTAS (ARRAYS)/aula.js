let notas = []; 

notas.push(5);
notas.push(7); 
notas.push(5.8); 
notas.push(10); 


let soma = 0; 
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota; 
}

let media = soma / notas.length; 
console.log(`A média foi de ${media.toFixed(2)}.`);

