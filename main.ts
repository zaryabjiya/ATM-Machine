#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Two variables of myBalance and muPin
let myBalance = 10000; //Dollar
let myPin = 2345;
console.log('\n\tAccess granted. Welcome to our ATM service\n')

// get input from user and save it in a variable
let userPin = await inquirer.prompt(
    [
        {
           name: "pincode",
           message: chalk.yellow ("Enter your pin code..."),
           type: "number"
        }
    ]
);

// Conditions
if (userPin.pincode === myPin) {
    console.log(chalk.green("Your pin is correct!!"));

 let operationAns = await inquirer.prompt(
    [
        {
           name: "operation",
           type: "list",
           message: chalk.yellow ("Pease select one operation"), 
           choices: ["Withdraw", "Check Balance", "Fast Cash",],
        },
    ]
);

if (operationAns.operation === "Withdraw") {
  let amountAns = await inquirer.prompt(
    [
        {
           name: "amount",
           type: "number",
           message:chalk.yellow ("Enter your amount you want to withdraw:"),
        }
    ]
);
// =, -=, +=
if(amountAns.amount <= myBalance){
     myBalance -= amountAns.amount;
    console.log(chalk.green(`Your remaining amount is: ${myBalance}.`));

} 
else {
    console.log(chalk.red("Insufficient Balance"));
}

}
else if (operationAns.operation === "Check Balance") {
    console.log(chalk.green(`Your current balance is: ${myBalance}.`));

}else if (operationAns.operation ==="Fast Cash") {
 let fastAmount = await inquirer.prompt(
    [   
        {
        name: "fast",
        type: "list",
        message:(chalk.yellowBright( "Select your amount" )),
        choices: ["1000", "5000", "8000", "10000"],
        }
    ]
 );
    myBalance-=fastAmount.fast
    console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.redBright("Invalid pincode please try again"));
}