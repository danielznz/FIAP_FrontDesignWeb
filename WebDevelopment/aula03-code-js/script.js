//tipos primitivos
var boolean = false;
console.log("### tipos primitivos ###")
console.log("o valor da variável boolean é", boolean) // ou concatena com + ou o pior jeito:
console.log(`A variavel ${boolean} tem o tipo ${typeof (boolean)}`)

var nome = "daniel"
var nome = "DANIEL"

// let sobrenome = "Teixeira"
// let sobrenome = "TEIXEIRA"

// const idade = Number(20)
// const idade = Number(21)

function nomeDaFuncao() {
    var sobrenome = "Teixeira"
    console.log(sobrenome)
}

console.log(nome)
nomeDaFuncao()

var igual = '0' == 0
console.log(igual)
var igual = '0' === 0
console.log(igual)

var adicao = 2 + 5
console.log(adicao)

var somarTexto = "Olá" + " " + "Dev!" + 5
console.log(somarTexto)

var menorQue = 5 < 2
var maiorQue = 5 > 2
var maiorOuIgual = 5 >= 2
var menorOuIgual = 5 <= 2
var diferente = "5" != 5;
var diferenteEstrito = 5 !== 5;

console.log(`
    o valor da variavel menorQue é ${menorQue}
    o valor da variavel maiorQue é ${maiorQue}
    o valor da variavel menorOuIgual é ${menorOuIgual}
    o valor da variavel maiorOuIgual é ${maiorOuIgual}
    o valor da variavel diferente é ${diferente}
    o valor da variavel diferenteEstrito é ${diferenteEstrito}
    `)

//operadores lógicos
// &&, ||, !
var e = true && true;
console.log(e)

var ou = true || false
console.log(ou)

var nao = !true
console.log(nao)