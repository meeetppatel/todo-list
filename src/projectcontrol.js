import {
  formDisplay,
  displayProject,
  deleteProject,
  getTask,
  updateHeader,
  projectList,
  allTask,
  getProjects
} from "./displaycontrol";
import { updateStorage } from "./storage";

const projectevents = () => {
  const addProjectBtn = document.getElementById("addproject");
  addProjectBtn.addEventListener("click", formDisplay().showprojectForm);

  const cancelBtn = document.getElementById("projectcancelbtn");
  cancelBtn.addEventListener("click", formDisplay().hideprojectForm);

  const submitBtn = document.getElementById("projectsubmitbtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectFormInput(e);
  });

  const projects = document.querySelector(".projects");
  projects.addEventListener("click", (e) => {
    checkproject(e);
  });

  const defaultview = document.querySelector(".top");
  defaultview.addEventListener("click", (e) => {
    checkproject(e);
  });
};

// create project
const createProject = (dataProject, name) => {
  let taskList = [];
  const taskNum = taskList.length;
  return {
    dataProject,
    name,
    taskList,
    taskNum,
  };
};

const projectFormInput = () => {
  let projectName = document.getElementById("projectInput").value;
  let dataProject = nextDataId();
  const newProject = createProject(dataProject, projectName);

  projectList.push(newProject);
  // updateStorage(projectList);
  displayProject(projectName, dataProject);
  formDisplay().hideprojectForm();

  // e.preventDefault();

  // const deleteProjectBtn = document.querySelector("#deletebtn");
  // deleteProjectBtn.addEventListener("click", (e) => {
  //     deleteProject(e);
  // });
};

const nextDataId = () => {
  const allprojects = document.querySelectorAll("[data-project]");
  return allprojects.length;
};

const checkproject = (e) => {
  let check = e.target.id;

  if (check === "projectTitle") {
    selectTile(e.target);
    updateHeader(e.target.textContent);
    console.log(e.target.getAttribute("data-project"))
    getTask(e.target.getAttribute("data-project"));
    formDisplay().showaddtaskbtn();
  }
  if (check === "inbox") {
    selectTile(e.target);
    allTask();
    updateHeader(e.target.textContent);
    formDisplay().hideaddtaskbtn();
  }
  if(check === "deletebtn"){
      deleteProject(e.target.dataset.id);
  }
};

const selectTile = (project) => {
  if (document.querySelector(".selected") != null) {
    const oldTile = document.querySelector(".selected");
    oldTile.classList.remove("selected");
  }
  project.classList.add("selected");
};

export { projectevents };
