let x_circle = 200;
let y_circle = 200;
let x_velocidade = 2;
let y_velocidade = 1.8;
let diametro = 50;
let raio = diametro / 2;

function setup() {
    createCanvas(300, 300);
    noStroke();
}

function draw(){
    background(150);
    x_circle += x_velocidade;
    y_circle += y_velocidade;
    if(x_circle + raio > width){
        x_velocidade *= -1;
    }
    if( y_circle + raio> height){
        y_velocidade *= -1;
    }
    if(x_circle - raio < 0){
        x_velocidade *= -1;
    }
    if( y_circle - raio < 0){
        y_velocidade *= -1;
    }
    /*evento com probablilidade
    if(random(10) < 1){ // 10% de probabilidade
        diametro = 70; // faz a bolinha pulsar
    }
    if(random(100) < 5){ //5% de probabilidade
        circleColor = random(255); // muda a cor da bolinha
    }
    */
    fill(0);
    circle(x_circle, y_circle, 50);
}

