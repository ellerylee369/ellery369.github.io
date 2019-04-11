var counter = 1;


function cycleImage() {

    if (counter === 0) {
        document.getElementById("images").src = "images/ellery8.jpg";
        counter++;
    }
    else if (counter === 1) {
        document.getElementById("images").src = "images/ellery4.jpg";
        counter++;
    }
    else if (counter === 2) {
        document.getElementById("images").src = "images/ellery6.jpg";
        counter = 0;}



}