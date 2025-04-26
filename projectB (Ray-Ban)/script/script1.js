let buttons = document.querySelectorAll(".image-button");
let selectedButton = document.querySelector(".image-button1");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    selectedButton.className = "image-button"
    button.className ="image-button1";
    selectedButton = button;
  })
});


let zoomPhoto = document.getElementById("zoom-area");

function changePhoto(button) {
  zoomPhoto.innerHTML = button.innerHTML;
}


const zoomContainer = document.getElementById("zoom-area");


zoomContainer.addEventListener("mousemove", (e) => {
  const zoomImage = document.getElementById("zoom-pic");

  const { left, top, width, height } = zoomContainer.getBoundingClientRect();

  const mouseX = e.clientX - left;
  const mouseY = e.clientY - top;

  const zoomRatio = 1.5;
  const zoomX = (mouseX / width) * (1 - zoomRatio);
  const zoomY = (mouseY / height) * (1 - zoomRatio);

  zoomImage.style.transform = `scale(${zoomRatio}) translate(${zoomX * 100}%, ${zoomY * 100}%)`;

  zoomContainer.style.cursor = "zoom-in";
});

zoomContainer.addEventListener("mouseout", () => {
  const zoomImage = document.getElementById("zoom-pic");
  zoomImage.style.transform = "scale(1) translate(0%, 0%)";
  zoomContainer.style.cursor = "default";
});