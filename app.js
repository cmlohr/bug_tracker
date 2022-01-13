

function addBug() {
  var input = document.getElementById("input");
  var newBug = input.value;
  var assigned = document.getElementById("inputAssigned");
//   var selected = assigned.options[assigned.selectedIndex].value;
//   console.log(selected)
  var severity = document.getElementById("inputSeverity");
  console.log(severity.value)
  if (newBug != "") {
    var item = document.createElement("li");


    item.innerHTML =
      '<input type="button" id="low_marker" class="important" onclick="important(this.parentNode)" value=" ! " />' +
     severity.value +" "+ newBug + " (" + assigned.value + ") "+
      '<input type="button" class="done" onclick="markDone(this.parentNode)" value="complete" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="remove" /> ' ;
      document.getElementById("tasks").appendChild(item);

    input.value = "";
    input.placeholder = "enter issue...";
  }
}

function important(item) {
  item.className = "important";
}
function markDone(item) {
  item.className = "finished";
}
function remove(item) {
  if (item.className == "finished") {
    item.remove();
    //Alternative solution
    // document.getElementById(remove).disabled = true;
  }
}
function doAbout() {
//   document.getElementById("divabout").innerHTML = "Author Colleen Lohr";
}
function clearAbout() {
  document.getElementById("divabout").innerHTML = "";
}
