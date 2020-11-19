var dvOutput = document.getElementById("dvOutput");
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
];

for(var i = 0; i < objects.length; i++) {
    curObject = objects[i];
    console.log(curObject.color);

    let newEl = document.createElement("div");
    newEl.style.width = curObject.width + "px";
    newEl.style.height = curObject.height +"px";
    newEl.style.backgroundColor = curObject.color;
    newEl.style.margin = "2px";
    newEl.style.float = "left";
    document.body.appendChild(newEl);

    
}
