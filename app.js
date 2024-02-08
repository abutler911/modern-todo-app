document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
  const input = document.getElementById("todo-input");
  const newTodo = input.value.trim();
  if (!newTodo) return;

  const todos = getTodos();
  todos.push(newTodo);
  saveTodos(todos);
  renderTodos();
  input.value = ""; // Clear input field
}

function getTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; // Clear existing todos
  const todos = getTodos();

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}

function loadTodos() {
  renderTodos();
}
