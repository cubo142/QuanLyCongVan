import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAddCongVan } from '../../api/CongVan/useCongVan';
const CVanThem = ({ kieucvanden, kieucvandi, kieucvannoibo }) => {

    //styles

    //State
    const [openInner, setOpenInner] = useState(false);
    const [open, setOpen] = useState(false);
    const [ngaygui, setNgayGui] = useState("");
    const [nguoinhan, setNguoiNhan] = useState("");
    const [trichyeu, setTrichYeu] = useState("");
    const [noidung, setNoiDung] = useState("");
    const [file, setFile] = useState(null);
    const [trangthai, setTrangThai] = useState(1);
    const [coquanbanhanh, setCoQuanBanHanh] = useState("");
    const [noiluubanchinh, setNoiLuuBanChinh] = useState("");
    const [chudecvan, setChuDeCVan] = useState("");
    const [loaicvan, setLoaiCVan] = useState(0);
    const [kieucvanselect, setKieuCVanSelect] = useState('');
    const [error, setError] = useState("");
    const [kieucvan, setKieuCVan] = useState("");
    const fileInputRef = useRef(null);
    useEffect(() => {
        if (kieucvanden) {
            setKieuCVanSelect('CVANDEN');
            setKieuCVan(kieucvanden)
        } else if (kieucvannoibo) {
            setKieuCVanSelect('CVANNOIBO');
            setKieuCVan(kieucvannoibo)
        } else if (kieucvandi) {
            setKieuCVanSelect('CVANDI');
            setKieuCVan(kieucvandi)
        }
    }, [kieucvanden, kieucvannoibo, kieucvandi]);

    //Hooks được tạo với react-query
    const addCongVan = useAddCongVan();

    //Function
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setOpenInner(false)
    }

    const onNgayGuiChange = (selectedDate) => {
        setNgayGui(selectedDate);
    }
    const onNguoiNhanChange = (e) => {
        setNguoiNhan(e.target.value);
    }
    const onTrichYeuChange = (e) => {
        setTrichYeu(e.target.value);
    }
    const onNoiDungChange = (e) => {
        setNoiDung(e.target.value);
    }
    const onFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
        }
    }
    console.log(file)
    const onTrangThaiChange = (e) => {
        setTrangThai(e.target.value);
    }
    const onCoQuanBanHanhChange = (e) => {
        setCoQuanBanHanh(e.target.value)
    }
    const onNoiLuuBanChinhChange = (e) => {
        setNoiLuuBanChinh(e.target.value)
    }
    const onLoaiCongVanChange = (e) => {
        setLoaiCVan(e.target.value)
    }
    const onKieuCongVanSelectChange = (e) => {
        setKieuCVanSelect(e.target.value)
    }
    const onChuDeCVanChange = (e) => {
        setChuDeCVan(e.target.value)
    }

    //Thêm nhân viên
    const onAddCongVan = async (congvan) => {
        await addCongVan.mutateAsync(congvan)
        console.log(congvan)
    }

    const onSubmitCongVan = () => {
        if (!ngaygui ||
            !nguoinhan ||
            !trichyeu ||
            !noidung ||
            !file ||
            !trangthai ||
            !coquanbanhanh ||
            !noiluubanchinh ||
            !loaicvan // || !kieucvan
        ) {
            setError('Please fill in all required fields');
        }
        setError('');
        const formData = new FormData();
        formData.append('ngaygui', ngaygui);
        formData.append('nguoinhan', nguoinhan);
        formData.append('trichyeu', trichyeu);
        formData.append('noidung', noidung);
        formData.append('file', file);
        formData.append('trangthai', trangthai);
        formData.append('coquanbanhanh', coquanbanhanh);
        formData.append('noiluubanchinh', noiluubanchinh);
        formData.append('loaicvan', loaicvan);
        formData.append('kieucvan', kieucvan);
        onAddCongVan(formData);
        handleClose();
    }
    return (
        <form encType="multipart/form-data">
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
                                    onChange={onNguoiNhanChange}
                                    value={nguoinhan}
                                    label="Người nhận" />
                                <TextField
                                    onChange={onTrichYeuChange}
                                    value={trichyeu}
                                    label="Trích yếu" />
                                <TextField
                                    onChange={onLoaiCongVanChange}
                                    value={loaicvan}
                                    label="Loại công văn" />
                                <TextField
                                    onChange={onCoQuanBanHanhChange}
                                    value={coquanbanhanh}
                                    label="Cơ quan ban hành" />
                                <TextField
                                    onChange={onNoiLuuBanChinhChange}
                                    value={noiluubanchinh}
                                    label="Nơi lưu bản chính" />
                                <LocalizationProvider dateAdapter={AdapterDayjs} components={['DateTimePicker']}>
                                    <DateTimePicker
                                        onChange={onNgayGuiChange}
                                        value={ngaygui}
                                        label="Ngày gửi" />
                                </LocalizationProvider>
                                <TextField
                                    onChange={onTrangThaiChange}
                                    select
                                    value={trangthai}
                                    label="Trang Thái">
                                    <MenuItem value={0}>Chưa ký duyệt</MenuItem>
                                    <MenuItem value={1}>Đã ký duyệt</MenuItem>
                                </TextField>
                                <TextField
                                    onChange={onKieuCongVanSelectChange}
                                    select
                                    label="Kiểu công văn"
                                    value={kieucvanselect}
                                    disabled
                                >
                                    {/* Đang ở component nào thì value sẽ chỉ hiển thị props của component đó */}
                                    <MenuItem value="CVANDEN">{kieucvanden}</MenuItem>
                                    <MenuItem value="CVANDI">{kieucvandi}</MenuItem>
                                    <MenuItem value="CVANNOIBO">{kieucvannoibo}</MenuItem>
                                </TextField>
                                <TextField
                                    onChange={onChuDeCVanChange}
                                    value={chudecvan}
                                    id="outlined-select-manager"
                                    label="Chủ đề công văn">
                                </TextField>
                                {/* <TextField
                                select
                                label="Loại công văn">
                                <MenuItem value={1}>Công văn đến</MenuItem>
                                <MenuItem value={2}>Công văn đi</MenuItem>
                                <MenuItem value={3}>Công văn nội bộ</MenuItem>
                            </TextField> */}
                                {/* <TextField
                                select
                                label="Phòng ban">
                                <MenuItem value={1}>Công văn đến</MenuItem>
                                <MenuItem value={2}>Công văn đi</MenuItem>
                                <MenuItem value={3}>Công văn nội bộ</MenuItem>
                            </TextField> */}
                                <Button
                                    style={{ top: "0.5rem", left: "0.5rem", width: "15rem" }}
                                    variant='contained'
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    Chọn tệp tin
                                </Button>
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={onFileChange}
                                />
                                <span>{file ? file.name : "Chọn tệp tin"}</span>
                                <TextField
                                    onChange={onNoiDungChange}
                                    value={noidung}
                                    id="outlined-multiline-static"
                                    label="Nội dung"
                                    multiline
                                    rows={4} />

                            </div>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>HỦY</Button>
                        <Button onClick={onSubmitCongVan} autoFocus>
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
        </form>
    );
};

export default CVanThem;