class Pessoa{
    nome; 
    peso; 
    altura; 

    constructor(nome, peso, altura){
        this.nome = nome; 
        this.peso = peso; 
        this.altura = altura; 
    }

    calcularIMC(){
        return (this.peso / Math.pow(this.altura,2)).toFixed(2);
    }

    classificarIMC(){
        let  imc = this.calcularIMC();
        if(imc < 18.5)
            return 'Magreza'; 
        else if(imc >= 18.5 && imc <= 24.9)
            return 'Normal'; 
        else if(imc > 24.9 && imc <= 29.9)
            return 'Sobrepeso'; 
        else if(imc > 29.9 && imc <= 39.9)
            return 'Obesidade'; 
        else if(imc > 39.9)
            return 'Obsidade Grave'; 
    }
}



function main(){
    let pessoa = new Pessoa('José',70,1.75);
    let imc = pessoa.calcularIMC(); 
    console.log(`IMC do(a) ${pessoa.nome} é ${imc}. Classificação: ${pessoa.classificarIMC()}.`);
}
main();
