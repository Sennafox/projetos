
var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida nutrição";
//acessar dados de pacientes 
var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++){
        
        var paciente = pacientes[i];


var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");

//var nome = tdNome.textContent;
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
//var gordura = tdGordura.textContent;

var pesoValidado = validaPeso(peso);
var alturaValidada = validaAltura(altura);

if (!pesoValidado) {
    tdImc.textContent = "Peso inválido";
    pesoValidado = false;
    paciente.classList.add("campo-invalido");
} 

if (!alturaValidada) {
    tdImc.textContent = "Altura inválida";
    alturaValidada = false;
    paciente.classList.add("campo-invalido");
}

if (pesoValidado && alturaValidada) {

    var imc = calculoImc(peso, altura);
    tdImc.textContent = imc;

}
}

function validaPeso(peso) {
    if (peso>=0 && peso<300) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura>=0 && altura<3) {
        return true;
    }else{
        return false;
    }
}

function validaNome(nome){
    if(paciente.nome.length==0){
        return true;
    } else {
        return false;
    }
}

function validaGordura(gordura){
    if(gordura.paciente.length==0){
        return true;
    } else {
        return false;
    }

}

function calculoImc(peso, altura) {
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}
