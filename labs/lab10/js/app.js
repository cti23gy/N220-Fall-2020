let element = document.getElementById("image1");

function itsClicked(event) {
    let response = event.target.getAttribute("data-color");
    console.log(response);
    event.target.style.backgroundColor = response;
}