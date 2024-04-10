export class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectTasks = [];
  }
  add(projects) {
    projects.push(this);
  }
}
