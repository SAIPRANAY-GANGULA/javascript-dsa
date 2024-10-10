const ResizableArray = require('./arrays/ResizableArray');

const array = new ResizableArray();

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

for(let i = 0; i < array.getSize(); i++) {
    console.log(array.get(i));
}
 
console.log(array);