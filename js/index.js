let ham = document.querySelector(".cabecalho-ham")
let menu = document.querySelector(".cabecalho-menu")
let abrir = document.querySelector(".abrir")
let fechar = document.querySelector(".fechar")
ham.addEventListener("click", abrirMenu)

function abrirMenu() {
    if (menu.style.display == "block") {
        menu.style.display = "none"
        abrir.style.display = "block"
        fechar.style.display = "none"
    } else {
        menu.style.display = "block"
        fechar.style.display = "block"
        abrir.style.display = "none"
    }
}

function adequarMenu() {
    if (window.innerWidth >= 768) {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

// código de teste

let btnEnviar = document.querySelector("#form-submit")

fetch("json/usuarios.json").then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((usuario) => {
        divUsuarios.innerHTML += usuario.nome
        })
    })
})

function capturarInfos() {
    let usuario = document.querySelector("#username").value
    let senha = document.querySelector("#password").value
}

btnEnviar.addEventListener("click", capturarInfos)