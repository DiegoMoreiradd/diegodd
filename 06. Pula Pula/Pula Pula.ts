class Kid {
    age: number;
    name: string;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
        
    }
    toString() {
        return this.name + ":" + this.age;
    }
}

class Trampoline {
    playing: Array < Kid >;
    waiting: Array < Kid >;

    constructor() {
        this.playing = [];
        this.waiting = [];
    }

    arrive (kid: Kid) {
        this.waiting.push(kid);
    }

    in() {
        this.playing.push(this.waiting[0]);
        this.waiting.splice(0, 1);
    }

    out() {
        this.waiting.push(this.playing[0]);
        this.playing.splice(0, 1);
    }

    remove(name: string) {
        for (let i = 0; i < this.playing.length; i++) {
            if (this.playing[i].name == name) {
                this.playing.splice(i, 1);
            }
        }

        for (let i = 0; i < this.waiting.length; i++) {
            if (this.waiting[i].name == name) {
                this.waiting.splice(i, 1);
            }
        }
    }

    toString() {
        let str = "=> ";
        for (let i = this.waiting.length -1; i >= 0; i--) {
            str += this.waiting[i] + " ";
        }
        str += "=> [ " ;
        for (let i = this.playing.length -1; i >= 0; i--) {
            str += this.playing[i] + " ";
        }
        return str + "]";
    }
}


let pulapula = new Trampoline();
console.log("");

//case unico

pulapula.arrive(new Kid("mario", 5));
pulapula.arrive(new Kid("livia", 4));
pulapula.arrive(new Kid("luana", 3));
console.log(pulapula.toString());
console.log("");

//case entrando

pulapula.in();
console.log(pulapula.toString());
pulapula.in();
console.log(pulapula.toString());
console.log("");

//case saindo

pulapula.out();
console.log(pulapula.toString());
console.log("");

//case remove

pulapula.remove("luana");
console.log(pulapula.toString());
pulapula.remove("livia");
console.log(pulapula.toString());
console.log("");
