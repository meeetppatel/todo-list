import { formDisplay, displayTask } from "./displaycontrol";
import { updateStorage } from "./storage";
import { projectList } from "./displaycontrol";

const taskevents = () => {
  const addtaskBtn = document.getElementById("addtask");
  addtaskBtn.addEventListener("click", formDisplay().showtaskForm);

  const cancelBtn = document.getElementById("taskcancelbtn");
  cancelBtn.addEventListener("click", formDisplay().hidetaskForm);

  const submitBtn = document.getElementById("tasksubmitbtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskFormInput();
    formDisplay().hidetaskForm();
    // console.log(projectArray);
    // addProjectToArray();
  });
};

const createTask = (title, details, date, id, projectID, checkbox) => {
  const changecheckboxstatus = () => {
    this.checkbox != this.checkbox;
  };
  return {
    checkbox: checkbox,
    title,
    details,
    date,
    id,
    projectID,
    changecheckboxstatus,
  };
};

const taskFormInput = () => {
  const title = document.getElementById("listInput").value;
  const details = document.getElementById("listInputDetail").value;
  const date = document.getElementById("listInputDate").value;
  const dataId = getDataID();
  const taskID = newTaskID();
  let checkbox = false;

  const newtask = createTask(title, details, date, taskID, dataId, false);

  console.log(newtask);

  projectList[dataId].taskList.push(newtask);
  // updateStorage(projectList);
  displayTask(title, details, date, taskID, checkbox);
};



const getDataID = () => {
  const selectedProject = document.querySelector(".selected");
  // console.log(selectedProject.dataset.project);
  return selectedProject.dataset.project;
};

const newTaskID = () => {
  let id = projectList[getDataID()].taskList.length;
  console.log(id);
  return id;
};

export { taskevents };
