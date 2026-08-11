import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const client = axios.create({
	baseURL: API_BASE,
	headers: { "Content-Type": "application/json" },
});

export async function fetchTodos() {
	try {
		const res = await client.get("/api/todos");
		return res.data;
	} catch (err) {
		console.error("fetchTodos error:", err);
		throw err;
	}
}

export async function createTodo(todo) {
	try {
		const res = await client.post("/api/todos", todo);
		return res.data;
	} catch (err) {
		console.error("createTodo error:", err);
		throw err;
	}
}

export async function deleteTodo(id) {
	try {
		const res = await client.delete(`/api/todos/${id}`);
		return res.data;
	} catch (err) {
		console.error("deleteTodo error:", err);
		throw err;
	}
}

export default { fetchTodos, createTodo, deleteTodo };

