class LinkedList {
    #_head;
    #_tail;
    #_nbNodes;

    constructor() {
        this.#_nbNodes = 0;
        this.#_head = null;
        this.#_tail = null;
    }

    append(value) {
        if (this.#_head === null) {
            this.#_head = new Node(value);
            this.#_tail = this.#_head;
        } else {
            this.#_tail.nextNode = new Node(value);
            this.#_tail = this.#_tail.nextNode;
        }
        this.#_nbNodes++;
    }

    prepend(value) {
        if (this.#_head === null) {
            this.#_head = new Node(value);
            this.#_tail = this.#_head;
        } else {
            this.newHead = new Node(value);
            this.newHead.nextNode = this.#_head;
            this.#_head = this.newHead;
        }
        this.#_nbNodes++;
    }

    size() {
        return this.#_nbNodes;
    }

    head() {
        return this.#_head;
    }

    tail() {
        return this.#_tail;
    }

    at(index) {
        if (index >= this.#_nbNodes) return null;

        let currentNode = this.#_head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (this.#_tail === null) return null;
        let poppedTail = this.#_tail;
        this.#_nbNodes--;
        this.#_tail = this.at(this.#_nbNodes - 1);
        this.#_tail.nextNode = null;
        if (this.#_nbNodes === 0) {
            this.#_head = null;
            this.#_tail = null;
        }
        return poppedTail;
    }

    contains(value) {
        let currentNode = this.#_head;
        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.#_head;
        let currentIndex = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) return currentIndex;
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null;
    }

    insertAt(value, index) {
        if (index < 0) return false;
        if (index > this.#_nbNodes - 1) return false;
        if (index === 0 && this.#_nbNodes === 0) {
            this.append(value);
            return true;
        }
        if (index === 0) {
            let newNode = new Node(value);
            newNode.nextNode = this.#_head;
            this.#_head = newNode;
            this.#_nbNodes++;
            return true;
        }
        if (index === this.#_nbNodes - 1) {
            this.append(value);
            return true;
        }
        let previousNode = this.at(index - 1);
        let afterNode = previousNode.nextNode;
        let newNode = new Node(value);
        previousNode.nextNode = newNode;
        newNode.nextNode = afterNode;
        this.#_nbNodes++;
        return true;
    }

    toString() {
        let currentNode = this.#_head;
        let output = "";
        while (currentNode !== null) {
            output += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        output += "null";
        return output;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let mylist = new LinkedList();
console.log(mylist.toString());
// [1, 2, 3, 4, 5, 6, 7].forEach((value) => mylist.append(value));
// console.log(mylist.toString());

mylist.prepend(8);
mylist.prepend(10);
mylist.append(3);
console.log(mylist.toString());
console.log(`Size: ${mylist.size()}`);
console.log(`Head: ${mylist.head().value}`);
console.log(`Tail: ${mylist.tail().value}`);
console.log(`At 0: ${mylist.at(0).value}`);
console.log(`At 1: ${mylist.at(1).value}`);
console.log(`At 2: ${mylist.at(2).value}`);
console.log(`Pop: ${mylist.pop().value}`);
console.log(`Pop: ${mylist.pop().value}`);
console.log(`Pop: ${mylist.pop().value}`);
console.log(`Pop: ${mylist.pop()}`);
console.log(mylist.toString());
mylist.append(4);
mylist.append(16);
mylist.append(255);
mylist.append(22);
mylist.prepend(11);
mylist.prepend(6);
console.log(mylist.toString());
console.log(`Contains 22? ${mylist.contains(22)}`);
console.log(`Contains 100? ${mylist.contains(100)}`);
console.log(`Finds 255 at index? ${mylist.find(255)}`);
console.log(`Finds 100 at index? ${mylist.find(100)}`);
mylist.insertAt("Hello", 3);
mylist.insertAt("World", 6);
mylist.insertAt("Again", 0);
mylist.insertAt("Outside", 9);
console.log(`Size: ${mylist.size()}`);
console.log(mylist.toString());
// mylist.prepend(9);
// mylist.append(10);
// mylist.append(15);
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// let currentNode = mylist.head();
// while (currentNode !== null) {
//     console.log(currentNode.value);
//     currentNode = currentNode.nextNode;
// }

// console.log(mylist.size());
// console.log(mylist.head());
// console.log(mylist.tail());
// console.log(mylist.at(4));
// console.log(mylist.at(20));
// console.log(mylist.at(0));
