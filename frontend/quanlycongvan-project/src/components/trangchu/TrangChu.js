import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

// Grid version 2
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    width: 150,
    fontWeight: 'bold'
}));

const TrangChu = () => {
    return (
        <div
            style={{
                marginLeft: "50px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "orange",
                    fontFamily: "times new roman",
                    fontWeight: "bold",
                    fontSize: "30px",
                    paddingBottom: "25px",
                }}
            >
                Hệ Thống Quản Lý Công Văn
            </h1>
            <Grid container spacing={1}>
                <Grid xs={3} md={3}>
                    <Item
                        sx={{
                            borderBottom: "#EBEBEB solid",
                        }}
                    >
                        Nhật ký
                    </Item>
                    <Item>
                        {" "}
                        <Box
                            component="img"
                            sx={{
                                height: 128,
                                width: 128,
                            }}
                            alt="The house from the offer."
                            src="https://cdn-icons-png.flaticon.com/512/2965/2965323.png"
                        />
                    </Item>
                </Grid>
                <Grid xs={3} md={3}>
                    <Item
                        sx={{
                            borderBottom: "#EBEBEB solid",
                        }}
                    >
                        Công văn đến
                    </Item>
                    <Item>
                        {" "}
                        <Box
                            component="img"
                            sx={{
                                height: 128,
                                width: 128,
                            }}
                            alt="The house from the offer."
                            src="https://media.flaticon.com/dist/min/img/landing/gsuite/sheets.svg"
                        />
                    </Item>
                </Grid>
                <Grid xs={3} md={3}>
                    <Item
                        sx={{
                            borderBottom: "#EBEBEB solid",
                        }}
                    >
                        Công văn đi
                    </Item>
                    <Item>
                        {" "}
                        <Box
                            component="img"
                            sx={{
                                height: 128,
                                width: 128,
                            }}
                            alt="The house from the offer."
                            src="https://media.flaticon.com/dist/min/img/landing/gsuite/docs.svg"
                        />
                    </Item>
                </Grid>
                <Grid xs={3} md={3}>
                    <Item
                        sx={{
                            borderBottom: "#EBEBEB solid",
                        }}
                    >
                        Công văn nội bộ
                    </Item>
                    <Item>
                        {" "}
                        <Box
                            component="img"
                            sx={{
                                height: 128,
                                width: 128,
                            }}
                            alt="The house from the offer."
                            src="https://media.flaticon.com/dist/min/img/landing/gsuite/slides.svg"
                        />
                    </Item>
                </Grid>
            </Grid>
            <h2
                style={{
                    textAlign: "center",
                    color: "orange",
                    letterSpacing: 1,
                }}
            >
                Xin chào, bạn đang làm việc tại Phòng Hành Chính Nhân Sự
            </h2>
            <p style={{
                textAlign: "center"
            }}>Công văn đã nhận trong hôm nay:</p>
        </div>
    );
}
export default TrangChu;