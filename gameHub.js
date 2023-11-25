var gameWindow;
function openBlackjack() {
    gameWindow.close();
    gameWindow = window.open("blackjack.html", "Blackjack", "width=500,height=400,resizable=no");
    self.close();
}

function openBrickBreaker() {
    gameWindow.close();
    gameWindow = window.open("brickBreaker.html", "Brick Breaker", "width=500,height=400,resizable=no");
    self.close();
}

function openTicTacToe() {
    gameWindow.close();
    openNull();
}

function openFlappyBird() {
    gameWindow.close();
    openNull();
}

function openNull() {
    alert("No. -Rosa Parks");
}

function close() {
    window.close();
}

