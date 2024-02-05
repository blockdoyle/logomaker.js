const shapes = require("./shapes");

describe("shapes", () => {
    describe("Creating a circle", () => {
        it("should create a circle with the correct colour", () => {
            const circle = new shapes.Circle("red", "ABC", "white");
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" text-anchor="middle" fill="white" font-size="60">ABC</text></svg>`);
        });
    });
    describe("Creating a rectangle", () => {
        it("should create a rectangle with the correct colour", () => {
            const rectangle = new shapes.Rectangle("blue", "DEF", "black");
            expect(rectangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" fill="blue" /><text x="50%" y="50%" text-anchor="middle" fill="black" font-size="60">DEF</text></svg>`);
        });
    });
    describe("Creating a triangle", () => {
        it("should create a triangle with the correct colour", () => {
            const triangle = new shapes.Triangle("green", "GHI", "yellow");
            expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,0 25,180 275,180" fill="green" /><text x="150" y="125" text-anchor="middle" fill="yellow" font-size="60">GHI</text></svg>`);
        });
    });
});