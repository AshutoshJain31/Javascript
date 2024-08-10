//Single tone

// let obj1= Object.create({})
// obj1={
//     name:"Vijay",
//     age:23,
// }

//literal
let sym= Symbol("MySymbol")
const obj=new Object({
    "full name":"ashutosh Vijay Jain",
    [sym]:"Mysym1",
    age:12,
    name:"ashutosh",
})
// console.log(obj);

// let name=obj["full name"]
// console.log(obj[sym]);

// obj.name="Vijay Prabhakar jain"

// console.log(obj);

//  Object.freeze(obj)

// obj.name="Vanita Vijay Jain"

 console.log(obj);

obj.add=function(){
    console.log("Hello user from add");
}
obj.add1=function(){
    console.log(`welcome ${this.name}`);  
}

console.log(obj.add());
console.log(obj.add1());









