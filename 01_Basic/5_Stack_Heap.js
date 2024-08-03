//All primitive Data type use the stack to store the data
//In stack js will create the copy that varibale and assingn the value to another variable not change the data of original variable
//Example

// let x='ashutosh'
// let y=x
// let z='vijay'
// y=z
// console.log('x=',x,'y=',y,'z=',z);


//All non premitive Data type follow the Heap structure
//In Heap it will provide the reference of object not a copy of that object 
//Example

let object={
    name:'ashutosh',
    age:23,
    gender:"M"
}
let object1=object
console.log("object",object);
console.log("object1",object1);
object1.name="Vijay"
console.log("object",object);
console.log("object1",object1);


