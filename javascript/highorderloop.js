
// const arr = [1,2,3,4,5]
// for (const nums of arr) {
//     console.log(nums)
// }




// let name = "HARSHIT"
// for (const char of name) {
    
//     console.log(`each char of the name is ${char}`)
// }



//map 
// const map = new Map()
// map.set("a",1)
// map.set("b",2)
// map.set("c",3)
// console.log(map.get("a"))

//if i want to update the value of set

// map.set("a",5)
// console.log(map.get("a"))

// console.log(map.size)
// map.delete("a")
// console.log(map.size)

// console.log(map)

// for (const [key,value] of map) {
    
//     console.log(`key - ${key} and value - ${value}`)
// }

// const info = {
//     name:"Harshit",
//     roll :19
// }
// //in object in most of the cases we use for in loop

// for (const key in info) {
  
//     console.log(`keys is ${key} and values are ${info[key]}`)
// }


const coding = ["js","cpp","nodejs","java","react"]


// for (const key in coding) {
    
//     console.log(coding[key])
// }

//foreach loop me humme callback function likhna hota ha function havign no name 



// coding.forEach(function(item){
    
//     console.log(item)
// })



// coding.forEach((item)=>{
 
//      console.log(item)
// })


// function print(item){
//     console.log(item)
// }

// coding.forEach(print)


// coding.forEach((item,index,arr)=>{
//     console.log(item + " " + index +  " " + arr)
// })


const arr = [
    {
        language:"Javascript",
        langfor:"js"
    },
    {
        language:"Java",
        langfor:"java"
    },
    {
        language:"Python",
        langfor:"py"
    }

]

arr.forEach((item)=>{
   console.log(item.language)
})

//this concept is used in when we are taking the data from database where each data is object