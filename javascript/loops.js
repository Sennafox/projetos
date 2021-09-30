console.log("Trabalhando com loops");

const idadeDoComprador = 17;
const estaAcompanhada = true;
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`, 
    `Manaus`
);
const destino = "São Paulo";
const podeComprar = idadeDoComprador >= 18 || estaAcompanhada

let destinoExiste = false;

/*while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino){
        console.log(`Seu destino existe`);
        destinoExiste = true;
        break;
    }

    contador += 1;
}*/

for(let count = 0; count<listaDeDestinos.length; count++ ) {
    if (listaDeDestinos[count] == destino) {
        destinoExiste = true;
        console.log(destinoExiste);
        break;
    } else {
        console.log(destinoExiste);
    }
}
