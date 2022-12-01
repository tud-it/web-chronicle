var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var pics = [
  "./../img/1386271561.svg",
  "./../img/1386271561.svg",
  "./../img/Advent_4.svg",
  "./../img/Advent_4.svg",
  "./../img/Flying_Reindeer.svg",
  "./../img/Flying_Reindeer.svg",
  "./../img/Machovka-snowman.svg",
  "./../img/Machovka-snowman.svg",
  "./../img/pegasossigi2-Christmastree.svg",
  "./../img/pegasossigi2-Christmastree.svg",
  "./../img/snow-flake-6.svg",
  "./../img/snow-flake-6.svg",
];
var lastPic = "";
var lastPicID = "";
var counter = 0;
var pairs = 0;
let pictures = shuffle(pics);

function shuffle(arr) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  var ranArr = shuffled.slice(0, 12);
  return ranArr;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
var canClick = true;
async function slide(num) {
  if (!globalThis.canClick) return;

  globalThis.canClick = false;

  var elemID = document.getElementById(num.toString());
  elemID.src = pictures[num - 1];
  if (lastPic == elemID.src) {
    globalThis.lastPic = "";
    globalThis.lastPicID = "";
    globalThis.pairs = pairs + 1;
    document.getElementById("pair").innerText = "Pairs found: " + pairs + "/6";
    globalThis.counter += 1;
    document.getElementById("moves").innerText = "Move:" + counter;
  } else if (!(globalThis.lastPic == "")) {
    await sleep(1000);
    elemID.src = "./../img/Spades.svg";
    document.getElementById(lastPicID).src = "./../img/Spades.svg";
    globalThis.lastPic = "";
    globalThis.lastPicID = "";
    globalThis.counter += 1;
    document.getElementById("moves").innerText = "Move:" + counter;
  } else {
    globalThis.lastPic = elemID.src;
    globalThis.lastPicID = num;
  }
  globalThis.canClick = true;
}
function reset(){
  document.getElementById("1").src = "./../img/Spades.svg";
  document.getElementById("2").src = "./../img/Spades.svg";
  document.getElementById("3").src = "./../img/Spades.svg";
  document.getElementById("4").src = "./../img/Spades.svg";
  document.getElementById("5").src = "./../img/Spades.svg";
  document.getElementById("6").src = "./../img/Spades.svg";
  document.getElementById("7").src = "./../img/Spades.svg";
  document.getElementById("8").src = "./../img/Spades.svg";
  document.getElementById("9").src = "./../img/Spades.svg";
  document.getElementById("10").src = "./../img/Spades.svg";
  document.getElementById("11").src = "./../img/Spades.svg";
  document.getElementById("12").src = "./../img/Spades.svg";
  globalThis.pictures = shuffle(pictures);
}
