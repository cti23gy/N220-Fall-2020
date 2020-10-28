let name = document.getElementById("name");
let dvResult = document.getElementById("dvResult");


function displayName() {
    let currentName = name.value;;
    dvResult.innerHTML = "Hello " + currentName;
    name.value = ""; //clear value
}

