//aqui vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

//velocidade
let xVelocidadeBolinha = 6;
let yVelocidadeBolinha = 6;

function setup() {
    // Aqui vou criar minha "mesa"
   createCanvas(600,400);
}

function draw() {
    // Aqui vou colocar a cor da "mesa"
    background(139,0,0);
    //chamando a função
    CriaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
    borda();
}

//função bolinha
function CriaBolinha(xBolinha, yBolinha, tamBolinha) {
    circle(xBolinha, yBolinha, tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xVelocidadeBolinha + xBolinha;
    yBolinha = yVelocidadeBolinha + yBolinha;
}

function borda(){
    if (xBolinha > width || xBolinha <0){
        xVelocidadeBolinha *= -1;
    }
    if (yBolinha > heidth || yBolinha <0){
        yVelocidadeBolinha *= -1;
}
