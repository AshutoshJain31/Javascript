//For Loop with Example

// for (let i = 1; i <= 10; i++) {
//     console.log(i);    
// }

//For Loop Inside for loop

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop:${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`table of ${i}:${i}*${j}=${i * j}`);
    }
}
