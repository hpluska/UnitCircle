document.body.style.backgroundColor = "black";

var inputFields = document.createElement("div");
document.body.append(inputFields);

var xCoordDesc = document.createElement("div");
xCoordDesc.innerHTML = "enter x";
xCoordDesc.style.color = "white";
inputFields.append(xCoordDesc);
var xCoord = document.createElement("input");
xCoord.style.width = "50px";
xCoord.style.height = "25px";
xCoord.style.marginLeft = "5px";
xCoordDesc.append(xCoord);

var yCoordDesc = document.createElement("div");
yCoordDesc.innerHTML = "enter y";
yCoordDesc.style.color = "white";
inputFields.append(yCoordDesc);
var yCoord = document.createElement("input");
yCoord.style.width = "50px";
yCoord.style.height = "25px";
yCoord.style.marginLeft = "5px";
yCoordDesc.append(yCoord);

var enterBut = document.createElement("button");
enterBut.innerHTML = "enter";
inputFields.append(enterBut);
enterBut.style.margin = "5px";
enterBut.addEventListener("click", drawPoint);

var trianglePic = document.createElement("img");
trianglePic.src = "unitCircleTriangle.jpg";
trianglePic.style.width = "250px";
trianglePic.style.marginLeft = "75px";
document.body.append(trianglePic);

var drawArea = document.createElement("div");
drawArea.style.width = 400 + "px";
drawArea.style.height = 400 + "px";
drawArea.style.backgroundColor = "black";
drawArea.style.border = "lime thin solid";
drawArea.style.position = "absolute";
document.body.append(drawArea);

var xAxis = document.createElement("div");
xAxis.style.width = 400 + "px";
xAxis.style.height = 200 + "px";
xAxis.style.borderBottom = "white thin solid";
xAxis.style.position = "absolute";
drawArea.append(xAxis);

var yAxis = document.createElement("div");
yAxis.style.width = 200 + "px";
yAxis.style.height = 400 + "px";
yAxis.style.borderRight = "white thin solid";
yAxis.style.position = "abolute";
drawArea.append(yAxis);

var unitCircle = document.createElement("div");
unitCircle.style.width = "300px";
unitCircle.style.height = "300px";
unitCircle.style.borderRadius = "50%";
unitCircle.style.border = "yellow thin solid";
unitCircle.style.position = "absolute";
unitCircle.style.top = 50 + "px";
unitCircle.style.left = 50 + "px";

drawArea.append(unitCircle);

var point, xShift = 196, yShift = 196;

function drawPoint(){
    point = document.createElement("div");
    point.style.width = "0px";
    point.style.height = "0px";
    point.style.border = "lime thick solid";
    point.style.position = "absolute";
    point.style.borderRadius = "50%";
    x = Number(xCoord.value) * 150;
    y = -1*Number(yCoord.value) * 150;
    console.log(xShift + x + "px");
    point.style.left = xShift + x + "px";
    point.style.top = yShift + y + "px";
    console.log(point);
    drawArea.append(point);

}