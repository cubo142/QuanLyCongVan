import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Checkbox } from '@mui/material';
import { Grid } from '@material-ui/core';
import { useUpdateCongVan, useGetCongVanById } from '../../api/CongVan/useCongVan';
import { useGetPhongBan } from '../../api/PhongBan/usePhongBan';
import { Document, Page, pdfjs } from 'react-pdf';
import "./congvan.css"
const CVanDetail = () => {

    //Style
    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: "relative",
        margin: "auto"
    }
    //Lấy id từ url
    const _congvanID = useParams();
    //other State
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    //Hooks
    const updateCongVan = useUpdateCongVan();
    const { data: congvanData, isLoading, error } = useGetCongVanById(_congvanID.id);
    const { data: phongbanData } = useGetPhongBan();
    const [phongban, setPhongBan] = useState([])

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; //Lỗi version thư viện  
    });


    //Function
    //Thêm phongban vào list
    const onCheckBoxChanged = (e) => {
        let phongbanID = e.target.value
        const isSelected = phongban.includes(phongbanID);
        if (isSelected) {
            setPhongBan(prevState => prevState.filter(id => id !== phongbanID));
        }
        else {
            setPhongBan(prevState => [...prevState, phongbanID]);
        }
    }

    //Xử lý PDF
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    const handleNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    //Update công văn
    const onUpdateCongVan = async (congvan) => {
        await updateCongVan.mutateAsync(congvan)
    }

    const onSubmitCongVan = () => {
        if (congvanData) {
            let congvanID = _congvanID.id
            let chudecvan = congvanData.chudecvan
            let ngaygui = congvanData.ngaygui
            let kyhieucvan = congvanData.kyhieucvan
            let nguoinhan = congvanData.nguoinhan
            let file = congvanData.file
            let trichyeu = congvanData.trichyeu
            let noidung = congvanData.noidung
            let trangthai = congvanData.trangthai
            let coquanbanhanh = congvanData.coquanbanhanh
            let noiluubanchinh = congvanData.noiluubanchinh
            let loaicvan = congvanData.loaicvan._id
            let linhvuc = congvanData.linhvuc._id
            let kieucvan = congvanData.kieucvan
            onUpdateCongVan({
                chudecvan,
                ngaygui,
                kyhieucvan,
                nguoinhan,
                trichyeu,
                noidung,
                file,
                trangthai,
                coquanbanhanh,
                noiluubanchinh,
                loaicvan,
                linhvuc,
                kieucvan,
                phongban: phongban.map(item => item),
                congvanID
            });
        }

    }

    //Checklist
    let renderCheckList = null;
    if (phongbanData) {
        renderCheckList = phongbanData.map((phongban) => (
            <div key={phongban._id} className="container">
                <Checkbox value={phongban._id} onChange={onCheckBoxChanged} defaultChecked={false} />
                {phongban.tenphongban}
            </div >
        ))
    }


    if (isLoading) {
        return "Is Loading...."
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div style={pageStyle}>
            <section id="header">
                <h3>Công văn:{congvanData.kyhieucvan} </h3>
            </section>
            <Box className="detail-box">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <p>Chủ đề:{congvanData.chudecvan}</p>
                        <p>Người nhận:{congvanData.nguoinhan}</p>
                        <p>Trích yếu:{congvanData.trichyeu}</p>
                        <p>Ngày gửi:{congvanData.ngaygui}</p>
                        <p>Cơ quan ban hành:{congvanData.coquanbanhanh}</p>
                        <p>Nơi lưu bản chính:{congvanData.noiluubanchinh}</p>
                        <p>Loại công văn:{congvanData.loaicvan.tenloaicvan}</p>
                        <p>Lĩnh vực:{congvanData.nguoinhan}</p>
                    </Grid>
                    <Grid item xs={6}>
                        <h4>Gửi tới phòng ban:</h4>
                        {renderCheckList}
                        <Button onClick={onSubmitCongVan} style={{ float: "right" }} variant="contained">Lưu</Button>
                    </Grid>
                </Grid>
            </Box>
            <div style={{ height: "16px" }} />
            <h3>{congvanData.filename}</h3>
            <Box className="detail-box">
                <Box style={{ margin: "auto" }}>
                    <Button onClick={handlePrevPage} disabled={pageNumber === 1}>
                        Previous Page
                    </Button>
                    <span> Page {pageNumber} / {numPages} </span>
                    <Button onClick={handleNextPage} disabled={pageNumber === numPages}>
                        Next Page
                    </Button>
                </Box>
                <Box style={{ outline: "1px solid gray", display: "flex", justifyContent: "center" }}>
                    <Document
                        file={`http://localhost:8000/congvans/download/${congvanData.fileurl}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page
                            scale={1.5}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            pageNumber={pageNumber} />
                    </Document>
                </Box>
                <Box style={{ margin: "auto" }}>
                    <Button onClick={handlePrevPage} disabled={pageNumber === 1}>
                        Previous Page
                    </Button>
                    <span> Page {pageNumber} / {numPages} </span>
                    <Button onClick={handleNextPage} disabled={pageNumber === numPages}>
                        Next Page
                    </Button>
                </Box>
            </Box>

        </div>
    );
};

export default CVanDetail;