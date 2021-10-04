import React, { useState } from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const TodoItem = ({ todo, onTodoToggle, onTodoRemoval}) => {
	return (
		<List.Item
			actions={[
				<Tooltip title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}>
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						defaultChecked={todo.completed}
						onChange={() => onTodoToggle(todo)}
					/>
				</Tooltip>,
				//<Tooltip title="Delete">
					<Popconfirm
						title="Are you sure you want to delete?"
						onConfirm={() => onTodoRemoval(todo)}
						// okText="Yes"
						// cancelText="No"
					>
						<Button className="remove-todo-button" type="primary" danger> X </Button>
					</Popconfirm>
				//</Tooltip>,
			]}
			className="list-item"
			key={todo.id}
		>
			<div className="todo-item">
				<Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
					{todo.title}
				</Tag>
			</div>
			{/* <List.Item.Meta	
				title={
					<span>
						<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							checked={todo.completed}
							onChange={() => onTodoToggle(todo.id)}
						/>
						<span style={{ marginLeft: '10px' }}>{todo.title}</span>
					</span>
				}
				></List.Item.Meta> */}
			{/* <Tag color={todo.completed ? 'green' : 'red'}>{todo.completed ? 'Completed' : 'Pending'}</Tag> */}
		</List.Item>
	);
}

export default TodoItem;