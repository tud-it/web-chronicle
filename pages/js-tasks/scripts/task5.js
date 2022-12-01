var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var pics = [
  "./../../../img/js-tasks/1386271561.svg",
  "./../../../img/js-tasks/1386271561.svg",
  "./../../../img/js-tasks/Advent_4.svg",
  "./../../../img/js-tasks/Advent_4.svg",
  "./../../../img/js-tasks/Flying_Reindeer.svg",
  "./../../../img/js-tasks/Flying_Reindeer.svg",
  "./../../../img/js-tasks/Machovka-snowman.svg",
  "./../../../img/js-tasks/Machovka-snowman.svg",
  "./../../../img/js-tasks/pegasossigi2-Christmastree.svg",
  "./../../../img/js-tasks/pegasossigi2-Christmastree.svg",
  "./../../../img/js-tasks/snow-flake-6.svg",
  "./../../../img/js-tasks/snow-flake-6.svg",
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
    elemID.src = "./../../../img/js-tasks/Spades.svg";
    document.getElementById(lastPicID).src = "./../../../img/js-tasks/Spades.svg";
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
  document.getElementById("1").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("2").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("3").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("4").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("5").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("6").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("7").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("8").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("9").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("10").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("11").src = "./../../../img/js-tasks/Spades.svg";
  document.getElementById("12").src = "./../../../img/js-tasks/Spades.svg";
  globalThis.pictures = shuffle(pictures);
}
