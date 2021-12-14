class Entity {
    x: number; // horizontal
    y: number; // vertical
    step: number; // passos
    image: p5.Image; // imagem

    //Construindo as imagens com valores
    constructor(x: number, y: number, step: number, image: p5.Image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }
    
    //desenhando as imagens
    draw(): void {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }
}

// Desenhando o fundo
class Board {
    nl: number; //linhas
    nc: number; // colunas
    step: number; // Passos
    background: p5.Image; // imagem de fundo

    // Construindo o fundo(recebendo valores)
    constructor(nc: number, nl: number, step: number, background: p5.Image) {
        this.nc = nc
        this.nl = nl
        this.step = step
        this.background = background;
    }

    //desenhando as linhas e colunas
    draw(): void {
        lobo_loop();
        rabbit_loop();
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for (let x = 0; x < this.nc; x++) {
            for (let y = 0; y < this.nl; y++) {
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    }
}

//declarando as imagens
let wolf_img: p5.Image;
let rabbit_img: p5.Image;
let board_img: p5.Image;
let dead_img: p5.Image;

//declarando os objetos
let dead: Entity;
let wolf: Entity;
let rabbit: Entity;
let board: Board;

//Verificando se as imagens foram carregadas
function loadImg(path: string): p5.Image {
    return loadImage(
        path,
        () => console.log("Loading " + path + " ok"),
        () => console.log("Loading " + path + " error")
    );
}

//carregando as imagens
function preload() {
    dead_img = loadImg('../sketch/dead.jpg');
    wolf_img = loadImg('../sketch/lobol.png');
    rabbit_img = loadImg('../sketch/coelho.png');
    board_img = loadImg('../sketch/grama.jpg');
}

function lobo_loop(): void{
    if(wolf.x > 5)
      wolf.x = 0;
    if (wolf.y > 3)
      wolf.y = 0;
    if(wolf.x < 0)
    wolf.x = 5;
    if (wolf.y < 0)
    wolf.y = 3;
    if(wolf.x === rabbit.x && wolf.y === rabbit.y){
        dead.x = 0;
    }
  }

  function rabbit_loop(): void{
    if(rabbit.x > 5)
    rabbit.x = 0;
    if (rabbit.y > 3)
    rabbit.y = 0;
    if(rabbit.x < 0)
    rabbit.x = 5;
    if (rabbit.y < 0)
    rabbit.y = 3;
    if(wolf.x === rabbit.x && wolf.y === rabbit.y){
        dead.x = 0;
    }
  }
}

//Movimentando os objetos de acordo com que as techas são pressionadas
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        wolf.x--;
    } else if (keyCode === RIGHT_ARROW) {
        wolf.x++;
    } else if (keyCode === UP_ARROW) {
        wolf.y--;
    } else if (keyCode === DOWN_ARROW) {
        wolf.y++;
    }

    if (keyCode === "A".charCodeAt(0)) {
        rabbit.x--;
    } else if (keyCode === "D".charCodeAt(0)) {
        rabbit.x++;
    } else if (keyCode === "W".charCodeAt(0)) {
        rabbit.y--;
    } else if (keyCode === "S".charCodeAt(0)) {
        rabbit.y++;
    }
}

// Inserindo os valores do novo objeto
function setup() {
        let size = 100;
        dead = new Entity(6, 0, 600, dead_img);
        wolf = new Entity(2, 2, size, wolf_img);
        rabbit = new Entity(1, 1, size, rabbit_img);
        board = new Board(6, 4, size, board_img);
        createCanvas(board.nc * size, board.nl * size);
}

//Mandando desenhar os objetos
function draw() {
    board.draw();
    wolf.draw();
    rabbit.draw();
    dead.draw();
}

