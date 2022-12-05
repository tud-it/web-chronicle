var Züge;
var feld = [1, 2, 3, 4, 5, 6, 7, 8, ""];
var finished = true;
var height = 3; //=document.getElementById('gameheight')
var width = 3;
var SFX_move = new Audio("./../../../sound/Move.mp3");
var SFX_win = new Audio("./../../../sound/Victory.mp3");
var SFX_wrong = new Audio("./../../../sound/Wrong.mp3");
var SFX_start = new Audio("./../../../sound/Start.mp3");
function shuffle(arr) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  var ranArr = shuffled.slice(0, height * width);
  return ranArr;
}

function newfeld() {
  feld = [];
  for (i = 0; i <= height * width - 2; i++) {
    feld[i] = i + 1;
  }
  feld[height * width - 1] = "";
}

function newboard() {
  newfeld();
  feld = shuffle(feld);
  board = document.getElementById("board");
  board.innerHTML = "";
  var index = 0;
  var inner = "";

  for (let i = 1; i <= height; i++) {
    inner += "<tr>";
    for (let j = 1; j <= width; j++) {
      inner += "<td id='" + index + "' onclick='move(" + index + ")'>" + feld[index] + "</td>";
      index++;
    }
    inner += "</tr>";
  }
  board.innerHTML += inner;
}

function newgame() {
  SFX_start.play();
  newboard()
  Züge = 0;
  clearTimeout(t);
  document.getElementById("time").textContent = "00:00:00";
  sec = 0; min = 0; hrs = 0;
  timer();
  finished = true;
}


function chr(ind) {

  return document.getElementById(ind.toString());
}

function tausch(index, zahl) {
  SFX_move.play();

  merke = chr(index + zahl).innerHTML;
  chr(index + zahl).innerHTML = chr(index).innerHTML;
  chr(index).innerHTML = merke;

  temp = feld[index + zahl];
  feld[index + zahl] = feld[index];
  feld[index] = temp;
  Züge += 1;
  console.log(feld);
}

function move(index) {
  if (finished) {
    if (chr(index + width) && !(chr(index + width).innerHTML)) {
      tausch(index, width);
    }
    else if ( (index+1)%width && chr(index + 1) && !(chr(index + 1).innerHTML)) {
      tausch(index, 1);
    }
    else if (chr(index - width) && !(chr(index - width).innerHTML)) {
      tausch(index, -width);
    }
    else if (index%width && chr(index - 1) && !(chr(index - 1).innerHTML)) {
      tausch(index, -1);
    }
    else {
      SFX_wrong.play();
    }
    w=win();
    if (w) {
      SFX_win.play();
      clearTimeout(t);
      document.querySelector("#out").innerHTML = "You Win!<br/>Deine Zeit war " + hrs + ":" + min + ":" + sec + ".<br/>Du hast " + Züge + " Z&uuml;ge gebraucht"
      finished = false;
    }
  }
}

function win(){
  w=true;
  for (let i=0;i<=feld.length-2;i++){
    if (feld[i]!=i+1){
      w=false;
    }
  }
  return w;
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
