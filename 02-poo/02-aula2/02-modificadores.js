class ValidadorCPF {
    static TAMANHO_CPF = 11
    static validar(tamanho) {//método estático: não preciso criar um objeto do tipo ValidadorCPF para usar esse método
        if (tamanho == this.TAMANHO_CPF){
            return true
        }
        else {
            return false
        }
    }
}
ValidadorCPF.validar('12345678901'.length)
