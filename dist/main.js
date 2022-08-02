/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList),
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
        // e.preventDefault();
        projectFormInput(e);
        // console.log(projectArray);
        // addProjectToArray();
    });
}

// create project
const createProject = (dataProject, name) => {
    const taskList = [];
    const taskNum = taskList.length;
    return{
        dataProject,
        name,
        taskList,
        taskNum
    }
}

let projectList = [];
// let projectList = localStorage.getItem("projects");
// projectList = JSON.parse(projectList || JSON.stringify(defaultList));

const projectFormInput = (e) => {
    let projectName = document.getElementById("projectInput").value;
    let dataProject = nextDataId();
    const newProject = createProject(dataProject,projectName);

    projectList.push(newProject);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(projectList);
    (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.displayProject)(projectName, dataProject);
    e.preventDefault();


    const deleteProjectBtn = document.querySelector("#deletebtn");
    deleteProjectBtn.addEventListener("click", (e) => {
        (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(e);
    });
}

const nextDataId = () => {
    const allprojects = document.querySelectorAll("[data-project]");
    return allprojects.length;
};






/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "formDisplay": () => (/* binding */ formDisplay)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _projectcontrol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



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
  _projectcontrol__WEBPACK_IMPORTED_MODULE_1__.projectList.splice(tile, 1);
  // saveToLocalStorage();
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



const taskevents = () => {
    const addtaskBtn = document.getElementById("addtask");
    addtaskBtn.addEventListener("click", (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().showtaskForm);

    const cancelBtn = document.getElementById("taskcancelbtn");
    cancelBtn.addEventListener("click", (0,_displaycontrol__WEBPACK_IMPORTED_MODULE_0__.formDisplay)().hidetaskForm);

    const submitBtn = document.getElementById("tasksubmitbtn");
    submitBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        // console.log(projectArray);
        // addProjectToArray();
    });
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

// displayProject("hello",22);

})();

/******/ })()
;