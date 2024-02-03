// module imports
const inquirer = require('inquirer');
const fs = require('fs');

// questions for inquirer
const questions = [
    {
        name: "shape",
        type: "list",
        message: "What shape would you like?",
        choices: ["Circle","Triangle","Square"],
    },
    {
        name: "colour",
        type: "input",
        message: "Pick a colour. (Type the name of the colour, or enter the HEX value, starting with '#'",
        validate: function (value) {
            if (value.length > 0) {
                return true
            }

            return 'Please enter a value.'
        },
    },
    {
        name: "title",
        type: "input",
        message: "Enter 3 letters for your logo",
        validate: function (value) {
            if (value.length === 3) {
                return true;
            }

            return 'Please enter only 3 characters.'
        },
    }
]

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
    });
};

init();