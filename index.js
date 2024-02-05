// module imports
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");

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
  {
    name: "titleColour",
    type: "input",
    message:
      "Pick a colour for the title. (Type the name of the colour, or enter the HEX value, starting with '#'",
    validate: function (value) {
      if (value.length > 0) {
        return true;
      }

      return "Please enter a value.";
    },
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    // Craete the shape based on the user's input
    switch (answers.shape) {
      case "Circle":
        var shape = new shapes.Circle(
          answers.colour,
          answers.title,
          answers.titleColour
        );
        writeToFile("logo.svg", shape.render());
        break;
      case "Triangle":
        var shape = new shapes.Triangle(
          answers.colour,
          answers.title,
          answers.titleColour
        );
        writeToFile("logo.svg", shape.render());
        break;
      case "Square":
        var shape = new shapes.Rectangle(
          answers.colour,
          answers.title,
          answers.titleColour
        );
        writeToFile("logo.svg", shape.render());
        break;
    }
  });
}

init();
