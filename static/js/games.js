// Display games dynamically
const games = [
    { name: "Game 1", description: "Fun and exciting!", link: "#" },
    { name: "Game 2", description: "Challenge yourself!", link: "#" },
    // Add more games
];

const gameList = document.getElementById("game-list");

games.forEach(game => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <button onclick="window.location.href='${game.link}'">Play</button>
    `;
    gameList.appendChild(gameCard);
});
