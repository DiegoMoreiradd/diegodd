class Cliente {
    id: string;
    fone: number;

    constructor (id: string, fone: number) {
        this.id = id;
        this.fone = fone;
    }

    public toString(): string {
        return this.id+ ":" +this.fone;
    }
}

class Cinema {

    cadeiras: Map < number, Cliente >;
    assentos: Array<string>;
    constructor (qtdCadeiras:number) {
        this.cadeiras = new Map<number,Cliente>();
        this.assentos = []
        for(let i = 1; i <= qtdCadeiras; i++){
            this.assentos.push(" - ");
        }
    }

    reservar (pessoa: Cliente, numero: number): boolean {

        if(numero >= 40 || numero < 0){
            console.log("fail: numero de cadeira indisponivel");
            return false;
        }
        let presente = false;
        let ocupado = false;
        for(let [key,value] of this.cadeiras){
            if(value.id == pessoa.id){
                presente = true;
            }
            if(key == numero){
                ocupado = true;
            }
    }
    if(presente){
        console.log("fail: o cliente ja esta no cinema");
        return false;
    } else if(ocupado) {
        console.log("fail: cadeira ja ocupada");
        return false;
    } else {
        this.cadeiras.set((numero), pessoa);
        this.assentos[numero] = pessoa.id;
        return true;
    }
}

    cancelar (id: string): void {
        let presente = false;
        for(let [key, value] of this.cadeiras){
            if(value.id == id){
                presente = true;
                this.cadeiras.delete(key);
                this.assentos[key] = " - ";
            }
        }
        if(presente == false){
            console.log("fail: reserva nao encontrada");
        }
    }

    public toString(): string | string[]{
        let str = "[ ";
            for(let i = 0; i < this.assentos.length; i++){
            if(this.assentos[i] == " - "){
                str += "- "
            }else{
                str += this.assentos[i] + " ";
            }
        }
        str += "]";
        return str;
    }
}

// case inicializar

let cinema1 = new Cinema(5);
//console.log(cinema1.toString());
let cinema = new Cinema(4);
//console.log(cinema.toString());

//case reservas

cinema.reservar(new Cliente("davi", 3232), 0);
cinema.reservar(new Cliente("joao", 3131), 3);
console.log(cinema.toString());
cinema.reservar(new Cliente("rute", 3030), 0);
cinema.reservar(new Cliente("davi",3234), 2);

//case cancelamentos

cinema.cancelar("davi");
console.log(cinema.toString());
cinema.cancelar("rita");
console.log(cinema.toString());