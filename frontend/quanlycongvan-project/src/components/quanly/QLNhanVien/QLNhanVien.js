import React from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QLThemNhanVien from './QLThemNhanVien';
import '../quanly.css'

const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    margin: "auto",
    width: "100%"
}

//Content mẫu cho datagrid
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    {
        field: 'fullName',
        headerName: 'Full Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'email', headerName: 'Email', width: 230 },

];

const rows = [{ "id": 1, "lastName": "McGray", "firstName": "Laurella", "department": "Engineering", "email": "lmcgray0@sitemeter.com", "phone": "635-108-5733", "address": "24 Katie Trail", "age": 18 },
{ "id": 2, "lastName": "Francello", "firstName": "Lacey", "department": "Services", "email": "lfrancello1@goo.ne.jp", "phone": "856-755-3277", "address": "11 Tennessee Court", "age": 45 },
{ "id": 3, "lastName": "Oldcroft", "firstName": "Gene", "department": "Legal", "email": "goldcroft2@jugem.jp", "phone": "301-765-9666", "address": "0602 Dahle Road", "age": 74 },
{ "id": 4, "lastName": "Vedstra", "firstName": "Tobin", "department": "Engineering", "email": "tvedstra3@pagesperso-orange.fr", "phone": "648-690-8800", "address": "5 Warrior Crossing", "age": 67 },
{ "id": 5, "lastName": "Burge", "firstName": "Ernest", "department": "Marketing", "email": "eburge4@skyrock.com", "phone": "601-505-0932", "address": "5674 Iowa Park", "age": 24 },
{ "id": 6, "lastName": "Westerman", "firstName": "Yolande", "department": "Business Development", "email": "ywesterman5@lycos.com", "phone": "185-624-2440", "address": "66335 Schlimgen Center", "age": 62 },
{ "id": 7, "lastName": "Bampkin", "firstName": "Selene", "department": "Sales", "email": "sbampkin6@dot.gov", "phone": "330-571-0496", "address": "791 Dayton Court", "age": 75 },
{ "id": 8, "lastName": "Chrishop", "firstName": "Randy", "department": "Marketing", "email": "rchrishop7@sohu.com", "phone": "274-835-5662", "address": "18386 Swallow Pass", "age": 28 },
{ "id": 9, "lastName": "Raffan", "firstName": "Brandy", "department": "Legal", "email": "braffan8@jigsy.com", "phone": "688-585-7045", "address": "9 Dapin Crossing", "age": 49 },
{ "id": 10, "lastName": "Howley", "firstName": "Sayre", "department": "Business Development", "email": "showley9@gizmodo.com", "phone": "126-658-8630", "address": "81 Helena Pass", "age": 77 },
{ "id": 11, "lastName": "Douris", "firstName": "Hartley", "department": "Research and Development", "email": "hdourisa@myspace.com", "phone": "517-510-0014", "address": "36509 Mockingbird Place", "age": 38 },
{ "id": 12, "lastName": "McGerraghty", "firstName": "Teressa", "department": "Research and Development", "email": "tmcgerraghtyb@pen.io", "phone": "284-767-1096", "address": "3484 Upham Pass", "age": 81 },
{ "id": 13, "lastName": "Conroy", "firstName": "Patience", "department": "Support", "email": "pconroyc@stumbleupon.com", "phone": "288-647-7359", "address": "5 Corscot Hill", "age": 46 },
{ "id": 14, "lastName": "Dovermann", "firstName": "Wheeler", "department": "Engineering", "email": "wdovermannd@amazon.de", "phone": "992-947-2985", "address": "580 Bluestem Park", "age": 21 },
{ "id": 15, "lastName": "Fitzroy", "firstName": "Carolus", "department": "Training", "email": "cfitzroye@tripadvisor.com", "phone": "288-208-8933", "address": "9877 Killdeer Crossing", "age": 65 },
{ "id": 16, "lastName": "Bearns", "firstName": "Kitti", "department": "Engineering", "email": "kbearnsf@wix.com", "phone": "168-922-7124", "address": "632 Almo Point", "age": 48 },
{ "id": 17, "lastName": "Meadows", "firstName": "Mariellen", "department": "Services", "email": "mmeadowsg@bizjournals.com", "phone": "166-132-8669", "address": "707 Canary Plaza", "age": 55 },
{ "id": 18, "lastName": "Stook", "firstName": "Fleurette", "department": "Legal", "email": "fstookh@opensource.org", "phone": "891-781-9696", "address": "6 Fair Oaks Lane", "age": 52 },
{ "id": 19, "lastName": "Kleisle", "firstName": "Haroun", "department": "Sales", "email": "hkleislei@webmd.com", "phone": "642-537-0799", "address": "578 Farragut Hill", "age": 72 },
{ "id": 20, "lastName": "Sedgmond", "firstName": "Glennie", "department": "Accounting", "email": "gsedgmondj@parallels.com", "phone": "900-685-3268", "address": "51263 Summerview Alley", "age": 24 },
{ "id": 21, "lastName": "Passey", "firstName": "Sergei", "department": "Engineering", "email": "spasseyk@scientificamerican.com", "phone": "850-945-6245", "address": "84387 Dovetail Parkway", "age": 55 },
{ "id": 22, "lastName": "Shawcroft", "firstName": "Amelie", "department": "Training", "email": "ashawcroftl@smh.com.au", "phone": "207-366-0184", "address": "78 Ilene Parkway", "age": 57 },
{ "id": 23, "lastName": "Slewcock", "firstName": "Reggy", "department": "Training", "email": "rslewcockm@uol.com.br", "phone": "630-761-5671", "address": "07655 Di Loreto Center", "age": 69 },
{ "id": 24, "lastName": "Andren", "firstName": "Douglass", "department": "Engineering", "email": "dandrenn@utexas.edu", "phone": "708-131-4370", "address": "48147 North Circle", "age": 62 },
{ "id": 25, "lastName": "Helder", "firstName": "Seline", "department": "Accounting", "email": "sheldero@alibaba.com", "phone": "803-295-4933", "address": "26767 Hauk Place", "age": 18 },
{ "id": 26, "lastName": "Yitzhakof", "firstName": "Nelson", "department": "Services", "email": "nyitzhakofp@nsw.gov.au", "phone": "541-376-3794", "address": "2746 Tony Lane", "age": 67 },
{ "id": 27, "lastName": "Gerrietz", "firstName": "Josefa", "department": "Engineering", "email": "jgerrietzq@reddit.com", "phone": "756-783-2064", "address": "8 Green Ridge Point", "age": 72 },
{ "id": 28, "lastName": "Bonafant", "firstName": "Marinna", "department": "Support", "email": "mbonafantr@aboutads.info", "phone": "831-613-5655", "address": "939 Waywood Pass", "age": 67 },
{ "id": 29, "lastName": "Finnemore", "firstName": "Franciska", "department": "Business Development", "email": "ffinnemores@smh.com.au", "phone": "746-260-1029", "address": "3 East Terrace", "age": 68 },
{ "id": 30, "lastName": "Grimsell", "firstName": "Genna", "department": "Research and Development", "email": "ggrimsellt@ycombinator.com", "phone": "840-583-3397", "address": "9 Karstens Place", "age": 52 },
{ "id": 31, "lastName": "Gerrish", "firstName": "Von", "department": "Business Development", "email": "vgerrishu@globo.com", "phone": "942-965-8977", "address": "511 Mockingbird Drive", "age": 54 },
{ "id": 32, "lastName": "Telling", "firstName": "Kennie", "department": "Product Management", "email": "ktellingv@jiathis.com", "phone": "237-157-5781", "address": "91832 Wayridge Point", "age": 68 },
{ "id": 33, "lastName": "Kneeshaw", "firstName": "Matty", "department": "Research and Development", "email": "mkneeshaww@sourceforge.net", "phone": "116-491-7981", "address": "651 Hazelcrest Road", "age": 64 },
{ "id": 34, "lastName": "Vedyaev", "firstName": "Kimble", "department": "Legal", "email": "kvedyaevx@netvibes.com", "phone": "459-774-1657", "address": "7991 Myrtle Lane", "age": 51 },
{ "id": 35, "lastName": "Klimentov", "firstName": "Cyndy", "department": "Marketing", "email": "cklimentovy@flickr.com", "phone": "163-619-7975", "address": "4100 Monterey Road", "age": 77 },
{ "id": 36, "lastName": "Bewick", "firstName": "Jamil", "department": "Training", "email": "jbewickz@prweb.com", "phone": "130-343-4257", "address": "75074 2nd Point", "age": 85 },
{ "id": 37, "lastName": "Waddoups", "firstName": "Kellie", "department": "Marketing", "email": "kwaddoups10@infoseek.co.jp", "phone": "290-457-8478", "address": "831 Dryden Pass", "age": 38 },
{ "id": 38, "lastName": "Reubens", "firstName": "Miof mela", "department": "Support", "email": "mreubens11@home.pl", "phone": "592-320-5881", "address": "7542 Sunfield Lane", "age": 50 },
{ "id": 39, "lastName": "Kirgan", "firstName": "Kordula", "department": "Product Management", "email": "kkirgan12@ft.com", "phone": "365-984-7477", "address": "509 Del Mar Plaza", "age": 44 },
{ "id": 40, "lastName": "Grealish", "firstName": "Leilah", "department": "Human Resources", "email": "lgrealish13@ucla.edu", "phone": "527-894-5187", "address": "9586 Saint Paul Plaza", "age": 53 },
{ "id": 41, "lastName": "Addionizio", "firstName": "Marleen", "department": "Training", "email": "maddionizio14@i2i.jp", "phone": "496-906-5829", "address": "61 Fairview Alley", "age": 59 },
{ "id": 42, "lastName": "Sambals", "firstName": "Enrichetta", "department": "Accounting", "email": "esambals15@microsoft.com", "phone": "885-551-3829", "address": "6168 Starling Circle", "age": 74 },
{ "id": 43, "lastName": "Dosdell", "firstName": "Etheline", "department": "Legal", "email": "edosdell16@slashdot.org", "phone": "776-219-1957", "address": "81817 Sauthoff Junction", "age": 46 },
{ "id": 44, "lastName": "O'Donoghue", "firstName": "Ethelind", "department": "Support", "email": "eodonoghue17@pagesperso-orange.fr", "phone": "717-931-9675", "address": "80619 Londonderry Lane", "age": 23 },
{ "id": 45, "lastName": "Jackalin", "firstName": "Addie", "department": "Marketing", "email": "ajackalin18@buzzfeed.com", "phone": "191-562-6897", "address": "73727 Claremont Center", "age": 79 },
{ "id": 46, "lastName": "McKissack", "firstName": "Geralda", "department": "Engineering", "email": "gmckissack19@bloomberg.com", "phone": "534-149-1418", "address": "76 Dorton Terrace", "age": 55 },
{ "id": 47, "lastName": "Lob", "firstName": "Melisse", "department": "Services", "email": "mlob1a@archive.org", "phone": "667-311-8592", "address": "5 Redwing Court", "age": 23 },
{ "id": 48, "lastName": "Connaughton", "firstName": "Barbaraanne", "department": "Marketing", "email": "bconnaughton1b@dyndns.org", "phone": "210-713-7790", "address": "79 Mendota Circle", "age": 80 },
{ "id": 49, "lastName": "Sandy", "firstName": "Nancee", "department": "Product Management", "email": "nsandy1c@oakley.com", "phone": "932-352-2762", "address": "40161 Parkside Park", "age": 63 },
{ "id": 50, "lastName": "Arckoll", "firstName": "Temp", "department": "Product Management", "email": "tarckoll1d@reuters.com", "phone": "292-336-8023", "address": "64526 Commercial Alley", "age": 33 },
{ "id": 51, "lastName": "Riding", "firstName": "Otto", "department": "Research and Development", "email": "oriding1e@theatlantic.com", "phone": "497-640-8857", "address": "94 Toban Center", "age": 73 },
{ "id": 52, "lastName": "Knibb", "firstName": "Aloin", "department": "Product Management", "email": "aknibb1f@weibo.com", "phone": "714-391-8556", "address": "7464 Heath Park", "age": 46 },
{ "id": 53, "lastName": "Vear", "firstName": "Vallie", "department": "Accounting", "email": "vvear1g@gmpg.org", "phone": "142-999-5168", "address": "1 Harper Terrace", "age": 61 },
{ "id": 54, "lastName": "Dunsmore", "firstName": "Marchelle", "department": "Support", "email": "mdunsmore1h@simplemachines.org", "phone": "241-149-4008", "address": "1 Aberg Plaza", "age": 44 },
{ "id": 55, "lastName": "Myrtle", "firstName": "Kayley", "department": "Engineering", "email": "kmyrtle1i@gnu.org", "phone": "701-289-4932", "address": "9239 American Ash Trail", "age": 83 },
{ "id": 56, "lastName": "Blankhorn", "firstName": "Rudiger", "department": "Training", "email": "rblankhorn1j@ucoz.ru", "phone": "763-355-6212", "address": "223 Pine View Hill", "age": 80 },
{ "id": 57, "lastName": "McFeat", "firstName": "Kaitlin", "department": "Support", "email": "kmcfeat1k@cloudflare.com", "phone": "909-541-8686", "address": "257 Delladonna Way", "age": 50 },
{ "id": 58, "lastName": "Coombs", "firstName": "Mellicent", "department": "Legal", "email": "mcoombs1l@wix.com", "phone": "422-682-8490", "address": "5101 Carey Parkway", "age": 74 },
{ "id": 59, "lastName": "Willows", "firstName": "Gordon", "department": "Accounting", "email": "gwillows1m@163.com", "phone": "959-487-9008", "address": "80 Crest Line Lane", "age": 64 },
{ "id": 60, "lastName": "Casa", "firstName": "Fayth", "department": "Marketing", "email": "fcasa1n@rakuten.co.jp", "phone": "491-819-0403", "address": "5 Cherokee Alley", "age": 68 },
{ "id": 61, "lastName": "Lougheid", "firstName": "Arch", "department": "Research and Development", "email": "alougheid1o@goo.gl", "phone": "131-457-4699", "address": "3 Iowa Street", "age": 54 },
{ "id": 62, "lastName": "Oller", "firstName": "Jerrine", "department": "Engineering", "email": "joller1p@yolasite.com", "phone": "179-140-2094", "address": "285 Anniversary Terrace", "age": 28 },
{ "id": 63, "lastName": "Clutram", "firstName": "Hew", "department": "Sales", "email": "hclutram1q@prnewswire.com", "phone": "116-683-5186", "address": "212 Messerschmidt Point", "age": 33 },
{ "id": 64, "lastName": "Jevons", "firstName": "Marlin", "department": "Human Resources", "email": "mjevons1r@macromedia.com", "phone": "848-517-8248", "address": "997 Pawling Court", "age": 43 },
{ "id": 65, "lastName": "de Merida", "firstName": "Gil", "department": "Business Development", "email": "gdemerida1s@umich.edu", "phone": "638-325-4984", "address": "75816 Lyons Pass", "age": 73 },
{ "id": 66, "lastName": "Greystock", "firstName": "Dolph", "department": "Accounting", "email": "dgreystock1t@networkadvertising.org", "phone": "214-465-9862", "address": "8770 Bonner Point", "age": 83 },
{ "id": 67, "lastName": "Haggleton", "firstName": "Cherise", "department": "Legal", "email": "chaggleton1u@t-online.de", "phone": "553-682-8954", "address": "30 6th Lane", "age": 41 },
{ "id": 68, "lastName": "Scowcraft", "firstName": "Zachery", "department": "Product Management", "email": "zscowcraft1v@hc360.com", "phone": "342-780-2400", "address": "88902 Caliangt Drive", "age": 79 },
{ "id": 69, "lastName": "McInnerny", "firstName": "Jens", "department": "Human Resources", "email": "jmcinnerny1w@forbes.com", "phone": "780-415-3957", "address": "8614 Pond Point", "age": 63 },
{ "id": 70, "lastName": "Paulo", "firstName": "Ramonda", "department": "Business Development", "email": "rpaulo1x@yellowpages.com", "phone": "431-114-8567", "address": "8157 Sunnyside Trail", "age": 27 },
{ "id": 71, "lastName": "Kighly", "firstName": "Hanson", "department": "Legal", "email": "hkighly1y@mapquest.com", "phone": "318-650-9546", "address": "1498 Dexter Trail", "age": 77 },
{ "id": 72, "lastName": "Fitzgerald", "firstName": "Monroe", "department": "Human Resources", "email": "mfitzgerald1z@mashable.com", "phone": "142-733-4365", "address": "0359 Melody Trail", "age": 44 },
{ "id": 73, "lastName": "Steffans", "firstName": "Auberta", "department": "Research and Development", "email": "asteffans20@webnode.com", "phone": "313-685-3867", "address": "007 Sullivan Drive", "age": 24 },
{ "id": 74, "lastName": "Gilsthorpe", "firstName": "Tandi", "department": "Training", "email": "tgilsthorpe21@kickstarter.com", "phone": "918-784-6770", "address": "29 Drewry Junction", "age": 29 },
{ "id": 75, "lastName": "Tait", "firstName": "Lexi", "department": "Product Management", "email": "ltait22@webeden.co.uk", "phone": "635-581-6996", "address": "8 Rutledge Parkway", "age": 72 },
{ "id": 76, "lastName": "Janse", "firstName": "Phebe", "department": "Services", "email": "pjanse23@pcworld.com", "phone": "308-279-1537", "address": "6917 Hoard Terrace", "age": 69 },
{ "id": 77, "lastName": "Bambra", "firstName": "Octavia", "department": "Engineering", "email": "obambra24@loc.gov", "phone": "195-704-7631", "address": "616 Evergreen Park", "age": 41 },
{ "id": 78, "lastName": "Antrim", "firstName": "Shay", "department": "Support", "email": "santrim25@typepad.com", "phone": "324-359-2596", "address": "34273 Meadow Vale Circle", "age": 69 },
{ "id": 79, "lastName": "Tather", "firstName": "Theo", "department": "Marketing", "email": "ttather26@histats.com", "phone": "312-426-9554", "address": "303 Heath Street", "age": 55 },
{ "id": 80, "lastName": "Chesterman", "firstName": "Cordula", "department": "Sales", "email": "cchesterman27@sbwire.com", "phone": "215-728-4931", "address": "01391 Randy Drive", "age": 74 },
{ "id": 81, "lastName": "Cuerdale", "firstName": "Brnaba", "department": "Services", "email": "bcuerdale28@epa.gov", "phone": "663-579-7530", "address": "18616 Upham Trail", "age": 45 },
{ "id": 82, "lastName": "Christaeas", "firstName": "Garald", "department": "Services", "email": "gchristaeas29@godaddy.com", "phone": "848-413-4975", "address": "1573 School Court", "age": 68 },
{ "id": 83, "lastName": "Larkin", "firstName": "Terese", "department": "Business Development", "email": "tlarkin2a@gmpg.org", "phone": "482-970-2138", "address": "27568 Vernon Way", "age": 85 },
{ "id": 84, "lastName": "Skidmore", "firstName": "Bendicty", "department": "Legal", "email": "bskidmore2b@biblegateway.com", "phone": "799-601-3717", "address": "7 Farmco Point", "age": 39 },
{ "id": 85, "lastName": "Connealy", "firstName": "Juliana", "department": "Accounting", "email": "jconnealy2c@statcounter.com", "phone": "455-607-8600", "address": "12300 Monterey Avenue", "age": 47 },
{ "id": 86, "lastName": "Perico", "firstName": "Lelah", "department": "Legal", "email": "lperico2d@bbb.org", "phone": "480-104-8302", "address": "1 Birchwood Street", "age": 29 },
{ "id": 87, "lastName": "Hurtado", "firstName": "Gennie", "department": "Training", "email": "ghurtado2e@csmonitor.com", "phone": "380-686-4758", "address": "8 Charing Cross Way", "age": 59 },
{ "id": 88, "lastName": "Lydster", "firstName": "Nelli", "department": "Business Development", "email": "nlydster2f@blinklist.com", "phone": "539-959-5638", "address": "75 East Center", "age": 66 },
{ "id": 89, "lastName": "Scarff", "firstName": "Marti", "department": "Marketing", "email": "mscarff2g@vistaprint.com", "phone": "535-652-7611", "address": "962 Heath Place", "age": 29 },
{ "id": 90, "lastName": "Scammonden", "firstName": "Edita", "department": "Product Management", "email": "escammonden2h@japanpost.jp", "phone": "861-753-9654", "address": "74599 Village Place", "age": 80 },
{ "id": 91, "lastName": "Wrightim", "firstName": "Lazar", "department": "Research and Development", "email": "lwrightim2i@arstechnica.com", "phone": "666-886-1868", "address": "7 Corben Trail", "age": 54 },
{ "id": 92, "lastName": "Elloway", "firstName": "Kitty", "department": "Legal", "email": "kelloway2j@drupal.org", "phone": "973-573-9438", "address": "74 Anthes Way", "age": 39 },
{ "id": 93, "lastName": "MacCourt", "firstName": "Anton", "department": "Services", "email": "amaccourt2k@usatoday.com", "phone": "875-135-0396", "address": "94260 Canary Avenue", "age": 40 },
{ "id": 94, "lastName": "Knowlys", "firstName": "Loretta", "department": "Services", "email": "lknowlys2l@china.com.cn", "phone": "829-308-4215", "address": "5 Warner Hill", "age": 35 },
{ "id": 95, "lastName": "Beeson", "firstName": "Thorpe", "department": "Services", "email": "tbeeson2m@umich.edu", "phone": "974-537-8588", "address": "40 Quincy Park", "age": 59 },
{ "id": 96, "lastName": "Sandercroft", "firstName": "Freddie", "department": "Marketing", "email": "fsandercroft2n@ask.com", "phone": "340-755-2229", "address": "07 Hudson Circle", "age": 54 },
{ "id": 97, "lastName": "Raleston", "firstName": "Silva", "department": "Sales", "email": "sraleston2o@ebay.com", "phone": "953-640-2293", "address": "3045 Sugar Road", "age": 32 },
{ "id": 98, "lastName": "O'Devey", "firstName": "Marlow", "department": "Research and Development", "email": "modevey2p@twitpic.com", "phone": "761-895-1546", "address": "978 Katie Center", "age": 26 },
{ "id": 99, "lastName": "Anthona", "firstName": "Koralle", "department": "Engineering", "email": "kanthona2q@i2i.jp", "phone": "409-281-6684", "address": "342 Express Way", "age": 84 },
{ "id": 100, "lastName": "Kellick", "firstName": "Waldo", "department": "Research and Development", "email": "wkellick2r@irs.gov", "phone": "292-953-0819", "address": "45843 Merchant Lane", "age": 48 }];

const QLNhanVien = () => {
    return (
        <Box style={pageStyle}>
            <div className="button-row">
                <div className='space-width' />
                <div className="add-button">
                    <QLThemNhanVien />
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

export default QLNhanVien;