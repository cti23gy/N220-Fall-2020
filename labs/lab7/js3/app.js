let number = document.getElementById("number");
let dvResult = document.getElementById("dvResult");
let randNum = 1 + Math.floor(Math.random() * 20);
dvResult.innerHTML = "Guess the Number from 1-20";

function displayNum() {
    let currentNum = Number(number.value);

    if (currentNum == randNum) { //Check number
        dvResult.innerHTML = "Correct Number! \n Now guess the new Number!";
        randNum = 1 + Math.floor(Math.random() * 20);
    }
    else if(currentNum > randNum) {
        dvResult.innerHTML = "Too High!";
    }
    else if(currentNum < randNum) {
        dvResult.innerHTML = "Too Low!";
    }
    
    name.value = ""; //clear value
}
