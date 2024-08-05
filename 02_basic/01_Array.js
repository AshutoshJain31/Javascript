// const MyArry=new Array(1,2,3,4)
// Array1=[5,7,8,9]

// // MyArry.pop(2)
// MyArry.unshift(5)
// MyArry.shift()
// const newArray=MyArry.concat(Array1)
// const newArray1=MyArry.join(Array1)

// console.log(newArray1);

// // Important

// //Slice

// arr1=[1,2,3,4]
// arr2=[5,6,7,8]
// //In Slice it will read data from original array base on index and create new array but does not delete data from original array
// const final=arr1.slice(1,3)
// console.log(final);
// console.log(arr1);
// //Output
// //[ 2, 3 ]
// //[ 1, 2, 3, 4 ]

// //Splice
// //In Splice it will read data from original array base on index and create new array but does  delete data from original array

// const output=arr2.splice(1,3)
// console.log(output);
// console.log(arr2);

const MyArray1=[1,2,3,5,[7,5,4,3],[4,6,[4,5]]]
const MyArray2=[6,7,8,9]
//Push menthos push data at the end of the array
MyArray1.push(MyArray2)
//Flat method merge all the data and create single array
const join=MyArray1.flat(Infinity)
console.log(join);
//sprade(...) operatoruse to conact more that 2 array at a time and return a single array
const join1=Array(...MyArray2,...MyArray1)
console.log(join1);

// Checking where the perticula input data was string or not

console.log(Array.isArray('Ashutosh'));
//Converting string into array
console.log(Array.from('ashutosh'))
//for merging all variable into array using of method
score1=100
score2=200
score3=300
console.log(Array.of(score1,score2,score3));








