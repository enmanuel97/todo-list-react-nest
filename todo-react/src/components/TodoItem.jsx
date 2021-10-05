import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const TodoItem = ({todo, onToggleTodoStatus, onRemoveTodo}) => {
	return (
		<List.Item
			actions={[
				<Tooltip title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}>
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						defaultChecked={todo.completed}
						onChange={() => onToggleTodoStatus(todo)}
					/>
				</Tooltip>,
				<Popconfirm
					title="Are you sure you want to delete?"
					onConfirm={() => onRemoveTodo(todo)}
				>
					<Button className="remove-todo-button" type="primary" danger> X </Button>
				</Popconfirm>
			]}
			className="list-item"
			key={todo.id}
		>
			<div className="todo-item">
				<Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
					{todo.title}
				</Tag>
			</div>
		</List.Item>
	);
}

export default TodoItem;