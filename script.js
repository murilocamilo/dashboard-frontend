async function carregarDados() {
    const url = "https://api.weatherapi.com/v1/current.json?key=6ded9bd2d7f44fe085f205338242501&q=Brasilia";
    
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const container = document.getElementById("cards-container");

    container.innerHTML = `
        <div class="card">
            <h2>${dados.location.name}</h2>
            <p>Temperatura: ${dados.current.temp_c}°C</p>
            <p>Condição: ${dados.current.condition.text}</p>
        </div>
    `;
}

carregarDados();
