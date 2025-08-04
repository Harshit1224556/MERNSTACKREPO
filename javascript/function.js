
function saymyname(){
    console.log("H")
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("h")
    console.log("i")
    console.log("t")
}

// saymyname()


// function addtwonumber(num1,num2){
//     console.log(num1+num2)
// }

// addtwonumber(1,2)

// function addtwonumber(num1,num2){
//     return (num1+num2)
// }
// const res = addtwonumber(3,4)
// console.log("Result",res)

// function login(username){
//     console.log(`my name is ${username}`)

// }
// login("Harshit Sharma")


// function islogged(username){
//     if(username===undefined){
//        return "please enter a valid email"
//     }

//     return ` ${username} just logged in`
// }
// const  result = islogged("Harshit")
// console.log(result)

// function addtocart(...num){
//     return num;
// }
// console.log(addtocart(100,200,300,400))


const user = {
    username:"Harshit",
    price:1900
}

function handleobject(anyobj){
    console.log(`this is my ${anyobj.username} id`)
}
handleobject(user)

const newarr = [100,200,300,400,500]
function getelement(arr){
    return arr[0]
}
console.log(getelement(newarr))