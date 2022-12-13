const details = document.querySelector("#details");
const gamehubBtn = document.querySelector("#gamehub");
const scienceMuseumBtn = document.querySelector("#scienceMuseum");
const timeSignatureBtn = document.querySelector("#timeSignature");
const resetBtn = document.querySelector("#resetBtn");

const defaultHtml = `<h3>Projects by Herholdt</h3>
                      <p>My projects consist of websites that I have built during my studies within certain frameworks
                          with set requirements and expectations.</p>
                      <p>The projects have been carried out independently with
                          the exception of certain assets such as images and text which have been provided by the
                          school,
                          in addition to guidance from tutors.</p>
                      <p>Check out my latest works on the list to the right.</p>`;

details.innerHTML = defaultHtml;

function showGameHub() {
  details.innerHTML = `<h4>GameHub</h4>
                        <h5>Cross-course Project</h5>
                        <p>
                            A website for a fictional video game retailer where users can buy and sell games as well as read
                            thelatest news from the world of gaming.
                        </p>
                        <p>
                            This website is made as a Cross-Course Project at NOROFF, spanning multiple courses such as
                            design, HTML & CSS, programming foundations and interaction design. The website has been through
                            several iterations before getting to the current version. It started as a simple site with, in
                            my opinion, under par design choices, no JavaScript and rather weak responsiveness etc.
                        </p>
                        <p>
                            Over time after attending the courses mentioned the site has grown in quality overall, and might
                            continue to grow in the future.
                        </p>
                        <p>
                            A few points I focused on:
                        </p>
                        <ul>
                            <li>Simple design and layout that is easy to navigate</li>
                            <li>Store page with a shopping cart with dynamic price change depending on added products</li>
                            <li>Products added in WordPress database and fetched through REST API</li>
                        </ul>
                        <img src="images/crosscourseproject.jpg" alt="GameHub home page" class="project-img">
                        <div class="project-btns">
                            <a href="https://github.com/MHerholdt94/GameHub" target="_blank" class="btn-git cta">GitHub
                                Repo</a>
                            <a href="https://gamehubnew.netlify.app/" target="_blank" class="btn-yellow cta">Browse
                                Website</a>
                        </div>`;
}

function showScienceMuseum() {
  details.innerHTML = `<h4>Tønsberg Science Museum</h4>
                        <h5>Semester Project</h5>
                        <p>
                            A website for a fictional science museum based in my home town. The site is catered to
                            inquisitive, curious children and their families.
                        </p>
                        <p>
                            This project was made for the Semester Project 1 assignment at NOROFF where I was tasked with
                            creating a website for a fictional science museum with a primary target audience of middle
                            school children and families.
                        </p>
                        <p>
                            The website have a creative use of colours and a design that appeals to both children and
                            parents.
                        </p>
                        <p>
                            Website prerequisites included
                        </p>
                        <ul>
                            <li>Should be informative, engaging and appealing</li>
                            <li>Should attract both middle school pupils and their parents/families</li>
                            <li>Should take for granted that the audience is inquisitive and intelligent</li>
                            <li>Should encourage users to visit the museum itself</li>
                            <li>Should be responsive and easy to use and navigate</li>
                        </ul>
                        <img src="images/semesterproject.jpg" alt="Tønsberg Science Museum home page" class="project-img">
                        <div class="project-btns">
                            <a href="https://github.com/MHerholdt94/Tonsberg-Science-Museum" target="_blank"
                                class="btn-git cta">GitHub
                                Repo</a>
                            <a href="https://tbgsciencemuseum.netlify.app/" target="_blank" class="btn-yellow cta">Browse
                                Website</a>
                        </div>`;
}

function showTimeSignature() {
  details.innerHTML = `<h4>Time/Signature</h4>
                        <h5>Project Exam</h5>
                        <p>
                            A website with blog posts about all things drumming where users can read and post comments. The
                            blog posts is fetched using WordPress REST API.
                        </p>
                        <p>
                            This project was created for Project Exam 1, the final project of the first year at NOROFF
                            Frontend design course. For this project I was tasked with creating a blog website with a theme
                            of my choice where I had to use stuff I've learned the two first semesters. The blog posts for
                            the site were to be added in WordPress, using it as a headless CMS, and fetching them using REST
                            API to display them as a carousel/slider on the front page and on a separate page dedicated to
                            the blog posts. The post content had to be fetched using query strings, making the individual
                            blog post page dynamic showing only the details of the post the user clicked on on either the
                            front page or blog list page.
                        </p>
                        <p>
                            Some of the prerequisites were:
                        </p>
                        <ul>
                            <li>A carousel/slider on the front page showing the latest blog posts</li>
                            <li>The blog list page should show a number of posts with a button to show the rest</li>
                            <li>The blog specific page should be dynamically built using query strings</li>
                            <li>A contact form with requirements like "minimum 5 characters"</li>
                        </ul>
                        <img src="images/projectexam.jpg" alt="TimeSignature home page" class="project-img">
                        <div class="project-btns">
                            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-MHerholdt94" target="_blank"
                                class="btn-git cta">GitHub Repo</a>
                            <a href="https://timesignature.netlify.app/" target="_blank" class="btn-yellow cta">Browse
                                Website</a>
                        </div>`;
}

function reset() {
  details.innerHTML = defaultHtml;
}

gamehubBtn.addEventListener("click", showGameHub);
scienceMuseumBtn.addEventListener("click", showScienceMuseum);
timeSignatureBtn.addEventListener("click", showTimeSignature);
resetBtn.addEventListener("click", reset);
