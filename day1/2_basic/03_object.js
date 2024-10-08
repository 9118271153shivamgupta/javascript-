// singleton object // this type object create when we use construction method

// object.create 

// inthis class we read object literal method to create  boject
const mysym = Symbol("key1")

const jsUser = {
    name: "Shivam Gupta",
    age: 23,
    [mysym]: "mykey1",
    email: "Shivam@gmail.com",
    location: "lucknow",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(typeof jsUser["mysym"])

jsUser.email = "skg@gmail.com"
console.log(jsUser.email)
// Object.freeze(jsUser)
jsUser.email = "skkkkkkg@gmail.com"


jsUser.greeting= function() {
    console.log("hi shivam")
}
jsUser.greetingTwo= function() {
    console.log(`Hellow js user ${this.name}`)
}

console.log(jsUser.greetingTwo());