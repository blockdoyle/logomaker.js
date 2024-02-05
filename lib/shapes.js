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
  
module.exports = {
    Shape,
    Circle,
    Rectangle,
    Triangle
}