import React, { useEffect, useState, useCallback } from 'react';
import { Tabs, Layout, Row, Col, message } from 'antd';
import TodoTab from './TodoTab';
import TodoForm from './TodoForm';
import { loadTodos, createTodo, updateTodo, deleteTodo } from '../services/todoService';
import './TodoList.css';

const { TabPane } = Tabs;
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

	const handleRemoveTodo = (todo) => {
		deleteTodo(todo.id).then(onRefresh());
		message.success('Todo deleted successfully');
	}

	const handleToggleTodoStatus = (todo) => {
		todo.completed = !todo.completed;
		updateTodo(todo).then(onRefresh());
		message.success('Todo updated successfully');
	}

	const refresh = () => {
		loadTodos().then(todos => {
			setTodos(todos);
			setActiveTodos(todos.filter(todo => !todo.completed));
			setCompletedTodos(todos.filter(todo => todo.completed));
		}).then(console.log('fetch completed'));
	};

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		let data = await loadTodos();
		setTodos(data);
		setActiveTodos(data.filter(todo => todo.completed === false));
		setCompletedTodos(data.filter(todo => todo.completed === true));
		setRefreshing(false);
		console.log('Refresh State', refreshing);
	}, [refreshing]);

	useEffect(() => {
		refresh();
	}, [onRefresh]);

	return (	
		<Layout className="layout">
			<Content style={{ padding: '0 50px' }}>
				<div className="todolist">
					<Row>
						<Col span={14} offset={5}>
							<h1>TODOS App</h1>
							<TodoForm onFormSubmit={handleFormSubmit} />
							<br />
							<Tabs defaultActiveKey="all">
								<TabPane tab="All" key="all">
									<TodoTab todos={todos} onToggleTodoStatus={handleToggleTodoStatus} onRemoveTodo={handleRemoveTodo} />
								</TabPane>
								<TabPane tab="Active" key="active">
									<TodoTab todos={activeTodos} onToggleTodoStatus={handleToggleTodoStatus} onRemoveTodo={handleRemoveTodo} />
								</TabPane>
								<TabPane tab="Completed" key="completed">
									<TodoTab todos={completedTodos} onToggleTodoStatus={handleToggleTodoStatus} onRemoveTodo={handleRemoveTodo} />
								</TabPane>
							</Tabs>
						</Col>
					</Row>
				</div>
			</Content>
		</Layout>
	);
}

export default TodoList;