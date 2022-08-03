import { updateStorage } from "./storage";

let projectList = [];

const formDisplay = () => {
  const projectform = document.getElementById("projectForm");
  const taskform = document.getElementById("taskForm");
  const hideprojectForm = () => {
    projectform.classList.add("hidden");
  };
  const hidetaskForm = () => {
    taskform.classList.add("hidden");
  };
  const showprojectForm = () => {
    projectform.classList.remove("hidden");
    projectform.reset();
  };
  const showtaskForm = () => {
    taskform.classList.remove("hidden");
    taskform.reset();
  };
  return { hideprojectForm, hidetaskForm, showprojectForm, showtaskForm };
};

const displaycontrollers = (projects) => {
  let storage = updateStorage(projects);
};

const displayProject = (projectName, id) => {
  const projectList = document.querySelector(".project-list");

  const project = document.createElement("div");
  project.classList.add("project");
  project.id = "projectTitle";
  project.innerHTML = `<i class="fas fa-tasks"></i>${projectName}`;

  const deletebtn = document.createElement("button");
  deletebtn.id = "deletebtn";
  deletebtn.classList.add("project-delbtn");
  deletebtn.classList.add("fas");
  deletebtn.classList.add("fa-times");

  project.dataset.id = id;
  deletebtn.dataset.id = id;

  project.appendChild(deletebtn);
  projectList.appendChild(project);
};
const deleteProject = (e) => {
  let tile = e.target.getAttribute("data-id");
  // const tile = document.querySelector(`[data-project="${index}"]`);

  // if (tile.classList.contains("selected")) {
  //   //if the tile you want to delete is selected always select the today tile after and update
  //   const today = document.querySelector("#today");
  //   const nameNode = today.querySelector("[data-name]");
  //   today.classList.add("selected");
  //   updateTitle(nameNode);
  // }

  // revertOptionLocation(e); //when delete a tile, move option div back to under project for stand by
  // tile.remove();
  // sortArray();
  projectList.splice(tile, 1);
  // saveToLocalStorage();
};

const displayTask = (title, details, date, taskID, checkbox) => {

  const tasks = document.querySelector(".tasks");

  const taskdiv = document.createElement("div");
  taskdiv.classList.add("task");

  const checkBox = document.createElement("div");
  checkBox.classList.add("checkbox");
  const check = document.createElement("input");
  check.id = "check";
  check.type= "checkbox";
  check.checked = checkbox;
  checkBox.appendChild(check);

  const taskdetails = document.createElement("div");
  taskdetails.classList.add("task-info");
  
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = title;

  const info = document.createElement("div");
  info.classList.add("task-details");
  info.textContent = details;

  taskdetails.appendChild(taskTitle);
  taskdetails.appendChild(info);

  const end = document.createElement("div");
  end.classList.add("task-end");

  const taskDate = document.createElement("input");
  taskDate.id = "task-date";
  taskDate.type = "date";
  taskDate.value = date;
  taskDate.readOnly = true;
  
  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.id = "deleteTask";
  deleteTaskBtn.classList.add("fas");
  deleteTaskBtn.classList.add("fa-times");

  end.appendChild(taskDate);
  end.appendChild(deleteTaskBtn);


  taskdiv.dataset.task = taskID;

  taskdiv.appendChild(checkBox);
  taskdiv.appendChild(taskdetails);
  taskdiv.appendChild(end);


  tasks.appendChild(taskdiv);
};

export { formDisplay, displayProject, deleteProject, projectList, displayTask };
