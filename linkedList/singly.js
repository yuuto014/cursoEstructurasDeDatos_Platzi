 // 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
//     value: 1, next:{
//         value: 2, next: {
//             value: 3, next: {
//                 value: 4, next: null
//             }
//         }
//     }
// }

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this.length = 1;
    }
    append(value){
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    prepend(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node
        this.length++;
    }
    insert(index,value){
        if (index >= this.length){
            return this.append(value);
        }
        else if (index <= 0 ){
            return this.prepend(value);
        }

        const node = new Node(value);
        const pointer = this.getTheIndex(index-1);
        node.next = pointer.next;
        pointer.next = node;
        this.length++
        return this
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

let mySinglyLinkedList = new MySinglyLinkedList(1);
mySinglyLinkedList
mySinglyLinkedList.append(2);
mySinglyLinkedList
mySinglyLinkedList.prepend(0);
mySinglyLinkedList.insert(2,5);
mySinglyLinkedList.insert(0,6);

