class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for (let i = 0 ; i < key.length ; i++){
            hash = (hash + key.charCodeAt(i) * i ) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if( currentBucket){
            for(let i = 0 ; i < currentBucket.length ; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if( currentBucket){
            for(let i = 0 ; i < currentBucket.length ; i++){
                if(currentBucket[i][0] === key){
                    delete this.data[address];
                    return currentBucket[i];
                }
            }
        }
        return undefined `The key: ${key}, doesn't exist!`;
    }
    returnAllKeys(){
        const keys = [];
        for (let i = 0 ; i < this.data.length ;  i++){
            if(this.data[i]){
                for( let j = 0 ; j < this.data[i].length; j++){
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        return keys;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego",1990);
myHashTable.set("Mariana",1998);
myHashTable.set("Juan",1996);
myHashTable.set("Andres",1999);
myHashTable.set("Natalia",2000);
