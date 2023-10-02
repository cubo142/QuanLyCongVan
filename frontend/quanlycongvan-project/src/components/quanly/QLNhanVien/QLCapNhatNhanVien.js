import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import IconButton from '@mui/material/IconButton';
import { FaPen } from 'react-icons/fa';


const QLCapNhatNhanVien = () => {

    const department = [
        {
            value: 'Sales',
        },
        {
            value: 'Marketing',
        },
        {
            value: 'Finance',
        },
        {
            value: 'HR',
        },
        {
            value: 'IT',
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
            <IconButton onClick={handleOpen} >
                <FaPen fontSize="medium" />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Cập nhật nhân viên
                </DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField id="outlined-last-name" label="Họ" variant="outlined" />
                            <TextField id="outlined-first-name" label="Tên" variant="outlined" />
                            <TextField
                                id="outlined-select-department"
                                select
                                label="Bộ phận"
                                defaultValue="IT"
                            // helperText="Please select your department"
                            >
                                {department.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="outlined-email" label="Email" variant="outlined" />
                            <TextField
                                id="outlined-password-input"
                                label="Mật khẩu"
                                variant="outlined"
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField id="outlined-phone" label="Số điện thoại" variant="outlined" />

                            <TextField id="outlined-address" label="Địa chỉ" variant="outlined" />
                            <LocalizationProvider dateAdapter={AdapterDayjs} components={['DateTimePicker']}>
                                <DateTimePicker label="Ngày vào làm" />
                            </LocalizationProvider>
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Không đồng ý</Button>
                    <Button onClick={handleOpenInner} autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openInner}
                onClose={handleClose}
            >
                <DialogTitle>
                    Cập nhật nhân viên thành công / thất bại
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

export default QLCapNhatNhanVien;