import React, { useState } from 'react';
import { Typography, Table, Button, Popconfirm, message, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../redux/reducer/userReducer'; 
import { useGetusers } from './service/query/useGetUsers';
import EditUserForm from '../components/edit-form';
import { useEditUsers } from './service/mutation/useEditUsers';
import { useDeleteUsers } from './service/mutation/useDeleteUsers';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

const { Title } = Typography;

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetusers();
  const editUserMutation = useEditUsers();
  const deleteUserMutation = useDeleteUsers();
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = async (userId) => {
    try {
      await deleteUserMutation.mutateAsync(userId);
      message.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      message.error('Failed to delete user');
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleEditUser = async (editedUserData) => {
    try {
      const { data } = await editUserMutation.mutateAsync(editedUserData);
      dispatch(editUser(data));
      message.success('User updated successfully');
      handleCancel();
    } catch (error) {
      console.error('Error editing user:', error);
      message.error('Failed to update user');
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button style={{marginRight: '20px'}} onClick={() => handleEdit(record)}  icon={<EditFilled />} >
            Edit
          </Button>
          <Popconfirm
          style={{color: "red"}}
            title="Are you sure delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteFilled/>} >Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <Title level={2}>Users List</Title>
      <Table style={{maxHeight: "420px", overflowY: "auto"}} dataSource={data} columns={columns} />

      <Modal
        title="Edit User"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedUser && <EditUserForm user={selectedUser} onCancel={handleCancel} onEditUser={handleEditUser} />}
      </Modal>
    </div>
  );
};

export default UsersList;
