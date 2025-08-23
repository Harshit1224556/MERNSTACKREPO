const input = document.querySelector('.input-box')
const btn = document.querySelector('.gen-btn')

btn.addEventListener("click",function generatepassword(){

    const length = 12
   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/`~"

let password = ""
password +=upperCase[Math.floor(Math.random()*upperCase.length)]
password +=lowerCase[Math.floor(Math.random()*lowerCase.length)]
password +=numbers[Math.floor(Math.random()*numbers.length)]
password +=specialChars[Math.floor(Math.random()*specialChars.length)]

const allchar = upperCase+lowerCase+numbers+specialChars

while(password.length<12){
    password +=allchar[Math.floor(Math.random()*allchar.length)]
}
 input.value = password

})



const copybtn = document.querySelector(".copy-icon")
copybtn.addEventListener("click",()=>{
 
    input.select();
    document.execCommand("copy")

   
})

