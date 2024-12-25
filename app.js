
let a = "Coding is fun, what do you feel about it";
let split_arr = a.split(" ").reverse();
for (let i = 0; i < split_arr.length; i++) {
    let word = split_arr[i].split("").reverse().join("");
    split_arr[i] = word + " ";
}
let result = split_arr.join("");
let cardElementsHtml;

let header_element = document.getElementById("honeTag");
header_element.innerText = result;


let todos = [
    {
        "id": 1,
        "title": "first title",
        "endDate": "2024-02-23",
        "status": "todo",
    },
    {
        "id": 2,
        "title": "second title",
        "endDate": "2024-02-28",
        "status": "todo",
    },
];

let todoContainer = document.querySelector('.todoContainer');
let cardHtmlString = "";
renderTodos();

function cardContainerHtml(todo) {
    cardHtmlString += `
      <div class="cardContainer">
        <h5>${todo.title}</h5>
        <span class="cardTitle">Title : ${todo.title}</span>
        <span class="cardDate">End Date : ${todo.endDate}</span>
        <span class="cardStatus">Status ${todo.status}</span>
      </div>
    `
    return;
}

function renderTodos() {
    cardHtmlString = "";
    cardElementsHtml = todos.forEach((todo) => cardContainerHtml(todo));
    todoContainer.innerHTML = cardHtmlString;
}

function addTodo() {
    let todoTitle = document.getElementById('todoInput').value;
    let todoDate = document.getElementById('todoEndDate').value;
    let todoStatus = "todo"
    todos = [...todos, {
        "id": todos.length + 1,
        "title": todoTitle,
        "endDate": todoDate,
        "status": todoStatus,
    }];
    
    renderTodos();
}

