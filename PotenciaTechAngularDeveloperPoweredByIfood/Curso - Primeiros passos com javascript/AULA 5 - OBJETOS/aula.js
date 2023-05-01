//A forma mais simples de se declarar um objeto é através de chaves. 
//Dentro dele é possível colocar um conjunto de chaves com seus respectivos valores. 
//Trata-se uma coleção dinâmica de chave e valor. 
let objeto = {
    nome: 'Nathan Cirillo e Silva', 
    idade: 33
};

//Imprimindo o objeto inteiro
console.log(objeto);

//Imprimindo valores específicos 
console.log(objeto.nome);

//Depois que um objeto é criado é possível incrementá-lo dinâmicamente
objeto.altura = 1.74; 
console.log(objeto);

//Também é possível remover o valor de um dado objeto 
delete objeto.nome; 
console.log(objeto);


//Um outro ponto interessante é que dentro de um objeto é possível criar métodos. 
//Esses métodos, por sua vez, usam os valores definidos. Veja: 
let aluno = {
    nome: 'Fernando Marques', 
    telefone: '(11)99617-3652', 
    endereco: 'Av. dos Itabaibas, n.50',

    descrever: function(){
        console.log(this.nome + ' - ' + this.telefone + ' - ' + this.endereco);
    },

    descreverDois: function(){
        console.log(`Nome = ${this.nome} - Telefone = ${this.telefone} e Endereço = ${this.endereco}.`);
    }

}; 
aluno.descrever(); 
aluno.descreverDois();


//O comportamento de uma função de dentro de um objeto pode ser sobrescrito 
aluno.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}
aluno.descrever();

//Para acessar uma propriedade usamos a notação de ponto ou podemos usar via colchetes e o nome da propriedade
aluno['telefone'] = '(11)99723-2345';
console.log(aluno['telefone']);



//Dessa forma se precisar representar mais do que um aluno teríamos repetição de códigos. Iria copiar
//e colar o código proposto acima. Para evitar isso é usado classes. Veja no arquivo aula2 exemplo 
//de como criar uma classe básica. 