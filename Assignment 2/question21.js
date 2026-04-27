class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    insert(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}

// Example
const list = new LinkedList();

console.log(list.isEmpty()); // true

list.insert(10);

console.log(list.isEmpty()); // false