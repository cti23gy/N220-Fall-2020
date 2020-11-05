let heroimage = document.getElementById("heroimage");

let w = 100;
let h = 100;


function expand() {
    w = w + (w*0.10);
    h = h + (h*0.10);
    heroimage.style.width = w + "px";
    heroimage.style.height = h + "px";
}
