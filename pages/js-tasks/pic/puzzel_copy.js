var spielfeld;
var pieces;
var maxi;
var size;

function changepic(input) {
  var bild=document.getElementById("link").value;
  // alert("teeeeest")
  console.log(bild);
  // bild = "schuh.png";
  input.style.backgroundImage = "url('" + bild + "')";
}

function initSpielfeld() {
  größe = document.getElementById('gamesize').value;
  maxi = größe;
  size = Math.round(375/maxi);
  spielfeld = new Array(maxi);
  for (i=0;i<maxi;i++)   {
    spielfeld[i] = new Array(maxi);
  }
  counter = 0;
  for (y=0;y<maxi;y++) {
    for (x=0;x<maxi;x++) {
      spielfeld[x][y] = counter;
      counter++;
    }
  }
  initPieces();
}


function initPieces() {
  pieces = new Array(9);
  counter = 0;
  akt_x = 0;
  akt_y = 0;
  for(y=0;y<maxi;y++) {
    for(x=0;x<maxi;x++) {
      pstyle = new Array(3);
      pstyle["width"]=size+"px";
      pstyle["height"]=size+"px";
      pstyle["bg"]=akt_x+"px "+akt_y+"px";
      pieces[counter]=pstyle;
      akt_x -=size;
      counter++;
    }
    akt_x = 0;
    akt_y -=size;
  }
  pieces[0]["width"] = "";
  pieces[0]["height"] = "";
  pieces[0]["bg"] = "";
}

function getSpielfeld() {
  mypuzzle = document.getElementById("puzzle");
  while(mypuzzle.hasChildNodes()) {
    mypuzzle.removeChild(mypuzzle.firstChild);
  }
  for (y=0;y<maxi;y++) {

    for (x=0;x<maxi;x++) {
      karte=document.createElement("div");
      karte.onclick=kartenKlick;

      myid = document.createAttribute("id");
      myid.nodeValue="feld_" + [x] + "_" + [y];
      karte.setAttributeNode(myid);

      myclass = document.createAttribute("class");
      mystyle = document.createAttribute("style");
      if (spielfeld[x][y] == 0) {
	karte.style.width=size+"px";
	karte.style.height=size+"px";
        myclass.nodeValue="empty_piece";
      } else {
        karte.style.width=pieces[spielfeld[x][y]]['width'];
        karte.style.height=pieces[spielfeld[x][y]]['height'];
        karte.style.backgroundPosition=pieces[spielfeld[x][y]]['bg'];
        myclass.nodeValue="piece";
      }
      karte.setAttributeNode(myclass);
      tn = document.createTextNode("");
      karte.appendChild(tn);
      mypuzzle.appendChild(karte);
    }
  }
}

function mischen() {
  initSpielfeld()
   for(misch=0;misch<90000;misch++) {
     rand_x = randInt(0,maxi-1);
     rand_y = randInt(0,maxi-1);
     tausche(rand_x,rand_y);
   }
   getSpielfeld();
}

function tausche(x,y) {
   if(x > 0 && spielfeld[x-1][y] == "") {
      temp = spielfeld[x-1][y];
      spielfeld[x-1][y] = spielfeld[x][y];
      spielfeld[x][y] = temp;
      return true;
   } else if (x < maxi-1 && spielfeld[x+1][y] == "") {
      temp = spielfeld[x+1][y];
      spielfeld[x+1][y] = spielfeld[x][y];
      spielfeld[x][y] = temp;
      return true;
   } else if (y > 0 && spielfeld[x][y-1] == "") {
     temp = spielfeld[x][y-1];
     spielfeld[x][y-1] = spielfeld[x][y];
     spielfeld[x][y] = temp;
     return true;
   } else if (y < maxi-1 && spielfeld[x][y+1] == "") {
     temp = spielfeld[x][y+1];
     spielfeld[x][y+1] = spielfeld[x][y];
     spielfeld[x][y] = temp;
     return true;
   }
   return false;
}

function kartenKlick() {
  stat = this;
  id = stat.getAttributeNode('id');
  id_val = id.nodeValue;
  vals=id_val.split("_");

  x = parseInt(vals[1]);
  y = parseInt(vals[2]);
  erfolg = tausche(x,y);
  getSpielfeld();
  if (erfolg) geschafft();
}

function schonda(piece_number) {
  for(ay=0;ay<maxi;ay++) {
    for(ax=0;ax<maxi;ax++) {
     if (spielfeld[ax][ay] != "EMPTY" && spielfeld[ax][ay] == piece_number) return true;
    }
  }
  return false;
}

function clearSpielfeld() {
  for(y=0;y<maxi;y++) {
    for(x=0;x<maxi;x++) {
     spielfeld[x][y] = "EMPTY";
    }
  }
}

function randInt(min,maxi) {
   var div = (maxi - min) + 1;
   var randNum = Math.random();
   for (var i = 0; i <= div - 1; i++) {
      if (randNum >= i / div && randNum < (i+1) / div)
      {return i + min;}
    }
}

function geschafft() {
  counter = 0;

  ready = true;
  for(y=0;y<maxi;y++) {
    for(x=0;x<maxi;x++) {
      if (spielfeld[x][y] != counter) return;
      counter++;
    }
  }
 alert("Geschafft!");
}
