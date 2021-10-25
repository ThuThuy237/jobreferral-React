import React from 'react';
import { Menu,  } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
} from '@ant-design/icons';

export default function UserRightMenu() {

    return (
        <div >
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                    Option 3
                </Menu.Item>
            </Menu>
        </div>
    );
}