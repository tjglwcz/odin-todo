import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

const taskContainer = document.querySelector("#taskContainer");
const addToDoBtn = document.querySelector("#saveToDo");

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

for (let i = 0; i < 5; i++) {
  tasks.addTask(
    `Task ${i + 1}`,
    "This is a description.",
    "2023-03-30",
    "Project 1",
    3
  );
}

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

addToDoBtn.addEventListener("click", () => {
  let title = document.getElementById("titleInput");
  let description = document.getElementById("descriptionInput");
  let date = document.getElementById("dateInput");
  let project = document.getElementById("projectInput");
  addCard(title.value, description.value, date.value, project.value);
  title.value = "";
  description.value = "";
  date.value = "";
  project.value = "";
});

function renderAllTasks(projects) {
  for (let project in projects) {
    for (let task of projects[project].projectTasks) {
      addCard(
        task.taskTitle,
        task.taskDescription,
        task.taskDueDate,
        task.taskProject
      );
    }
  }
}

renderAllTasks(projects);
