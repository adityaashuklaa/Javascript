// singleton //Whenever you create an object using constructor than singleton object is being created. 
// Object.create //syntax of constructor method of creating singleton object.

// object literals

const mySym = Symbol("key1")


const JsUser = { //key value pair.
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //syntax for declaring symbol. []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //Method for accessing values of any object.
// console.log(JsUser["email"]) //email is being stored as a string, every key is stored like that.
// console.log(JsUser["full name"]) //Only method for "String declared"
// console.log(JsUser[mySym]) //

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //Now you cannot overrite JsUser as it is been freezed. 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // This keyboard is  used to reference same object.
}

console.log(JsUser.greeting); //This will callback an anonymous function which doesn't being decalred yet.
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());