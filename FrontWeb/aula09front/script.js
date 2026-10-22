// aula sobre escopo, variaveis globais e restritas

// laço - inicio, condição, iteração/atualização

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }


// let num = parseInt(prompt("Digite um número e veja a tabuada do mesmo: "))
// for (let i = 1; i <= 10; i++) {
//     let resultado = num * i
//     console.log(`${num} x ${i} = ${resultado}`)
// }

// let entrada = prompt("Digite um dado: ")
// while (entrada != "sair") {
//     alert("O usuario inseriu: " + entrada)
//     entrada = prompt("Digite um novo dado: ")
// }

// let repetir = false
// do {
//     console.log("Só uma vez")
// } while (repetir)

let entrada = prompt("Insira um nome: ")

while (entrada != "sair") {
    switch (entrada) {
        case "Ana":
            alert("Olá, Ana!")
            break
        case "João":
            alert("Olá, João!")
            break
        default:
            alert("Quem é você?")
            break
    }

    entrada = prompt("Insira um nome: ")
}