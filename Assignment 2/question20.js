class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    contains(element) {
        return this.items.includes(element);
    }

    print() {
        console.log(this.items);
    }
}

// Example
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.contains(20)); // true
console.log(stack.contains(50)); // false