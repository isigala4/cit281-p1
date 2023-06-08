/*
    CIT 281 Project 1
    Name: Ivan Sigala-Ramos 
*/

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let random = getRandomInteger(5, 25);

result = " ";

for ( i=0; i<= random; i++){
    let randletters = getRandomInteger(0, 25);
    result += letters[randletters];
}

console.log(result);