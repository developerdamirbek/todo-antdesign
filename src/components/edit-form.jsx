import React from 'react';
import { Form, Input, Button } from 'antd';

const EditUserForm = ({ user, onCancel, onEditUser }) => {
  const onFinish = (values) => {
    const editedUserData = { ...user, ...values };
    onEditUser(editedUserData);
  };

  return (
    <Form
      initialValues={user}
      onFinish={onFinish}
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
      <Form.Item>
        <Button htmlType="submit">
          Update
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditUserForm;
