import chalk from 'chalk';
import inquirer from 'inquirer';
import {createSpinner} from 'nanospinner';
import fs from 'fs';

const warning = chalk.hex('#FFA500');
let typeFile
let nameFile;
let fckfile = "salut.html"


async function welcome(){
    console.log("Salut")
}

async function askWitchFile(){

    console.clear
  
    const answer = await
        inquirer.prompt({
        "name": "type_file",
        "type": "list",
        "message": "Quel fichier voulez-vous génerer ?",
        "choices": [
            "HTML",
            chalk.blue("CSS"),
            chalk.yellow("JavaScript"),
            chalk.green("Vue.js"),
            chalk.grey("Php"),
            chalk.cyan("React"),
        ]

    })

    typeFile = answer.type_file

    console.log(typeFile);

}

async function askNameFile(){
    
    const answer = await 
        inquirer.prompt({
            "name": "name_file",
            "type": "input",
            "message": "Quel est le nom de votre fichier ?",
            
        })

    nameFile = answer.name_file 

}

async function generateFile(){

        // console.log(chalk.bold.green("Votre fichier va etre généré ! Attendez"));

        const spinner = createSpinner('Votre fichier va etre généré !').start();

        fs.writeFile(nameFile+ '.' + typeFile,'la data', function (err) {
            if (err) throw err;
            spinner.success()
          });

}



//Script

await askWitchFile()
await askNameFile()
await generateFile()

