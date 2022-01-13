function addBug() {
  var input = document.getElementById("input");
  var newTask = input.value;
  if (newTask != "") {
    var item = document.createElement("li");

    item.innerHTML =
      '<input type="button" class="important" onclick="important(this.parentNode)" value=" ! " />' +
      '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
      newTask;
    document.getElementById("tasks").appendChild(item);

    input.value = "";
    input.placeholder = "enter task...";
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
  document.getElementById("divabout").innerHTML = "Author Colleen Lohr";
}
function clearAbout() {
  document.getElementById("divabout").innerHTML = "";
}
