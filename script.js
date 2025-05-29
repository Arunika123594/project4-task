const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = taskText;
  inputEdit.style.display = "none";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "save";
  saveBtn.style.display = "none";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";

  editBtn.addEventListener("click", () => {
    taskSpan.style.display = "none";
    inputEdit.style.display = "inline-block";
    saveBtn.style.display = "inline-block";
    editBtn.style.display = "none";
  });

  saveBtn.addEventListener("click", () => {
    taskSpan.textContent = inputEdit.value;
    taskSpan.style.display = "inline";
    inputEdit.style.display = "none";
    saveBtn.style.display = "none";
    editBtn.style.display = "inline-block";
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(inputEdit);
  li.appendChild(saveBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
