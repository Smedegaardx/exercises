let toDoArray = [];
const listField = document.querySelector("#listField");
const doneListField = document.querySelector("#doneListField");
const addBtn = document.querySelector("#addButton");
const amountBtn = document.querySelector("#amountButton");
const timeBtn = document.querySelector("#timeButton");
const newTaskText = document.querySelector("#newTaskText");
const newTaskAmount = document.querySelector("#newTaskAmount");
const newTaskTime = document.querySelector("#newTaskTime");

addBtn.addEventListener("click", addTask);
amountBtn.addEventListener("click", () => {newTaskAmount.classList.remove("hidden");
  amountBtn.classList.add("hidden")
});
timeBtn.addEventListener("click", () => {newTaskTime.classList.remove("hidden");
  timeBtn.classList.add("hidden")
});


// Tager localstorage og viser listen, efter siden er loadet

window.addEventListener("DOMContentLoaded", () => {retrievedString = localStorage.getItem("tasks");
retrievedArray = JSON.parse(retrievedString);
if(retrievedArray != null){
toDoArray = retrievedArray
displayTasks()}
})

function addTask() {
  const toDoObj = { text: newTaskText.value, amount: newTaskAmount.value, time: newTaskTime.value, done: false, id: self.crypto.randomUUID() };
  toDoArray.push(toDoObj);
  // Reset input fields
  newTaskText.value = "";
  newTaskAmount.value = "";
  newTaskTime.value = "";
  console.log(toDoArray);
  displayTasks();
  newTaskTime.classList.add("hidden");
  timeBtn.classList.remove("hidden")
  newTaskAmount.classList.add("hidden");
  amountBtn.classList.remove("hidden")
}

function displayTasks() {
  listField.innerHTML = "";
  doneListField.innerHTML = "";
  toDoArray.forEach((item) =>  { if (item.done == false){
    listField.innerHTML += `<li class="listItem">
        <div class="listItemDesc">
          <input type="checkbox" class="checkbox" data-id="${item.id}" />
          <p class="listItemText">${item.text}</p>
          <p class="listItemAmount">${item.amount ?? ""}</p>
        </div>
        <div class="listEnd">
          <p class="listTime">${item.time ?? ""}</p>
          <a class="menuButton">
          <svg viewBox="0,0 100,100" height="40" width="40" role="img" alt="more" class="menuicon">
            <circle cx="50" cy="15" r="10" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="50" cy="85" r="10" />
          </svg>
          </a>
        </div>
      </li>`;}
      else {doneListField.innerHTML += `<li class="listItem">
        <div class="listItemDesc">
          <input type="checkbox" class="checkbox" checked data-id="${item.id}"/>
          <p class="listItemText">${item.text}</p>
          <p class="listItemAmount">${item.amount ?? ""}</p>
        </div>
        <div class="listEnd">
          <p class="listTime">${item.time ?? ""}</p>
          <a class="menuButton">
          <svg viewBox="0,0 100,100" height="40" width="40" role="img" alt="more" class="menuicon">
            <circle cx="50" cy="15" r="10" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="50" cy="85" r="10" />
          </svg>
          </a>
        </div>
      </li>`;}
  });

  // Sæt eventlistener på hver checkbox som bliver skabt fra arrayet
checkboxes = document.querySelectorAll('.checkbox')
checkboxes.forEach((box) => {
  box.addEventListener("click", (evt) => {
    moveTask(evt)
  });
});
// Sæt eventlistener på hver menuknap som bliver skabt fra arrayet
buttons = document.querySelectorAll('.menuButton')
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    openMenu()
  });
});
  // Gemmer array i localstorage, ved at gøre det til JSON
string = JSON.stringify(toDoArray)
localStorage.setItem("tasks", string)
}

// Rykker en task fra to-do til done hvis der klikkes på dens checkbox
function moveTask(evt){
thisItem = toDoArray.find(item => item.id == evt.target.dataset.id)
if(thisItem.done == false){ thisItem.done = true}
else if(thisItem.done == true){thisItem.done = false}
  displayTasks()
}

function openMenu() {
  console.log("Menu");
}
