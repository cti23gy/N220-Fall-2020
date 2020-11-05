let username = document.getElementById("username");
let password = document.getElementById("password");
let dvResult = document.getElementById("dvResult");

let u2 = "Username";
let p2 = "Password";

function displayName() {
    let u1 = username.value;
    let p1 = password.value;

    if(u1 == u2 && p1 == p2) { //check if correct
        dvResult.innerHTML = "Success";
    }
    else {
        dvResult.innerHTML = "Wrong";
    }
    
    
    name.value = ""; //clear value
}
