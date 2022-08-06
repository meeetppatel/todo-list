import { projectevents } from "./projectcontrol";
import { taskevents } from "./taskcontrol";
import { displayProject , displayTask, getProjects , projectList, allTask} from "./displaycontrol";


projectevents();
taskevents();
getProjects(projectList);
allTask();