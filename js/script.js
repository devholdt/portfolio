const details = document.querySelector("#details");
const defaultHtml = document.querySelector("#details").innerHTML;
const projectList = document.querySelector(".project-list");

const url = "https://portfolio.devholdt.no/wp-json/wp/v2/posts/";

async function projects(url) {
  try {
    const response = await fetch(url);
    const projects = await response.json();

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const projectTitle = project.title.rendered;
      const projectContent = project.content.rendered;
      const projectItems = document.createElement("li");

      projectList.append(projectItems);
      projectItems.innerHTML = `<button id="${project.id}" class="list-btn">${projectTitle}</button>`;

      const listBtns = document.querySelectorAll(".list-btn");
      const button = listBtns[i];

      function projectDisplay() {
        if (button.innerHTML === projectTitle) {
          details.innerHTML = projectContent;
        }

        const close = document.querySelector(".close-btn").children[0];

        close.onclick = function () {
          details.innerHTML = defaultHtml;
        };
      }

      button.addEventListener("click", projectDisplay);
    }
  } catch (error) {
    console.log("An error occured");
  }
}

projects(url);

const logo = document.querySelector("#logo");
const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector("#navToggle");
const menuLinks = document.querySelectorAll(".menu-link");

function logoCheck() {
  let screenWidth = window.innerWidth;

  if (screenWidth < 769) {
    logo.innerHTML = `<img src="images/MBH_Logo_NoName.png" alt="Mathias B. Herholdt logo">`;
    navMenu.style.display = "none";
  } else {
    logo.innerHTML = `<img src="images/MBH_Logo.png" alt="Mathias B. Herholdt logo">`;
    navMenu.style.display = "flex";
  }
}

function toggleMenu() {
  if (navMenu.style.display === "none") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}

window.onload = logoCheck;
window.onresize = logoCheck;

navToggle.addEventListener("click", toggleMenu);
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", toggleMenu);
}
