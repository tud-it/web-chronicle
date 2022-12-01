function adding() {
  let shoeSize = document.querySelector("#inp").value;
  let size = shoeSize.toString();
  var elements = document.getElementsByClassName(size); // get all elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "rgb(0, 128, 0)";
    elements[i].innerHTML += size;
  }
}
