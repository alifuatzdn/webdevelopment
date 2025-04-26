let timeElement = document.getElementById("time");

setInterval(() => {
  var time = new Date();
  timeElement.innerHTML = time.toTimeString();
}, 1000);

let input = document.getElementById("input-bar");
let taskLst = document.getElementById("tasks");
let order = 1;
localStorage.removeItem("order");
getData();

function addTask() {
  if (input.value !== "") {
    var li = document.createElement("li");
    li.innerHTML = order + ") " + input.value;
    taskLst.appendChild(li);
    input.value = "";
    order++;
    saveData();
  }
  else {
    alert("Enter something...");
  }
}

function removeTask() {
  if (taskLst.children.length > 0) {
    taskLst.lastChild.remove();
    order--;
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", taskLst.innerHTML);
  localStorage.setItem("order", order);
}

function getData() {
  taskLst.innerHTML = localStorage.getItem("data");
  if (localStorage.getItem("order") === null) {
    order = 1;
    console.log(1);
  }
  else {
    order = localStorage.getItem("order");
  }
}