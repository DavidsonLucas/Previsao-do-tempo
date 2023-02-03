const button = document.querySelector("button")
let chave = "d30366220857dc6e3bb44648fd8438f7"

function colocarNaTela(dados) {
    document.querySelector("h2").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())

    colocarNaTela(dados)

}

button.addEventListener("click", function () {
    let cidade = document.querySelector("input").value

    buscarCidade(cidade)
})