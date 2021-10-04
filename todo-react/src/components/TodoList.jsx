import React, { useEffect, useState, useCallback } from 'react';
import { Tabs, Layout, Row, Col, Input, message} from 'antd';
import TodoTab from './TodoTab';
import TodoForm from './TodoForm';
import { loadTodos, getTodo, createTodo, updateTodo, deleteTodo } from '../services/todoService';
import './TodoList.css';

const { TabPanel } = Tabs;
const { Content } = Layout;

const TodoList = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [todos, setTodos] = useState([]);
	const [activeTodos, setActiveTodos] = useState([]);
	const [completedTodos, setCompletedTodos] = useState([]);

	const handleFormSubmit = (todo) => {
		console.log('Todo to create', todo);
		createTodo(todo).then(onRefresh());
		message.success('Todo created successfully');
	}

	
}

export default TodoList;