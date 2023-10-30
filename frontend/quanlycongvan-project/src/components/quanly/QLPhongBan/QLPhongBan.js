import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QLThemPhongBan from './QLThemPhongBan';
import QLXoaPhongBan from './QLXoaPhongBan'
import QLCapNhatPhongBan from './QLCapNhatPhongBan'
import SearchBar from '../../global/SearchBar';
import '../quanly.css'

const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    margin: "auto",
    width: "100%",
}

//Hiển thị option cho list
const renderButton = (params) => {
    return (
        <div style={{ display: "flex" }}>
            <QLCapNhatPhongBan />
            <div className='space-width' />
            <QLXoaPhongBan />
        </div>
    )
}


const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'department', headerName: 'Tên phòng ban', flex: 1 },
    { field: 'manager', headerName: 'Trưởng phòng', flex: 1 },
    { field: 'phone', headerName: 'Số điện thoại', flex: 1 },
    { field: 'option', headerName: 'Chức năng', flex: 1, renderCell: renderButton, sortable: false }
];

const rows = [{ "id": 1, "department": "Sales", "manager": "Gretchen Frusher", "phone": "403-591-2806" },
{ "id": 2, "department": "Marketing", "manager": "Tracy Bolstridge", "phone": "553-684-8588" },
{ "id": 3, "department": "Finance", "manager": "Kathie Dumberrill", "phone": "636-975-6187" },
{ "id": 4, "department": "HR", "manager": "Tadeo Alvy", "phone": "307-113-6822" },
{ "id": 5, "department": "IT", "manager": "Carrol Mangenet", "phone": "926-899-2222" },]

const QLPhongBan = () => {
    return (
        <Box style={pageStyle}>
            <div className='app-bar'>
                <div className="search-bar">
                    <SearchBar />
                </div>
                <div className='space-width' />
                <div className="add-button">
                    <QLThemPhongBan />
                </div>
            </div>

            <div className='space-height' />
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </Box>
    );
};

export default QLPhongBan;