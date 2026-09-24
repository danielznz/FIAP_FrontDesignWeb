// let nomeUsuario = prompt("Digite seu nome: ")
// if (nomeUsuario == " ") {
//     alert("O usuário não informou o nome!")
// } else if (nomeUsuario == null) {
//     alert("O nome do usuário é nulo")
//     nomeUsuario = prompt("Por favor, Forneça o nome:")
// }
// else {
//     alert(`Nome digitado: ${nomeUsuario}`)
// }


// let entrada = Number(prompt("Digite um número de 1 a 5: "))
// if ((entrada < 6) && (entrada > 0)) {
//     if (entrada == 1)
//         alert("Número digitado: Um")
//     else if (entrada == 2)
//         alert("Número digitado: Dois")
//     else if (entrada == 3)
//         alert("Número digitado: Tres")
//     else if (entrada == 4)
//         alert("Número digitado: Quatro")
//     else {
//         alert("Número digitado: Cinco")
//     }
// } else {
//     alert("O número que você digitou não é de 1 a 5")
// }


// let num = Number(prompt("Digite um número de 1 a 50: "))
// if (num <= 10) {
//     console.log("O número digitado é: ", num)
//     alert("O número digitado está entre 1 e 10: " + num)
// }
// else if (num <= 20) {
//     console.log("O número digitado é: ", num)
//     alert("O número digitado está entre 10 e 20")
// }
// else if (num <= 30) {
//     console.log("O número digitado é: ", num)
//     alert("O número digitado está entre 21 e 30")
// }
// else if (num <= 40) {
//     console.log("O número digitado é: ", num)
//     alert("O número digitado está entre 31 e 40")
// }
// else {
//     console.log("O número digitado é: ", num)
//     alert("O número digitado está entre 41 e 50")
// }


//&& e ||
// if((nome != "") && ((nome = "Ema") || (nome = "EMA") || (nome == "ema")))

let idade = Number(prompt("Digite uma idade: "))
if ((idade < 3) && (idade > 0)) {
    alert("bebê")
} else if ((idade > 2) && (idade < 7)) {
    alert("criança")
} else if ((idade > 6) && (idade < 12)) {
    alert("pré adolescente")
}