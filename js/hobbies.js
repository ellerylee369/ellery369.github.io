

var c = 0;
var teamimagesslide = ["./images/elleryteam1.jpg", "./images/anotherchurchteam.jpg"];
var i = setInterval(automatic,2000);

function automatic(){
    /*alert("change");*/
    c++;
    if(c === teamimagesslide.length)
        c=0;
    document.getElementById('teamimage').src=teamimagesslide[c];
}
