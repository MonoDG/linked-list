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

    removeAt(index) {
        if (index < 0) return null;
        if (index > this.#_nbNodes - 1) return null;
        if (index === 0) {
            let oldHead = this.#_head;
            this.#_head = this.#_head.nextNode;
            this.#_nbNodes--;
            return oldHead;
        }
        if (index === this.#_nbNodes - 1) {
            return this.pop();
        }
        let previousNode = this.at(index - 1);
        let afterNode = this.at(index + 1);
        let nodeToRemove = this.at(index);
        previousNode.nextNode = afterNode;
        this.#_nbNodes--;
        return nodeToRemove;
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

const mylist = new LinkedList();

for (let i = 0; i < 100; i++) {
    mylist.append(Math.floor(Math.random() * 1000));
}

console.log(mylist.toString());

console.log(mylist.contains(352));
