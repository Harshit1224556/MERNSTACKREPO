//immediately invoked function 

//wo function jo immediately invoked ho jaaye
//global scope ke polloution se bachne ke liye hum ye krte hah
//named iffe 
(function print(){
    console.log("DB connected ")
})();

// iska realtime example hah ek file jisem hum chahte hah jaise hi file khule mere datebase connect ho jaaye 

//un cases me hum use krte hah insb kooo
//agar ek file me do iife use krna hah to ek to terminate krna pdegaaa ; ye laga kr ke terminate krna  pdega 

//unnamed iife
// ( ()=>{
//     console.log("Db connected 2")
// })()


// ( (name)=>{
//     console.log(`Db connected 2 welcome ${name}`)
// })('harshit')

//parametrised iife

//iife me return keyword use krna hah to usko ek variable me store krna hogaaaa
