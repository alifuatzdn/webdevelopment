let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let ageDay, ageMonth, ageYear;

  ageYear = year - birthYear;

  if (month >= birthMonth) {
    ageMonth = month - birthMonth;
  }
  else {
    ageYear--;
    ageMonth = 12 + month - birthMonth;
  }

  if (day >= birthDay) {
    ageDay = day - birthDay;
  }
  else {
    ageMonth--;
    ageDay = getDaysInMonth(birthYear, birthMonth) + day - birthDay;
  }

  if (ageMonth < 0) {
    ageMonth = 11;
    ageYear--;
  }

  let stDay = "days";
  let stMonth = "months";
  let stYear = "years";
  if (ageDay === 1 || ageDay === 0) {
    stDay = "day";
  }
  if (ageMonth === 1 || ageMonth === 0) {
    stMonth = "month";
  }
  if (ageYear === 1 || ageYear === 0) {
    stYear = "year";
  }

  result.innerHTML = `You are <span>${ageYear}</span> ${stYear}, <span>${ageMonth}</span> ${stMonth} and <span>${ageDay}</span> ${stDay} old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}