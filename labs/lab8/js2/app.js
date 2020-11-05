//let dupimage = document.getElementById("dupimage");
var characters = "0123456789ABCDEF"; 


for(let i = 0; i < 200; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
       color += characters[(Math.floor(Math.random() * 16))];
    } 
    let newEl = document.createElement("div");
    newEl.style.width = "40px";
    newEl.style.height = "40px";
    newEl.style.backgroundColor = color;
    newEl.style.margin = "2px";
    newEl.style.float = "left";
    document.body.appendChild(newEl);
}