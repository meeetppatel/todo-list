import { projectevents, createProject } from "./projectcontrol";
import { createTask } from "./taskcontrol";
import { taskevents } from "./taskcontrol";
import { displayProject , displayTask, getProjects , projectList, allTask } from "./displaycontrol";


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('projects')){
      console.log('projects found in local storage');
      projectList = JSON.parse(localStorage.getItem('projects'));
    }else{
        const defaultproject = createProject(0, 'default');
        projectList.push(defaultproject);
        getProjects(projectList)
    }
    console.log('DOM fully loaded and parsed');
});
projectevents();
taskevents();
getProjects(projectList);
allTask();
