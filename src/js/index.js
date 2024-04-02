import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

const taskContainer = document.querySelector("#taskContainer");
const addToDoBtn = document.querySelector("#addToDoBtn");

console.log("Hello World");

const projects = [];

function projectHandler() {
  function createProject(projectName) {
    const newProject = {
      projectName: projectName,
      projectTasks: [],
    };
    projects.push(newProject);
    return newProject;
  }

  return { createProject };
}

const projHandler = projectHandler();

let project1 = projHandler.createProject("Project 1");

project1.projectTasks.push("siema");

console.log(project1.projectTasks);
console.log(projects);

function taskHandler() {
  function addTask(title, description, dueDate, project, priority) {
    const newTask = {
      taskTitle: title,
      taskDescription: description,
      taskDueDate: dueDate,
      taskProject: project,
      taskPriority: priority,
    };
    const targetProject = projects.find(
      (proj) => proj.projectName === newTask.taskProject
    );
    targetProject.projectTasks.push(newTask);
    return newTask;
  }

  return { addTask };
}

const tasks = taskHandler();

let task1 = tasks.addTask(
  "Task 1",
  "This is a description.",
  "2023-03-30",
  "Project 1",
  3
);
console.log(projects);

function addCard(title, description, duedate, project) {
  const card = document.createElement("div");
  card.className = "card my-2";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTop = document.createElement("div");
  cardTop.className = "card-top d-flex gap-3";

  const cardCheckbox = document.createElement("input");
  cardCheckbox.className = "form-check-input";
  cardCheckbox.setAttribute("type", "checkbox");

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";

  const cardIcon = document.createElement("i");
  cardIcon.className = "bi bi-trash ms-auto";

  const cardText = document.createElement("p");
  cardText.className = "card-text";

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer d-flex justify-content-between";

  const cardDueDate = document.createElement("small");
  const cardProject = document.createElement("small");

  card.appendChild(cardBody);

  cardBody.appendChild(cardTop);

  cardTop.appendChild(cardCheckbox);
  cardTop.appendChild(cardTitle);
  cardTop.appendChild(cardIcon);

  cardBody.appendChild(cardText);
  card.appendChild(cardFooter);
  cardFooter.appendChild(cardDueDate);
  cardFooter.appendChild(cardProject);

  cardTitle.textContent = title;
  cardText.textContent = description;
  cardDueDate.textContent = `Due: ${duedate}`;
  cardProject.textContent = `Project: ${project}`;

  taskContainer.appendChild(card);
}

addCard("Card Title", "This is a card description", "2024-04-02", "Project 1");

addToDoBtn.addEventListener("click", () => {
  addCard(
    "Card Title",
    "This is a card description",
    "2024-04-02",
    "Project 1"
  );
});
