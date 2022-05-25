//    10
//  4     20
// 2 8  17 170

class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value);
        if(this.root === null){
            this.root = node;
        }
        else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left
                }
                else{
                    if(!currentNode.right){
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const myTree = new BinarySearchTree();