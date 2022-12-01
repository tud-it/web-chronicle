var board = ["1", "2", "3", "4", "5", "6", "7", "8", " "];
var fields = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
var Values = new Array();
var newFields;
var newBoard

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
function initGame() {
  // clear Board before begin
  clearing();
  var newFields = shuffle(fields);
  var newBoard = shuffle(board);
  var arrayLength = board.length;
  for (let i = 0; i < arrayLength; i++) {
    var doc = document.getElementById(newFields[i]);
    doc.innerText = newBoard[i];
  }
}
function clearing() {
  var arrayLength = board.length;
  for (let i = 0; i < arrayLength; i++) {
    var doc = document.getElementById(fields[i]);
    doc.innerText = " ";
  }
}
function slide() {
  for (i = 0; i < newFields.length; i++) {
    Values[i] = Array(newFields[i], newBoard[i]);
  }
}
