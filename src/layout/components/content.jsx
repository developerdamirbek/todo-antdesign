import React from 'react';
import { Layout } from 'antd';

const { Content: AntdContent } = Layout;

export const Content = ({ children }) => {
  return (
    <AntdContent style={{ margin: '0 16px' }}>
      <div style={{ padding: 24, minHeight: 360 }}>
        {children}
      </div>
    </AntdContent>
  );
};