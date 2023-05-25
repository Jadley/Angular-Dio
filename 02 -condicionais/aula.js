let gastoRenegade = 10; //8km por litro
const precoGasolina = 5.79; //Litro
const precoAlcool = 4.0;
let distanciaPercorrida = 100; //km

let seuCarro = "alcool";
if (seuCarro == "gasolina") {
  console.log(
    `Uma viagem de ${distanciaPercorrida}km com o jeep Renegade utilizando gasolina custa em torno de: ${(
      (distanciaPercorrida / gastoRenegade) *
      precoGasolina
    ).toFixed(2)} reais.`
  );
} else {
  console.log(
    `Uma viagem de ${distanciaPercorrida}km com o jeep Renegade utilizando alool custa em torno de: ${(
      (distanciaPercorrida / gastoRenegade) *
      precoAlcool
    ).toFixed(2)} reais.`
  );
}
