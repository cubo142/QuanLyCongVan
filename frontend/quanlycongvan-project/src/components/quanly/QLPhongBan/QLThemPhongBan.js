import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material';



const QLThemPhongBan = () => {

    const manager = [
        {
            value: 'Lương Đình Thông',
        },
        {
            value: 'Đỗ Đức Minh',
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
                    Thêm phòng ban
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
                            <TextField id="outlined-department" label="Tên phòng ban" variant="outlined" />
                            <TextField
                                id="outlined-select-manager"
                                select
                                label="Trưởng phòng"
                                defaultValue="Lương Đình Thông"
                            // helperText="Please select manager"
                            >
                                {manager.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="outlined-phone" label="Số điện thoại" variant="outlined" />
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
                    Thêm phòng ban thành công / thất bại
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

export default QLThemPhongBan;