// module imports
const inquirer = require("inquirer");
const fs = require("fs");

// write file function
function writeToFile(fileName, data) {
  // Create output directory if it doesn't exist
  if (!fs.existsSync("./output")) {
    fs.mkdirSync("./output");
  }
  // actual write file function
  fs.writeFile(`./output/${fileName}`, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} written successfully.`);
  });
}

// // make svg data
// function makeSVG(data) {

// }

// Shape class
class Shape {
  constructor(shape, colour, title) {
    this.shape = shape;
    this.color = colour;
    this.title = title;
  }
}

// questions for inquirer
const questions = [
  {
    name: "shape",
    type: "list",
    message: "What shape would you like?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "colour",
    type: "input",
    message:
      "Pick a colour. (Type the name of the colour, or enter the HEX value, starting with '#'",
    validate: function (value) {
      if (value.length > 0) {
        return true;
      }

      return "Please enter a value.";
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

      return "Please enter only 3 characters.";
    },
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

init();
