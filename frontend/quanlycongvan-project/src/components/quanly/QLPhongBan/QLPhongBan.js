import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QLThemPhongBan from './QLThemPhongBan';
import QLXoaPhongBan from './QLXoaPhongBan'
import QLCapNhatPhongBan from './QLCapNhatPhongBan'
import '../quanly.css'

const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    margin: "auto"
}

//Content mẫu cho datagrid
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'department', headerName: 'Tên phòng ban', width: 130 },
    { field: 'manager', headerName: 'Trưởng phòng', width: 130 },
    { field: 'phone', headerName: 'Số điện thoại', width: 130 },
];

const rows = [{"id":1,"department":"Sales","manager":"Gretchen Frusher","phone":"403-591-2806"},
{"id":2,"department":"Marketing","manager":"Tracy Bolstridge","phone":"553-684-8588"},
{"id":3,"department":"Finance","manager":"Kathie Dumberrill","phone":"636-975-6187"},
{"id":4,"department":"HR","manager":"Tadeo Alvy","phone":"307-113-6822"},
{"id":5,"department":"IT","manager":"Carrol Mangenet","phone":"926-899-2222"},]

const QLPhongBan = () => {
    return (
        <Box style={pageStyle}>
            <div className='appbar-row'>
                <div className="searchbar-row">
                    <div className="search-bar">
                    </div>
                </div>
                <div className="button-row">
                <div className='space-width' />
                    <div className="add-button">
                        <QLThemPhongBan />
                    </div>
                    <div className='space-width' />
                    <div className="delete-button">
                        <QLXoaPhongBan />
                    </div>
                    <div className='space-width' />
                    <div className="update-button">
                        <QLCapNhatPhongBan />
                    </div>
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