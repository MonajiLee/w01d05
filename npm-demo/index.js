var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + chalk.inverse("word") + chalk.bold.magenta("whee");
console.log(message);