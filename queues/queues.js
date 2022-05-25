class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queues{
    constructor(){
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const node = new Node(value);
        if(this.lenght === 0){
            this.first = node;
            this.last = node;
        }
        else{
            this.last.next = node;
            this.last = node
        }
        this.lenght++;
        return this;
    }
    dequeue(){
        const holdingPointer = this.first.next;
        this.first = holdingPointer;
        
        this.lenght--;
        return this;
    }
}

let myQueue = new queues();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();

