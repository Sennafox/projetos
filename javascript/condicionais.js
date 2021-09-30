console.log("Trabalhando com condicionais");

const idadeDoComprador = 17;
const estaAcompanhada = true;
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Manaus`
);

console.log("Destinos possíveis: ");

if(idadeDoComprador >= 18 || estaAcompanhada) {
    console.log("Escolha seu destino: ");
    console.log(listaDeDestinos);
} else {
    console.log("De acordo com a lei estadual n° 666 você não pode comprar a passagem!");
};




