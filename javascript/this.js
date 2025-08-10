const user = {
    name:"Harshit",
    age:18,
    welcome:function(){
        console.log(`${this.name} welcome to this college`)
    }
}

user.welcome()
user.name = "Harsh"
user.welcome()

//we use this to refer the current context
