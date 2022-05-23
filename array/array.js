// const array = ["Juan", "Natalia", "Andres","Daniel"];
class MyArray{
    constructor(){
        this.length  = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index){
        for(let i = index ; i < this.length-1 ; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    unshift(item){
        this.unshiftItem(0);
        this.data[0] = item;
        return 0;
    }
    unshiftItem(index){
        this.length++;
        for(let i = this.length-1 ; i > index; i--){
            this.data[i] = this.data[i-1]
        }
    }
    slice(){
        const item = this.data[0]
        this.shiftIndex(0);
        return item;
    }
}

const myArray = new MyArray();

myArray.push("samuel");
myArray.push("lucifer");
myArray.push("pedro");
myArray.push("Diego");
myArray.push("Juan");
myArray.push("Juan");
myArray.push("pedro");