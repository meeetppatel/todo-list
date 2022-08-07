import { updateStorage } from "./storage";

let projectList = [];

if (localStorage.getItem('projects')){
  console.log('projects found in local storage');
  projectList = JSON.parse(localStorage.getItem('projects'));
}else{
  let defaultproject = createProject("0", "default1");
  projectList.push(defaultproject);
  getProjects(projectList);
}

const formDisplay = () => {
  const projectform = document.getElementById("projectForm");
  const taskform = document.getElementById("taskForm");
  const addtaskBtn = document.getElementById("addtask");
  const delbtn = document.querySelectorAll(".deltask");
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
  const hideaddtaskbtn = () => {
    addtaskBtn.classList.add("hidden");
    delbtn.forEach(btn =>{
      btn.classList.add("hidden");
    })
  };
  const showaddtaskbtn = () => {
    addtaskBtn.classList.remove("hidden");
    delbtn.forEach(btn =>{
      btn.classList.remove("hidden");
    })
  };
  return {
    hideprojectForm,
    hidetaskForm,
    showprojectForm,
    showtaskForm,
    showaddtaskbtn,
    hideaddtaskbtn,
  };
};

const allTask = () => {
  clearContent();
  projectList.forEach((project) => {
    project.taskList.forEach((task) => {
      displayTask(task.title, task.details, task.date, task.id, task.checkbox);
    });
  });
};

const displayProject = (projectName, id) => {
  const projectList = document.querySelector(".project-list");

  const project = document.createElement("div");
  project.setAttribute("data-project", `${id}`);
  project.classList.add("project");
  project.id = "projectTitle";
  project.innerHTML = `<i class="fas fa-tasks"></i>${projectName}`;

  const deletebtn = document.createElement("button");
  deletebtn.id = "deletebtn";
  deletebtn.classList.add("project-delbtn");
  deletebtn.classList.add("fas");
  deletebtn.classList.add("fa-times");

  project.dataset.id = id;
  console.log(id);

  deletebtn.dataset.id = id;

  project.appendChild(deletebtn);
  projectList.appendChild(project);
};

const displayTask = (title, details, date, taskID, checkbox) => {
  const tasks = document.querySelector(".tasks");

  const taskdiv = document.createElement("div");
  taskdiv.classList.add("task");

  const checkBox = document.createElement("div");
  checkBox.classList.add("checkbox");
  const check = document.createElement("input");
  check.id = "check";
  check.type = "checkbox";
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
  deleteTaskBtn.classList.add("deltask");
  deleteTaskBtn.classList.add("fas");
  deleteTaskBtn.classList.add("fa-times");

  end.appendChild(taskDate);
  end.appendChild(deleteTaskBtn);

  taskdiv.dataset.task = taskID;
  console.log(taskID);

  taskdiv.appendChild(checkBox);
  taskdiv.appendChild(taskdetails);
  taskdiv.appendChild(end);

  tasks.appendChild(taskdiv);
}; 

const clearContent = () => {
  document.querySelector(".tasks").innerHTML = "";
};

const getTask = (data) => {
  clearContent();
  projectList[data].taskList.forEach((task) => {
    displayTask(task.title, task.details, task.date, task.id, task.checkbox);
  });
};

const getProjects = (projects) => {
  document.querySelector(".project-list").replaceChildren();
  projects.forEach((project) => {
    if (project != null) {
      displayProject(project.name, project.dataProject);
    }
  });
};

const updateHeader = (title) => {
  const header = document.getElementById("top-text");
  header.textContent = title;
};

const deleteProject = (id) => {
  projectList.splice(id, 1);
  sortArray();
  getProjects(projectList);
};

const deleteTask = (projectid, taskid) => {
  projectList[projectid].taskList.splice(taskid, 1);
  sorttasks(projectid);
  updateStorage(projectList);
  getTask(projectid);
};
const sortArray = () => {
  let i = 0;
  projectList.forEach((project) => {
    project.dataProject = i;
    i++;
  });
  projectList.sort((a, b) => a.dataProject - b.dataProject);
  updateStorage(projectList);
};

const sorttasks = (projectid) => {
  let i = 0;
  projectList[projectid].taskList.forEach((task) => {
    task.id = i;
    i++;
  });
  projectList[projectid].taskList.sort((a, b) => a.id - b.id);
  updateStorage(projectList);

};

const checkboxupdate = (projectid, taskid) => {
  projectList[projectid].taskList.forEach((task) => {
    if (task.id == taskid) {
      if (task.checkbox === false) {
        task.checkbox = true;
      //  task.classList.add('checked');
      } else {
        task.checkbox = false;
        // task.classList.remove('checked');
      }
    }
    console.log(task.checkbox);
  });
  updateStorage(projectList);
  getTask(projectid);
};


export {
  formDisplay,
  displayProject,
  checkboxupdate,
  deleteProject,
  projectList,
  displayTask,
  getTask,
  getProjects,
  updateHeader,
  clearContent,
  allTask,
  deleteTask,
};
