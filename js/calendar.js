const daysTag = document.querySelector(".conteudo-dias"),
currentDate = document.querySelector(".cabecalho-data"),
prevNextIcon = document.querySelectorAll(".cabecalho-icones ion-icon");

// Obtendo data, mês e ano vigente
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// Armazenando em um array o nome de todos os meses
const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // obtendo primeiro dia do mês
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // obtendo última data do mês vigente
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // obtendo último dia do mês
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // obtendo última data do mês anterior
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // criando li para os últimos dias do mês anterior
        liTag += `<li class = "inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // criando li de todos dias do mês vigente
        // adicionando classe ativa a li se o dia, mês e ano atuais corresponderem
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class = "${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // criando li dos primeiros dias do próximo mês
        liTag += `<li class = "inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} de ${currYear}`; // passando o mês e o ano atual como texto de data atual
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => { // obtendo ícones anteriores e posteriores
    icon.addEventListener("click", () => { // adicionando evento de clique nos ícones
        // se o ícone clicado for o ícone anterior, diminua o mês atual em 1, caso contrário, aumente-o em 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // se o mês atual for menor que 0 ou maior que 11
            // criando uma nova data do ano e mês atual e passando-a como valor de data
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // atualizando o ano atual com o novo ano da data
            currMonth = date.getMonth(); // atualizando o mês atual com a nova data mês
        } else {
            date = new Date(); // passando a data atual como valor de data
        }

        renderCalendar(); // chamando a função renderCalendar
    });
});