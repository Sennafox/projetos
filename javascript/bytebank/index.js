import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 8877554423);
const cliente2 = new Cliente("Alice", 554872936);

const conta1 = new ContaCorrente(1001, cliente2);
conta1.depositar(100);
const conta2 = new ContaCorrente(102, cliente1);

let valor = 50;
conta1.tranferir(valor, conta2);

console.log(conta1);
console.log(conta2);

console.log("O número de contas cadastradas é de " + ContaCorrente.numeroDeContas + " contas.");

