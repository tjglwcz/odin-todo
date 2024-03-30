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
