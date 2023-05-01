let nota1 = 10; 
let nota2 = 9.5; 
let nota3 = 9; 

let media = (nota1 + nota2 + nota3) / 3; 

if(media < 5)
    console.log('Reprovado - ' + media.toFixed(2));
else if(media >= 5 && media <= 7)
    console.log('Recuperação - ' + media.toFixed(2));
else
    console.log('Aprovado - ' + media.toFixed(2));

