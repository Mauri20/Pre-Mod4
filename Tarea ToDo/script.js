newElement("Limpiar la cocina");

var close = document.getElementsByClassName("close");
var i,val;

// Agregando elementos a la lista
function newElement(val = null) {
  var li = document.createElement("li");
  var inputValue = val === null ? document.getElementById("myInput").value : val;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Escribe algo que tengas por hacer!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myInput").focus();

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  val="";
}