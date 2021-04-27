var $ = document;
var button = $.getElementById("button");
button.addEventListener("click" , changeColor);
function changeColor(){
var body = $.getElementById("body");
var backGroundColors = {
Apricot: "#FBCEB1",
Cerise : "#DE3163",
Coral : "#FF7F50",
DarkRed : "#8B0000",
Fuschia: "#FF00FF",
Madder : "#A50021",
OrangeRed : "#FF4500",
McDonaldsYellow : "#FFC72C",
YahooPurple : "#720e9e",
Lavender: "#E6E6FA",
AndroidGreen : "#32de84",
BrightMint : "#4FFFB0",
DarkCyan : "#008B8B"
};
var randomColor = backGroundColors[Object.keys(backGroundColors)[Math.floor(Math.random()*Object.keys(backGroundColors).length)]];
body.style.backgroundColor = randomColor;
}

