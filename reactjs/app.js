

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




const HeaderCom = () =>(

  <div id = "navbar">
    <img  src = "data:image/png;base64,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"/>
    
    <input type= "text" placeholder="Enter your text"/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderCom/>)



