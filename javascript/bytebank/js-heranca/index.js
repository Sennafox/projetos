import { Gerente } from "./Funcionarios/gerente.js";
import { Diretor } from "./Funcionarios/diretor.js";
import { SistemaAutenticacao } from "./sistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 3245678);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 1234567);

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "3245678");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234567");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);