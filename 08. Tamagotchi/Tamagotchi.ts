import {io} from "./io";
const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x: any) => process.stdout.write('' + x);

class Pet {
  private energia: number;
  private energiaMax: number;
	private saciedade: number;
	private saciedadeMax: number;
  private limpeza: number;
  private limpezaMax: number;
  private diamantes: number
  private idade: number;
  private isAlive: boolean = true;

	constructor(energiaMax: number, saciedadeMax: number, limpezaMax: number){
    this.energia = energiaMax;
    this.energiaMax = energiaMax;
		this.saciedade = saciedadeMax;
		this.saciedadeMax = saciedadeMax;
    this.limpeza = limpezaMax;
    this.limpezaMax = limpezaMax;
    this.diamantes = 0;
    this.idade = 0;

	}

  public getEnergia(): number {
    return this.energia;
  }

  public getEnergiaMax(): number {
    return this.energiaMax;
  }

  public setEnergia(energia: number): void {
    if(this.isAlive == true) {
    if (energia <= 0) {
      this.energia = 0;
      this.isAlive = false;
      write("fail: pet morreu de fraqueza \n")
    } else if (energia > this.energiaMax) {
      this.energia = this.energiaMax;
    } else {
      this.energia = energia;
    }
    }
  }

  public getLimpeza(): number {
    return this.limpeza;
  }

  public getLimpezaMax(): number {
    return this.limpezaMax;
  }

  public setLimpeza(limpeza: number): void {
    if(this.isAlive == true) {
    if (limpeza <= 0) {
      this.limpeza = 0;
      this.isAlive = false;
      write("fail: pet morreu de sujeira \n")
    } else if (limpeza > this.limpezaMax) {
      this.limpeza = this.limpezaMax;
    } else {
      this.limpeza = limpeza;
    }
    }
  }

  public getDiamantes(): number {
    return this.diamantes;
  }

  public setDiamantes(diamantes: number): void {
    this.diamantes = diamantes;
  }

  public getIdade(): number {
    return this.idade;
  }

  public setIdade(idade: number): void {
    this.idade = idade;
  }

  public getSaciedade(): number {
    return this.saciedade;
  }

  public setSaciedade(saciedade: number): void {
    if (saciedade <= 0) {
      this.saciedade = 0;
      this.isAlive = false;
      write("fail: pet morreu de fome \n")
    } else if (saciedade > this.saciedadeMax) {
      this.saciedade = this.saciedadeMax;
    } else {
      this.saciedade = saciedade;
    }
  }

  public play(): void {
    if(this.isAlive == true) {
    this.setEnergia(this.getEnergia() - 2);
    this.setSaciedade(this.getSaciedade() - 1);
    this.setLimpeza(this.getLimpeza() - 3);
    this.setDiamantes(this.getDiamantes() + 1);
    this.setIdade(this.getIdade() + 1);
    } else {
      write('fail: pet esta morto \n')
    }
  }

  public eat(): void {
    if(this.isAlive == true) {
    this.setEnergia(this.getEnergia() - 1);
    this.setSaciedade(this.getSaciedade() + 4);
    this.setLimpeza(this.getLimpeza() - 2);
    this.setIdade(this.getIdade() + 1);
    }
    if(this.isAlive == false){
      write('fail: pet esta morto \n');
    }
  }

  public sleep(): void {
    if(this.isAlive == true) {
    if(this.getEnergia() > this.getEnergiaMax() -4){
      write('fail: nao esta com sono \n');
    } else {
    this.setIdade(this.getEnergiaMax() - this.getEnergia() + this.getIdade());
    this.setEnergia(this.getEnergiaMax());
    this.setSaciedade(this.getSaciedade() - 1);
    }
    }
    if(this.isAlive == false){
      write('fail: pet esta morto \n');
    }
  }

  public clean(): void {
    if(this.isAlive == false){
      write('fail: pet esta morto \n');
    }
    this.setEnergia(this.getEnergia() - 3);
    this.setSaciedade(this.getSaciedade() - 1);
    this.setLimpeza(this.getLimpezaMax());
    this.setIdade(this.getIdade() + 2);
  }

	public toString(): string {
      return "E:" + this.energia + "/" + this.energiaMax + ", S:" + this.saciedade + "/" + this.saciedadeMax + ", L:" + this.limpeza + "/" + this.limpezaMax + ", D:" + this.diamantes + ", " +  "I:" + this.idade;
  } 
}

class IO{

help() {
  write('\n');
  write('Comandos: \n');
  write('init <energiaMax> <saciedadeMax> <limpezaMax>: cria um novo pet \n');
  write('show: mostra o pet \n');
  write('play: faz o pet brincar \n');
  write('eat: faz o pet comer \n');
  write('sleep: faz o pet dormir \n');
  write('clean: faz o pet dormir \n');
  write('end: sai do programa \n');
  write('\n');
}

shell() {
  let pet = new Pet(0,0,0)
  this.help();
    while (true) {
      let line = input();
      let words = line.split(' ');
        if (words[0] == 'end') {
          break;
        } else if (words[0] == 'init') {
          pet = new Pet(+words[1], +words[2], +words[3]);
          write('\n');
        } else if (words[0] == 'show') {
          write(pet.toString() + '\n');
          write('\n');
        } else if (words[0] == 'play') {
            pet.play();
            write('\n');
        } else if (words[0] == 'eat') {
          pet.eat();
          write('\n');
        } else if (words[0] == 'sleep') {
          pet.sleep();
          write('\n');
        } else if (words[0] == 'clean') {
          pet.clean();
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

let petIo = new IO();
petIo.shell();