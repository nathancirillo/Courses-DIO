//Exemplo de como criamos uma classe. Veja que é diferente de um simples objetos. 
//Atributos separados por ponto-e-vírgula. Métodos não precisam da palavra function. 
class Pessoa{
    nome; 
    idade; 

    constructor(nome, idade){
        this.nome = nome; 
        this.idade = idade; 
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

//Instanciando um objeto da classe Pessoa
let p1 = new Pessoa('João', 55);
let p2 = new Pessoa('Nathan',33); 


//função para identificar pessoas mais velhas passando objetos 
function pessoaMaisVelha(pUm, pDois){
    if(pUm.idade > pDois.idade)
        console.log(`${pUm.nome}  é mais velho!.`);
    else if(pUm.idade < pDois.idade)
        console.log(`${pDois.nome} é mais velho!`);
    else
        console.log(`${pUm.nome} e ${pDois.nome} possuem a mesma idade!`);
}
pessoaMaisVelha(p1,p2);
