let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");
let editingTask = null;

function onClickCreateTask() {
  if (inputTask.value !== "") {
    if (editingTask) {
      // If editingTask is not null, it means we are editing an existing task
      editingTask.querySelector("span").textContent = inputTask.value;
      createBtn.textContent = "Add Task";
      editingTask = null;
    } else {
      // If editingTask is null, it means we are adding a new task
      let listElement = document.createElement("li");
      let spanElement = document.createElement("span");
      spanElement.textContent = inputTask.value;

      let completeBtn = document.createElement("button");
      completeBtn.innerHTML = "Completed";
      completeBtn.addEventListener("click", onClickComplete);

      let editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.addEventListener("click", onClickEdit);

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener("click", onClickDelete);

      listElement.appendChild(spanElement);
      listElement.appendChild(completeBtn);
      listElement.appendChild(editBtn);
      listElement.appendChild(deleteBtn);
      taskList.appendChild(listElement);
    }

    inputTask.value = "";
  }
}

createBtn.addEventListener("click", onClickCreateTask);

function onClickComplete(event) {
  let listElement = event.target.parentElement;
  listElement.classList.toggle("completed");
}

function onClickDelete(event) {
  let element = event.target.closest("li");
  element.remove(element);
}

function onClickEdit(event) {
  editingTask = event.target.parentElement;
  let spanElement = editingTask.querySelector("span");
  inputTask.value = spanElement.textContent;
  createBtn.textContent = "Edit Task";
}

export { onClickCreateTask };
