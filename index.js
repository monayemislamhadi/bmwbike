
var bike = document.getElementById("bike_photo");
var bikem = document.getElementById("bit");
var redbtn = document.getElementById("red");
var bluebtn = document.getElementById("blue");
var blackbtn = document.getElementById("black");

redbtn.onclick = function() {
    bike.style.backgroundImage = "url(img/BMW1.png)";
    bikem.style.backgroundImage = "url(img/BMW1.png)";
    var bg = document.getElementById("body");
    bg.className = "bg-red";
}

bluebtn.onclick = function() {
    var bg = document.getElementById("body");
    bg.className = "bg-blue";
    bike.style.backgroundImage = "url(img/BMW2.png)";
    bikem.style.backgroundImage = "url(img/BMW2.png)";
}

blackbtn.onclick = function() {
    var bg = document.getElementById("body");
    bg.className = "bg-black";
    bike.style.backgroundImage = "url(img/BMW3.png)";
    bikem.style.backgroundImage = "url(img/BMW3.png)";
}