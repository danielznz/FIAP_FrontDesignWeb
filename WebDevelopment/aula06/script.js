//objetos
let produto = {
    nome: "Mouse Gamer",
    preco = 89.90,
    categoria: "Informática",
}

console.log(produto)

//desestruturação
console.log(produto.nome)
console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`)

//array ou listas
let nomes = ["Ana", "Tatá", "Otávio", "Raulzinho"]
console.log(nomes)
console.log(nome[0])

//lista de objetos
let produtos = [
    {
        nome: "Teclado Mecânico",
        preco: 199.90,
        categoria: "Informática",
    },
    {
        nome: "Cadeira Gamer",
        preco: 899.90,
        categoria: "Móveis",
    },
    {
        nome: "Monitor 24",
        preco: 749.90,
        categoria: "Informática",
    },
]

produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`)
})

class Pessoa {
    //construtor é um modelo para criar novos objetos
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //método criado que pode ser personalizavél
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let pessoa1 = new Pessoa("João", 30)
console.log(pessoa1)

let pessoa2 = new Pessoa("Maria", 25)
console.log(pessoa2)

pessoa1.apresentar()
pessoa2.apresentar()

//DOM
//1º temos que pegar o que vamos manipular
//2º manipular o que pegamos

let listaProdutos = document.getElementById("lista-produtos")

produtos.forEach((produto) => {
    listaProdutos.innerHTML += `
    <div>
    <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Categoria: ${produto.categoria}</p>
        <hr>
    </div>
    `
})