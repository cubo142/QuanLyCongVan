import React from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QLThemPhongBan from './QLThemPhongBan';
import '../quanly.css'

const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    margin: "auto"
}

//Content mẫu cho datagrid
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'manager', headerName: 'Manager', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
];

const rows = [{ "id": 1, "department": "IT", "manager": "Edik Gobat", "phone": "469-942-5232" },
{ "id": 2, "department": "HR", "manager": "Ferdinand Battershall", "phone": "828-534-4666" },
{ "id": 3, "department": "Finance", "manager": "Anselm Puttock", "phone": "569-536-4421" },
{ "id": 4, "department": "Finance", "manager": "Lissie Goodship", "phone": "693-283-7035" },
{ "id": 5, "department": "Sales", "manager": "Terry Vlasenko", "phone": "772-481-7136" },
{ "id": 6, "department": "Marketing", "manager": "Ravid Garm", "phone": "653-898-9909" },
{ "id": 7, "department": "HR", "manager": "Mia Laverty", "phone": "383-790-9158" },
{ "id": 8, "department": "IT", "manager": "Elora Pooke", "phone": "682-652-8225" },
{ "id": 9, "department": "IT", "manager": "Somerset Aisthorpe", "phone": "214-953-5306" },
{ "id": 10, "department": "HR", "manager": "Antonio Polkinhorn", "phone": "620-811-9205" },
{ "id": 11, "department": "IT", "manager": "Robinetta Jerwood", "phone": "405-722-5400" },
{ "id": 12, "department": "IT", "manager": "Catie Kirkebye", "phone": "436-516-9812" },
{ "id": 13, "department": "IT", "manager": "Giacomo Drable", "phone": "425-641-9778" },
{ "id": 14, "department": "Sales", "manager": "Elyssa Wimpey", "phone": "892-789-7078" },
{ "id": 15, "department": "Sales", "manager": "Chester Luthwood", "phone": "742-986-5602" },
{ "id": 16, "department": "IT", "manager": "Poppy Boyford", "phone": "443-476-5083" },
{ "id": 17, "department": "Sales", "manager": "Adey Drissell", "phone": "679-117-8151" },
{ "id": 18, "department": "Sales", "manager": "Lorrie Lowerson", "phone": "316-845-5059" },
{ "id": 19, "department": "Sales", "manager": "Corette Masterson", "phone": "330-836-1265" },
{ "id": 20, "department": "Finance", "manager": "Lois Meredith", "phone": "612-991-3481" },
{ "id": 21, "department": "Marketing", "manager": "Georgianna Meric", "phone": "404-218-1977" },
{ "id": 22, "department": "IT", "manager": "Carlita Salleir", "phone": "351-928-0473" },
{ "id": 23, "department": "Finance", "manager": "Datha Bartolomucci", "phone": "688-347-4807" },
{ "id": 24, "department": "IT", "manager": "Meyer Capron", "phone": "738-590-9240" },
{ "id": 25, "department": "Sales", "manager": "Goldarina Fleckney", "phone": "286-874-4753" },
{ "id": 26, "department": "Marketing", "manager": "Ania Sherreard", "phone": "754-241-5396" },
{ "id": 27, "department": "Finance", "manager": "Cosme Thouless", "phone": "350-891-7037" },
{ "id": 28, "department": "Marketing", "manager": "Clari Ruoff", "phone": "475-662-7286" },
{ "id": 29, "department": "Sales", "manager": "Lorettalorna Shrawley", "phone": "932-883-9809" },
{ "id": 30, "department": "Sales", "manager": "Jacquelin Sabberton", "phone": "189-927-9259" },
{ "id": 31, "department": "Finance", "manager": "Lani Cruddace", "phone": "901-448-7814" },
{ "id": 32, "department": "Sales", "manager": "Malanie Stammirs", "phone": "751-736-8484" },
{ "id": 33, "department": "HR", "manager": "Amitie Pestricke", "phone": "426-732-1146" },
{ "id": 34, "department": "IT", "manager": "Winny Mariot", "phone": "901-438-7936" },
{ "id": 35, "department": "Marketing", "manager": "Lara Rack", "phone": "782-609-3330" },
{ "id": 36, "department": "Sales", "manager": "Susi Fearnill", "phone": "543-993-9954" },
{ "id": 37, "department": "Sales", "manager": "Noel Guttridge", "phone": "124-453-5834" },
{ "id": 38, "department": "Finance", "manager": "Murvyn Bunker", "phone": "958-653-0675" },
{ "id": 39, "department": "Finance", "manager": "Cherry Bahl", "phone": "750-332-7673" },
{ "id": 40, "department": "HR", "manager": "Kaylyn Dumingo", "phone": "424-763-8225" },
{ "id": 41, "department": "Finance", "manager": "Brenn Myatt", "phone": "815-757-6188" },
{ "id": 42, "department": "Finance", "manager": "Shandy Halshaw", "phone": "814-411-8324" },
{ "id": 43, "department": "HR", "manager": "Katie Rosoman", "phone": "645-575-4978" },
{ "id": 44, "department": "IT", "manager": "Carlye Housam", "phone": "383-390-9226" },
{ "id": 45, "department": "HR", "manager": "Erich Greer", "phone": "363-964-0426" },
{ "id": 46, "department": "Finance", "manager": "Amye Burgoyne", "phone": "239-914-5529" },
{ "id": 47, "department": "HR", "manager": "Astrid Rousell", "phone": "316-811-6814" },
{ "id": 48, "department": "Sales", "manager": "Buddie Yakuntzov", "phone": "541-109-2449" },
{ "id": 49, "department": "HR", "manager": "Cathleen Grigorkin", "phone": "170-348-9522" },
{ "id": 50, "department": "HR", "manager": "Nealson Sarjant", "phone": "304-462-3657" },
{ "id": 51, "department": "Marketing", "manager": "Lyndsay De Bischop", "phone": "343-182-1946" },
{ "id": 52, "department": "Sales", "manager": "Elfreda Cooper", "phone": "356-461-1706" },
{ "id": 53, "department": "Finance", "manager": "Gene Swainsbury", "phone": "752-783-4342" },
{ "id": 54, "department": "HR", "manager": "Adolphe Pala", "phone": "204-222-6826" },
{ "id": 55, "department": "Marketing", "manager": "Elsbeth Prozescky", "phone": "386-627-0549" },
{ "id": 56, "department": "Finance", "manager": "Gordie Lokier", "phone": "559-858-4465" },
{ "id": 57, "department": "Marketing", "manager": "Lyndsie Jacobi", "phone": "836-569-9095" },
{ "id": 58, "department": "Sales", "manager": "Christy Hamshar", "phone": "723-683-9194" },
{ "id": 59, "department": "Finance", "manager": "Piggy Heazel", "phone": "752-990-0697" },
{ "id": 60, "department": "Sales", "manager": "Addia Peasgood", "phone": "457-602-7169" },
{ "id": 61, "department": "Sales", "manager": "Danice Liggens", "phone": "232-578-0633" },
{ "id": 62, "department": "Marketing", "manager": "Helaine Creffield", "phone": "461-178-1005" },
{ "id": 63, "department": "IT", "manager": "Nefen Tackes", "phone": "240-811-2591" },
{ "id": 64, "department": "Marketing", "manager": "Virgilio Maffione", "phone": "244-182-7868" },
{ "id": 65, "department": "Finance", "manager": "Nevsa Compfort", "phone": "841-277-6829" },
{ "id": 66, "department": "Finance", "manager": "Anatollo Bosket", "phone": "293-177-0712" },
{ "id": 67, "department": "Marketing", "manager": "Taddeo Haulkham", "phone": "951-746-9143" },
{ "id": 68, "department": "HR", "manager": "Jessa Tewes", "phone": "412-228-8062" },
{ "id": 69, "department": "Finance", "manager": "Batholomew Polamontayne", "phone": "183-914-6012" },
{ "id": 70, "department": "HR", "manager": "Joela Swetenham", "phone": "400-421-3963" },
{ "id": 71, "department": "Sales", "manager": "Boothe Doull", "phone": "469-146-6832" },
{ "id": 72, "department": "HR", "manager": "Brenna Livesley", "phone": "965-674-8684" },
{ "id": 73, "department": "Marketing", "manager": "Fionna MacParlan", "phone": "434-891-8974" },
{ "id": 74, "department": "HR", "manager": "Kellsie McGiveen", "phone": "800-706-2730" },
{ "id": 75, "department": "Marketing", "manager": "Pierette Tellenbroker", "phone": "764-134-6027" },
{ "id": 76, "department": "Marketing", "manager": "Daile Theobald", "phone": "309-503-4340" },
{ "id": 77, "department": "HR", "manager": "Janie Haythorne", "phone": "485-291-3753" },
{ "id": 78, "department": "Sales", "manager": "Toddie Le Frank", "phone": "590-837-8115" },
{ "id": 79, "department": "Finance", "manager": "Darleen Magenny", "phone": "523-903-7861" },
{ "id": 80, "department": "Marketing", "manager": "Pat Farries", "phone": "487-364-0162" },
{ "id": 81, "department": "Marketing", "manager": "Tansy Wollacott", "phone": "495-457-7180" },
{ "id": 82, "department": "Finance", "manager": "Gal Mutimer", "phone": "541-488-0308" },
{ "id": 83, "department": "IT", "manager": "Pauly Clavering", "phone": "771-777-8672" },
{ "id": 84, "department": "Marketing", "manager": "Ruthann Picott", "phone": "450-256-5236" },
{ "id": 85, "department": "HR", "manager": "Giacopo Mordan", "phone": "915-943-1367" },
{ "id": 86, "department": "Sales", "manager": "Mariette Dechelette", "phone": "194-443-4345" },
{ "id": 87, "department": "Marketing", "manager": "Bartolomeo Lent", "phone": "941-316-5994" },
{ "id": 88, "department": "Sales", "manager": "Carolina Cristofari", "phone": "106-332-2883" },
{ "id": 89, "department": "IT", "manager": "Gerta Give", "phone": "702-270-9801" },
{ "id": 90, "department": "IT", "manager": "Hew Blackleech", "phone": "476-906-0954" },
{ "id": 91, "department": "Sales", "manager": "Mufi Potts", "phone": "839-466-4690" },
{ "id": 92, "department": "Finance", "manager": "Marleen Tremblay", "phone": "765-889-4342" },
{ "id": 93, "department": "Marketing", "manager": "Riva Galler", "phone": "709-375-2432" },
{ "id": 94, "department": "HR", "manager": "Kissie Sego", "phone": "546-414-7690" },
{ "id": 95, "department": "HR", "manager": "Delmor Skeldon", "phone": "537-191-1774" },
{ "id": 96, "department": "Finance", "manager": "Mycah Bendelow", "phone": "379-207-2706" },
{ "id": 97, "department": "Marketing", "manager": "Glenine Donaghie", "phone": "331-969-4945" },
{ "id": 98, "department": "HR", "manager": "Sigismund Nelle", "phone": "571-591-9501" },
{ "id": 99, "department": "Sales", "manager": "Carrissa McDonald", "phone": "104-254-5641" },
{ "id": 100, "department": "Finance", "manager": "Lonny Creavan", "phone": "900-874-5576" }];

const QLPhongBan = () => {
    return (
        <Box style={pageStyle}>
            <div className="button-row">
                <div className='space-width' />
                <div className="add-button">
                    <QLThemPhongBan />
                </div>
            </div>
            <div className='space-height' />
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </Box>
    );
};

export default QLPhongBan;