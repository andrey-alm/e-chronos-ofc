let btnRegister = document.querySelector("#cadastro")
btnRegister.addEventListener("click", registerUser)

function registerUser() {
    let userName = document.querySelector("#nome-usuario").value
    let userAccess = document.querySelector("#numero-matri").value
    let pass = document.querySelector("#senha-usuario").value
    let passTwo = document.querySelector("#confirmar-senha").value
    let userType = document.getElementsByName("tipo-usuario")
    let accountType = userType[0].checked ? 'basic' : 'admin'
}