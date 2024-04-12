export class Renderer {
  renderProject(project, target) {
    const navItem = document.createElement("li");
    navItem.className = "nav-item";

    const navLink = document.createElement("a");
    navLink.className = "nav-link";
    navLink.href = "#";
    navLink.textContent = project.projectName;

    navItem.appendChild(navLink);
    target.appendChild(navItem);

    const projectInput = document.querySelector("#projectInput");
    const inputOption = document.createElement("option");
    inputOption.textContent = project.projectName;
    projectInput.appendChild(inputOption);

    navLink.addEventListener("click", () => {
      taskContainer.innerHTML = "";
      this.renderAllTasks(projects, project.projectName);
    });
  }
  renderTask(task, target, projects, currentProject) {
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

    const cardIcons = document.createElement("div");
    cardIcons.className = "ms-auto d-flex gap-2";

    const cardEditIcon = document.createElement("i");
    cardEditIcon.className = "bi bi-pencil-square";

    const cardDeleteIcon = document.createElement("i");
    cardDeleteIcon.className = "bi bi-trash text-danger";

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
    cardTop.appendChild(cardIcons);

    cardIcons.appendChild(cardEditIcon);
    cardIcons.appendChild(cardDeleteIcon);

    cardBody.appendChild(cardText);
    card.appendChild(cardFooter);
    cardFooter.appendChild(cardDueDate);
    cardFooter.appendChild(cardProject);

    cardTitle.textContent = task.taskTitle;
    cardText.textContent = task.taskDescription;
    cardDueDate.textContent = `Due: ${task.taskDueDate}`;
    cardProject.textContent = `Project: ${task.taskProject}`;

    cardEditIcon.setAttribute("data-bs-target", "#exampleModalCenter");
    cardEditIcon.setAttribute("data-bs-toggle", "modal");

    cardEditIcon.addEventListener("click", () => {
      let titleInput = document.getElementById("titleInput");
      let descriptionInput = document.getElementById("descriptionInput");
      let dateInput = document.getElementById("dateInput");
      let projectInput = document.getElementById("projectInput");
      let saveToDoBtn = document.getElementById("saveToDo");

      titleInput.value = task.taskTitle;
      descriptionInput.value = task.taskDescription;
      dateInput.value = task.taskDueDate;
      projectInput.value = task.taskProject;

      saveToDoBtn.addEventListener(
        "click",
        () => {
          cardTitle.textContent = titleInput.value;
          cardText.textContent = descriptionInput.value;
          cardDueDate.textContent = `Due: ${dateInput.value}`;
          cardProject.textContent = `Project: ${projectInput.value}`;
          task.edit(
            titleInput.value,
            descriptionInput.value,
            dateInput.value,
            projectInput.value
          );
        },
        { once: true }
      );
    });

    cardDeleteIcon.addEventListener("click", () => {
      task.delete(projects);
      taskContainer.innerHTML = "";
      this.renderAllTasks(projects, currentProject);
      console.log(projects);
    });

    cardCheckbox.addEventListener("click", () => {
      task.taskDone = !task.taskDone;
    });
    target.appendChild(card);
  }
  renderAllProjects(projects) {
    for (const project of projects) {
      this.renderProject(project, projectList);
    }
  }
  renderAllTasks(projects, currentProject) {
    if (currentProject === "none") {
      for (const project of projects) {
        for (const task of project.projectTasks) {
          this.renderTask(task, taskContainer, projects, currentProject);
        }
      }
    } else {
      const targetProject = projects.find(
        (proj) => proj.projectName === currentProject
      );
      for (const task of targetProject.projectTasks) {
        this.renderTask(task, taskContainer);
      }
    }
  }
}
