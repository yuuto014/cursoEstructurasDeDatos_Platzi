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
        const nodo = new Node(value);
        this.tail.next = nodo;
        this.tail = nodo;
        this.length++
    }
    prepend(value){
        const nodo = new Node(value);
        nodo.next = this.head;
        this.head = nodo
        this.length++
    }
}

let mySinglyLinkedList = new MySinglyLinkedList(1);
mySinglyLinkedList
mySinglyLinkedList.append(2);
mySinglyLinkedList
mySinglyLinkedList.prepend(0);