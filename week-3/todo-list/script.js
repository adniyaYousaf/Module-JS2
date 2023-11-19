function populateTodoList(todo) {
  let list = document.getElementById("todo-list");
  list.textContent = '';
  for (const item of todo) {
    const li = document.createElement('li');
    list.appendChild(li);
    li.textContent = item.task;
    const span = document.createElement('span');
    li.appendChild(span);
    const iCheck = document.createElement('i');
    span.appendChild(iCheck);
    iCheck.classList.add('check');
    iCheck.addEventListener("click", () => {
    li.classList.toggle('completed')
    });
    const iDelete = document.createElement('i');
    span.appendChild(iDelete);
    iDelete.classList.add('trash');
    iDelete.addEventListener("click", () => {
      li.remove();
      });
  }
}
const addTodoButton = document.querySelector("#add");
const input = document.querySelector('#input');

let todos = [
  { task: "Wash the clothes", completed: false },
  { task: "Call the doctor", completed: false }
];
populateTodoList(todos);

addTodoButton.addEventListener("click", (event) => {
  event.preventDefault();
  todos.push({
    task: input.value,
    completed: false
  });
  populateTodoList(todos);
  input.value = '';
})



// deletes the completed ones
function deleteAllCompletedTodos() {
  let listItems=document.getElementsByTagName('li')
   for (const item of listItems) {
    if (item.classList.contains('completed')) {
      item.remove();
    }
  }
}
















































// // let list = document.getElementById("todo-list");
// // const addTodo = document.querySelector("#add");
// // const todos = [];


// // console.log(todos);
// // function addNewTodo() {
// //   event.preventDefault();
// //   const input = document.querySelector('input');
// //   if (input.value !== "") {
// //     const li = document.createElement("li");
// //     list.appendChild(li);
// //     li.textContent = input.value;
// //     li.classList.add('list-item');
// //     const span = document.createElement("span");
// //     const htmlContent = 
// //     '<i id="check" onclick="this.parentNode.parentNode.classList.toggle(`completed`)"></i>'
// //       + '<i id="trash" onclick="this.parentNode.parentNode.remove()"></i>';
// //     span.innerHTML = htmlContent;
// //     li.appendChild(span);
// //     todos.push(li);
// //   }
// // }







