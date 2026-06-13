//singleton
//object literals
//object.create


// const JsUser = {
//     "name": "Ashutosh",  //this value can't be accessed through dot so we use string like
//     age: 19,
//     email: "ashu@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Thursday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])  //here we have given like string


// ************************OBJECT DE-STRUCTURE**********************
const course = {
    coursename: "js",
    price : "999",
    courseInstructor : "Hitesh",
}

//course.courseImstructor
const {courseInstructor: Instructor} = course
console.log(Instructor);

//json -- javascript object notation