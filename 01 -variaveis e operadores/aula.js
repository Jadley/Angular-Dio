let gastoRenegade = 10; //8km por litro
const precoCombustivel = 5.79; //Litro
let distanciaPercorrida = 100; //km

console.log(
  `Uma viagem de ${distanciaPercorrida}km com o jeep Renegade custa em torno de: ${(
    (distanciaPercorrida / gastoRenegade) *
    precoCombustivel
  ).toFixed(2)} reais.`
);
