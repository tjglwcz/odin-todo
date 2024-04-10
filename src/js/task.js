export class Task {
  constructor(taskTitle, taskDescription, taskDueDate, taskProject) {
    this.taskTitle = taskTitle;
    this.taskDescription = taskDescription;
    this.taskDueDate = taskDueDate;
    this.taskProject = taskProject;
    this.taskDone = false;
  }
  add(projects) {
    const targetProject = projects.find(
      (proj) => proj.projectName === this.taskProject
    );
    targetProject.projectTasks.push(this);
  }
  delete(projects) {
    for (const project of projects) {
      const index = project.projectTasks.findIndex((task) => task === this);
      if (index !== -1) {
        project.projectTasks.splice(index, 1);
        break;
      }
    }
  }
  edit(newTitle, newDescription, newDueDate, newProject) {
    this.taskTitle = newTitle;
    this.taskDescription = newDescription;
    this.taskDueDate = newDueDate;
    this.taskProject = newProject;
  }
  toggleDone() {
    this.taskDone = !this.taskDone;
  }
}
