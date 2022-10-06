import { dictionary } from './dictionary.js';

const INDEX_COL =2;
const MAX_COL = 5;
const MAX_ROW=6;
const HALF_RAND=0.5

let userInput = [];
let currentRow = 0;
let currentCol=0;
let resetBtn = document.getElementById(`reset`);
let checkBtn = document.getElementById(`check`);
let board = document.getElementById(`board`);


const randomWord = (array) => {
    let random = Math.round(Math.random() * array.length - HALF_RAND);
    return array[random];
}

const drawTable = () => {
    board.innerHTML='';
    for(let i=0; i<MAX_ROW; i++){
    let row = document.createElement(`tr`);
    for(let j =0; j<MAX_COL; j++){
        let col = document.createElement(`td`);
        row.appendChild(col);
        let letterField = document.createElement(`input`);
        letterField.name=`cell`;
        letterField.id=`${i}-${j}`;
        letterField.maxLength=`1`;
        letterField.value=``;
        col.appendChild(letterField);
    }
    board.appendChild(row);
}
}

const reset = () => {
    drawTable();
    currentRow = 0;
    currentCol=0;
    userInput = [];
    word = randomWord(dictionary);
   /* console.log(word);*/
    checkBtn.classList.add(`disable`);

}


drawTable();
let word = randomWord(dictionary);
/*console.log(word);*/


resetBtn.onclick = () => {
    reset();
}


board.onkeyup = (event) => {
    let target = event.target;
    if (Number(target.id[0])===currentRow && Number(target.id[INDEX_COL])===currentCol){
        userInput.push(target.value);
        currentCol+=1;
    } else if(Number(target.id[0])===currentRow && Number(target.id[INDEX_COL])<currentCol) {
        userInput[Number(target.id[INDEX_COL])]=target.value;
    }
    if(currentCol===MAX_COL){
        checkBtn.classList.remove(`disable`);
    }
    checkBtn.onclick = () => {
        if(!checkBtn.classList.contains(`disable`)){
        let userWord=userInput.join(``);
        if(dictionary.includes(userWord)){
        if(userWord===word){
            alert(`Congratulations! You won.`);
            for (let m =0; m< MAX_COL;m++){
                document.getElementById(`${currentRow}-${m}`).classList.add(`letterGreen`);
            }
        }else{
            for(let l =0;l<userInput.length ;l++){
                if(word.includes(userInput[l])){
                    if(word.indexOf(userInput[l])===l){
                        document.getElementById(`${currentRow}-${l}`).classList.add(`letterGreen`);
                    }else{
                        document.getElementById(`${currentRow}-${l}`).classList.add(`letterYellow`);
                    }
                }
            }
            currentRow+=1;
            if(currentRow===MAX_ROW){
                alert(`Game over.`)
            }
        }
        }else{
            alert(`Not in word list`);
            for (let k =0; k< MAX_COL;k++){
                document.getElementById(`${currentRow}-${k}`).value=``;
            }
        }
        userInput = [];
        currentCol=0;
        checkBtn.classList.add(`disable`);
    }
    }
}
