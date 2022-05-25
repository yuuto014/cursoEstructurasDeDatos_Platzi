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
    pop(){
        if(this.lenght === 0 ){
            return `No hay datos en el stack`
        }
        else if(this.lenght === 1){
            const holdingPointer = this.top;
            this.top = null;
            this.botton = null;
            this.lenght--;
            return this;
        }
        else{
            const holdingPointer = this.top;
            const pointer = this.top.next;
            this.top = pointer;
            this.top.next = pointer.next;
            this.lenght--;     
            return this;
        }
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.peek();