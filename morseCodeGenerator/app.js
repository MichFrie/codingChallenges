  const morse = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..';
const alpha = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

const morseCode = morse.split(' ');
const alphabet = alpha.split(' ');

const morseKey = {};
const smorseInput = document.querySelector('.smorseInput');
const smorseOutput = document.querySelector('.smorseOutput');

for (let i = 0; i < alphabet.length; i++) {
  
  morseKey[alphabet[i]] = morseCode[i];  
}
    
function smorse(Word) {
  var seq = '';
  for (let c = 0; c < Word.length; c++) {
    if (Word.charAt(c) != ' ') {
      seq += morseKey[Word.charAt(c)];
    }
  } 
 return seq;
}

function showOutput() {
  smorseOutput.innerText = smorse(smorseInput.value.toLowerCase());
}