// const arr = [1,2,3,9,8,6]
// const greater = arr.filter( (num) => (num>4))
// console.log(greater)

//hum for each loop me if ke conditions se bachne ke liye hum filter use kr lete hah 



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

//   const hisbook  = books.filter( (br) => (br.genre==='History'))
//   console.log(hisbook)


// let  pubaf = books.filter(   (br) => (br.publish>=2000))
// // console.log(pubaf)

// pubaf = books.filter( (br) => (br.publish>=1995 && br.genre==='History'))
// console.log(pubaf)

//map

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const newarr = arr.map( (num)=> (num+10))
// console.log(newarr)

// const newarr = arr.map( (num)=>(num*10)) .map(( num) => (num+1))
// console.log(newarr)


//reduceeee

//mostly used in to find the sum 
//practical use to find total price  in  shopping cart


// const arr = [1,2,3]

// const newarr = arr.reduce( (acc,item) => acc + item,0)
// console.log(newarr)


const shoppingcart = [
  {
    item:"speaker",
    price:10000
  },
  {
    item:"protein",
    price:30000
  },
  {
    item:"Sofa",
    price:80000
  }

]

const total = shoppingcart.reduce( (acc,item) => acc  + item.price,0)

console.log(total)
