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
    fileira: Array < Cliente | null >;
    constructor (qtdCadeiras:number) {
        this.fileira = [];
        for (let i = 0; i < qtdCadeiras; i++) {
            this.fileira.push(null);
        }
    }

    indexOf (id: String): number {
        return this.fileira.findIndex(c => c != null && c.id == id);
    }

    reservar (cliente: Cliente, posicao: number): boolean {

        if (posicao < 0 || posicao > this.fileira.length) {
            console.log("fail: essa cadeira nao existe");
            return false;
        }

        if (this.fileira[posicao] != null) {
            console.log("fail: cadeira ja esta ocupada");
            return false;
        }
        if(this.indexOf(cliente.id) != -1){
            console.log("fail: cliente ja esta no cinema");
        return false;
    }
    this.fileira[posicao] = cliente;
    return true;
}

    cancelar (id: string): boolean {
        let posicao = this.indexOf(id);
        if(posicao != -1){
            this.fileira[posicao] = null;
            return true;
        }
        console.log("fail: cliente nao esta no cinema");
        return false;
    }

    public toString():string{
        let str = "[ ";
            for(let i = 0; i < this.fileira.length; i++){
            if(this.fileira[i] == null){
                str += "- "
            }else{
                str += this.fileira[i] + " ";
            }
        }
        str += "]";
        return str;
    }
}

// case inicializar

console.log("");
let cinema1 = new Cinema(5);
console.log(cinema1.toString());
let cinema = new Cinema(4);
console.log(cinema.toString());
console.log("");

//case reservas

cinema.reservar(new Cliente("davi", 3232), 0);
cinema.reservar(new Cliente("joao", 3131), 3);
console.log(cinema.toString());
cinema.reservar(new Cliente("rute", 3030), 0);
cinema.reservar(new Cliente("davi",3234), 2);
console.log("");

//case cancelamentos

cinema.cancelar("davi");
console.log(cinema.toString());
cinema.cancelar("rita");
console.log(cinema.toString());
console.log("");