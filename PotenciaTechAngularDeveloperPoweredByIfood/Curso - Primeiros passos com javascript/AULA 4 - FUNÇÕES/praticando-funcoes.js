function escrevaNome(nome){
    console.log('O nome informado foi : ' + nome);
}
escrevaNome('Vanessa');
escrevaNome('Nathan');



function verificaMaiorIdade(idade){
    if(idade >= 18)
        return idade + ' é maior de idade!'; 
    else 
        return idade + ' não é maior de idade!';
}
let idade = 17; 
console.log(verificaMaiorIdade(idade));