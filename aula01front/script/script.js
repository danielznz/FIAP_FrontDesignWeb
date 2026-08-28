const frm = document.querySelector("#frm")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const teste = "texto"
    resp.textContent = teste
})