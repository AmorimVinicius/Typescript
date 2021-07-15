class Data{
    dia: number;
    mes: number;
    ano: number;

    // o modificador de acesso public eh explicito

    constructor(dia: number, mes: number, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

}

class Pessoa{
    // para essa notacao, o private eh default
    constructor(public nome: string, public sexo: string, public idade: number){
    }
}

const pessoa = new Pessoa('Vinicius', 'Masculino', 25)

console.log(pessoa.nome)

const data = new Data(1, 1, 2020);
const data2 = new Data(1, 1) // esta recebendo o ano default
console.log(data.ano)