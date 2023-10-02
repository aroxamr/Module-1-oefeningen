import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let name = await userInput.question ('Wat is je naam ?');
console.log(name);

let age = await userInput.question ('Hoe oud ben je ?');

let favoriteGame = await userInput.question ('Wat is jouw favoriete game ?');
console.log( "Hallo " + " " + name + " "+ age + " " + favoriteGame+ ".")

process.exit();