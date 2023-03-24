setInterval(function()
{
var datenow = new Date();

document.getElementById("time").innerHTML=
String(datenow.getHours()) + ":" 
+ String(datenow.getMinutes()) + ":" 
+ String(datenow.getSeconds());
},1000);