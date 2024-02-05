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

class Shape {
  constructor(colour, title, titleColour) {
    this.colour = colour;
    this.title = title;
    this.titleColour = titleColour;
  }
  render() {
    let svg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${this.colour}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.titleColour}" font-size="60">${this.title}</text>
      </svg>
    `;
    return svg;
  }
}

class Circle extends Shape {
  render() {
    // console.log(this.colour);
    let svg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.colour}" />
        <text x="150" y="125" text-anchor="middle" fill="${this.titleColour}" font-size="60">${this.title}</text>
      </svg>
    `;
    return svg;
  }
}

class Rectangle extends Shape {
  render() {
    let svg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" x="75" fill="${this.colour}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.titleColour}" font-size="60">${this.title}</text>
      </svg>
    `;
    return svg;
  }
}

class Triangle extends Shape {
  render() {
    let svg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 25,180 275,180" fill="${this.colour}" />
        <text x="150" y="125" text-anchor="middle" fill="${this.titleColour}" font-size="60">${this.title}</text>
      </svg>`;
    return svg;
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
        var shape = new Circle(
          answers.colour,
          answers.title,
          answers.titleColour
        );
        writeToFile("logo.svg", shape.render());
        break;
      case "Triangle":
        var shape = new Triangle(
          answers.colour,
          answers.title,
          answers.titleColour
        );
        writeToFile("logo.svg", shape.render());
        break;
      case "Square":
        var shape = new Rectangle(
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
