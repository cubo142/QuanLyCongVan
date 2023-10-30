import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QLThemNhanVien from './QLThemNhanVien';
import QLXoaNhanVien from './QLXoaNhanVien'
import QLCapNhatNhanVien from './QLCapNhatNhanVien'
import SearchBar from '../../global/SearchBar';
import '../quanly.css'
import { useDeleteNhanVien, useGetNhanVien } from '../../../api/NhanVien/useNhanVien';
import { useGetPhongBan } from '../../../api/PhongBan/usePhongBan';


const QLNhanVien = () => {
    //Lấy data
    const deleteNhanVien = useDeleteNhanVien();
    const { data: nhanvienData, isLoading, error } = useGetNhanVien();
    const { data: phongbanData } = useGetPhongBan();
    if (isLoading) {
        return "Cò lỗi gì đó đã xảy ra"
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: "relative",
        margin: "auto",
        width: "100%"
    }

    //
    const onDeleteNhanVien = async (id) => {
        await deleteNhanVien.mutateAsync(id);
        // Sau khi xóa thành công, cập nhật dữ liệu bằng cách gọi refetch()
       
    }

    //Hiển thị option cho list
    const renderButton = (params) => {
        return (
            <div style={{ display: "flex" }}>
                <QLCapNhatNhanVien nhanvienID={params.row.id} nhanvienData={nhanvienData} phongbanData={phongbanData} />
                <div className='space-width' />
                <QLXoaNhanVien onDeleteNhanVien={onDeleteNhanVien} nhanvienID={params.row.id} />
            </div>
        )
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        {
            field: 'tennhanvien',
            headerName: 'Tên đầy đủ',
            width: 130,
        },
        { field: 'phongban', headerName: 'Bộ phận', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'sdtnhanvien', headerName: 'Số điện thoại', flex: 1 },
        { field: 'diachi', headerName: 'Địa chỉ', flex: 1 },
        { field: 'option', headerName: 'Chức năng', flex: 1, renderCell: renderButton, sortable: false }
    ];

    //Rows
    const reverseData = [...nhanvienData].reverse(); //đảo chiều data
    const rows = (reverseData || []).map((item) => {
        return {
            id: item._id,
            tennhanvien: item.tennhanvien,
            phongban: item.phongban.tenphongban,
            email: item.email,
            sdtnhanvien: item.sdtnhanvien,
            diachi: item.diachi
        };
    });

    return (
        <Box style={pageStyle}>
            <div className='app-bar'>
                <div className="search-bar">
                    <SearchBar />
                </div>
                <div className='space-width' />
                <div className="add-button">
                    <QLThemNhanVien nhanvienData={nhanvienData} phongbanData={phongbanData} />
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