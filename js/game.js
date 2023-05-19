var board = ["", "", "", "", "", "", "", "", ""];
var cells = document.getElementsByClassName("cell");
var result = document.getElementById("result");
var player = ["X", "O"];
var gamestate = true;

function main() {   //游戏流程
    
}

cells.forEach((cell, index) => {    //玩家走步
    cell.addEventListener("click", function(player){
        board[i] = player;
    });
});  

function checkWinner(player) {  //判断胜利玩家
    //胜利的矩阵
    var winning_board = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    var i, j;
    for(i = 0; i < winning_board.length; i++){
        var [a, b, c] = winning_board[i];
        for(j = 0; j<3; j++){
            if(board[a]===player && board[b]===player && board[c]===player)
                return true;
        }
    }
    return false;
}

function checkNoWinner() { //判断平手
    var i;
    for(i=0; i<board.length; i++)
        if(board === "")
            return false;

    return true;
}

function endGame() {
    gamestate = false;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gamestate = true;
}
if(checkWinner(player[0]));
if(checkWinner(player[1]));
if(checkNoWinner());