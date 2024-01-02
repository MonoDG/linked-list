class LinkedList {
    #_head;
    #_tail;
    #_nbNodes;

    constructor() {
        this.#_nbNodes = 0;
        this.#_head = new Node();
        this.#_tail = this.#_head;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        if (this.#_head.value === null) {
            this.#_head.value = value;
        } else {
            this.#_tail.nextNode = new Node(value);
            this.#_tail = this.#_tail.nextNode;
        }
        this.#_nbNodes++;
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        if (this.#_head.value === null) {
            this.#_head.value = value;
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
        if (this.#_nbNodes > 0) {
            let oldTail = this.#_tail;
            this.#_nbNodes--;
            this.#_tail = this.at(this.#_nbNodes - 1);
            this.#_tail.nextNode = null;
            return oldTail;
        }
        this.#_head = new Node();
        this.#_tail = this.#_head;
        return null;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let mylist = new LinkedList();
[1, 2, 3, 4, 5, 6, 7].forEach((value) => mylist.append(value));
console.log(mylist);

mylist.prepend(8);
mylist.prepend(9);
mylist.append(10);
mylist.append(15);
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
console.log(mylist.pop());
let currentNode = mylist.head();
while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.nextNode;
}

console.log(mylist.size());
console.log(mylist.head());
console.log(mylist.tail());
console.log(mylist.at(4));
console.log(mylist.at(20));
console.log(mylist.at(0));
