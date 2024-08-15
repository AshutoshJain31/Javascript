//Arrow function
// const name = () => {
//     console.log("Ashutosh");
// }

// name()

//Another way for arrow function

// const data = (num1, num2) => (num1 + num2)

// const addition = data(2, 3)

// console.log(addition);


//this 
// Note : THIS was not use it the function so that we are using in object

const input = {
    name: 'Ashutosh',
    age: 10,
    website: function () {
        
        console.log(`${this.name},Welcome to google`);
        console.log(this);
    }

}
console.log(input.website())
input.name="vijay"
console.log(input.website())