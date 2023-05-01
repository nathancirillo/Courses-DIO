class Carro{
    marca;
    cor; 
    gastoMedioCombustivel;
       
    
    constructor(marca, cor, gastoMedioCombustivel){
        this.marca = marca; 
        this.cor = cor; 
        this.gastoMedioCombustivel = gastoMedioCombustivel;         
    }
    
    valorViagem(kmViagem, precoCombustivel){
        return (kmViagem/this.gastoMedioCombustivel) * precoCombustivel; 
    }
}

function main(){
    let car1 = new Carro('Fiat','Vermelho',10);
    console.log(car1);
    console.log(`O ${car1.marca} da cor ${car1.cor} faz ${car1.gastoMedioCombustivel} por litro.`);
    console.log(`Irá gastar para viagem um total de: R$ ${car1.valorViagem(200, 4.39)}`);
}

main();






