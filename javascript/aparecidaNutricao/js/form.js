var botao = document.querySelector("#adicionar-paciente")
botao.addEventListener("click", criaTabela);

function criaTabela() {
    event.preventDefault();
   
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obterPacienteInfo(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length>0){
        exibeMensagensDeErro(erros);
    return;
    }
    var pacienteTr = montarTr(paciente);

    form.reset();    
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-de-erro");
    erros.forEach(function(erro){
       var li = document.createElement("li");
       li.textContent = erro; 
       ul.appendChild(li);
    });
}

function obterPacienteInfo(form){

    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");

    return td;
}

function validaPaciente(paciente){
    
    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválida");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("A altura é inválido");
    }
    
    if(!validaNome(paciente.nome)){
        erros.push("O nome é inválido");
    }
    
    if(!validaGordura(paciente.gordura)){
        erros.push("O nome é inválido");
    }

    return erros;
}
