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
jsuser.greeting()
jsuser.greetingtwo()