let userName = document.querySelector("#username")
let userAccess = document.querySelector("#user-ra")
let passTwo = document.querySelector("#conf-pass")

let btnEye = document.querySelector(".eye")
btnEye.addEventListener("click", seePass)

function seePass() {
    let userPass = document.querySelector("#password")

    if (userPass.getAttribute("type") == "password") {
        userPass.setAttribute("type", "text")
    } else {
        userPass.setAttribute("type", "password")
    }
}