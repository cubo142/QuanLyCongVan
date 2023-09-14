import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FiHome, FiCheckSquare, FiBookOpen, FiLogOut } from "react-icons/fi";

const SideNavigationBar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar >
                <Menu>
                    <MenuItem component={<Link to="/" />}>QUẢN LÝ CÔNG VĂN</MenuItem>
                    {/* Trang chủ */}
                    <MenuItem icon={<FiHome />} component={<Link to="/" />}>Trang Chủ</MenuItem>

                    {/* Quản lý */}
                    <SubMenu icon={<FiCheckSquare />} label="Quản lý">
                        <MenuItem component={<Link to="/quanly" />}>Quản lý nhân viên</MenuItem>
                        <MenuItem>Quản lý phòng ban</MenuItem>
                        <MenuItem>Quản lý chủ đề</MenuItem>
                    </SubMenu>

                    {/* Công văn*/}
                    <SubMenu icon={<FiBookOpen />} label="Công văn">
                        <MenuItem component={<Link to="/congvan" />}>Quản lý công văn</MenuItem>
                        <MenuItem>Công văn nội bộ</MenuItem>
                    </SubMenu>

                    {/* Đăng xuất */}
                    <MenuItem icon={<FiLogOut />}> Đăng xuất </MenuItem>
                </Menu>
            </Sidebar>
        </div >
    );
};

export default SideNavigationBar;