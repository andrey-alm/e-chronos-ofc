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