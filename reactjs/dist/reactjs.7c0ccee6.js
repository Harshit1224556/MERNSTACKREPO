// const heading  = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{id:"seached"},"my nested heading")
//     )
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
//if we want more than one sibling in the code we use passed it as the array 
const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "firstsibling"
    }, "this is my first siblings"),
    React.createElement("h2", {
        id: "secondsibling"
    }, "this is my second siblings")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading) //agar div root me phle se hi man lo koi element jaise h1 jiska value hah i am harshit 
 //us time par i am harshit is getting replaced by the parent div 
;

//# sourceMappingURL=reactjs.7c0ccee6.js.map
