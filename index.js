#! /usr/bin/env node
import inquirer from "inquirer";
let random_number = Math.ceil(Math.random() * 10);
let users_input;
do {
    users_input = await inquirer.prompt([
        {
            name: "users_guessed_number",
            message: "Guess a number between 1 and 10",
            type: "number"
        }
    ]);
    if (random_number > users_input.users_guessed_number) {
        console.log("Your guessed number is low try a bigger number");
    }
    else if (random_number < users_input.users_guessed_number) {
        console.log("Your guessed number is high try a smaller number");
    }
} while (random_number != users_input.users_guessed_number);
console.log("CONGRATULATIONS YOU GUESSED THE NUMBER CORRECTLY");
