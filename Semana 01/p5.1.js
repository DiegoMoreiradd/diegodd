function setup(){
    //criando uma area de desenho
    createCanvas(windowWidth, windowHeight); //Valor x, valor y
    frameRate(1); // quantidade de frames por segundo
}

function draw(){ // roda a cada frame

    background(155); // cor de fundo, pode ser passada no formato rgb
    line(0, 0, 0, 0); // parametros x , y inicial, x , y final
    point(100, 100); // gereando um ponto no pixel 100, 100
    point(random(width)), random(height)); //gerando um ponto em qualquer lugar da tela
    stroke(0); //mudando a cor
    stroke(random(255)); // colocando uma cor aleatoria
    strokeWidth(4); // Definindo a largura do traço
    strokeWidth(random(5)); // definindo uma cor aleatoria do traco

    line(widht / 2, height / 2, random(width), random(height)); // criando uma linha na metade da largura e metade da altura (meio de tela)

    //fazendo uma linha aparecer sempre na horizontal e qualquer altura

    let altura = random(height);
    line(0, altura, 0, altura);

    //desenhando um circulo
    circle(x, y tamanho);

    //desenhando retangulo
    noStroke(); //desenhos sem borda
    stroke(0,255,0); // definindo verde para cores de linhas
    fill(255, 0, 0); // definindo vermelho para cores de preenchimento
    rectMODE(CENTER); // retangulo no meio da tela (definindo os proximos a serem criados com esse padrao)
    rect(width / 2, height / 2, 100, 100); // (x,y, tamanho x, tamanho y);
    point(width / 2, height / 2); // ponto no meio da tela




}