



const formDisplay = () =>{
    const projectform = document.getElementById("projectForm");
    const taskform = document.getElementById("taskForm");
    const hideprojectForm = () =>{
        projectform.classList.add("hidden");
    }
    const hidetaskForm = () =>{
        task.classList.add("hidden");
    }
    const showprojectForm = () =>{
        projectform.classList.remove("hidden");
        projectform.reset();
    }
    const showtaskForm = () =>{
        taskform.classList.remove("hidden");
        task.reset();
    }

    return{hideprojectForm,hidetaskForm,showprojectForm,showtaskForm};
}

export {formDisplay}