var board = ["", "", "", "", "", "", "", "", ""];   //棋盘
var cells = document.querySelectorAll(".cell");//getElementsByClassName("cell"); 不能用于forEach，返回为对象数组   //格子
var result = document.getElementById("result"); //旁白
var player = ["X", "O"];    //玩家
var currentplayer = player[0]; //当前玩家
result.textContent = currentplayer;
var gamestate = true;   //游戏状态

//时钟
function getTime() {
    var time= new Date().toLocaleTimeString();
    var h2_time = document.getElementById("time");
    h2_time.innerHTML = time;
}
setInterval(getTime, 100);
//时钟

//棋盘
cells.forEach(function(cell, index) {   //添加棋盘的点击事件监听事件
    //console.log(cell, index);
    cell.addEventListener("click", function(){main(index)});
});

function main(index) {   //游戏流程
    //console.log(index);
    if(gamestate && board[index]===""){  //游戏进行且格子未被下过
        //落棋
        board[index] = currentplayer;
        updateBoard();
        //console.log(currentplayer, board[index]);

        //判断结束条件 出现胜方或者平局
        if(checkWinner(player[0])){
            result.textContent = "玩家 1 获胜！";
            setTimeout(endGame,1000);
        }
        else if(checkWinner(player[1])){
            result.textContent = "玩家 2 获胜！";
            setTimeout(endGame,1000);
        }
        else if(checkNoWinner()){
            result.textContent = "平局！";
            setTimeout(endGame,1000);
        }
        //非结束状态
        else{
            //交换走步
            if(currentplayer === player[0]) currentplayer = player[1];
            else currentplayer = player[0];
            result.textContent = currentplayer;
        }
    }
} 

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
    for(var i=0; i<board.length; i++)
        if(board[i] === "")//棋盘满则平手
            return false;
    // if( !("" in board) ) return fasle; //棋盘满则平手
    return true;
}

function updateBoard() {
    var i;
    for(i=0; i<cells.length; i++)
        cells[i].textContent = board[i];
}

function endGame() {
    gamestate = false;
    setTimeout(resetGame,500);
}

function resetGame() {
    board.fill("");
    updateBoard();
    gamestate = true;
    currentplayer = player[0];
    result.textContent = currentplayer;
}
//棋盘