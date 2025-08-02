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

console.log("original array " + arr)
const arr1 = arr.slice(1,3)//last index ko consider nh krta hah
console.log(arr1)
console.log(arr)

const arr2 = arr.splice(1,3)//last index ko consider krta hah 
console.log(arr2)
console.log(arr)

//slice aur splice me ek difference hah ki slice original array m change nh krta but splice me main array m 
//change kr skta hah 