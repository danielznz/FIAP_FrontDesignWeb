// function saudacao() {
//     console.log("olá, luiz")
// }

// saudacao()

function verificaPar() {
    let entrada = Number(prompt("Digite um número: "))
    if (isNaN(entrada)) { //se nao for número, return
        alert("Por favor, digite um valor válido!")
        return
    }
    if (entrada % 2 === 0) {
        alert(entrada + ' é par. ')
    } else {
        alert(entrada + ' é ímpar.')
    }
}
// verificaPar()

var resultado = 0
var entrada1 = parseInt(prompt('Digite o primeiro valor: '))
var entrada2 = parseInt(prompt('Digite o segundo valor: '))

function somar(num1, num2) {
    resultado = num1 + num2

}

function mostrar(msg) {
    alert(`O resultado da soma é: ${msg}`)
}

somar(entrada1, entrada2)
mostrar(resultado)

var num1 = parseFloat(prompt('Digite o número um'))
var num2 = parseFloat(prompt('Digite o número dois'))
var operacao = prompt('Digite a operação: \n+\n-\n*\n/')

function calculadora(valor1, valor2, op) {
    if (op === "+") {
        return valor1 + valor2
    } else if (op === "-") {
        return valor1 - valor2

    } else if (op === "*") {
        return valor1 * valor2
    } else if (op === "/") {
        return valor1 / valor2
    }
    else {
        return 0
    }
}

alert(calculadora(num1, num2, operacao))