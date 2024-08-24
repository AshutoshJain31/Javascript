// For In Loop

let arr=[1,2,3,4,5,6]

for (const key of arr) {
    // console.log(key); 
}

let data="Hello Ashutosh"

for (const element of data) {
    // console.log(element);
    
}


const mapping=new Map()
mapping.set("IN","India")
mapping.set("FR","France")

console.log(mapping);


for (const [key,value,index] of mapping) {
    console.log(`${key}:${value}:${index}`);
}

const myobj1={
    one:'ashu',
    two:'vijay',
    three:'jain',
}

for (const [key] of myobj1) {
    console.log(key);
    
}