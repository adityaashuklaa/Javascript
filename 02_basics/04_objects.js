// const tinderUser = new Object() // This is a single ton object 
const tinderUser = {} // This method creates a non-single ton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Assign is a method which takes two parameters one is target and another one is source, and creates a new object with same elements.  

// const obj3 = {...obj1, ...obj2} // obj3 is created using spread operator. This creates a new object with same elements. Hence, most common used syntax. 
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // It will return all the keys of tinderUser in Array format. 
// console.log(Object.values(tinderUser)); // It will return all the values of the object.
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //Method to print values, but not suitable for repatative printing. 

const {courseInstructor: instructor} = course // Destructuring of values of objects. using {curly braces}

// console.log(courseInstructor);
console.log(instructor);

// { (JSON Format)
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// When you give your work to somewhen else it's known as API. 