/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectevents": () => (/* binding */ projectevents)
/* harmony export */ });
/* harmony import */ var _displaycontrol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const projectevents = () => {
  const addProjectBtn = document.getElementById("addproject");
  addProjectBtn.addEventListener("click", (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().showprojectForm);

  const cancelBtn = document.getElementById("projectcancelbtn");
  cancelBtn.addEventListener("click", (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hideprojectForm);

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

  _displaycontrol__WEBPACK_IMPORTED_MODULE_0__.projectList.push(newProject);
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.projectList);
  (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.displayProject)(projectName, dataProject);
  (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hideprojectForm();
};

const nextDataId = () => {
  const allprojects = document.querySelectorAll("[data-project]");
  return allprojects.length;
};

const checkproject = (e) => {
  let check = e.target.id;

  if (check === "projectTitle") {
    selectTile(e.target);
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.updateHeader)(e.target.textContent);
    console.log(e.target.getAttribute("data-project"));
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.getTask)(e.target.getAttribute("data-project"));
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().showaddtaskbtn();
  }
  if (check === "inbox") {
    selectTile(e.target);
    console.log(e.target);
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.allTask)();
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.updateHeader)(e.target.textContent);
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hideaddtaskbtn();
  }
  if (check === "deletebtn") {
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(e.target.dataset.id);
    document.getElementById("inbox").classList.add("selected");
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.updateHeader)("Inbox");
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.allTask)();
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hideaddtaskbtn();
  }
};

const selectTile = (project) => {
  if (document.querySelector(".selected") != null) {
    const oldTile = document.querySelector(".selected");
    oldTile.classList.remove("selected");
  }
  project.classList.add("selected");
};




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTask": () => (/* binding */ allTask),
/* harmony export */   "checkboxupdate": () => (/* binding */ checkboxupdate),
/* harmony export */   "clearContent": () => (/* binding */ clearContent),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
/* harmony export */   "formDisplay": () => (/* binding */ formDisplay),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "updateHeader": () => (/* binding */ updateHeader)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


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
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(projectList);
  getTask(projectid);
};
const sortArray = () => {
  let i = 0;
  projectList.forEach((project) => {
    project.dataProject = i;
    i++;
  });
  projectList.sort((a, b) => a.dataProject - b.dataProject);
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(projectList);
};

const sorttasks = (projectid) => {
  let i = 0;
  projectList[projectid].taskList.forEach((task) => {
    task.id = i;
    i++;
  });
  projectList[projectid].taskList.sort((a, b) => a.id - b.id);
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(projectList);

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
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(projectList);
  getTask(projectid);
};





/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });

const updateStorage = (projectList) => {
    localStorage.setItem("projects", JSON.stringify(projectList));
}



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskevents": () => (/* binding */ taskevents)
/* harmony export */ });
/* harmony import */ var _displaycontrol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);




const taskevents = () => {
  const addtaskBtn = document.getElementById("addtask");
  addtaskBtn.addEventListener("click", (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().showtaskForm);

  const cancelBtn = document.getElementById("taskcancelbtn");
  cancelBtn.addEventListener("click", (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hidetaskForm);

  const submitBtn = document.getElementById("tasksubmitbtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskFormInput();
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hidetaskForm();

  });
  const taskdiv = document.querySelector(".tasks");
  taskdiv.addEventListener("click", (e) => {
    checktasks(e);
  });
};

const createTask = (title, details, date, id, projectID, checkbox) => {
  const changecheckboxstatus = () => {
    undefined.checkbox != undefined.checkbox;
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

  _displaycontrol__WEBPACK_IMPORTED_MODULE_0__.projectList[dataId].taskList.push(newtask);
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.projectList);
  (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.displayTask)(title, details, date, taskID, checkbox);
};

const getDataID = () => {
  const selectedProject = document.querySelector(".selected");
  return selectedProject.dataset.project;
};
const newTaskID = () => {
  let id = _displaycontrol__WEBPACK_IMPORTED_MODULE_0__.projectList[getDataID()].taskList.length;
  console.log(id);
  return id;
};


const checktasks = (e) => {
  console.log(e.target.id)
  if(e.target.id === "deleteTask"){
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(getDataID(), e.target.parentNode.parentNode.getAttribute("data-task"));
  }
  if(e.target.id === "check"){
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.checkboxupdate)(getDataID(), e.target.parentNode.parentNode.getAttribute("data-task"));
  }
}




/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectcontrol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _taskcontrol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _displaycontrol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);





(0,_projectcontrol__WEBPACK_IMPORTED_MODULE_0__.projectevents)();
(0,_taskcontrol__WEBPACK_IMPORTED_MODULE_1__.taskevents)();
(0,_displaycontrol__WEBPACK_IMPORTED_MODULE_2__.getProjects)(_displaycontrol__WEBPACK_IMPORTED_MODULE_2__.projectList);
(0,_displaycontrol__WEBPACK_IMPORTED_MODULE_2__.allTask)();
})();

/******/ })()
;