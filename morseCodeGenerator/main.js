const result = document.getElementById("result");


const morsecode = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..';
const alphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

const letter = alphabet.split(' ');
const morseLetter = morsecode.split(' ');

const morseObj = {};
for(let i = 0; i < alphabet.length; i++){
    morseObj[letter[i]] = morseLetter[i]
}; 

let input = prompt("Enter string: ");
let inputMod = input.toLowerCase();
for (let k = 0; k < input.length; k++){
    if(inputMod[k] != ' '){
    result.innerHTML += morseObj[inputMod.charAt(k)].toString();
}else{
result.innerHTML += ' ';
}
}