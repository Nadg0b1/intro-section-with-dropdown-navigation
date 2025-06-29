// ----- Todos List -----
const form = document.querySelector(".add-new-todo-form");
const todosContainer = document.querySelector(".todos-container");
const numberOfItemsLeft = document.querySelector(".number-of-items-left");
const input = document.querySelector(`[name="new-todo"]`);

let todos = [];
let currentId = 0;

const handleAddNewTodo = (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  // ------- Push ToDo -------
  currentId++;
  todos.push({
    id: currentId,
    text: data.get("new-todo"),
    isCompleted: false,
  });

  console.log(todos);

  // ------- Generate ToDo -------
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo-container");
  newTodo.setAttribute("data-id", currentId);

  newTodo.innerHTML = `
    <button class="mark-todo-as-completed">
        <img src="" />
    </button>
    <p>${data.get("new-todo")}</p>
    <button class="delete-button">
        <img src="./img/icon-cross.svg" />
    </button>
  `;
  todosContainer.appendChild(newTodo);

  console.log(todos);

  // mark as completedd
  const markButton = newTodo.querySelector(".mark-todo-as-completed");
  const handleMarkTodo = (e) => {
    const id = Number(newTodo.getAttribute("data-id"));
    const indexOfCurrentTodo = todos.findIndex((todo) => todo.id === id);

    if (newTodo.classList.contains("completed")) {
      todos[indexOfCurrentTodo].isCompleted = false;
    } else {
      todos[indexOfCurrentTodo].isCompleted = true;
    }
    newTodo.classList.toggle("completed");

    updateNumbersOfItemsLeft();
  };
  markButton.addEventListener("click", handleMarkTodo);

  // delete button
  const deleteButton = newTodo.querySelector(".delete-button");

  //   function scoped
  const handleDeleteTodo = () => {
    const id = Number(newTodo.getAttribute("data-id"));
    const indexOfCurrentTodo = todos.findIndex((todo) => todo.id === id);

    todos.splice(indexOfCurrentTodo, 1);

    todosContainer.removeChild(newTodo);
    updateNumbersOfItemsLeft();
  };

  deleteButton.addEventListener("click", handleDeleteTodo);

  // -----Update number of items ----
  updateNumbersOfItemsLeft();

  // ----- Empty input -----

  input.value = "";
};

form.addEventListener("submit", handleAddNewTodo);
// -----Update number of items ----
const updateNumbersOfItemsLeft = () => {
  const uncompletedItems = todos.filter((todo) => todo.isCompleted === false);

  numberOfItemsLeft.innerText = uncompletedItems.length;
};

// ---------- Filters ----------

const filterButtons = document.querySelectorAll(".filter-button");
const hideAllTodos = () => {
  const allTodos = document.querySelectorAll("todo-container");
};

allTodos.forEach((todo) => {
  todo.classList.add("hide");
});

const activeTodos = document.querySelectorAll
  ".todo-container:not(.completed)"
  activeTodos.forEach((todo) => {
    todo.classList.remove("hide");
  })
};

const handleChangeFilter = (e) => {
  const selectedFilter = document.querySelector(".selected-filter");
  selectedFilter.classList.remove("selected-filter");

  e.target.classList.add("selected-filter");

  if (e.target.value === "active") {
    hideAllTodos;
  }
};

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", handleChangeFilter);
});
