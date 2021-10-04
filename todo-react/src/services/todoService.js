const baseUrl = 'localhost:8000/todo';

export const loadTodos = () => {
	return fetch(baseUrl).then(response => response.json());
}

export const getTodo = (id) => {
	return fetch(`${baseUrl}/${id}`).then(response => response.json());
}

export const createTodo = (todo) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(todo)
	}).then(response => response.json());
}

export const updateTodo = (todo) => {
	return fetch(`${baseUrl}/${todo.id}`, {
		method: 'Patch',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(todo)
	}).then(response => response.json());
}

export const deleteTodo = (id) => {
	return fetch(`${baseUrl}/${id}`, {
		method: 'DELETE'
	}).then(response => response.json());
}