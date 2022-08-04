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
    // console.log(projectArray);
    // addProjectToArray();
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
  // updateStorage(projectList);
  (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.displayProject)(projectName, dataProject);
  (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hideprojectForm();

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
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.updateHeader)(e.target.textContent);
    console.log(e.target.getAttribute("data-project"))
    ;(0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.getTask)(e.target.getAttribute("data-project"));
  }
  if (check === "inbox") {
    selectTile(e.target);
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.allTask)();
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.updateHeader)(e.target.textContent);
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hidetaskForm();
  }
  // if(check === "deleteButton"){
  //     deleteProject(e.target.getAttribute("data-id"));
  // }
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
/* harmony export */   "clearContent": () => (/* binding */ clearContent),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
/* harmony export */   "formDisplay": () => (/* binding */ formDisplay),
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "updateHeader": () => (/* binding */ updateHeader)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


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
  let storage = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(projects);
};

const allTask = () => {
  clearContent();
  projectList.forEach((project) => {
    project.taskList.forEach((task) => {
      displayTask(
        task.title,
        task.details,
        task.date,
        task.id,
        task.checkbox
      );
    });
  });

  // deleteBtnDisable();
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
  console.log(id)

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
  console.log(taskID);

  taskdiv.appendChild(checkBox);
  taskdiv.appendChild(taskdetails);
  taskdiv.appendChild(end);


  tasks.appendChild(taskdiv);
};

const clearContent = () => {
  document.querySelector(".tasks").innerHTML="";
}

const getTask = (data) => {
  console.log(" displayTask is called");
  clearContent();

  projectList[data].taskList.forEach((task) => {
    displayTask(
      task.title,
      task.details,
      task.date,
      task.id,
      task.checkbox
    );
  });
};
const updateHeader = (title) => {
  const header = document.getElementById("top-text");
  header.textContent = title;
}




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
    // console.log(projectArray);
    // addProjectToArray();
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
  // updateStorage(projectList);
  (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.displayTask)(title, details, date, taskID, checkbox);
};



const getDataID = () => {
  const selectedProject = document.querySelector(".selected");
  // console.log(selectedProject.dataset.project);
  return selectedProject.dataset.project;
};

const newTaskID = () => {
  let id = _displaycontrol__WEBPACK_IMPORTED_MODULE_0__.projectList[getDataID()].taskList.length;
  console.log(id);
  return id;
};




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

// displayProject("hello",22);
// displayTask("hello", "details", "2022-08-07", 0, false);

})();

/******/ })()
;