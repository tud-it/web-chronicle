const numbers = []
function adding() {
  var textField = document.getElementById("textf");
  let inputField = document.querySelector("#inp").value;
  numbers.push(inputField)
  textField.innerText = numbers
}
function sorting() {
  var textField = document.getElementById("textf");
  numbers.sort(function (a, b) {
    return a - b;
  });
  textField.innerText = numbers
}
function clearing() {
  var textField = document.getElementById("textf");
  numbers.length = 0;
  textField.innerText = numbers
}
