// Initial game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive=true;
let resultText = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let resetButton=document.getElementById('reset-button');
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if(board[index]==='' && gameActive){
        board[index]=currentPlayer;
        element.value=currentPlayer;
        currentPlayer=currentPlayer==='X'? '0':'X';
        resultText.textContent='Player ${currentPlayer}s Turn';
        const winner=checkWinner();
        if(winner==='draw'){
            resultText.TextContent='Its a draw!';
            resetGame();
        }
        else if(winner){
            resultText.textContent='Player ${winner} Wins';
            resetGame();
        }
    }
    

   
};
const checkWinner=()=>{
    for(const combination of winningCombinations){
        const[a,b,c]=combination;
        if(board[a] && board[a]===board[b] && board[a]===board[c]){
            gameActive=false;
            return board[a];
        }
        
    }
    if(!board.includes('')){
        gameActive=false;
        return 'draw';
    }
    return null;
};


const resetGame = () => {
    buttons.forEach((button,index)=>{
        button.value='';
        board[index]='';
        button.disabled=false;

    });
    currentPlayer='X';
    resultText.textContent='Player Xs Turn';
    resetButton.disabled=true;
    gameActive=true;
    
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
