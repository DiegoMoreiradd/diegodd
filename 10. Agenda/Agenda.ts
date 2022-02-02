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
    private contatos: Array<Contato>;

    constructor () {
       this.contatos = new Array<Contato>();
    }

    toString(): string {
        return this.contatos.join("\n");
    }
   
    private posNome (nome: string): number {
        for (let i = 0; i < this.contatos.length; i++) {
            if (this.contatos[i].getName() == nome) {
                return i;        
            }
        }
        return -1;
    }

    public addContato (contato: Contato): void{
        let i: number = this.posNome(contato.getName());
        if (i == -1) {
            this.contatos.push(contato);
            this.contatos.sort((a, b) => a.getName().localeCompare(b.getName()))
        } else {
                for (let cont = 0; cont < contato.getFones().length; cont++) {
                this.contatos[i].addFone(contato.getFones()[cont]);
                }
            }
        }
    public rmContato(nome: string): void {
        let i: number = this.posNome(nome);
        if (i != -1){
            this.contatos.splice(i, 1);
        } else {
            console.log("Contato inexistente")
        }
    }

    public rmFone (nome: string, indice: number): void {
        let i: number = this.posNome(nome);
        if (i != -1) {
            this.contatos[i].rmFone(indice);
        } else {
            console.log("Contato inexistente")
        }
    }

    public searchContato(nome: string): void {
        let resultado = "";
        for (let contato of this.contatos.values()) {
            if (contato.getName().includes(nome)) {
                resultado += (contato.getName() + "\n");
            } 
        } 
        if (resultado != "") {
            console.log(resultado);
        } else {
        console.log("Resultado não encontrado");
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
agenda.rmContato("bia");
//console.log(agenda.toString());
agenda.addContato(new Contato("ava", [new Fone("tim", "5454")]));
agenda.addContato(new Contato("rui", [new Fone("viv", "2222"), new Fone("oio", "9991")]));
agenda.addContato(new Contato("zac", [new Fone("rec", "3131")]));
//console.log(agenda.toString());
agenda.searchContato("va");
agenda.searchContato("999");