// for
// ===========================1=============================
/* for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is the best number in the world");
        
        
    }
    console.log(element);
    
} */
// =======================2===========================
/* for (let i = 0; i <=10; i++) {
    console.log(`outer loop ${i}`);    
    for (let j = 0; j <=10; j++) {
        console.log(`innre loop ${j} for each ${i}`);
            
    }
    
} */
/* for (let i = 0; i <=10; i++) {
    console.log(`outer loop ${i}`);    
    for (let j = 0; j <=10; j++) {
        console.log(`innre loop ${j} for each ${i}`);
            
    }
    
} */

/* let myArr=["flesh", "batman", "supermsn", "ironmam"]
for (let i = 0; i <myArr.length; i++) {
    console.log(`outer loop ${myArr[i]}`);  

    
}
 */

/* const data={
    name:"shivam ",
    fullname: "shivam kumar gupta",
    age: 22,
    degree:"B.tech"
}
console.log(Object.keys(data));
console.log(Object.keys(data).length); */




// some keyword (brek and continue)
// ex:
/* for (let i = 0; i <10; i++) {
    if (i==5) {
        console.log("5 is detected");
        break;   
    }
    console.log(`print ${i}`);   
} */


for (let i = 0; i <10; i++) {
    if (i==5) {
        console.log("5 is detected");
        continue;   
    }
    console.log(`print ${i}`);   
}