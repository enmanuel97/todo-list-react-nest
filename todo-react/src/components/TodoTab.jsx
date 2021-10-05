import React from 'react';
import { List } from 'antd';
import TodoItem from './TodoItem';

const TodoTab = ({todos, onRemoveTodo, onToggleTodoStatus}) => {
	return (
		<>
			<List 
				locale={{emptyText: "There's nothing to do :("}} 
				dataSource={todos}
				renderItem={(todo) => (
					<TodoItem
						todo={todo}
						onRemoveTodo={onRemoveTodo}
						onToggleTodoStatus={onToggleTodoStatus}
					/>
				)}
				pagination={{
					position: 'bottom',
					pageSize: 10,
				}}
			/>
		</>
	);
}

export default TodoTab;