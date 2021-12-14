class Lapiseira {
    calibre: number;
    grafite: any;
    grafiteCalibre: number;
    grafiteDureza: string;
    grafiteTamanho: number;

constructor() {
    this.calibre = 0;
    this.grafite = null;
    this.grafiteCalibre = 0;
    this.grafiteDureza = "";
    this.grafiteTamanho = 0;
}

lapiseira (calibre: number) {
    this.calibre = calibre;
}

inserir (grafite: Grafite) {
    if (lapiseira.grafite == null) {
        if (grafite.calibre == lapiseira.calibre) {
            this.grafiteCalibre = grafite.calibre;
            this.grafiteDureza = grafite.dureza;
            this.grafiteTamanho = grafite.tamanho;
            this.grafite = ("[" + this.grafiteCalibre + ":" + this.grafiteDureza + ":" + this.grafiteTamanho + "]");
        } 
        else {
            console.log ("fail: calibre incompatível");
        }
    }
    else {
        console.log ("fail: ja existe grafite");
    }
}

remover () {
    this.grafite = null;
}

write (folhas: number) {

    if (this.grafiteDureza == "HB") {

        let contHB:number = ((this.grafiteTamanho / 1) - ((this.grafiteTamanho % 1) / 1));
        if (contHB > folhas) {
            this.grafiteTamanho -= (folhas * 1);
            this.grafite = ("[" + this.grafiteCalibre + ":" + this.grafiteDureza + ":" + this.grafiteTamanho + "]");
        }
        else if  (contHB == folhas) {
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }
        else if (contHB >= 1) {
            console.log ("fail: folhas escritas completas: " + contHB);
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }
        else {
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }

    } else if (this.grafiteDureza == "2B") {

        let cont2B:number = ((this.grafiteTamanho / 2) - ((this.grafiteTamanho % 2) / 2));
        if (cont2B > folhas) {
            this.grafiteTamanho -= (folhas * 2);
            this.grafite = ("[" + this.grafiteCalibre + ":" + this.grafiteDureza + ":" + this.grafiteTamanho + "]");
        }
        else if (cont2B == folhas) {
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }
        else if (cont2B >= 1) {
            console.log ("fail: folhas escritas completas: " + cont2B);
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }
        else{
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }


    } else if(this.grafiteDureza == "4B") {

        let cont4B:number = ((this.grafiteTamanho / 4) - ((this.grafiteTamanho % 4) / 4));
        if (cont4B > folhas) {
            this.grafiteTamanho -= (folhas * 4);
            this.grafite = ("[" + this.grafiteCalibre + ":" + this.grafiteDureza + ":" + this.grafiteTamanho + "]");
        }
        else if (cont4B == folhas) {
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }
        else if (cont4B >= 1) {
            console.log ("fail: folhas escritas completas: " + cont4B);
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        } else {
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }

    }
    else if (this.grafiteDureza == "6B") {

        let cont6B:number = ((this.grafiteTamanho / 6) - ((this.grafiteTamanho % 6) / 6));
        if(cont6B > folhas){
            this.grafiteTamanho -= (folhas * 6);
            this.grafite = ("[" + this.grafiteCalibre + ":" + this.grafiteDureza + ":" + this.grafiteTamanho + "]");
        }
        else if (cont6B == folhas){
            console.log("warning: o grafite acabou");
            this.grafite = null;
        }
        else if (cont6B >= 1){
            console.log ("fail: folhas escritas completas: " + cont6B);
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }
        else {
            console.log ("warning: o grafite acabou");
            this.grafite = null;
        }

    }
    else{

    console.log ("warning: o grafite acabou");
    this.grafite = null;
}
}

toString(): string{
    return "calibre: " + this.calibre + ", grafite: " + this.grafite;
}
}

class Grafite{
    calibre: number = 0;
    dureza: string = "";
    tamanho: number = 0;

constructor (calibre: number, dureza: string, tamanho: number){
    this.calibre = calibre;
    this.dureza = dureza;
    this.tamanho = tamanho;
}

toString(): string{
   return "calibre: " + this.calibre + ", dureza: " + this.dureza + ", tamanho: " + this.tamanho;
}
}

// case inserindo grafites

console.log("");
let lapiseira: Lapiseira = new Lapiseira();

lapiseira.lapiseira(0.5);
console.log(lapiseira.toString());
lapiseira.inserir(new Grafite(0.7,"2B",50));
lapiseira.inserir(new Grafite(0.5,"2B",50));
console.log(lapiseira.toString());

// case inserindo e removendo

console.log("");
lapiseira = new Lapiseira();

lapiseira.lapiseira(0.3);
lapiseira.inserir(new Grafite(0.3,"2B",50));
console.log(lapiseira.toString());
lapiseira.inserir(new Grafite(0.3,"4B",70));
console.log(lapiseira.toString());
lapiseira.remover();
lapiseira.inserir(new Grafite(0.3,"4B",70));
console.log(lapiseira.toString());

// case inserindo e removendo

console.log("");
lapiseira = new Lapiseira();

lapiseira.lapiseira(0.9);
lapiseira.inserir(new Grafite(0.9,"4B",14));
lapiseira.write(14);
console.log(lapiseira.toString());
lapiseira.inserir(new Grafite(0.9,"4B",30));
lapiseira.write(6);
console.log(lapiseira.toString());
lapiseira.write(3);
console.log(lapiseira.toString());
