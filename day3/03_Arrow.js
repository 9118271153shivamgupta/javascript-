const user={
    username:"shivam",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, wlcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

// console.log(this);
// ==============================


// function chai(){
//     let username="shivam"
//     console.log(this.username); // here this keyword give undifine
//     //  this keyword can not use inside the function it only use inside object 
// }
// chai()
// =================================================

// const chai = function(){
//     let username="Shivam"
//     console.log(this.username);//here this keyword give undifine
    
// }
// chai()
// ======================================================
// const chai = () => {
//     let username="Shivam"
//     console.log(this.username);//here this keyword give undifine
    
// }
// chai()
// =============================================


//*************0 */  pure Arrow Function start here*************
//  const addtwo = (num1, num2)=>{
//     return num1 + num2

//  }
//  const addtwo = (num1, num2)=> num1 + num2

//  const addtwo = (num1, num2)=> (num1 + num2)
 const addtwo = (num1, num2)=> ({username: "shivam"})

 
console.log(addtwo(7,8));
