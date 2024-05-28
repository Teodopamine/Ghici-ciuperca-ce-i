/*
1 . generati un numar intre 1 si 100

2. salvati numarul de incercari  in care se afla jucatorii, incepand de la 1

3. oferiti jucatorului o modalitate de a ghici numarul

4. odata ce numarul este introdus, inregistrati-l undeva so that the player can see what they have tried

5. check if the numbers are correct

6. if the number is correct
  i. show a message of congratulations
  ii. opriti jucatorul sa mai introduca alte incercat=ri
  iii. afisati un control care permite jucatorului sa joace din nou

7. the number is not correct and the player has tries remain
   i. spuneti jucatorului ca e gresit
   ii. permiteti jucatorului sa joace iar
   iii. mariti nr de incercari cu 1

8. daca jucatorul greseste si nu mai are incercari
  i. spuneti jucatorului ca jocul s a terminat
  ii. opriti jucatorul sa mai introduca alte incercari
  iii. afisati un control care permite jucatorului sa reia jocul

9. odata ce jocul se reia, asigurati-va ca logica jocului si interfata de utilizare sunt complet resetate, apoi reveniti la pasul 1
*/

//variabile necesare 

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField= document.querySelector('.guessField')

let guessCount = 1;
let resetButton;

// funcii  pt incercari

function checkGuess(){
    const userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = 'Incercari anterioare: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess == randomNumber){
        lastResult.textContent = 'Felicitari!! Ai ghicit numarul!';
        lastResult.style.backgroundColor = 'Green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if(guessCount === 10){
        lastResult.textContent = 'GAME OVER you loser=))';
        setGameOver();
    } else{
        lastResult.textContent = 'Incorect, mai incearca;)';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Numarul este mai mare';
        }else if(userGuess > randomNumber){
            lastResult.textContent = 'Numarul este mai mic';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

//functii pentru game over:))

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent= 'Joc nou, ai tupeu sa mai incerci?';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//functia de resetare

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(const resetPara of resetParas){
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() *100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);