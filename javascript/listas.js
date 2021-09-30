console.log("Lista de viagens");

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Manaus`
);

listaDeDestinos.push(`Curitiba`); 

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(3,1);

console.log(listaDeDestinos);

