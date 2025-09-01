

// const heading  = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{id:"seached"},"my nested heading")
//     )
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
//if we want more than one sibling in the code we use passed it as the array 


//earlier we are using react from cdn now we are not using from cdn so there is problem 

//so new we have to import node modules from react and reactdom which we have downlaoded from 
// in our node modules 
import React  from "react";
import ReactDOM from "react-dom/client";

//gives error so what we have to do is in html file we have to say it to ye normal 
//javascript code nh hah ye ye kind of modules so usme jakar humko ye krne pdedaaa type = "modules"

// const heading  = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//        [React.createElement("h1",{id:"firstsibling",key:"1"},"this is my first siblings to check live"),
//         React.createElement("h2",{id:"secondsibling",key:"2"},"this is my second siblings")
//        ]
        


//     )
// )



// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

//agar div root me phle se hi man lo koi element jaise h1 jiska value hah i am harshit 
//us time par i am harshit is getting replaced by the parent div 

//createlement ek object banata jb hum isko render krte hah to wo htmlelement banata hahh
//but this is very clumsy structure so we jsx developer make syntax which make 
//your life easy jsx is not a part of the react





//jsx is not a  html in a javascript
//jsx is literally a syntax
//jsx is htmk like syntax
//jsx code - react.create element = createlement.js = html(rendering)

//react element 
// const jsxheading = <h1 id = "heading">Harshit sharma Using Jsx</h1>



//jsxreading is also the object
//jsx transplied before going to the JS - done by the Parcel and Babel (transpiler)

//babel is javascript complier and its babel does many thingss
//babel even do transify the lanquage so that older browser also understand javascript code

//when jsx is of one line then there is no issue
//if jsx is of multiple element then we have to put the code 
//into round brackets 



//React component
//1) class based component - (old way of writting code)
//2) functional  compoment 

//react functional component 
//is a normal javascript component 
//normal javascript function that returns jsx element
//start with Capital letter

//React Component

// const TItle = () => (
//   <h1 className = "head">Namaste React Using Jsx</h1>
// );

// const HeadingComponent = () =>(
  
//     <div id = "container">
//       {jsxheading}
//     <TItle />
//     <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );

//both are same but may be their syntax varies 
// const HeadingComponent = () =>{
  
//     <div id = "container">

//   return  <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading)

//you can do render react element like this

//to do render react component we have to put [] bracket


// root.render(<HeadingComponent/>);





//to write the javascript code in jsx 
// we write in {} and the done 

// to put react elememt in the jsx code 
//treat them as a normal javascript variable  
//as it is a normal javascript variable so 
// we will just put it in a simply curly braces 

//we can also write 
//react elemenent under a react element

//and thiss process is called composition 

//suppose we are taking some data from 
//some api nd this api is bad api
//and so in this case we have to jsut take no care 

//because we have our jsx if we any data coems under the jsx 
//it automatically prevents cross site attack 


//there is one more way to add react element 
// so at the end <Title></Title>
//you can add multiple times

// so whats do you means by the title the end of day 

//so ans is title is just a function at the end of tha day
// in jsx jsut make a { and call a function }







//Assigment 3
//question no 1 


// const title = React.createElement(
//   "div",
//   { id: "title", key: 1 },

//   [React.createElement("h1", { id: "head1",key:2 }, "my name is harshit sharma"),
//   React.createElement("h2", { id: "head2",key:3  }, "my name is harshit singh"),
//   React.createElement("h3", { id: "head3",key:4 }, "my name is harshit Yadav"),

//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);



//ques 2 

// const title = (
// <div id = "title">
//   <h1 id = "heading1">my name is harshit sharma</h1>
//   <h2 id = "heading2">my name is harshit sharma</h2>
//   <h3 id = "heading3">my name is harshit sharma</h3>
// </div>
  

// );


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title)

//this is how we can do it by using jsx


//question 3

//now lets go to do it by the functional component 

//  const Title = () => (

//     <div id = "title">
//       <h1 id = "heading1">My name is harshit sharma</h1>
//       <h2 id = "heading2">My name is harshit sharma</h2>
//       <h2 id = "heading3">My name is harshit sharma</h2>
//     </div>

//  )

//  const root = ReactDOM.createRoot(document.getElementById("root"))
//  root.render(<Title/>)


//by these 3 ways we did the same codeeeee




const HeaderCom = () =>
{
return (
 <h1>my name is khan</h1>
 
);
};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderCom/>)



