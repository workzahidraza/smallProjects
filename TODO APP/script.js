// const input = document.querySelector(" #input");
// const addBtn = document.querySelector(" #addBtn");
// const taskList = document.querySelector(" .taskList");
// // let deleteTask = document.querySelector(" #closeBtn");

// function addTask() {
//   addBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     let userValue = input.value.trim();
//     if (userValue === "") {
//       alert("please write something");
//     } else {
//       let task = document.createElement("li");
//       task.classList.add("task");
//       task.innerHTML = `<i class="ri-circle-line checkBtn"></i>
//               <h3>${userValue}</h3>
//               <i  class="ri-close-line closeBtn"></i>`;
//       taskList.appendChild(task);
//       input.value = "";
//     }
//   });
// }
// addTask();

// function removeTask() {
//   taskList.addEventListener("click", (e) => {
//     if (e.target.classList.contains("closeBtn")) {
//       e.target.parentElement.remove();
//     }
//   });
// }
// removeTask();

// taskList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("checkBtn")) {
//     const task = e.target.parentElement; // li.task
//     const h3 = task.querySelector("h3");
//     h3.style.textDecoration = "line-through";
//     // h3.classList.toggle("completed");
//   }
// });
let userInput = document.querySelector("form #input");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector(".taskList");

// console.log(userInput, addBtn, taskList);
function saveTasks() {
  localStorage.setItem("task", taskList.innerHTML);
}

function loadTask() {
  let saved = localStorage.getItem("task");
  if (saved) {
    taskList.innerHTML = saved;
  }
}
function addtask() {
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userInput.value === "") {
      alert("write something");
    } else {
      let task = document.createElement("li");

      task.innerHTML = `
       <i class="ri-circle-line checkBtn"></i>
              <h3>${userInput.value}</h3>
              <i class="ri-close-line closeBtn"></i>
      `;
      task.classList.add("task");

      taskList.appendChild(task);
      saveTasks();
      userInput.value = "";
    }
  });
}
addtask();

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeBtn")) {
    e.target.parentElement.remove();
    saveTasks();
  }

  if (e.target.classList.contains("checkBtn")) {
    const task = e.target.closest("li");
    const h3 = task.querySelector("h3");
    h3.style.textDecoration = "line-through";
    saveTasks();
  }

  // if (e.target.classList.contains("checkBtn")) {
  //   e.target.parentElement.classList.toggle("completed");
  // }
});
