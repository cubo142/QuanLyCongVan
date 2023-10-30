import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QLThemNhanVien from './QLThemNhanVien';
import QLXoaNhanVien from './QLXoaNhanVien'
import QLCapNhatNhanVien from './QLCapNhatNhanVien'
import SearchBar from '../../global/SearchBar';
import '../quanly.css'

const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    margin: "auto",
    width: "100%"
}

//Hiển thị option cho list
const renderButton = (params) => {
    return (
        <div style={{ display: "flex" }}>
            <QLCapNhatNhanVien />
            <div className='space-width' />
            <QLXoaNhanVien />
        </div>
    )
}

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
        field: 'fullName',
        headerName: 'Tên đầy đủ',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 130,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'department', headerName: 'Bộ phận', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'startDate', headerName: 'Ngày vào làm', flex: 1 },
    { field: 'phone', headerName: 'Số điện thoại', flex: 1 },
    { field: 'address', headerName: 'Địa chỉ', flex: 1 },
    { field: 'option', headerName: 'Chức năng', flex: 1, renderCell: renderButton, sortable: false }
];

const rows = [{ "id": 1, "firstName": "Prince", "lastName": "Jachimak", "department": "HR", "email": "pjachimak0@dell.com", "phone": "930-297-9967", "address": "473 Dahle Way", "startDate": "6/9/2023" },
{ "id": 2, "firstName": "Rickey", "lastName": "Rosenstein", "department": "Marketing", "email": "rrosenstein1@smh.com.au", "phone": "795-972-7716", "address": "20193 Bunting Alley", "startDate": "8/13/2023" },
{ "id": 3, "firstName": "Casandra", "lastName": "Derham", "department": "HR", "email": "cderham2@t-online.de", "phone": "302-938-4795", "address": "3 Ludington Avenue", "startDate": "7/24/2023" },
{ "id": 4, "firstName": "Maurits", "lastName": "Leal", "department": "IT", "email": "mleal3@disqus.com", "phone": "522-155-8111", "address": "701 Westend Circle", "startDate": "7/20/2023" },
{ "id": 5, "firstName": "Roxine", "lastName": "Maven", "department": "Sales", "email": "rmaven4@va.gov", "phone": "488-753-7570", "address": "6 Monterey Parkway", "startDate": "1/30/2023" },
{ "id": 6, "firstName": "Pernell", "lastName": "Garrad", "department": "Sales", "email": "pgarrad5@feedburner.com", "phone": "590-615-8032", "address": "34536 Buell Terrace", "startDate": "10/25/2022" },
{ "id": 7, "firstName": "Jephthah", "lastName": "Edgecombe", "department": "Finance", "email": "jedgecombe6@ted.com", "phone": "304-284-0878", "address": "9644 Dryden Junction", "startDate": "4/18/2023" },
{ "id": 8, "firstName": "Roberto", "lastName": "Browning", "department": "IT", "email": "rbrowning7@ifeng.com", "phone": "253-696-2023", "address": "4952 Magdeline Park", "startDate": "5/10/2023" },
{ "id": 9, "firstName": "Sheppard", "lastName": "Guarin", "department": "Finance", "email": "sguarin8@state.tx.us", "phone": "274-376-4935", "address": "68 Walton Place", "startDate": "4/17/2023" },
{ "id": 10, "firstName": "Manon", "lastName": "Hazelden", "department": "HR", "email": "mhazelden9@ted.com", "phone": "565-352-1728", "address": "0 Michigan Road", "startDate": "6/10/2023" }]

const QLNhanVien = () => {
    return (
        <Box style={pageStyle}>
            <div className='app-bar'>
                <div className="search-bar">
                    <SearchBar />
                </div>
                <div className='space-width' />
                <div className="add-button">
                    <QLThemNhanVien />
                </div>
            </div>

            <div className='space-height' />
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    disableRowSelectionOnClick
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

export default QLNhanVien;