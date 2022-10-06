# WordleGame
 how it works:
- At the beginning of each game a random word is selected from the dictionary. (dictionary.js).
- Each game round you enter a word of five letters, one letter per cell and click ‘Check’.
- If the entered word is not in the dictionary, you will se an alert. In this case, the round does 
not end and you can try to guess again.
- In case entered word is present in dictionary, but not correct, each table cell will change it’s 
color: if letter is present in the word and in the correct spot, it will be marked with green color; if 
letter is present in the word but in another spot, it will be marked with yellow color, and in case 
letter is not in the word, it will be marked with gray color.
- If entered word was not correct and it was not the last row, the next game round will start.
- If entered word is not correct, and it was the last row, the game will over.
- If entered word is correct, you will win.
- When you click ‘Reset’ button and new game will start.
