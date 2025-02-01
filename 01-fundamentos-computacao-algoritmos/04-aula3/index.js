//chamada de função, nome, parametro
function avaliaParidade(limiteSuperior) {
    for(let i = 0; i < limiteSuperior; i++){
        if (i % 2 == 1) {//se o resto da divisao por 2 for 1
            console.log(i + " é um número ímpar.")
        }
        else {
            console.log(i + " é um número par.")
        } 
    }
}

avaliaParidade(10)
