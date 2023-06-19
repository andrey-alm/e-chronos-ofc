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