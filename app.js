function addBug() {
    var input = document.getElementById("input");
    var newBug = input.value;
    var assigned = document.getElementById("inputAssigned");
    var severity = document.getElementById("inputSeverity");
    console.log(severity.value);
    if (newBug != "") {
        var item = document.createElement("li");

    item.innerHTML =
      '<input type="button" id="low_marker" class="important" onclick="important(this.parentNode)" value=" &#9733; " />' +
      "&nbsp;<span class='bug_list_item'> Severity:&nbsp;</span>  <span class='bug_list_item'>" +
      severity.value +
      "</span>&nbsp;<span class='post'>|</span>&nbsp;<span class='bug_list_item'> Summary:&nbsp;</span><span class='bug_list_item'>" +
      newBug +
      "</span>&nbsp;<span class='post'>|</span>&nbsp;<span class='bug_list_item'> Assigned:&nbsp;</span><span class='bug_list_item'>" +
      assigned.value +
      "</span>&nbsp;" +
      '<input type="button" class="done" onclick="markDone(this.parentNode)" value="complete" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="remove" /> ';
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
  }
}