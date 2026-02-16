let toDoArray = [];
const listField = document.querySelector("#listField");
const addBtn = document.querySelector("#addButton");
const newTaskText = document.querySelector("#newTaskText");
const newTaskAmount = document.querySelector("#newTaskAmount");
const newTaskTime = document.querySelector("#newTaskTime");
const taskMenu = document.querySelector("svg");

addBtn.addEventListener("click", addTask);

function addTask() {
  const toDoObj = { text: newTaskText.value, amount: newTaskAmount.value, time: newTaskTime.value, done: false, id: self.crypto.randomUUID() };
  toDoArray.push(toDoObj);
  newTaskText.value = "";
  newTaskAmount.value = "";
  newTaskTime.value = "";
  console.log(toDoArray);
  displayTasks();
}

function displayTasks() {
  listField.innerHTML = "";
  toDoArray.forEach((item) => {
    listField.innerHTML += `<li class="listItem">
        <div class="listItemDesc">
          <input type="checkbox" />
          <p class="listItemText">${item.text}</p>
          <p class="listItemAmount">${item.amount ?? ""}</p>
        </div>
        <div class="listEnd">
          <p class="listTime">${item.time ?? ""}</p>
          <svg viewBox="0,0 100,100" height="40" width="40" role="img" alt="more" class="menuicon">
            <circle cx="50" cy="15" r="10" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="50" cy="85" r="10" />
          </svg>
        </div>
      </li>`;
  });
}

function openMenu() {
  console.log("Menu");
}
