const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

showNotes();

createBtn.addEventListener("click", (e) => {
  let inputContainer = document.createElement("div");
  let inputBox = document.createElement("p");
  let deleteImg = document.createElement("img");
  inputContainer.className = "input-container";
  inputBox.className = "input-box";
  inputBox.contentEditable = true;
  //inputBox.setAttribute("content-editable", "true");
  deleteImg.src = "images/delete.png";
  //notesContainer.appendChild(inputBox).appendChild(deleteImg);
  inputContainer.appendChild(inputBox);
  inputContainer.appendChild(deleteImg);
  notesContainer.appendChild(inputContainer);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage()
  }
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(not => {
      not.onkeyup = function() {
        updateStorage();
      }
    })
  }
})

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

document.addEventListener("keydown", (e) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});