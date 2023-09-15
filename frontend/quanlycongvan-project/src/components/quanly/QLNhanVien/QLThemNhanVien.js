import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material';



const QLThemNhanVien = () => {

    const department = [
        {
            value: 'IT',
        },
        {
            value: 'HR',
        },
        {
            value: 'Finance',
        },
        {
            value: 'Sales',
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
                    Thêm nhân viên
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
                            <TextField id="outlined-first-name" label="First Name" variant="outlined" />
                            <TextField id="outlined-last-name" label="Last Name" variant="outlined" />
                            <TextField
                                id="outlined-select-department"
                                select
                                label="Department"
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
                            <TextField id="outlined-phone" label="Phone" variant="outlined" />
                            <TextField id="outlined-address" label="Address" variant="outlined" />
                            <TextField id="outlined-age" label="Age" variant="outlined" />
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

export default QLThemNhanVien;