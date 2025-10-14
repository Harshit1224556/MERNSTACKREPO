// const arr = [1,2,3,4,5]
// console.log(arr[0])

const arr = new Array(1,2,3,4,5)
// console.log(arr[0])

//array method
// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)//nine add ho gyaaa lekin at first
// arr.shift()//first element remove ho gya hah


// console.log(arr.includes(9))//checl wheather the given thing is not present in the array

// console.log(arr.indexOf(3))

// const newarr = arr.join();
// console.log(newarr)
// console.log(typeof newarr)

// console.log("original array " + arr)
// const arr1 = arr.slice(1,3)//last index ko consider nh krta hah
// console.log(arr1)
// console.log(arr)

// const arr2 = arr.splice(1,3)//last index ko consider krta hah 
// console.log(arr2)
// console.log(arr)

//slice aur splice me ek difference hah ki slice original array m change nh krta but splice me main array m 
//change kr skta hah 


const dc_hero = ["thor","capamerica","avenger"]
const tv_hero = ["chutki","bhim","doremon"]
// dc_hero.push(tv_hero)
// console.log(dc_hero)
//javascript me array me koi v element koi v data type ko push krta hah
//so yaha par array me ek array hi push kr diya 
//so uske element ko access krne ke liye hume ky krna hah ki 
//sbse phle us array ke index par jaana then jo element us array m chahiye wo access krengee

//agar mujhe do array ko merge krna hah to hum concat krenge aur spread operator use krenge
//spread operator simple means har array ko spread kr dena into single pieces

// const marr = dc_hero.concat(tv_hero);
// console.log(marr)

// const marr = [...dc_hero,...tv_hero]
// console.log(marr)

// const arr1 = [1,2,[3,4],[5,[6,7]]]
// console.log(arr1.flat(infinity)) 
//ye array ko flat kr deta hah agar sbarray hah tooo


// console.log(Array.isArray("Hitesh"))
//check wheather the given entitites is array or not
// console.log(Array.from("Hitesh")) 
//from m jb hum key value dete h  to work nh krta hh  wo ek empty array de deta hah 

// const sc1 = 100
// const sc2 = 200
// const sc3 = 300
// console.log(Array.of(sc1,sc2,sc3))

//its make any from any variable

// let arr = [1,2,3,4,5]
// const el = arr.every((ec)=>(ec%2==0))
// console.log(el)

//its for checking any condition its help





// let arr = [1,2,3,3,2,1]

// let unqarr = [...new Set(arr)]
// console.log(unqarr)






// let numbers = [5,2,3,4,1]
// let sec = numbers[0]

// for(let num in numbers){
//     if(num>sec) sec = num
// }

// console.log(sec)






//how to sort the element in the array

let numbers = [5,2,3,1,2]
// numbers.sort()
// console.log(numbers)

//sort the number 

//but if we want to sort the number in reverse order


// numbers.sort((a,b)=>(b-a))
// console.log(numbers)


