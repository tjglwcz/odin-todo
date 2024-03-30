import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

console.log("Hello World");

let projects = [];

function createProject(projectName) {
  return {
    projectName: projectName,
    tasks: [],
    addTask(task) {
      this.tasks.push(task);
    },
  };
}

let project1 = createProject("siema");

project1.addTask("task1");
console.log(project1.tasks[0]);
