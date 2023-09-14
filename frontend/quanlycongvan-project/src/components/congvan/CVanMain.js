import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem, Tab } from '@mui/material';
import "./congvan.css"
import { Grid } from '@mui/material';

import { TabContext } from '@material-ui/lab';
import { TabList } from '@material-ui/lab';
import { TabPanel } from '@material-ui/lab';
import CVanDen from './CVanDen/CVanDen';
import CVanDi from './CVanDi/CVanDi';

const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    margin: "auto"
}


const CVanMain = () => {

    const [age, setAge] = useState('')

    const [value, setValue] = useState('1')

    //Function mẫu thay đổi value của Select
    const handleChange = (e) => {
        setAge(e.target.value);
    };

    //Function thya đổi Tabs
    const handleChangeTab = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box style={pageStyle}>
                <div className='section-container'>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField
                                size='small'
                                select
                                className='filter-field'
                                value={age}
                                label="Người ký duyệt"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Test</MenuItem>
                                <MenuItem value={20}>Test2</MenuItem>
                                <MenuItem value={30}>Test3</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                size='small'
                                select
                                className='filter-field'
                                value={age}
                                label="Loại văn bản"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Test</MenuItem>
                                <MenuItem value={20}>Test2</MenuItem>
                                <MenuItem value={30}>Test3</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                size='small'
                                select
                                className='filter-field'
                                value={age}
                                label="Nơi ban hành"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Test</MenuItem>
                                <MenuItem value={20}>Test2</MenuItem>
                                <MenuItem value={30}>Test3</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                size='small'
                                select
                                className='filter-field'
                                value={age}
                                label="Nơi ban hành"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Test</MenuItem>
                                <MenuItem value={20}>Test2</MenuItem>
                                <MenuItem value={30}>Test3</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Số ký hiệu"
                                size='small'
                                className='filter-field'
                            ></TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Nội dung"
                                size='small'
                                className='filter-field'
                            ></TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Nội dung"
                                size='small'
                                className='filter-field'
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ float: "right", width: "fit-content", display: "flex" }}>
                                <Button variant="contained" style={{ width: "5rem" }}>CLEAR</Button>
                                <div style={{ width: "16px" }} />
                                <Button variant="contained" style={{ width: "5rem" }}>LỌC</Button>
                            </div>

                        </Grid>
                    </Grid>
                </div>

                <div style={{ height: "16px" }} />

                <div className='section-container'>
                    <div className="button-row">
                        <div className='space-width' />
                        <div className="add-button">
                            {/* ADD CVAN */}
                        </div>
                    </div>

                    <Box>
                        <TabContext value={value}>
                            <Box>
                                <TabList onChange={handleChangeTab}>
                                    <Tab label="CÔNG VĂN ĐẾN" value='1'></Tab>
                                    <Tab label="CÔNG VĂN ĐI" value='2'></Tab>
                                </TabList>
                            </Box>
                            <TabPanel value='1'>
                                <CVanDen />
                            </TabPanel>
                            <TabPanel value='2'>
                                <CVanDi />
                            </TabPanel>
                        </TabContext>
                    </Box>

                </div>

            </Box>
        </div>
    );
};

export default CVanMain;