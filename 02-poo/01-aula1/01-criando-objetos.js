//LITERAIS: usando a própria descrição de um objeto em javascript
var pessoa = {
    nome: ['Giordana', 'Rubin'],
    anoNascimento: 1997,
    profissao: 'Estudante',
    calculaIdade: function() {
        return new Date().getFullYear() - this.anoNascimento;
    }
};
pessoa.calculaIdade()
console.log(pessoa)

//FÁBRICAS: funções que criam e retornam objetos
function criaEmpregado(salarioBase, valorHoraExtra, qtHorasExtras) {
    return {
        salarioBase,
        valorHoraExtra,
        qtHorasExtras,
        calculaSalario: function() {
            return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras)
        }
    }
};
const empregado = criaEmpregado(5000, 100, 10);
empregado.calculaSalario();
console.log(empregado)

//CONSTRUTORES: tb são funçoes que criam objetos, mas de uma forma mais alinhada à POO
function Pessoa(nome2, anoNascimento2, profissao2) {
    this.nome2 = nome2
    this.anoNascimento2 = anoNascimento2
    this.profissao2 = profissao2
    this.calculaIdade2 = function(){
        return new Date().getUTCFullYear() - this.anoNascimento2
    }
}
const pessoa2 = new Pessoa('Ana', 1995, 'Dev')
console.log(pessoa2)

//PROTÓTIPOS: é a forma q o javascript faz herança (e não classes, como em outras linguagens).

