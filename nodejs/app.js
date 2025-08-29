// console.log(global)
// console.log(this)

// console.log(globalThis)

// console.log(globalThis === global)

//to let the code on your repl mode what we have to do is that 
// we have to type node on the terminal then write node 
// the repl mode activated thats means read evaluate print loop 

//node js is javascripr run time environment 
//comne with v8 engine and special powers such as api calling database connection 
//v8 engine runs on c++ application (code)
//follows ecmascript
//c++ machine codeee

//i have to merge the file i use the require keyword to do that
// require("./xyx.js")
// const {x,sum} = require("./calculate/sum.js")

// const {multiply} = require("./calculate/multiply.js")
const { sum, multiply} = require("./calculate")

const data = require("./data.json")
//this is best way but we can do by using object also 
//and this process is called derefencing of objects

//require alone cant allow us to function 
// so what i have to do just export this function and 
//import this function in file where i wanna to use this function 
console.log("heloo this is app.js")

console.log(data)
// console.log(x)
//modules protect their function and variable from leaking


//there are two ways of importing modules

//common js module (cjs)
//by defualt used nodejs
//older way 
//userd required and exports

//synchrous mode - until require does not fetch rest of the code 
//non strict mode 

//ES Modules(ESM)

//import 
//export
//by default used in React,Angular
//newer way
//asynchrous mode done rest of the code before the import
//strict mode 

// export x = "Hello world" i want to just make the variable or any function 
// free to be go anywhere
// to use this x in those file 

// i have to write import {x} from "./sum.js"
//here the sum.js is simply a file name 
//there is no need to take worriess

//modle export is {} at the end of day 

//there are a another way to use export
//export.x = x
//export.calculatesum = calculatesun





var a  = 10;
var b = 20;

sum(a,b)
multiply(a,b)



