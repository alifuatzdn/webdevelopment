const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (input.value) {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);
  }
  else {
    alert("You must write something!")
  }
  input.value = "";
  saveData()
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData() {
  localStorage.setItem("data",  listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getData();