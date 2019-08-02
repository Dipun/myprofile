import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import briefcaseIcon from './briefcase.svg'
import './toolbar.css';
import { Typography } from 'antd';
const { Text } = Typography;
const { Header } = Layout;
const { Item } = Menu;

const Toolbar = () => {
    return (
        <div>
            <Header className="toolbar_header" >
            <Text className="toolbar_title" >Deeptyranjan Pradhan</Text>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    className="toolbar_Menu"
                >
 
                    <Item className="Menu_item" key="1">START</Item>
                    <Item className="Menu_item"key="2">EXPERIENCE</Item>
                    <Item className="Menu_item"key="3">EDUCATION</Item>
                    <Item className="Menu_item" key="4">SKILLS</Item>
                    <Item  className="Menu_item" key="5">CLINTS</Item>
                    <Item className="Menu_item" key="6">CONTACT</Item>

                </Menu>
            </Header>
        </div>
    );
};

export default Toolbar;