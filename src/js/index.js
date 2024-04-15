import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { Project } from "./project";
import { Task } from "./task";
import { Renderer } from "./render";

const taskContainer = document.querySelector("#taskContainer");
const saveToDoBtn = document.querySelector("#saveToDo");
const projectList = document.querySelector("#projectList");
const addToDoBtn = document.querySelector("#addToDoBtn");
const addProjectBtn = document.querySelector("#addProjectBtn");
const saveProjectBtn = document.querySelector("#saveProject");
const allTasks = document.querySelector("#allTasks");
let titleInput = document.querySelector("#titleInput");
let descriptionInput = document.querySelector("#descriptionInput");
let dateInput = document.querySelector("#dateInput");
let projectInput = document.querySelector("#projectInput");

for (let i = 0; i < 5; i++) {
  new Project(`Project ${i}`).add(projects);
}

for (let i = 0; i < 5; i++) {
  new Task(
    `Task ${i}`,
    "Random task description",
    "2024-04-11",
    "Project 0"
  ).add(projects);
}

addToDoBtn.addEventListener("click", () => {
  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  projectInput.value = "";
  saveToDoBtn.addEventListener(
    "click",
    () => {
      let newTask = new Task(
        titleInput.value,
        descriptionInput.value,
        dateInput.value,
        projectInput.value
      );
      newTask.add(projects);
      taskContainer.innerHTML = "";
      ui.renderAllTasks(projects, currentProject);
      console.log(projects);
    },
    { once: true }
  );
});

addProjectBtn.addEventListener("click", () => {
  projectTitleInput.value = "";

  saveProjectBtn.addEventListener("click", () => {
    let newProject = new Project(projectTitleInput.value);
    newProject.add(projects);
    ui.renderProject(newProject, projectList);
  });
});

allTasks.addEventListener("click", () => {
  taskContainer.innerHTML = "";
  ui.renderAllTasks(projects, currentProject);
});

let ui = new Renderer();

ui.renderAllProjects(projects);
ui.renderAllTasks(projects, currentProject);
