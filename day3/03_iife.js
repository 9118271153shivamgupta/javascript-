// IIFE(immidiately invoked Function Expressions)
 
(function chia(){
    console.log("Db Connected");
    
})
();
//  imidiated function ko run krne ke  liye hm iffe ka use krte h 

// in interviews 
//  golbal paluation se bane ke liye hm iiife la use krte h 

((name) => {
    console.log(`Db Connected ${name}`);
    
})
("shivam")