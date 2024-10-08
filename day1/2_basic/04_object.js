// const tinderUser= new Object(); <==== this is a single Ton Object

const tinderUser={}

tinderUser.id="123abc"
tinderUser.email="skg@gmail.com"
tinderUser.name="shivam cahudhary"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser= {
    email: "h@gmai.com",
    fullName:{
        userFullName:{
            firstName:"shivam",
            lastName:"gupta",
        }
    }
}
// console.log(regularUser.fullName.us 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"c",6:"d"}

// const obj3={obj1, obj2}

// console.log(obj3);
// const obj3 = Object.assign( {}, obj1,obj2,obj4)
// // syntex hota h ===> const obj3=(target, source)
//  console.log(obj3);
 
const obj3={...obj1, ...obj2}
// console.log(obj3);

const users=[
    {
        id:2,
        email:'h@gmail.com'  
      },
      {
        id:3,
        email:'i@gmail.com'  
      },
      {
        id:4,
        email:'v@gmail.com'  
      },
    {
      id:1,
      email:'s@gmail.com'  
    },
]

// console.log(users[0].email);
console.log( Object.keys(users));
console.log( Object.values(users));
console.log( Object.keys(tinderUser));
console.log( Object.values(tinderUser));


