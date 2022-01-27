import {io} from "./io";
const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x: any) => process.stdout.write('' + x);

class Fone {

    constructor (private label: string, private number: string) { }

    public static validate(number: string):boolean {
        let valid = "0123456789()-.";
        for (let i = 0; i < number.length; i++) {
            if (valid.indexOf(number[i]) == -1) {
                return false;
            }
        }
        return true
    }

    public isValid () :boolean {
        if (Fone.validate(this.number) == false) {
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


class IO{

help() {
  write('\n');
  write('Comandos: \n');
  write('init: define o nome do contato -> (init + nome) \n');
  write('add: adiciona um telefone -> (add + op + num) \n');
  write('rm: remove um fone com base no índice (numero); \n');
  write('show: mostra o contato e seus fones; \n');
  write('end: sai do programa \n');
  write('\n');
}

shell() {
  let contato = new Contato("",[]);
  this.help();
    while (true) {
      let line = input();
      let words = line.split(' ');
        if (words[0] == 'end') {
          break;
        } else if (words[0] == 'init') {
          contato.setNome(words[1]);
          write('\n');
        } else if (words[0] == 'add') {
          contato.addFone(new Fone(words[1], words[2]));
          write('\n');
        } else if (words[0] == 'rm') {
          contato.rmFone(+words[1]);
          write('\n');
        } else if (words[0] == 'show') {
          console.log(contato.toString());
          write('\n');
        } else if (words[0] == 'help') {
          this.help();
          write('\n');
        } else {
          console.log('Comando invalido');
          write('\n');
        }
      }
    }
}

let contatoIo = new IO();
contatoIo.shell();