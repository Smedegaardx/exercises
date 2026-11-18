let toDoArray = [];
const listField = document.querySelector("#listField");
const doneListField = document.querySelector("#doneListField");
let draggedElement = null;
let draggedItemId = null;

// buttons
const addBtn = document.querySelector("#addButton");
const amountBtn = document.querySelector("#amountButton");
const timeBtn = document.querySelector("#timeButton");
const closeBtn = document.querySelector("#closePopup");
const editBtn = document.querySelector("#editBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const updateBtn = document.querySelector("#updateBtn");

// Textfields
const newTaskText = document.querySelector("#newTaskText");
const newTaskAmount = document.querySelector("#newTaskAmount");
const newTaskTime = document.querySelector("#newTaskTime");
const editTaskText = document.querySelector("#editTaskText");
const editTaskAmount = document.querySelector("#editTaskAmount");
const editTaskTime = document.querySelector("#editTaskTime");

const popup = document.querySelector("#popupContainer");

addBtn.addEventListener("click", addTask);
closeBtn.addEventListener("click", closeMenu);
deleteBtn.addEventListener("click", deleteTask);
editBtn.addEventListener("click", openEdit);
updateBtn.addEventListener("click", updateTask);

amountBtn.addEventListener("click", () => {
  newTaskAmount.classList.remove("hidden");
  amountBtn.classList.add("hidden");
});
timeBtn.addEventListener("click", () => {
  newTaskTime.classList.remove("hidden");
  timeBtn.classList.add("hidden");
});

// Lader brugeren trykke enter for at tilføje en ny task
newTaskText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

// Tager localstorage og viser listen, efter siden er loadet

window.addEventListener("DOMContentLoaded", () => {
  retrievedString = localStorage.getItem("tasks");
  retrievedArray = JSON.parse(retrievedString);
  if (retrievedArray != null && retrievedString != "[]") {
    toDoArray = retrievedArray;
    displayTasks();
  }
});

function addTask() {
  if (newTaskText.value != "") {
    const toDoObj = {
      text: newTaskText.value,
      amount: newTaskAmount.value,
      time: newTaskTime.value,
      done: false,
      id: self.crypto.randomUUID(),
    };
    toDoArray.push(toDoObj);
    displayTasks();
    checkHeadings();
    // Reset input fields
    newTaskText.value = "";
    newTaskAmount.value = "";
    newTaskTime.value = "";
    newTaskTime.classList.add("hidden");
    timeBtn.classList.remove("hidden");
    newTaskAmount.classList.add("hidden");
    amountBtn.classList.remove("hidden");
  }
}

function checkHeadings() {
  if (toDoArray.some((item) => item.done == false)) {
    document.querySelector("#h2_1").classList.remove("hidden");
  } else {
    document.querySelector("#h2_1").classList.add("hidden");
  }

  if (toDoArray.some((item) => item.done == true)) {
    document.querySelector("#h2_2").classList.remove("hidden");
  } else {
    document.querySelector("#h2_2").classList.add("hidden");
  }
}

function displayTasks() {
  listField.innerHTML = "";
  doneListField.innerHTML = "";
  toDoArray.forEach((item) => {
    if (item.done == false) {
      listField.innerHTML += `<li class="listItem" draggable="true" data-id="${item.id}">
        <div class="listItemDesc">
          <input type="checkbox" class="checkbox" data-id="${item.id}" />
          <p class="listItemText">${item.text}</p>
          <p class="listItemAmount">${item.amount ?? ""}</p>
        </div>
        <div class="listEnd">
          <p class="listTime">${item.time ?? ""}</p>
          <a class="menuButton" data-id="${item.id}">
          <svg viewBox="0,0 100,100" height="40" width="40" role="img" alt="more" class="menuicon">
            <circle cx="50" cy="15" r="10" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="50" cy="85" r="10" />
          </svg>
          </a>
        </div>
      </li>`;
    } else {
      doneListField.innerHTML += `<li class="listItem" draggable="true" data-id="${item.id}">
        <div class="listItemDesc">
          <input type="checkbox" class="checkbox" checked data-id="${item.id}"/>
          <p class="listItemText">${item.text}</p>
          <p class="listItemAmount">${item.amount ?? ""}</p>
        </div>
        <div class="listEnd">
          <p class="listTime">${item.time ?? ""}</p>
          <a class="menuButton" data-id="${item.id}">
          <svg viewBox="0,0 100,100" height="40" width="40" role="img" alt="more" class="menuicon">
            <circle cx="50" cy="15" r="10" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="50" cy="85" r="10" />
          </svg>
          </a>
        </div>
      </li>`;
    }
  });
  checkHeadings();

  // Sæt eventlistener på hver checkbox som bliver skabt fra arrayet
  checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
      moveTask(evt);
    });
  });
  // Sæt eventlistener på hver menuknap som bliver skabt fra arrayet
  buttons = document.querySelectorAll(".menuButton");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
      openMenu(evt);
    });
  });
  // Gemmer array i localstorage, ved at gøre det til JSON
  string = JSON.stringify(toDoArray);
  localStorage.setItem("tasks", string);
  enableDragAndDrop();
}

// Rykker en task fra to-do til done hvis der klikkes på dens checkbox
function moveTask(evt) {
  thisItem = toDoArray.find((item) => item.id == evt.target.dataset.id);
  if (thisItem.done == false) {
    thisItem.done = true;
  } else if (thisItem.done == true) {
    thisItem.done = false;
  }
  displayTasks();
}

function openMenu(evt) {
  popup.classList.remove("hidden");
  deleteBtn.dataset.id = evt.currentTarget.dataset.id;
  updateBtn.dataset.id = evt.currentTarget.dataset.id;
}

function closeMenu() {
  popup.classList.add("hidden");
  editBtn.classList.remove("hidden");
  editTaskText.classList.add("hidden");
  editTaskAmount.classList.add("hidden");
  editTaskTime.classList.add("hidden");
  updateBtn.classList.add("hidden");
}

// Sletter den task hvis popup er åben
function deleteTask(evt) {
  itemIndex = toDoArray.findIndex((item) => item.id == evt.target.dataset.id);
  toDoArray.splice(itemIndex, 1);
  displayTasks();
  closeMenu();
}

function openEdit() {
  editBtn.classList.add("hidden");
  editTaskText.classList.remove("hidden");
  editTaskAmount.classList.remove("hidden");
  editTaskTime.classList.remove("hidden");
  updateBtn.classList.remove("hidden");
}

// Replacer den task hvis popup er åben med ny task
function updateTask(evt) {
  item = toDoArray.find((item) => item.id == evt.target.dataset.id);
  const toDoObj = {
    text: editTaskText.value,
    amount: editTaskAmount.value,
    time: editTaskTime.value,
    done: false,
    id: evt.target.dataset.id,
  };
  toDoArray.push(toDoObj);
  itemIndex = toDoArray.findIndex((item) => item.id == evt.target.dataset.id);
  toDoArray.splice(itemIndex, 1);
  displayTasks();
  closeMenu();
}

function enableDragAndDrop() {
  const listItems = document.querySelectorAll(".listItem");

  listItems.forEach((li) => {
    // When dragging starts
    li.addEventListener("dragstart", (evt) => {
      draggedElement = li;
      draggedItemId = li.dataset.id;

      li.classList.add("dragging");
      evt.dataTransfer.effectAllowed = "move";
    });

    // When dragging ends
    li.addEventListener("dragend", () => {
      li.classList.remove("dragging");
      draggedElement = null;
      draggedItemId = null;
    });

    // When dragging over another item
    li.addEventListener("dragover", (evt) => {
      evt.preventDefault();

      if (!draggedElement || draggedElement === li) return;

      // Only allow reordering within the same list
      if (draggedElement.parentElement !== li.parentElement) return;

      const rect = li.getBoundingClientRect();
      const middle = rect.top + rect.height / 2;

      if (evt.clientY < middle) {
        li.parentElement.insertBefore(draggedElement, li);
      } else {
        li.parentElement.insertBefore(draggedElement, li.nextSibling);
      }
    });

    // When dropping the item
    li.addEventListener("drop", (evt) => {
      evt.preventDefault();

      if (!draggedElement) return;

      const list = draggedElement.parentElement;
      const isDoneList = list === doneListField;

      // Get the new order from the HTML
      const orderedIds = Array.from(list.children).map(
        (item) => item.dataset.id,
      );

      // Get the tasks in their new order
      const orderedTasks = orderedIds.map((id) =>
        toDoArray.find((item) => item.id === id),
      );

      // Replace the corresponding tasks in the array
      let index = 0;

      toDoArray = toDoArray.map((item) => {
        if (item.done === isDoneList) {
          return orderedTasks[index++];
        }
        return item;
      });

      // Save the new order
      displayTasks();
    });
  });
}
