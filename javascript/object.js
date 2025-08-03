const mys = Symbol("Key1")

const jsuser = {
    name:"Harsit",
    ["mys"]:"key1",
    "age":18
}
// console.log(jsuser.name)
//agar hum key ko as a string ke tarah declare kr denge to 
//usko access krne ke liy
// e hume v square breacket ka use krna pdega 
// console.log(jsuser["age"])

//symbol declare krne liye v hume square brakcet m rkhna pdega 

//updation 

jsuser.name = "Harshit sharma"
// Object.freeze(jsuser)
// jsuser.name = "hhhhhhhhhhh"
// console.log(jsuser)

jsuser.greeting  = function(){
    console.log("Hello js user")
}

jsuser.greetingtwo = function(){
    console.log(`hello my name is ${this.name}`)
}
// jsuser.greeting()
// jsuser.greetingtwo()

//different way to create object
// const  tuser = new Object()
// console.log(tuser)
// const  tuser  = {}
// tuser.name = "Harshit Sharma"
// tuser.id = 123
// console.log(tuser)


const regularuser = {
    email:"iamharshitsharma518@gmail.com",
    fullname:
    {
        userfullname:{
            firstname:"Harshit",
            lastname:"Sharma"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname)

// this is the way to access object under object
const obj1 = {
    1:"A",
    2:"B"
}

const obj2 = {
    3:"C",
    4:"D"
}
//merge two object
// const obj3  = Object.assign({},obj1,obj2)
// console.log(obj3)

//best to  use is spread operator same as array

const obj3 = {...obj1,...obj2}
// console.log(obj3)
console.log(Object.keys(jsuser))
console.log(Object.values(jsuser))
console.log(jsuser.hasOwnProperty('name'))


