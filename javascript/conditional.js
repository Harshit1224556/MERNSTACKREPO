//question number 1
// let marks = 90
// if(marks>=90){
//     console.log("A")
// }

// else if(marks>=80 && marks<90){
//     console.log("B")
// }
// else if(marks>=70 && marks<80){
//     console.log("C")
// }
// else if(marks>=60 && marks<70){
//     console.log("D")
// }
// else if(marks>=50 && marks<60){
//     console.log("E")
// }
// else{
//     console.log("F");
// }



//question no 2

//rock paper and scissors 

let p1 = "paper"
let p2 = "rock"

if(p1=="rock" && p2=="scissor"){
    console.log("p1 wins");
}

else if(p1=="paper" && p2=="rock"){
    console.log("p1 wins");
}
else if(p1=="scissor" && p2=="paper"){
    console.log("p1 wins");
}
else if(p1=="scissor" && p2=="rock"){
    console.log("p2 wins");
}

else if(p2=="paper" && p1=="rock"){
    console.log("p2 wins");
}

else if(p2=="scissor" && p1=="paper"){
    console.log("p2 wins");
}

else{
    console.log("Draw")
}