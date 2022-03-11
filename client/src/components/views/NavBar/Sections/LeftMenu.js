import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu style={{ backgroundColor:'#181818'}} mode={props.mode}>
    <Menu.Item key="mail">
      <a style={{ color:'white'}} href="/">Home</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu