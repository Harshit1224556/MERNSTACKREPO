function getRandomColor() {
  const h = Math.floor(Math.random() * 360); // Hue: 0–360
  const s = Math.floor(Math.random() * 100); // Saturation: 0–100%
  const l = Math.floor(Math.random() * 100); // Lightness: 0–100%
  return `hsl(${h}, ${s}%, ${l}%)`;
}

let changecolor;
const body =document.querySelector("body")
document.querySelector('#start').addEventListener("click",()=>{
    changecolor = setInterval(()=>{
        body.style.backgroundColor=getRandomColor();
    },1000)
})

document.querySelector("#stop").addEventListener("click",()=>{
     clearTimeout(changecolor)
})