const STORAGE_KEY = "todo-task-manager.tasks";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");

const readTasks = () => {
  const savedTasks = localStorage.getItem(STORAGE_KEY);
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const renderTasks = () => {
  const tasks = readTasks();
  list.innerHTML = "";

  if (!tasks.length) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    const taskLabel = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskLabel.textContent = task;
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.dataset.index = index;
    deleteBtn.type = "button";

    item.appendChild(taskLabel);
    item.appendChild(deleteBtn);
    list.appendChild(item);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value.trim();

  if (!task) {
    return;
  }

  const tasks = readTasks();
  tasks.push(task);
  saveTasks(tasks);
  input.value = "";
  renderTasks();
});

list.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement) || !target.dataset.index) {
    return;
  }

  const tasks = readTasks();
  tasks.splice(Number(target.dataset.index), 1);
  saveTasks(tasks);
  renderTasks();
});

renderTasks();
