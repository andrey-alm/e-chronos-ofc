let cabecalho = document.querySelector(".cabecalho")
let img = document.querySelector(".cabecalho-imagem")
let ham = document.querySelector(".cabecalho-ham")
let menu = document.querySelector(".cabecalho-menu")
let abrir = document.querySelector(".abrir")
let fechar = document.querySelector(".fechar")

ham.addEventListener("click", testeMenu)

function testeMenu() {
    if (menu.style.flexDirection == "column") {
        abrirMenu()
    } else {
        menu.style.display = "flex"
        menu.style.flexDirection = "row"
        abrirMenu()
    }
}

function abrirMenu() {
    if (menu.style.flexDirection == "column") {
        cabecalho.style.flexDirection = "row"
        cabecalho.style.padding = "0.75rem"
        menu.style.gap = "1.875rem"
        menu.style.flexDirection = "row"
        menu.style.display = "none"
        img.style.display = "block"
        abrir.style.display = "flex"
        fechar.style.display = "none"
    } else {
        cabecalho.style.flexDirection = "column"
        cabecalho.style.padding = "0"
        menu.style.flexDirection = "column"
        menu.style.gap = "0"
        img.style.display = "none"
        fechar.style.display = "flex"
        abrir.style.display = "none"
    }
}

function adequarMenu() {
    if (window.innerWidth >= 768) {
        menu.style.display = "flex"
        menu.style.flexDirection = "row"
        menu.style.gap = "1.875rem"
        cabecalho.style.padding = "1.25rem"
        cabecalho.style.flexDirection = "row"
    } else {
        abrir.style.display = "flex"
        menu.style.display = "none"
        cabecalho.style.padding = "0.75rem"
        img.style.display = "flex"
        img.style.flexDirection = "row"
        fechar.style.display = "none"
    }
}