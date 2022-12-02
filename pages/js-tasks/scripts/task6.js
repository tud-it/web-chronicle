var lastElem = 0;

function adding() {
  if (lastElem == 0) {
    let shoeSize = document.querySelector("#inp").value;
    let size = shoeSize.toString();
    var elements = document.getElementsByClassName(size); // get all elements
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "rgb(0, 128, 0)";
      elements[i].innerHTML =
        '<img src="./../../../img/js-tasks/cupboard.svg" /></td>' + size;
    }
    globalThis.lastElem = shoeSize;
  } else {
    let shoeSize = document.querySelector("#inp").value;
    let size = shoeSize.toString();
    var elements = document.getElementsByClassName(size); // get all elements
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "rgb(0, 128, 0)";
      elements[i].innerHTML =
        '<img src="./../../../img/js-tasks/cupboard.svg" /></td>' + size;
    }
    var elements2 = document.getElementsByClassName(lastElem); // get all elements
    for (var i = 0; i < elements2.length; i++) {
      elements2[i].style.backgroundColor = "rgb(165, 42, 42)";
      elements2[i].innerHTML =
        '<img src="./../../../img/js-tasks/cupboard.svg" /></td>';
    }
    globalThis.lastElem = shoeSize;
  }
}
