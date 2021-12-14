class Motorcycle {
    person: Person | null;
    power: number;
    time: number;
    
    constructor(power: number) {
        this.person = null;
        this.power = power;
        this.time = 0;
    }

    buy(time: number) {
        this.time += time;
    }

    drive(time: number) {
        if(this.time == 0){
            console.log("fail: time zerado")
        }else{
            if(this.time < time){
                console.log("fail: andou " + this.time + " min e acabou o time");
                this.time = 0;
            }else{
                this.time -= time;
            }
        }

    }

    honk(){
        if(this.person == null){
            console.log("fail: moto vazia");
        }else{
            let buzina: string = "Pe"
            for(let i  = 1; i < this.power; i++){
                buzina += "e";
            }
            console.log(buzina + "m!");
        }

    }

    in(person: Person){
        if(this.person != null){
            console.log("fail: moto ocupada");
        }        
        if(person.age >= 10){
            console.log ("fail: muito grande para andar de moto")
        }
        if(this.person == null){
            this.person = person;
        }
    }

    out(){
        if (this.person == null) {
            console.log ("fail: moto vazia");
        }else{
            let saiu = this.person.toString();
            this.person = null;
            return saiu;
        }

    }

    toString(): string{
        return "power: " + this.power + ", time: " + this.time + ", person: [" + this.person + "]";
    }
}

class Person{
    age: number;
    name: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    toString(): string{
        return (this.name + ":" + this.age);
    }
}

/*case subindo e buzinando

let moto = new Motorcycle(1);
console.log(moto.toString());
moto.honk();
moto.in(new Person("marcos", 4));
console.log(moto.toString());
moto.honk();
moto.in(new Person("marisa", 2));
console.log(moto.toString());
*/

/*case subindo e buzinando

let moto = new Motorcycle(5);
console.log(moto.toString());
moto.in(new Person("marcos", 4));
console.log(moto.toString());
moto.honk();
*/

/*case subindo e trocando

let moto = new Motorcycle(7);
moto.in(new Person("heitor", 6));
console.log(moto.toString());
console.log(moto.out());
moto.out();
moto.in(new Person("suzana", 8));
console.log(moto.toString());
*/

/*case passeando

let moto = new Motorcycle(7);
moto.in(new Person("suzana", 8));
moto.drive(10);
moto.buy(40);
console.log(moto.toString());
moto.drive(20);
console.log(moto.toString());
*/

/*case nem grande nem pequeno

let moto = new Motorcycle(7);
moto.buy(20);
moto.in(new Person("andreina", 23));
moto.drive(15);
console.log(moto.toString());
*/

//case acabou o time
let moto = new Motorcycle(7);
moto.buy(20);
moto.in(new Person("andreina", 6));
moto.drive(15);
console.log(moto.toString());
moto.drive(10);
