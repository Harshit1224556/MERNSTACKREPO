

// global execution context 
//function execution context

//lets take a example 
let var1  = 10
let var2 = 10

function add(a,b){
    return a+b
}
let total= add(var1,var2)
console.log(total)

//isme sble phle 
// do state m chij hogi 
//1 stage h memory phase
//var1 - undifined
//var2 - undefined 
//add - undefined
//total - undefined 

//second phase h humnara 
//execution phase 
//var1 = 10
//var2 = 10
//function ka firse new varibale environment + thread hoga
//fir usme two phase hah execution phase and memory phase 


//call thread me sbse phle aata hah global execution contest
//fir func call hota to aata h then  remove 

//follow the principal of last in first out