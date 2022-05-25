class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.botton = null;
        this.lenght = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const node = new Node(value);
        if(this.lenght === 0 ){
            this.top = node;
            this.botton = node;
        }
        else{
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }
        this.lenght++;
        
        return this;
    }
}

const myStack = new Stack();