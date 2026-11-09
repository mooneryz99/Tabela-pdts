const jogos = [
    {
        nome: "Silent Hill 2",
        desenvolvedora: "Konami",
        ano: 2001,
        plataforma: "PlayStation 2"
    },
    {
        nome: "Resident Evil 2",
        desenvolvedora: "Capcom",
        ano: 1998,
        plataforma: "PlayStation"
    },
    {
        nome: "Resident Evil 4",
        desenvolvedora: "Capcom",
        ano: 2005,
        plataforma: "GameCube"
    },
    {
        nome: "Fatal Frame",
        desenvolvedora: "Tecmo",
        ano: 2001,
        plataforma: "PlayStation 2"
    },
    {
        nome: "Fatal Frame II",
        desenvolvedora: "Tecmo",
        ano: 2003,
        plataforma: "PlayStation 2"
    },
    {
        nome: "Amnesia: The Dark Descent",
        desenvolvedora: "Frictional Games",
        ano: 2010,
        plataforma: "PC"
    },
    {
        nome: "Dead Space",
        desenvolvedora: "EA Redwood Shores",
        ano: 2008,
        plataforma: "PC / Xbox 360 / PS3"
    },
    {
        nome: "Alien: Isolation",
        desenvolvedora: "Creative Assembly",
        ano: 2014,
        plataforma: "PC / Consoles"
    }
];

const corpoTabela = document.getElementById("corpoTabela")

for (let jogo of jogos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${jogo.nome}</td>
        <td>${jogo.desenvolvedora}</td>
        <td class="preco">${jogo.ano}</td>
        <td>${jogo.plataforma}</td>
    `

    corpoTabela.appendChild(linha)
}
