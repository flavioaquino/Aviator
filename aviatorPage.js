var count = 0;
var mynum = 9;

function generateRandomNumber() {
  var min = 1.01, max = 3;
  if (count == mynum) {
    min = 3.01;
    max = 8.00;
    count = 0;
    if(mynum == 13){
      mynum = 8;
    }
    mynum++;
  }
  var random = Math.random() * (max - min) + min;
  document.getElementById("random-number").innerHTML = "💰 Entrar após "+random.toFixed(2);
  document.getElementById("random-numbermsg").innerHTML = "🚀 Auto retirar 1.5/2.0";
  count++;
  
  setTimeout(function() {
  document.getElementById("random-number").innerHTML = "";
    document.getElementById("random-numbermsg").innerHTML = "";
}, 6000);
}

setInterval(generateRandomNumber, 15000);

window.onload = function() {
  var dots = 0;
  var loadingText = document.getElementById("loading-text");
  var loadingScreen = document.getElementById("loading-screen");
  
  loadingScreen.style.display = "flex";
  setInterval(function() {
    if (dots < 4) {
      loadingText.innerHTML = "Carregando" + ".".repeat(dots);
      dots++;
    } else {
      dots = 0;
    }
  }, 600);
  
  setTimeout(function() {
    loadingScreen.style.display = "none";
  }, 4000);
}
