'use strict';

let gameStatus = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

function initGame() {
    let tableCells = document.querySelector('.game__board');
    gameStatus = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tableCells.rows[i].cells[j].textContent = gameStatus[i][j];
        }
    }
}

(function cellClick() {
    let tableCells = document.querySelector('.game__board');  
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            initGame();
            tableCells.rows[i].cells[j].addEventListener('click', () => {
                tableCells.rows[i].cells[j].textContent = 'X';
                gameStatus[i][j] = 'X';
                checkWin(i, j);
            })
        }
    }
})();

(function btnClick() {
    let btnReset = document.querySelector('.game__new');
    let tableCells = document.querySelector('.game__board');
    btnReset.addEventListener('click',() => {
        initGame();
    })
    
})();

function checkWin(row, col) {
    if (gameStatus[row].every(item => item === 'X')) {
        console.log('You win!');
        return;
    }
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (gameStatus[i][col] === 'X') {
            count++;
        }    
    }
    if (count === 3) {
        console.log('You win!');
        return;
    }
    count = 0;
    for (let i = 0; i < 3; i++) {
        if (gameStatus[i][i] === 'X') {
            count++;
        }               
    }
    if (count === 3) {
        console.log('You win!');
        return;
    }
    count = 0;
    for (let i = 0; i < 3; i++) {
        if (gameStatus[i][2-i] === 'X') {
            count++;
        }               
    }
    if (count === 3) {
        console.log('You win!');
    }
}