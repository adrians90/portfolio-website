const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const projectsLink = document.getElementById("projects");
const projectsMobile = document.getElementById("projects-mobile");
const projectsFooter = document.getElementById("projects-footer");
const techStack = document.getElementById("tech-stack");

const projectsSection = document.getElementById("projects-section");

btn.addEventListener("click", navToggle);

projectsLink.addEventListener("click", scrollToProjects);
projectsMobile.addEventListener("click", scrollToProjects);
projectsFooter.addEventListener("click", scrollToProjects);
techStack.addEventListener("click", scrollToProjects);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function scrollToProjects() {
  projectsSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
