function updateCounter() {
  const now = new Date();
  const targetDate = now.getDate();

  const day = 31 - now.getDate();
  const hour = 24 - now.getHours();
  const minute = 60 - now.getMinutes();
  const second = 60 - now.getSeconds()
  
  document.getElementById('day').innerHTML = day;
  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minute').innerHTML = minute;
  document.getElementById('second').innerHTML = second;
}

setInterval(updateCounter, 1000);


let prevMessage = 0;

function messageBarUpdate() {
  let messages = [
    "Free shipping and free extended returns for up to 60 days.",
    "Buy your gifts online, pick them up in store on the same day.",
    "Enjoy Free Shipping and Returns",
    "Can't decide on a gift? Go for a physical or digital Ray-Ban gift card.",
  ]

  document.getElementById('message-bar-update').innerHTML = messages[prevMessage];

  prevMessage++;
  
  if (prevMessage === 4) {
    prevMessage = 0;
  }
}

setInterval(messageBarUpdate, 5000);

let vid1 = document.getElementById("video1");
let vid2 = document.getElementById("video2");
vid1.play();
vid2.play();
vid1.volume = 0;
vid2.volume = 0;
vid1.loop = true;
vid2.loop = true;

function playPause(button, video) {
  let vid = document.getElementById(video);
  if (vid.paused) {
    vid.play(); 
    button.innerHTML = '<img src="images/pause.svg">';
  }
  else {
    vid.pause();
    button.innerHTML = '<img src="images/play.svg">';
  }
}

function voiceOnOff(button, video) {
  let vid = document.getElementById(video);
  if(vid.volume === 0) {
    vid.volume = 1;
    button.innerHTML = '<img src="images/voice_on.svg">';
  }
  else {
    vid.volume = 0;
    button.innerHTML = '<img src="images/noVoice.svg">';
  }
}





let images = [
  "images/01-aviator-apng-data.png",
  "images/02-wayfarer-apng-data.png",
  "images/03-clubmaster-apng-data.png",
  "images/04-justin-apng-data.png",
  "images/05-round-apng-data.png",
  "images/06-megawayfarer-apng-data.png"
]

let names = [
  "AVIATOR",
  "ORIGINAL WAYFARER",
  "CLUBMASTER",
  "JUSTIN",
  "ROUND",
  "NEW CARAVAN",
]

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let name = document.getElementById("name");

let i = 0;
const total = images.length;


function updateSlider() {
  img1.src = images[(i) % total];
  img2.src = images[(i + 1) % total];
  img3.src = images[(i + 2) % total];
  name.innerHTML = names[i];
}

function prevSlider() {
  i = (i - 1 + total) % total;
  updateSlider();
}

function nextSlider() {
  i = (i + 1) % total;
  updateSlider();
}




const form = document.getElementById("contact-form");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = document.getElementById("contact-form").elements;

  const name = inputs[0].value;
  const surname = inputs[1].value;
  const email = inputs[2].value;
  const subject = inputs[3].value;

  console.log("Name: " + name + "\nSurname: " + surname + "\nEmail: " + email + "\nSubject: " + subject);

  alert("Hi!");
});