const gamehubLogo = document.querySelector("#gamehubLogo");
const museumLogo = document.querySelector("#museumLogo");
const timesignatureLogo = document.querySelector("#timesignatureLogo");

const gamehubDetails = document.querySelector("#gamehubDetails");
const museumDetails = document.querySelector("#museumDetails");
const timesignatureDetails = document.querySelector("#timesignatureDetails");

const projectContent = document.querySelectorAll(".project-content");

const closeBtns = document.querySelectorAll(".close");

projectContent.forEach((e) => {
  e.style.display = "none";
});

gamehubLogo.onclick = function () {
  gamehubDetails.style.display = "block";
  museumDetails.style.display = "none";
  timesignatureDetails.style.display = "none";
};

museumLogo.onclick = function () {
  gamehubDetails.style.display = "none";
  museumDetails.style.display = "block";
  timesignatureDetails.style.display = "none";
};

timesignatureLogo.onclick = function () {
  gamehubDetails.style.display = "none";
  museumDetails.style.display = "none";
  timesignatureDetails.style.display = "block";
};

closeBtns.forEach((e) => {
  e.addEventListener("click", closeProjectDetails);
});

function closeProjectDetails() {
  gamehubDetails.style.display = "none";
  museumDetails.style.display = "none";
  timesignatureDetails.style.display = "none";
}
