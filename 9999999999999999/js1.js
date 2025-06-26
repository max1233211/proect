function getElId(id) {
    return document.getElementById(id)
}

let taskInput = getElId("taskInput")
let addTaskBtn = getElId("addTaskBtn")
let taskList = getElId("taskList")

addTaskBtn.addEventListener("click", function () {
    let task = taskInput.value
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    addTaskToDOM(task)
    taskInput.value=""
})
function addTaskToDOM(task) {
    let listItem = document.createElement("li")
    listItem.innerHTML = task 
    taskList.appendChild(listItem)
}
window.addEventListener("DOMContentLoaded", function (){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    for (let task of tasks ){
        addTaskToDOM(task)
    }
}) 