const user = {
    name:"Harshit",
    age:18,
    welcome:function(){
        console.log(`${this.name} welcome to this college`)
        console.log(this)
    }
}

// user.welcome()
// user.name = "Harsh"
// user.welcome()

//we use this to refer the current context

// console.log(this)
//here the  result is {} which means empty object iska mtlb ye hah ki global ke andar contextm 
//ho nh hah to
//lekin browser me wo window return kr degaaaaa

