import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, ProductOutlined, UsergroupAddOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export const Sidebar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ProductOutlined />}>
          <Link to="/products">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
          <Link to="/add-user">Add User</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UnorderedListOutlined />}>
          <Link to="/user-list">Users List</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};