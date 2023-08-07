let btnAccess = document.querySelector("#form_submit")
btnAccess.addEventListener("click", accessAccount)

function accessAccount() {
    let userName = document.querySelector("#username")
    let userPass = document.querySelector("#password")
    let errorMsg = document.querySelector(".login-msg")

    let listUsers = []

    let userValid = {
        name: "",
        user: "",
        pass: ""
    }

    listUsers = JSON.parse(localStorage.getItem("listaUsers"))

    listUsers.array.forEach((item) => {
        if (userName.value == item.userCad && userPass.value == item.passCad) {

            userValid = {
                name: item.nameCad,
                user: item.userCad,
                pass: item.passCad
            }
        }
    })

    if (userName.value == userValid.user && userPass.value == userValid.pass) {
        document.location.href = "https://andrey-alm.github.io/e-chronos-ofc/calendar.html"

        let authToken = Math.random().toString(16)
    }

    else {
        userName.setAttribute("style", "border-color: red")
        userPass.setAttribute("style", "border-color: red")
        errorMsg.setAttribute("style", "display: block")
        errorMsg.innerHTML = "Usuário ou senha incorretos!"
        userName.focus()
    }
}