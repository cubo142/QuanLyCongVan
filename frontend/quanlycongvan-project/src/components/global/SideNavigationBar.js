import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideNavigationBar = () => {
    return (
        <div>
            <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem component={<Link to="/" />}>Trang Chủ</MenuItem>
                        <MenuItem component={<Link to="/quanly" />}>Quản lý</MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideNavigationBar;