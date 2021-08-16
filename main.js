const addNewTodoButton = document.getElementById("add-new-todo");
const createTodoButton = document.getElementById("create-todo");
const idField = document.getElementById("id-field");
const timeField = document.getElementById("time-field");
const bodyField = document.getElementById("body-field");
const todoList = document.querySelector(".todo-content");
const div = document.createElement("div");
const editTodoButton = document.querySelector(".fa-edit");



const Todos = [];

const displayAllTodos = () => {

	if (Todos.length == 0) {
		div.classList.add("empty-todo");
		div.innerHTML = `
		<img src="undraw_empty_xct9.png" alt="empty image" style="width: 50%;">
		<br>
		<span style="font-family: 'Fira Sans', sans-serif; font-size: 20px; font-weight: bold;">There are no todos yet...</span>
		<br>`;
		todoList.appendChild(div);
	} else {
		document.querySelector(".empty-todo").style.display ="none";
		for(let key in Todos){
			let todo = Todos[key];
			// todoList.innerHTML ="";
			todoList.innerHTML += `
			<div class="todo-content-item">
				<span class="todo-id">▪️ ${todo.id} ▪️</span>
				<span class="todo-text">${todo.body}</span>
				<span class="todo-date">Created at : ${todo.timestamp}</span>
				<span class="todo-status complete">▪️ ${todo.status} ▪️</span>
				<div style="display: flex; flex-direction: column; justify-content: space-around; align-items: center;" class="actions-window">
					<i class="far fa-edit"></i>
					<i class="far fa-trash-alt"></i>
					<i class="fas fa-check"></i>
				</div>
			</div>
			`;
		};
	}
}

displayAllTodos();

const addTodo = () => {
	document.querySelector(".empty-todo").style.display ="none";
	const id = idField.value;
	const timestamp = timeField.value;
	const body = bodyField.value;
	const status = "Not complete";
	Todos.push({id,timestamp, body, status})
	console.log(Todos);
	todoList.innerHTML += `
			<div class="todo-content-item">
				<span class="todo-id">▪️ ${id} ▪️</span>
				<span class="todo-text">${body}</span>
				<span class="todo-date">Created at : ${timestamp}</span>
				<span class="todo-status complete">▪️ ${status} ▪️</span>
				<div style="display: flex; flex-direction: column; justify-content: space-around; align-items: center;" class="actions-window">
					<i class="far fa-edit"></i>
					<i class="far fa-trash-alt"></i>
					<i class="fas fa-check"></i>
				</div>
			</div>
			`;
	idField.value = "";
	timeField.value = "";
}

const editTodo = () => {
	console.log(Todos);
}

const generateID = () => {
	let id = `${Math.random().toString(36).substr(2, 6)}-${Math.random().toString(36).substr(2, 4)}-${Math.random().toString(36).substr(2, 4)}-${Math.random().toString(36).substr(2, 6)}`;
	return id;
}

const getTimeStamp = () => {
	let date = new Date();
	let time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	return time;
}

const addNewTodo = () => {
	idField.value = generateID();
	timeField.value = getTimeStamp();
}


addNewTodoButton.addEventListener('click', addNewTodo);
createTodoButton.addEventListener('click', addTodo);
editTodoButton.addEventListener('click', editTodo);