// For In loop

const obj1={
    "Js":"Javascript",
    "py":"Python",
    "java":"Java"
}

for (const key in obj1) {
//    console.log(`${key}:-${obj1[key]}`);
   
}

const Mapping=new Map()
Mapping.set("js","JavaScript")
Mapping.set("py","Python")
Mapping.set("Java","Java")


for (const key in Mapping) {
//    console.log(key);
}

const Programming=["Py","Js","ruby"]

for (const key in Programming) {
    console.log(Programming[key]);
    
}


