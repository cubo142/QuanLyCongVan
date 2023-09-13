import React, { useState } from 'react';
import { Modal, Box, Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    backgroundColor: "white"
};

const QLThemNhanVien = () => {

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
                Thêm
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Wanna ăn 3 tô cơm ?
                </DialogTitle>
                <DialogContent>
                    Mẹ mày béo
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Box >
    );
};

export default QLThemNhanVien;