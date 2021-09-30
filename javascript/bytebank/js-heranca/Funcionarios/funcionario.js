export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificação = 1;
        this._senha;
    }

    get senha() {
        return this._senha;
    }

    cdastrarSenha(senha){
        this._senha = senha;
    }
}