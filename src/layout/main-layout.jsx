import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import {  Outlet } from 'react-router-dom';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button
            type="primary"
            onClick={() => setCollapsed(!collapsed)}
            style={{ display: 'flex', alignItems: 'center', margin: '10px', fontSize:'20px'}}
          >
            {collapsed ? <MenuFoldOutlined/> : <MenuUnfoldOutlined />}
          </Button>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};