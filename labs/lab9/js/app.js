var txtSentence = document.getElementById("txtSentence");
var txtOutput = document.getElementById("txtOutput");

var sum = 0;
var average = 0;

function breakString() {
    var inputString = txtSentence.value;
    var splitString = inputString.split(",");
    console.log(splitString);

    for(var i = 0; i < splitString.length; i++) {
        sum += Number(splitString[i]);
    }
    average = sum / splitString.length;

    console.log(average);
    console.log(sum);

    txtSentence.value = "";
    txtOutput.innerHTML = "Average: " + average + "    sum: " + sum;

} 

