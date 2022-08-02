
const updateStorage = (projectList) => {
    localStorage.setItem("projects", JSON.stringify(projectList));
}

export{updateStorage};