//aqui vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;



function setup() {
    // Aqui vou criar minha "mesa"
   createCanvas(600,400);
}

function draw() {
    // Aqui vou colocar a cor da "mesa"
    background(139,0,0);
    //chamando a função
    CriaBolinha(xBolinha, yBolinha, tamBolinha);
}

//função bolinha
function CriaBolinha(xBolinha, yBolinha, tamBolinha) {
    circle(xBolinha, yBolinha, tamBolinha);

}




