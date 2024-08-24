// Filter 

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newdata = data.filter((num) => num >= 5)

// console.log(newdata);

//Map

const mapData = data.map((num) => {
    return num * 10
})

// console.log(mapData);

// Reduce

const reduceData=data.reduce((acc,num)=>{
    return acc+num
},0)

console.log(reduceData);


