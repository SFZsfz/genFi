import chalk from 'chalk';
import inquirer from 'inquirer';
import {createSpinner} from 'nanospinner';
import fs from 'fs';
import figlet from 'figlet';

let typeFile
let nameFile;


 function welcome(){
    console.clear
    figlet('GenFi', function(data) {
        console.log(chalk.magenta(data))
    });

}

async function askWitchFile(){

  
    const answer = await
        inquirer.prompt({
        "name": "type_file",
        "type": "list",
        "message": "Which type of file do you want to generate ?",
        "choices": [
            chalk.red("Html"),
            chalk.blue("Css"),
            chalk.grey("Php"),
            chalk.yellow("JavaScript"),
            // chalk.green("Vue.js"),
            // chalk.cyan("React"),
        ]

    })

    typeFile = answer.type_file
}

async function askNameFile(){
    
    const answer = await 
        inquirer.prompt({
            "name": "name_file",
            "type": "input",
            "message": "What is the name of your file?",
            
        })

    nameFile = answer.name_file 

}

async function generateFile(){

    const spinner = createSpinner('Your file will be generated!').start();

    if(typeFile === chalk.red("Html")){
            fs.writeFile(nameFile+ '.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nameFile}</title>
    </head>
    <body>
        
    </body>
    </html>`, function (err) {
        if (err){
            spinner.error({text:"Error, Your file has not been generated"})
            throw err
        };

        spinner.success({text:"Your file has been generated"})
        }); 
    }
    
    if(typeFile === chalk.blue("Css")){
        fs.writeFile(nameFile+ '.css', `body{}`, function (err) {
            if (err){
                spinner.error({text:"Error, Your file has not been generated"})
                throw err
            };

            spinner.success({text:"Your file has been generated"})
            }); 
    }


    if(typeFile === chalk.grey("Php")){
        fs.writeFile(nameFile+ '.php', `
        <html>
        <head>
        <title>${nameFile}</title>
        </head>
        <body>
        <?php echo '<p>Hello World !</p>'; ?>
        </body>
        </html>
        `
        , function (err) {
            if (err){
                spinner.error({text:"Error, Your file has not been generated"})
                throw err
            };

            spinner.success({text:"Your file has been generated"})
            }); 
    }

    if(typeFile === chalk.yellow("JavaScript")){
        fs.writeFile(nameFile+ '.js', ``
        , function (err) {
            if (err){
                spinner.error({text:"Error, Your file has not been generated"})
                throw err
            };

            spinner.success({text:"Your file has been generated"})
            }); 
    }


      

}



//Script


await askWitchFile()
await askNameFile()
await generateFile()
welcome()
