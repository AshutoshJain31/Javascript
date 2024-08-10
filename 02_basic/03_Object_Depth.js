const obj1={
    name:"ashutosh",
    age:24,
    email:"ashu.jain@gmail.com",
    game:['GTA','Mario','car-race'],
    isLoggedin:true,
    skill:{
        primarySkill:"Automation Developer",
        secondarySkill:"JavaScript"
    }
 }

//  console.log(obj1.skill.primarySkill);

//  const obj2={
//     name1:"Vijay",
//     age1:54,
//     email1:"vijay.jain@gmail.com"
//  }

//  const obj3={
//     name:"Vanita",
//     age:50,
//     email:"Vanita@gmail.com"
//  }

//  const obj4=Object.assign({},obj3,obj2)
// //  let obj4={...obj2,...obj3}

//  console.log(obj4);


const dbDetails=[
    {
        name:'ashutosh',
        isLogin:true,

    },
    {
        name:'vijay',
        isLogin:false
    }
]

console.log(dbDetails[1].name);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

console.log(Object.hasOwnProperty('name5'));


//Destructuring

const{email:emailAddres,name}=obj1

console.log(emailAddres,name);









 
 

 