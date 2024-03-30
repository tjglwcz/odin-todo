import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

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
