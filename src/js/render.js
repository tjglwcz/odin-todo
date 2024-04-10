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
  }
  renderTask(task, target) {
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

      titleInput.value = task.taskTitle;
      descriptionInput.value = task.taskDescription;
      dateInput.value = task.taskDueDate;
      projectInput.value = task.taskProject;
    });

    cardDeleteIcon.addEventListener("click", () => {
      task.delete(projects);
    });

    target.appendChild(card);
  }
  renderAllProjects(projects) {
    for (const project of projects) {
      this.renderProject(project, projectList);
    }
  }
}
