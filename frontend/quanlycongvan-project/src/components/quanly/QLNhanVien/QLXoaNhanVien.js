import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle} from '@mui/material';



const QLXoaNhanVien = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box>
            <Button variant="outlined" onClick={handleOpen}>
                Xóa
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Xóa nhân viên
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Không đồng ý</Button>
                    <Button onClick={handleClose} autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </Box >
    );
};

export default QLXoaNhanVien;