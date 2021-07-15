// boolean
const contaPaga: boolean = false;

// number
const idade: number = 25;
const avaliacao: number = 4.5;

// string
const nome: string = "Vinicius Amorim";

// array
const idades: number[] = [23, 45, 82];
const idades2: Array<number> = [12, 32, 45.2]

// tuple
let jogadores: [string, string, string, number]
jogadores = ["Vinicius", "Cesar", "Amorim", 26]

// enum
enum StatusAprovacao{
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// any
const retornoDaAPI = [123, "Vinicius", false]
const retornoDaAPI2: any = {
    // ..........
}

// void
function printarNaTela(msg: string){
    console.log(msg);
}

// null e undefined
const u: undefined = undefined;
const n: null = null;

// object
function criar(objeto: object){
    // ..........
}
criar({
    propriedade: 1,
})

// never
function loopInfinito(): never{
    while(true){

    }
}
function erro(mensagem: string): never{
    throw new Error(mensagem);
}
function falha(){
    return erro("Algo falhou")
}

// union types
const nota: string | number = 5;
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`)
}
exibirNota('10')
exibirNota(10)

// alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

type Funcionarios = Array<Funcionario>;
// const funcionarios: Funcionarios = ["Vinicius", "Cesar", "Amorim"];
const funcionarios: Funcionario[] = [{
    nome: "Vinicius",
    sobrenome: "Amorim",
    dataNascimento: new Date()
}, {
    nome: "Cesar",
    sobrenome: "Amorim",
    dataNascimento: new Date()
}];
function tratarFuncionarios(funcionarios: Funcionario[]){
    for (let funcionario of funcionarios){
        console.log("Nome do funcionário: ", funcionario.nome)
    }
}
tratarFuncionarios(funcionarios);

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string // campo opcional
}

const contato: Contato = {
    nome: "Vinicius",
    telefone1: "1234567890"
}

// types assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
(<number>minhaIdade).toString();

// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1")
console.log(input.value)