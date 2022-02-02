class Fone {

    constructor (private label: string, private number: string) { }

    public static validar(number: string):boolean {
        let valid = "0123456789()-.";
        for (let i = 0; i < number.length; i++) {
            if (valid.indexOf(number[i]) == -1) {
                return false;
            }
        }
        return true
    }

    public isValid () :boolean {
        if (Fone.validar(this.number) == false) {
            return false;
        } else {
            return true;
        }
    }

    public getLabel () {
        return this.label;
    }
    public getNumber () {
        return this.number
    }
    public setNumber (number: string) {
            this.number = number;
        }
        
    public setLabel (label: string) {
        this.label = label;
    }

    toString () :string {
        return this.label + ":" + this.number;
    }
}

class Contato {
  
    nome: string;
    private fones: Array<Fone>;

    constructor (nome: string, fones:Array<Fone>) {
        this.nome = nome;
        this.fones = [];
        for (let fone of fones) {
            this.addFone(fone);
        }
    }

    addFone (fone: Fone) {
        if (fone.isValid() == true) {
            this.fones.push(fone);
        } else {
            console.log("fail: invalid number");
        }
    }

    rmFone (index: number) {

        if (index >= 0 && index <= this.fones.length) {
            this.fones.splice(index, 1);
        } else{ 
            console.log("fail: índice inválido.");
        }
        
    }

    setFones (fones: Array<Fone>) {
        this.fones = [];
        for (let fone of fones) {
            this.addFone(fone);
        }
    }
    setNome (nome: string) {
        this.nome = nome;
    }

    getFones ():Array<Fone> {
        return this.fones;
    }
    
    getName () {
        return this.nome;
    }

    public toString () :string {
        let str = "- ";
        str += this.nome;
        for (let i = 0; i < this.fones.length; i++){
            str += " [" + i + ":";
            str += this.fones[i].getLabel() + ":" + this.fones[i].getNumber();
            str += "]";
        }
        return str;
    }
}

class Agenda {
    contatos: Map<string,Contato>;

    constructor () {
        this.contatos = new Map<string,Contato>();

    }

    toString(): string {
        let str = ""
        for (let value of this.contatos.values()) {
            str += value.toString() + "\n";
        }
        return str;
    }

    public addContato (contato: Contato): void {
        let nome = contato.getName();
        if (!this.contatos.has(nome)) {
            this.contatos.set(nome, contato);
        } else {
            for (let fone of contato.getFones()) {
                let ctt = this.contatos.get(nome);
                ctt!.addFone(fone);
            }
        }
    }

    public rmContato (nome: string): void {
        if (this.contatos.has(nome)) {
            this.contatos.delete(nome);
        } else {
            console.log("fail: contato nao existe");
        }
    }

    public rmFone (nome: string, indice: number): void {
        if(this.contatos.has(nome)){
            this.contatos.get(nome)!.rmFone(indice);
        } else {
            console.log("fail: contato nao existe");
        }
    }

    public searchContato (nome: string): void {
        let resultado = "";
        for (let contato of this.contatos.values()) {
            if (contato.nome.includes(nome)) {
                resultado += (contato.nome + " " + contato.getFones() + "\n");
            }
        }for (let contato of this.contatos.values()) {
            if (contato.getFones().length > 0) {
                for (let fone of contato.getFones()) {
                    if (fone.getNumber().includes(nome)) {
                        resultado += (contato.nome + " " + contato.getFones() + "\n");
                    }
                }
            }
        }

        if (resultado != "") {
            console.log(resultado);
        } else {
            console.log("fail: resultado nao encontrado");
        }
    }
}

let agenda = new Agenda();
agenda.addContato(new Contato("eva", [new Fone("oio", "8585"), new Fone("cla", "9999")]));
agenda.addContato(new Contato("ana", [new Fone("tim", "3434")]));
agenda.addContato(new Contato("bia", [new Fone("viv", "5454")]));
//console.log(agenda.toString());
agenda.addContato(new Contato("ana", [new Fone("cas", "4567"), new Fone("oio", "8754")]));
//console.log(agenda.toString());
agenda.rmFone("ana", 0);
//console.log(agenda.toString());
agenda.rmContato("bia");
//console.log(agenda.toString());
agenda.addContato(new Contato("ava", [new Fone("tim", "5454")]));
agenda.addContato(new Contato("rui", [new Fone("viv", "2222"), new Fone("oio", "9991")]));
agenda.addContato(new Contato("zac", [new Fone("rec", "3131")]));
//console.log(agenda.toString());
agenda.searchContato("va");
agenda.searchContato("999");