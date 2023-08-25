import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FiHome, FiCheckSquare, FiBookOpen, FiLogOut } from "react-icons/fi";

const SideNavigationBar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar >
                <Menu
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            [`&.active`]: {
                                backgroundColor: '#red',
                                color: '#b6c8d9',
                            },
                        },
                    }}
                >
                    <SubMenu icon={<FiHome />} label="Trang Chủ">
                        <MenuItem component={<Link to="/" />}>Trang Chủ</MenuItem>
                        <MenuItem component={<Link to="/quanly" />}>Quản lý</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FiCheckSquare />} label="Quản lý">
                        <MenuItem>Quản lý nhân viên</MenuItem>
                        <MenuItem>Quản lý phòng ban</MenuItem>
                        <MenuItem>Quản lý chủ đề</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FiBookOpen />} label="Công văn">
                        <MenuItem>Công văn đến</MenuItem>
                        <MenuItem>Công văn đi</MenuItem>
                        <MenuItem>Công văn nội bộ</MenuItem>
                    </SubMenu>
                    {/* <SubMenu label="Thêm công văn">
                        <MenuItem component={<Link to="/" />}>Trang Chủ</MenuItem>
                        <MenuItem component={<Link to="/quanly" />}>Quản lý</MenuItem>
                    </SubMenu> */}
                    <MenuItem icon={<FiLogOut />}> Đăng xuất </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideNavigationBar;