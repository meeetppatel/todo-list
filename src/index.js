import { projectevents } from "./projectcontrol";
import { taskevents } from "./taskcontrol";
import { displayProject , displayTask, getProjects , projectList, allTask} from "./displaycontrol";


projectevents();
taskevents();
getProjects(projectList);
allTask();

// displayProject("hello",22);
// displayTask("hello", "details", "2022-08-07", 0, false);
