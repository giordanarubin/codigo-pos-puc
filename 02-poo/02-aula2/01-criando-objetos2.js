//CLASSES: criam objetos a partir de um modelo
class Pessoa {
    constructor(nome, anoNascimento, profissao) {
        this.nome = nome
        this.anoNascimento = anoNascimento
        this.profissao = profissao
    }
    ola() {
        console.log('Olá')
    }
    calculaIdade() {
        return new Date().getUTCFullYear() - this.anoNascimento
    }
}
const pessoa1 = new Pessoa('Jorge', 1963, 'Pedreiro')


class Estudante extends Pessoa {//herança
    #matricula //a cerquilha meio que torna o atributo private
    notas = []
    constructor(nome, anoNascimento, matricula){
        super(nome, anoNascimento, 'Estudante')
        this.#matricula = matricula
    }
    getMatricula(){
        return this.#matricula
    }
    setMatricula(matricula){
        this.#matricula = matricula
    }
    ola() {//polimorfismo
        super.ola()
        console.log(', colegas.')
    }
}
const aluno1 = new Estudante('Sara', 2000, 12345)
const aluno2 = new Estudante('Diego', 1998, 54321)
aluno2.anoIngresso = 2016 //adiciona um atributo novo a um objeto "na unha"


class Nota {
    constructor(disciplina, grau) {
        this.disciplina = disciplina
        this.grau = grau
    }
}
const aluno3 = new Estudante('Julio', 1999, 11223)
aluno3.notas = [new Nota("Matematica", 8), new Nota("Portugues", 9)]
