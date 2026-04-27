class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(10, 5);

// Calculate area and perimeter
console.log("Width:", rect.width);
console.log("Height:", rect.height);
console.log("Area:", rect.calculateArea());
console.log("Perimeter:", rect.calculatePerimeter());