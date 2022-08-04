import { formDisplay, displayProject, deleteProject } from "./displaycontrol";
import { updateStorage } from "./storage";
import { projectList } from "./displaycontrol";


const projectevents = () => {
    const addProjectBtn = document.getElementById("addproject");
    addProjectBtn.addEventListener("click", formDisplay().showprojectForm);

    const cancelBtn = document.getElementById("projectcancelbtn");
    cancelBtn.addEventListener("click", formDisplay().hideprojectForm);

    const submitBtn = document.getElementById("projectsubmitbtn");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        projectFormInput(e);
        // console.log(projectArray);
        // addProjectToArray();
    });
}

// create project
const createProject = (dataProject, name) => {
    let taskList = [];
    const taskNum = taskList.length;
    return{
        dataProject,
        name,
        taskList,
        taskNum
    }
}


const projectFormInput = () => {
    let projectName = document.getElementById("projectInput").value;
    let dataProject = nextDataId();
    const newProject = createProject(dataProject,projectName);

    projectList.push(newProject);
    // updateStorage(projectList);
    displayProject(projectName, dataProject);
    formDisplay().hideprojectForm(); 

    // e.preventDefault();



    // const deleteProjectBtn = document.querySelector("#deletebtn");
    // deleteProjectBtn.addEventListener("click", (e) => {
    //     deleteProject(e);
    // });
}

const nextDataId = () => {
    const allprojects = document.querySelectorAll("[data-project]");
    return allprojects.length;
};



const checkproject = (e) => {
    let check = e.target.id;

    
}





const selectTile = (project) => {
    const selectedTile = document.querySelector(".selected");   
    selectedTile.classList.remove("selected");                  //remove class selected from old tile

    project.classList.add("selected"); 
}


export {projectevents}