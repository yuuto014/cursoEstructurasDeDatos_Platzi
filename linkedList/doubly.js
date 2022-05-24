class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;

        this.length = 1;
    }
    append(value){
        const node = new Node(value);
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    prepend(value){
        const node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
    }
    insert(index,value){
        if (index >= this.length){
            this.append(value);
            return this;
        }
        else if (index <= 0 ){
            this.prepend(value);
            return this;
        }

        const node = new Node(value);
        const pointer = this.getTheIndex(index-1);
        const currentNode = pointer.next;
        pointer.next = node;
        currentNode.prev = node;
        node.next = currentNode;
        node.prev = pointer;
        this.length++
        return this
    }
    remove(index){
        if(0 > index >= this.length ){
            return `El indice ${index} se encuentra fuera del rango`;
        }
        const pointer = this.getTheIndex(index);
        const afterPointer = pointer.next;
        const beforePointer = this.getTheIndex(index-1);
        afterPointer.prev = beforePointer;
        beforePointer.next = afterPointer;
        this.length--;
        return this;
    }
    getTheIndex(index){
        let couter = 0;
        let currentNode  = this.head;

        while(couter != index){
            currentNode = currentNode.next;
            couter++;
        }
        return currentNode;
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(1,4);
