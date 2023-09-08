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

    listUsers = JSON.parse(localStorage.getItem("listaUsuarios")) // ou banco de dados

    listUsers.forEach((item) => {
        if (userName.value == item.userCad && userPass.value == item.passCad) {

            userValid = {
                name: item.nameCad,
                user: item.userCad,
                pass: item.passCad
            }
        }
    })

    if (userName.value == userValid.user && userPass.value == userValid.pass) {
        document.location.href = "https://andrey-alm.github.io/e-chronos-ofc/spaces.html"

        let authToken = "eC" + Math.random().toString(16).substring(2) + "ÇF"
        localStorage.setItem("authToken", token)
        localStorage.setItem("userLogged", JSON.stringify(userValid))
    }

    else {
        userName.setAttribute("style", "color: red")
        userPass.setAttribute("style", "color: red")
        errorMsg.setAttribute("style", "display: block")
        errorMsg.innerHTML = "Usuário ou senha incorretos!"
        userName.focus()
    }
}

/* const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstname");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);

  }


  return valid;
} */