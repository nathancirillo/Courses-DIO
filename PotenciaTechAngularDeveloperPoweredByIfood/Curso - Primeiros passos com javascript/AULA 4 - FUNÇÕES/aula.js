//1. função sem parâmetro e sem retorno
function SayMyName(name){
    console.log('My name is: ' + name);
}

//2. função com parâmetro e com retorno
function quadradoDe(valor){
    return Math.pow(valor,2);
}

//3. função principal para chamada (melhor organização)
function main(){
    SayMyName('Nathan');
    let quadradoDeDez = quadradoDe(10); 
    console.log(quadradoDeDez);
}
main();