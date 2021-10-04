import React from 'react';
import { Form, Col, Row, Input, Button, Checkbox } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

const TodoForm = ({onFormSubmit}) => {
	const [form] = Form.useForm();

	const onFinish = () => {
		onFormSubmit({
			title: form.getFieldValue('title'),
			completed: form.getFieldValue('completed')
		});
		form.resetFields();
	}

	return (
		<Form form={form} layout="horizontal" className="todo-form" onFinish={onFinish}>
			<Row gutter={20}>
				<Col xs={24} sm={24} md={17} lg={19} xl={20}>
					<Form.Item
						name="title"
						label="Title"
						rules={[{ required: true, message: 'This field is required' }]}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col xs={24} sm={24} md={17} lg={19} xl={20}>
					<Button type="primary" htmlType="submit" block icon={<PlusCircleFilled />}>
						Add Todo
					</Button>
				</Col>
			</Row>
		</Form>
	);
}

export default TodoForm;