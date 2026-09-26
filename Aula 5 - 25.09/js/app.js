let musicas = [];

const listaMusicas = document.getElementById("listaMusicas");
const status = document.getElementById("status");
const btnBuscar = document.getElementById("btnBuscar");

async function carregarMusicas() {

    try {

        status.textContent = "Carregando músicas...";
        const resposta = await fetch("./musica.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o JSON");
        }

        musicas = await resposta.json();

    } catch (erro) {

        status.textContent = `Erro: ${erro.message}`;
    }
}

function mostrarMusicas(lista) {

    listaMusicas.innerHTML = "";

    lista.forEach((musica) => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${musica.Musica}</h2>
            <p><strong>Genêro:</strong> ${musica.Genero}</p>
            <p><strong>Cantor:</strong> ${musica.Cantor}</p>
            <p><strong>Ano:</strong> ${musica.Ano}</p>
        `;

        listaMusicas.appendChild(card);
    });
}

btnBuscar.addEventListener("click", () => {
    status.textContent = `${musicas.length} músicas carregadas`;
    mostrarMusicas(musicas);
});

carregarMusicas();
