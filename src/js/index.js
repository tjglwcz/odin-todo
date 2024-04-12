import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { Project } from "./project";
import { Task } from "./task";
import { Renderer } from "./render";

const taskContainer = document.querySelector("#taskContainer");
const addToDoBtn = document.querySelector("#saveToDo");
const projectList = document.querySelector("#projectList");

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

let ui = new Renderer();

ui.renderAllProjects(projects);
ui.renderAllTasks(projects, currentProject);
