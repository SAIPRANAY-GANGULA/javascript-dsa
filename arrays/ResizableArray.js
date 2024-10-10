class ResizableArray {
    constructor() {
        this.array = [];
        this.capacity = 2;
        this.size = 0
    }

    push(value) {
        if(this.size < this.capacity) {
            this.array[this.size] = value;
            this.size++;
        }
        else {
            let newArray = new Array(this.capacity * 2);
            // copy the existing array to new array
            for(let i = 0; i < this.size; i++) {
                newArray[i] = this.array[i];
            }
            this.capacity *= 2;
            newArray[this.size] = value;
            this.size++;
            this.array = newArray;
        }        
    }

    pop() {
        this.array.pop();
        this.size--;
    }

    getSize() {
        return this.size;
    }

    getArray() {
        return this.array;
    }

    get(index) {
        return this.array[index];
    }
}

module.exports = ResizableArray;