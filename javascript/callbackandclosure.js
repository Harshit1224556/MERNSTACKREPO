// ek aisa function jo ki use hota ki taaki kisi aur ke function me pass kiya ja ske 
//for future use us function ko hum ko hum call back function bolte hah



// higher order function ek aisa function  jo ki poarameter leta as a function to hum us 
// function ko bolte hah  ya fir koi function return kre then its okkkk 


//closure ek aisa function that return a function and also use a variable of the parent function

//question no 1
// a function that takes another function as a parameter and executes it after 3 sec


// function abcd(fn){
//     setTimeout(fn,3000)
// }

// abcd(function(){
//     console.log("Hello world")
// })
//lets try to make a khudk ka mapp 
// let arr = [1,2,3,4,5]

//  const ans = arr.map((br)=>{
//          return br+10
// })
// console.log(ans)
//this is the map  but we want to create your own map



// var arr = [1,2,3,4,5,6]

// function hap(arr,fn){
//     let  newarr = []

//     for(var i=0;i<arr.length;i++){
//         newarr.push(fn(arr[i]))
//     }

//     return newarr
// }


// let ans = hap(arr,function(val){
//     return val+10
// })

// console.log(ans)




//implement closure and make a conter


// function counter(){
// let  count = 0

//     return function(){
            
//         count++;
//         console.log(count)
//     }
// }

// var fn = counter()
// fn()
// fn()
// fn()


//make  a function that limit no of function to be cALLED


// function limiter(fn,limit){
//     let count = 0
//     return function(){
//           if(count<limit){
//         count++
//         fn()
//           }
//     }

// }
// let lm = limiter(function(){
//      console.log("hey")
// },3)

// lm()
// lm()
// lm()
// lm()
// lm()
// lm()

//tin baar hi print hoga wo tin baar k baad condition nh met kregaaaaaaaaaaa


