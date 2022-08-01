import { formDisplay } from "./displaycontrol";


const projectevents = () => {
    const addProjectBtn = document.getElementById("addproject");
    addProjectBtn.addEventListener("click", formDisplay().showprojectForm);

    const cancelBtn = document.getElementById("projectcancelbtn");
    cancelBtn.addEventListener("click", formDisplay().hideprojectForm);

    const submitBtn = document.getElementById("projectsubmitbtn");
    submitBtn.addEventListener("click", (e) => {
        // e.preventDefault();

        // console.log(projectArray);
        // addProjectToArray();
    });
}


export {projectevents}