import { formDisplay } from "./displaycontrol";


const taskevents = () => {
    const addtaskBtn = document.getElementById("addtask");
    addtaskBtn.addEventListener("click", formDisplay().showtaskForm);

    const cancelBtn = document.getElementById("taskcancelbtn");
    cancelBtn.addEventListener("click", formDisplay().hidetaskForm);

    const submitBtn = document.getElementById("tasksubmitbtn");
    submitBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        // console.log(projectArray);
        // addProjectToArray();
    });
}
export {taskevents}

