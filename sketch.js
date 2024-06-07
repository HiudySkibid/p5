function multiNumeros() {
  let numero1 = 99;
  let numero2 = 9;
  let resultado = numero1 * numero2;
  console.log(resultado);
  texto = 'O resultado dessa multiplicação é: ' + resultado;
  textSize(25);
 fill ("red")
  text(texto, 5,10,150,150);
  

}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background (0);
  multiNumeros()
}
