let txtSentence = document.getElementById("txtSentence");
let dvOutput = document.getElementById("dvOutput");
var allWords = [];

var badwords = 0;

function breakString() {
    var newWord = txtSentence.value;
    var inputString = txtSentence.value;
    var splitString = inputString.split(" ");
    allWords.push(newWord); //add to end of array

    dvOutput.innerHTML = "";
    for(var i = 0; i < splitString.length; i++) {
        var newEl = document.createElement("div");
        newEl.innerHTML = splitString[i];

        if(splitString[i] == "clear" || splitString[i] == "water" || splitString[i] == "tires") {
            newEl.style.color = "#FF0000";
            badwords++;
        }

        dvOutput.appendChild(newEl);
    }

    //if no space after last word it will not appear but is still counted if a "bad word"
    newEl.innerHTML = "Total Bad Words: " + badwords;
    dvOutput.appendChild(newEl);

    badwords = 0;
    txtSentence.value = ""; //clear input box
    console.log(allWords);
}