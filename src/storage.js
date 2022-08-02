
const updateStorage = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
}

export{updateStorage};