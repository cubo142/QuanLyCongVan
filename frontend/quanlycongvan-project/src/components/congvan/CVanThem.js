import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material';

import { styled } from '@mui/material/styles';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CVanThem = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const loaicongvan = [
        {
            value: 1,
            label: "Công văn đến"
        },
        {
            value: 2,
            label: "Công văn đi"
        },
        {
            value: 3,
            label: "Công văn nội bộ"
        }
    ]

    const trangthai = [
        {
            value: 0,
            label: "Đã ký duyệt"
        },
        {
            value: 1,
            label: "Chưa ký duyệt"
        }
    ]

    const manager = [
        {
            value: 'Hành Chính',
        },
        {
            value: 'Giáo Dục',
        },
    ];

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setOpenInner(false)
    }

    const [openInner, setOpenInner] = useState(false);

    const handleOpenInner = () => {
        setOpenInner(true)
    }

    return (
        <Box>
            <Button variant="outlined" onClick={handleOpen} size='large'>
                Thêm
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Thêm công văn
                </DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '28ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                label="Kiểu công văn" />
                            <TextField
                                label="Người nhận" />
                            <TextField
                                label="Trích yếu" />
                            <TextField
                                label="Trích yếu" />
                            <TextField
                                label="Cơ quan ban hành" />
                            <TextField
                                label="Nơi lưu bản chính" />
                            <LocalizationProvider dateAdapter={AdapterDayjs} components={['DateTimePicker']}>
                                <DateTimePicker label="Ngày ban hành" />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs} components={['DateTimePicker']}>
                                <DateTimePicker label="Ngày hết hiệu lực" />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs} components={['DateTimePicker']}>
                                <DateTimePicker label="Ngày gửi" />
                            </LocalizationProvider>
                            <TextField
                                select
                                label="Trang Thái">
                                {trangthai.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-select-manager"
                                select
                                label="Chủ đề công văn"
                                defaultValue="Hành Chính">
                                {manager.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                label="Loại công văn">
                                {loaicongvan.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                label="Phòng ban">
                                {loaicongvan.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button style={{ top: "0.5rem", left: "0.5rem" }} component="label" variant="contained">
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <TextField
                                id="outlined-multiline-static"
                                label="Nội dung"
                                multiline
                                rows={4}
                                defaultValue="" />
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>HỦY</Button>
                    <Button onClick={handleOpenInner} autoFocus>
                        XÁC NHẬN
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openInner}
                onClose={handleClose}
            >
                <DialogTitle>
                    Thêm chủ đề công văn thành công / thất bại
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Box >
    );
};

export default CVanThem;