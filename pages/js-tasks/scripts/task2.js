var Züge;
var feld = [1, 2, 3, 4, 5, 6, 7, 8, ""];


function shuffle(arr) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  var ranArr = shuffled.slice(0, 12);
  return ranArr;
}

function newgame() {
  feld = shuffle(feld);
  for (i = 0; i <= feld.length - 1; i++) {
    chr(i + 1).innerHTML = "<p>" + feld[i] + "</p>";
  }
  Züge = 0;
  clearTimeout(t);
  document.getElementById("time").textContent = "00:00:00";
  sec = 0; min = 0; hrs = 0;
  timer();
}

function chr(ind) {
  return document.querySelector("#" + String.fromCharCode(ind + 96) + "");
}

function tausch(index, zahl) {

  merke = chr(index + zahl).firstChild.innerHTML;
  chr(index + zahl).innerHTML = "<p>" + chr(index).firstChild.innerHTML + "</p>";
  chr(index).innerHTML = "<p>" + merke + "</p>";

  temp = feld[index + zahl - 1];
  feld[index + zahl - 1] = feld[index - 1];
  feld[index - 1] = temp;
  Züge += 1;
}

function move(index) {
  if ((index + 3) <= 9 && !(chr(index + 3).firstChild.innerHTML)) {
    tausch(index, 3);
  }
  else if (index % 3 && !(chr(index + 1).firstChild.innerHTML)) {
    tausch(index, 1);
  }
  else if ((index - 3) >= 1 && !(chr(index - 3).firstChild.innerHTML)) {
    tausch(index, -3);
  }
  else if ((index - 1) % 3 && !(chr(index - 1).firstChild.innerHTML)) {
    tausch(index, -1);
  }
  if ((feld[0] == 1) && (feld[1] == 2) && (feld[2] == 3) && (feld[3] == 4) && (feld[4] == 5) && (feld[5] == 6) && (feld[6] == 7) && (feld[7] == 8) && !(feld[8])) {
    clearTimeout(t);
    document.querySelector("#out").innerHTML = "You Win!<br/>Deine Zeit war " + hrs + ":" + min + ":" + sec + ".<br/>Du hast " + Züge + " Z&uuml;ge gebraucht"
  }
}

var sec = 0;
var min = 0;
var hrs = 0;
var t;
function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}
function add() {
  tick();
  document.getElementById("time").textContent = (hrs > 9 ? hrs : "0" + hrs)
    + ":" + (min > 9 ? min : "0" + min)
    + ":" + (sec > 9 ? sec : "0" + sec);
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}
