import React, { useRef } from 'react';
import { Form, Input, Button, DatePicker, Typography, message } from 'antd';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/reducer/userReducer'; 
import { useAddUser } from './service/mutation/useAddUser'; 

const { Title } = Typography;

const AddUserPage = () => {
  const dispatch = useDispatch();
  const addUserMutation = useAddUser();
  const formRef = useRef();

  const onFinish = async (values) => {
    try {
      const { data } = await addUserMutation.mutateAsync(values);
      dispatch(addUser(data));
      message.success('User added successfully');
      formRef.current.resetFields();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <div>
      <Title level={2}>Add User</Title>
      <Form
        name="addUserForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        ref={formRef}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input user name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input user email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[{ required: true, message: 'Please select date of birth!' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button  htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUserPage;
