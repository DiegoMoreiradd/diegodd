class Veiculo {
    private modelo: string;
    private ano: number;
    private licenciado: boolean = false;

    public constructor(modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAno(): number {
        return this.ano;
    }

    public getLigado(): boolean {
        return this.licenciado;
    }

    public PagarLicenciamento(): string {
        this.licenciado = true;
        return "Licenciamento pago!";
    }
    
    public toString() {
        let ligada: string = this.licenciado ? "Licenciado" : "Não Licenciado";
        return "Modelo: " + this.modelo + ' | Ano: ' + this.ano + ' | Status: ' + ligada;
    }
    
}

class Moto extends Veiculo {
    protected tanque: number;
    protected tanque_max: number;
    
    public constructor(modelo: string, ano: number, tanque: number) {
        super(modelo, ano);
        this.tanque = tanque;
        this.tanque_max = tanque;
    }

    public getTanque(): number {
        return this.tanque;
    }

    public abastecer(): string {
        this.tanque = this.tanque_max;
        return "Tanque abastecido!";
    }

    public toString() {
        return super.toString() + ' | Tanque:' + this.tanque + ' litros';
    }
}

class MotoEntrega extends Moto {
    private taxa: number;
    private distancia: number;
    private carteira: number = 0;
    constructor(modelo: string, ano: number, tanque: number, taxa: number, distancia: number) {
        super(modelo, ano, tanque);
        this.taxa = taxa;
        this.distancia = distancia;
    }

    public entregar(): string {
        this.carteira += this.taxa;
        this.tanque -= this.distancia;
        return "Entrega realizada!";
    }
    
    public toString(): string {
        return super.toString() + ' | Carteira: ' + this.carteira + ' reais';
    }
}

console.log("");

let veiculo: Veiculo = new Veiculo("Honda", 2010);
console.log(veiculo.toString());

console.log("");

let moto = new Moto("Ducati", 2018, 50);
console.log(moto.toString());

console.log("");

moto.PagarLicenciamento();
console.log(moto.toString());

console.log("");

let entregar = new MotoEntrega("Yamaha", 2018, 50, 10, 5);
console.log(entregar.toString());
entregar.PagarLicenciamento();
entregar.entregar();
console.log(entregar.toString());
entregar.abastecer();
console.log(entregar.toString());

console.log("");

