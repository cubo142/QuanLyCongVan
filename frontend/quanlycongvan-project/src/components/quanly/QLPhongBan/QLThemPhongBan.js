import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material';



const QLThemPhongBan = () => {

    const manager = [
        {
            value: 'Yua Mikami',
        },
        {
            value: 'Miku Ohashi',
        },
        {
            value: 'Kana Momonogi',
        },
        {
            value: 'Arina Hashimoto',
        },
    ];

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
                            <TextField id="outlined-department" label="Department" variant="outlined" />
                            <TextField
                                id="outlined-select-manager"
                                select
                                label="Manager"
                                defaultValue="Arina Hashimoto"
                            // helperText="Please select manager"
                            >
                                {manager.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="outlined-phone" label="Phone" variant="outlined" />
                        </div>
                    </Box>
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

export default QLThemPhongBan;