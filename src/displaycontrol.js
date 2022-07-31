



const formDisplay = () =>{
    const projectform = document.getElementById("projectForm");
    const taskform = document.getElementById("taskForm");
    const hideprojectForm = () =>{
        projectform.classList.add("hidden");
    }
    const hidetaskForm = () =>{
        taskform.classList.add("hidden");
    }
    const showprojectForm = () =>{
        projectform.classList.remove("hidden");
        projectform.reset();
    }
    const showtaskForm = () =>{
        taskform.classList.remove("hidden");
        taskform.reset();
    }

    return{hideprojectForm,hidetaskForm,showprojectForm,showtaskForm};
}

export {formDisplay}