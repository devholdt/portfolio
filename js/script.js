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
