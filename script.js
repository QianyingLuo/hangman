let player;

function startGame(e){
    e.preventDefault();
    let name = username.value;
    player = new User(name);
    console.log(player);
    let startPanel = document.getElementById("start");
    startPanel.classList.remove("active");
    let gamePanel = document.getElementById("game");
    gamePanel.classList.add("active");
    setUserInDom();
}

function setUserInDom(){
    let scoresPanel = document.getElementById("scores");

    let userContainer = document.createElement("div");
    let userName = document.createElement("p");
    let userScore = document.createElement("p");
    userContainer.classList.add("match");
    userName.classList.add("name");
    userName.textContent = player.name;
    userScore.textContent = player.score;
    userScore.classList.add("score");
    userContainer.append(userName);
    userContainer.append(userScore);
    scoresPanel.append(userContainer);
}

