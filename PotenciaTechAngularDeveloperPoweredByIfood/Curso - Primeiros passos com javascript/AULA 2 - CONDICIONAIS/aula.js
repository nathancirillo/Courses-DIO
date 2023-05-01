const numero = 0; 

//=== faz a verificação do tipo de dado também. Exemplo: '0' é diferente de 0.
const ePar = (numero % 2) === 0; 

if(ePar)
    console.log('É par!');
else
    console.log('É impar!');
