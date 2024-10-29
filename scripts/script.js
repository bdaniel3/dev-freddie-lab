// Game data
//games is the object
//the other two objects are card and maybe container
// To add other people, copy and paste the gameX's

const games = [
   
  {
    gameName: "Race Against the Clock: Dr. Cumbie's Time Tangle", 
    gameURL: "https://bdaniel3.github.io/timeTangle/", 
    gameAuthor: "Brittney Daniel",
    gameAbout: "It's almost time for class, Drag Dr. Cumbie to the correct time.",
    gameRepo: "https://github.com/bdaniel3/timeTangle",
    gameGroup: "7"
  },
  {
    gameName: "Square Game", 
    gameURL: "https://allisonlacy.github.io/alligamerepo/", 
    gameAuthor: "Allison Lacy",
    gameAbout: "How many times can you click the square?",
    gameRepo: "https://github.com/AllisonLacy/alligamerepo",
    gameGroup: "7"
  },
  {
    gameName: "Mario Coin Catcher",
    gameURL: "https://gbouldin43.github.io/vigilant-giggle-david/",
    gameAuthor: "Garrett Bouldin",
    gameAbout: "Drag Mario around the gamespace to catch coins and earn points.",
    gameRepo: "https://github.com/gbouldin43/vigilant-giggle-david",
    gameGroup: "7"
  },
  {
    gameName: "Cow Game",
    gameURL: "https://sblakeuna.github.io/literate-octo-disco-david/",
    gameAuthor: "Spencer Blake",
    gameAbout: "Use the arrow keys to move the cow. Move 5 times to win!",
    gameRepo: "https://github.com/SblakeUNA/literate-octo-disco-david",
    gameGroup: "7"
  }
];

// Function to generate cards dynamically
function generateGameCards() {
  const container = document.getElementById('game-container');
  
  games.forEach(game => {
    const card = `
      <div class="col-12 col-sm-6 col-md-3">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">${game.gameName}</h2>
            <p class="card-text"><b>Author:</b> ${game.gameAuthor}</p>
            <p class="card-text"><b>Description:</b> ${game.gameAbout}</p>
            <p class="card-text"><b>Group:</b> ${game.gameGroup}</p>
            <a href="${game.gameURL}" target="_blank" class="btn btn-primary">Play Now</a>
            <a href="${game.gameRepo}" target="_blank" class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Call function to generate cards on page load
window.onload = generateGameCards;
