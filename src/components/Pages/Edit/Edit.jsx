import './Edit.css'
import bagplus from '../../../img/Group.png'
import location from '../../../img/location.png'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PickersDay from '@mui/lab/PickersDay';
import DatePicker from '@mui/lab/DatePicker';
import CalendarPickerSkeleton from '@mui/lab/CalendarPickerSkeleton';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import Checkbox from '@mui/material/Checkbox';

/* data */
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function fakeFetch(date, { signal }) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        const daysInMonth = getDaysInMonth(date);
        const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));
  
        resolve({ daysToHighlight });
      }, 500);
  
      signal.onabort = () => {
        clearTimeout(timeout);
        reject(new DOMException('aborted', 'AbortError'));
      };
    });
  }

  const initialValue = new Date();
/* =============================== */


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    p: 2,
  };

  const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = [
    '???????????????? ????????',
    '????????????????????',
    'Class field trip',
    'AP exam',
    'Yearbook',
  ];
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

/* =============================================== */

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  /* ======= Tabs Two coding ======= */
  function a11yPropss(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
function a11yPropse(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  /* =============================== */
  /* ==== Table ========== */
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  function createData(name, parents, phone, email, status, status1) {
    return { name, parents, phone, email, status, status1 };
  }
  
  const rows = [
    createData('?????????????? ????????????', '????????', '+998 99 888 88 88', 'Vasiliy.Chernov@gmail.com', '??????????????????????', '????????????????????????????????'),
    createData('???????????????? ??????????????', '????????', '+998 99 888 99 99', 'Victoria.Chehrnova@gmail.com', '??????????????????????', '????????????????????????????????' )
  ];

  /* ======================================= */
  function createDatas(vac, text, data, statuss) {
    return { vac, text, data, statuss };
  }
  
  const rowss = [
    createDatas('?????? - 5', '?????????????? ???? ????????????????????????', '10.10.2012', '????????????'),
    createDatas('?????? - ??-5 ', '?????????????? ???? ???????????????? ?? ??????????????????', '10.10.2012', '????????????'),
    createDatas('?????? - 5', '?????????????? ???? ??????????????????', '10.10.2012', '????????????'),
    createDatas('?????? - ??-6', '?????????????? ???? ???????????????? ?? ??????????????????', '10.10.2012', '???? ????????????')
  ];
  /* ==================================================== */
  
function createDataas(language, protsent, date, firstname, numbers, protsets) {
    return { language, protsent, date, firstname, numbers, protsets };
  }
  
  const rowsss = [
    createDataas('????????????????????', '96%', '31.12.2020', '??.?? ??????????', '5.0', '80%'),
    createDataas('??????????????', '89%', '31.12.2020', '??.?? ??????????', '4.0', '75%'),
    createDataas('????????????????', '69%', '31.12.2020', '??.?? ??????????', '4.0', '94%'),
    createDataas('????????????', '90%', '31.12.2020', '??.?? ??????????', '5.8', '82'),
    createDataas('??????????????????', '84%', '31.12.2020', '??.?? ??????????', '4.1', '73%'),
    createDataas('??????????????', '76%', '31.12.2020', '??.?? ??????????', '39', '97%'),
    createDataas('??????????', '71%', '31.12.2020', '??.?? ??????????', '5', '88%'),
    createDataas('????????????????????', 'Topic 8', '31.12.2020', '??.?? ??????????', '4.6', '97%'),
    createDataas('??????????', '71%', '31.12.2020', '??.?? ??????????', '5' ,'73%'),
    createDataas('????????????????????', 'Topic 8', '31.12.2020', '??.?? ??????????', '4', '85%')
  ];
  function createRowData(language, texts, date, status) {
    return { language, texts, date, status };
  }
  
  const rowdatas = [
    createRowData('????????????????????', 'Modal Verbs, 15-16 ??????.', '31.12.2020' , '????????'),
    createRowData('??????????????', '??????. 10-20, 20-25 ??????.', '31.12.2020', '???? ????????'),
    createRowData('????????????????', 'Modal Verbs, 15-16 ??????.', '31.12.2020' , '????????'),
    createRowData('????????????', '??????. 10-20, 20-25 ??????.', '31.12.2020' , '???? ????????'),
    createRowData('??????????????????', 'Modal Verbs, 15-16 ??????.', '31.12.2020' , '????????'),
    createRowData('??????????????', '??????. 10-20, 20-25 ??????.', '31.12.2020' , '???? ????????'),
    createRowData('??????????', 'Modal Verbs, 15-16 ??????.', '31.12.2020' , '????????'),
    createRowData('????????????????????', '??????. 10-20, 20-25 ??????.', '31.12.2020' , '???? ????????'),
  ];

  function createRowDatas(language, protsent, date) {
    return { language, protsent, date };
  }
  
  const rowdata = [
    createRowDatas('????????????????????', '', 'Description text will be here'),
    createRowDatas('??????????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('????????????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('????????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('??????????????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('??????????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('??????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('????????????????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('??????????', 'Social & Emotional', 'Description text will be here'),
    createRowDatas('????????????????????', 'Social & Emotional', 'Description text will be here')
  ];

  function createRowsData(game, days, date, teacher) {
    return { game, days, date, teacher };
  }
  
  const rowsdata = [
    createRowsData('??????????????', '????', '15:00', '??.?? ??????????'),
    createRowsData('??????????????????', '????', '15:00', '??.?? ??????????'),
    createRowsData('????????????????????????????????', '????, ????', '15:00', '??.?? ??????????'),
    createRowsData('????????????????????', '????', '15:00', '??.?? ??????????'),
  ];

  function createMoneyData(game, days, money, date, result) {
    return { game, days, money, date, result};
  }
  
  const moneys = [
    createMoneyData('???????????????? ????????', '01.02.2021 9:21', '50.000 ??????', '01.02.2021 9:21', '????????????????'),
    createMoneyData('????????????????????', '14.11.2021 17:00', '25.000 ??????', '01.02.2021 9:21', '????????????????'),
    createMoneyData('Class field trip', '08.03.2021 13:34', '15.000 ??????', '01.02.2021 9:21', '????????????????'),
    createMoneyData('AP exam', '10.09.2021 10:46', '10.000 ??????', '01.02.2021 9:21', '????????????????'),
    createMoneyData('Yearbook', '31.07.2021 11:59', '50.000 ??????', '01.02.2021 9:21', '???? ????????????????'),
 
  ];
  /* ==================== */

  /* dars jadval */
  const lessons = [
      {oclock: '08:30 - 09:15',lesson:'????????????????????', classNumber: '5??', room:'306'},
      {oclock: '09:30 - 10:15',lesson:'??????????????', classNumber: '5??', room:'100'},
      {oclock: '10:30 - 11:15',lesson:'????????????????????', classNumber: '5??', room:'85'},
      {oclock: '11:30 - 12:15',lesson:'??????????????????', classNumber: '6??', room:'306'},
      {oclock: '11:30 - 12:15',lesson:'??????????????', classNumber: '6??', room:'100'},
      {oclock: '11:30 - 12:15',lesson:'??????????????', classNumber: '6??', room:'100'},
  ]

  const lessons1 = [
    {oclock: '08:30 - 09:15',lesson:'????????????????????', classNumber: '5??', room:'306'},
    {oclock: '09:30 - 10:15',lesson:'??????????????', classNumber: '5??', room:'100'},
    {oclock: '10:30 - 11:15',lesson:'????????????????????', classNumber: '5??', room:'85'},
    {oclock: '11:30 - 12:15',lesson:'??????????????????', classNumber: '6??', room:'306'},
    {oclock: '11:30 - 12:15',lesson:'??????????????', classNumber: '6??', room:'100'},
]

const lessons2 = [
    {oclock: '08:30 - 09:15',lesson:'????????????????????', classNumber: '5??', room:'306'},
    {oclock: '09:30 - 10:15',lesson:'??????????????', classNumber: '5??', room:'100'},
]

const protsent = [
    {value1:'????????????????????????????????', value2:'81.1%', value3: '9.4%'},
    {value1:'??????????????????', value2:'74,5%', value3: '5.0%'},
    {value1:'???????????? ????????????????????????', value2:'69.9%', value3: '5.0%'}
]

const info = [
    {infoId: 1, infoTitle: 'Our chatting website provides free random chat rooms where you can have live chat with single girls and boys.'},
    {infoId: 2, infoTitle: 'Our chatting website provides free random chat rooms where you can have live chat with single girls and boys.'},
    {infoId: 3, infoTitle: 'Our chatting website provides free random chat rooms where you can have live chat with single girls and boys.'},
    {infoId: 4, infoTitle: 'Our chatting website provides free random chat rooms where you can have live chat with single girls and boys.'},
    {infoId: 5, infoTitle: 'Our chatting website provides free random chat rooms where you can have live chat with single girls and boys.'},
]


const tablesNumber = [
    {numbers1: 1,numbers2: 2, numbers3: 3, numbers4: 4, numbers5: 5},
    {numbers1: 8,numbers2: 9, numbers3: 10, numbers4: 11, numbers5: 12},
    {numbers1: 15,numbers2: 16, numbers3: 17, numbers4: 18, numbers5: 19},
    {numbers1: 22,numbers2: 23, numbers3: 24, numbers4: 25, numbers5: 26}
  ]
  const tablesData = [
    {dataName:'???????????????? 2020'},
    {dataName:'?????????????? 2020'},
    {dataName:'???????????? 2020'},
    {dataName:'?????????????? 2020'},
    {dataName:'???????????? 2021'},
    {dataName:'?????????????? 2021'},
    {dataName:'???????? 2021'},
    {dataName:'???????????? 2021'},
    {dataName:'?????? 2021'},
    {dataName:'???????? 2021'},
  ]
  
  const tableDatas1 = [
    {class: '????1', lesson: '??????????????????', clock:'8:30', room:'??????????????: 306'},
    {class: '????2', lesson: '???????????????????? ????????', clock:'8:50', room:'??????????????: 205'},
    {class: '????3', lesson: '????????????', clock:'9:40', room:'??????????????: 85'},
    {class: '????4', lesson: '??????????????', clock:'11:40', room:'??????????????: 15'},
    {class: '????5', lesson: '??????????????????????', clock:'11:40', room:'????????????????'},
    {class: '????6', lesson: '??????????????', clock:'11:40', room:'??????????????: 8'},
    {class: '????6', lesson: '???????????????? ??????', clock:'11:40', room:'??????????????: 101'},
  ]
  const tableDatas2 = [
    {class: '????1', lesson: '????????????', clock:'8:30', room:'??????????????: 85'},
    {class: '????2', lesson: '??????????????', clock:'8:50', room:'??????????????: 306'},
    {class: '????3', lesson: '?????????????? ????????', clock:'9:40', room:'??????????????: 99'},
    {class: '????4', lesson: '????????????????????', clock:'10:50', room:'??????????????: 99'},
    {class: '????5', lesson: '????????', clock:'10:50', room:'????????????????????'},
    {class: '????6', lesson: '??????????????', clock:'10:50', room:'??????????????: 8'}
  ]
  const tableDatas3 = [
    {class: '????1', lesson: '??????????????', clock:'8:30', room:'??????????????: 8'},
    {class: '????1', lesson: '??????????????????????', clock:'8:50', room:'??????????????: 300'},
    {class: '????1', lesson: '??????????????????', clock:'9:40', room:'??????????????: 306'},
    {class: '????1', lesson: '????????????????', clock:'10:50', room:'??????????????: 15'},
    {class: '????1', lesson: '?????????????? ????????', clock:'11:40', room:'??????????????: 99'},
    {class: '????1', lesson: '??????????????????????', clock:'12:30', room:'????????????????'},
  ]
  const tableDatas4 = [
    {class: '5??', lesson: '????????????????????', clock:'8:30', room:'??????????????: 106'},
    {class: '7??', lesson: '??????????????', clock:'8:50', room:'??????????????: 206'},
    {class: '8??', lesson: '??????????????', clock:'9:40', room:'??????????????: 306'},
    {class: '5??', lesson: '????????????????????', clock:'8:30', room:'??????????????: 106'},
    {class: '7??', lesson: '??????????????', clock:'8:50', room:'??????????????: 206'},
    {class: '8??', lesson: '??????????????', clock:'9:40', room:'??????????????: 306'}
  ]
  
  const tableTh =[
    {weekDay:'??????????????????????', date:'16/04'},
    {weekDay:'??????????????', date:'17/04'},
    {weekDay:'??????????', date:'18/04'},
    {weekDay:'??????????????', date:'19/04'},
    {weekDay:'??????????????', date:'20/04'}
  ]
 /* =========== */

const Edit = () => {

   /* data */
   const requestAbortController = React.useRef(null);
   const [isLoading, setIsLoading] = React.useState(false);
   const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
   const [value, setValue] = React.useState(initialValue);

   const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };

   /* ============================ */


    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [valueChange, setValueChange] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValueChange(newValue);
    };

    const [values, setValues] = React.useState(0);
    const handleChanges = (events, newValues) => {
      setValues(newValues);
    };

    const [valueses, setValueses] = React.useState(0);

    const handleChangeses = (event, newValue) => {
        setValueses(newValue);
    };

    const [valueTable, setValueTable] = React.useState(0);

    const handleChangeTable = (event, newValue) => {
      setValueTable(newValue);
    };

    return (
        <>
            <section className="edits">
                <div className="container">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="??????????????" {...a11yProps(0)} />
                        <Tab label="????????????????????" {...a11yProps(1)} />
                        <Tab label="????????????????????????" {...a11yProps(2)} />
                        <Tab label="????????????????????????" {...a11yProps(3)} />
                        <Tab label="????????????????????????????" {...a11yProps(4)} />
                        <Tab label="????????????" {...a11yProps(5)} />
                        <Tab label="??????????" {...a11yProps(6)} />
                        </Tabs>
                    </Box>
{/* ===================================================TabPanel 0======================================================================== */}
                    <TabPanel className='tabpanel' value={valueChange} index={0}>
                        <div className="fotos-box">
                            <div className="heading-box">
                                <h4>????????</h4>
                                <h4>???????????? ????????????</h4>
                            </div>
                            <hr />
                           <div className="img-big-boxs">
                              <div className="imags-boxs">
                                <img  src="https://picsum.photos/200/200" alt="image" />
                              </div>
                              <div className="imags-info-box">
                                  <ul className="info-list">
                                      <li><h4 className='info-text'><span className='info-spans'>??????:</span>    ?????????????? ?????????????????? ????????????????????</h4></li>
                                      <li><p className='info-text'><span className='info-spans'>???????? ????????????????:</span>    09.09.1999</p></li>
                                      <li><p className='info-text'><span className='info-spans'>??????????????:</span>    +998 90 900 00 00</p></li>
                                      <li><p className='info-text'><span className='info-spans'>??????????:</span>  10</p></li>
                                  </ul>
                                  <ul className='info-list2'>
                                      <li><p className='info-text'><span className='info-spans'>??????:</span>   ??????????????</p></li>
                                      <li><p className='info-text'><span className='info-spans'>??????????????????????????:</span>   ??????????????</p></li>
                                      <li><p className='info-text'><span className='info-spans'>??????????:</span>   svetlana.@gmail.com</p></li>
                                      <li><p className='info-text'><span className='info-spans'>??????????????:</span>   ?????????? ???? ??????????????</p></li>
                                  </ul>
                                  <p className='info-text info-texts'><span className='info-spans'>???????????? ????????????????:</span>   ??????????????</p>
                              </div>
                           </div>
                        </div>
                        <div className="adreess-box">
                            <div className="adres-title-box">
                                <h4 className="adres-heading">????????????</h4>
                            </div>
                            <hr />
                            <ul className="adres-list">
                                <li>
                                    <p className='adres-text'><span className='adres-span'>????????????:</span>   ????????????????????</p>
                                </li>
                                <li>
                                    <p className='adres-text'><span className='adres-span'>???????????? (???????????? 1):  </span>?????????? ???????????????? ???????????? 1 ?? ?????????????????????????? <img className='adres-img' src={location} width={25} height={25} alt="" /></p>
                                </li>
                                <li>
                                <p className='adres-text'><span className='adres-span'>???????????? (???????????? 2):</span>   ?????????? ???????????????? ???????????? 2 ?? ?????????????????????????? <img  src={location} width={25} height={25} alt="" /></p>
                                </li>
                            </ul>
                           
                        </div>
                        <div className="tabs-box">
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={values} onChange={handleChanges} aria-label="basic tabs example">
                                        <Tab label="???????????????? ??????????????????" {...a11yPropss(0)} />
                                        <Tab label="???????????????????? ????????????????" {...a11yPropss(1)} />
                                        <Tab label="?????????????????????? ????????????????????????????" {...a11yPropss(2)} />
                                        <Tab label="????????????????????" {...a11yPropss(3)} />
                                    </Tabs>
                                </Box>
                                <TabPanel className='tabpanel' value={values} index={0}>
                                    <TableContainer className='tabcontainer' component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                        <TableRow className='tabrow'>
                                            <StyledTableCell>?????? ??????????????????/ ??????</StyledTableCell>
                                            <StyledTableCell className='tablecell' align="right">????????????????</StyledTableCell>
                                            <StyledTableCell className='tablecell' align="right">????????????????/????????????</StyledTableCell>
                                            <StyledTableCell align="right">????????????????</StyledTableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell className='tabcell' component="th" scope="row">
                                                    <span className='names'>{row.name}</span> <br /> <span className='parent'>{row.parents}</span>
                                                </StyledTableCell>
                                                <StyledTableCell className='tabcells' align="right"><span className='names'>{row.phone}</span> <br /> <span className='parent'>{row.email}</span></StyledTableCell>
                                                <StyledTableCell className='tabcells' align="right"><span className='names'>{row.status}</span>  <br /><span className='parent'>{row.status1}</span></StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                                    <IconButton className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                    </TableContainer>
                                </TabPanel>
                                <TabPanel className="tabpanel" value={values} index={1}>
                                  <TableContainer className='tabcontainer' component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                        <TableRow className='tabrow'>
                                            <StyledTableCell>?????? ??????????????????/ ??????</StyledTableCell>
                                            <StyledTableCell className='tablecell' align="right">????????????????</StyledTableCell>
                                            <StyledTableCell className='tablecell' align="right">????????????????/????????????</StyledTableCell>
                                            <StyledTableCell align="right">????????????????</StyledTableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell className='tabcell' component="th" scope="row">
                                                    <span className='names'>{row.name}</span> <br /> <span className='parent'>{row.parents}</span>
                                                </StyledTableCell>
                                                <StyledTableCell className='tabcells' align="right"><span className='names'>{row.phone}</span> <br /> <span className='parent'>{row.email}</span></StyledTableCell>
                                                <StyledTableCell className='tabcells' align="right"><span className='names'>{row.status}</span>  <br /><span className='parent'>{row.status1}</span></StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                                    <IconButton className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                    <div className="btn-boxs">
                                    <Button className='btn-contact' font-size="16px" className='btn' variant="contained" color="error" size="small">
                                        <span className='spans'>+</span> ???????????????? ??????????????
                                    </Button>
                                    </div>
                                    </TableContainer>
                                </TabPanel>
                                <TabPanel value={values} index={2}>
                                    <div className="medical-box">
                                        <div className="medical-big-box">
                                            <div className="medical-small-box">
                                                <h3>?????????????????????? ?????????????????????? ????????????????????????????</h3>
                                                <p><span><img className='bag-img' src={bagplus} alt="image" /></span>   <span className='infoo-span'>?????????????????? ?????????? ???????????? ???? ???????????????? ???? ????????????</span></p>
                                                <h3>????????????</h3>
                                                <div className="medicals-box">
                                                    <h2>0/9</h2>
                                                    <p>???????????????? ?????????????????? ????-???? ???????????????? ????????. <br />
                                                     ?????????????????????????????? ?????????????? ???? ???????????????????????? ??????????.</p>
                                                </div>
                                                
                                            </div>
                                            <div className="medical-btn-box">
                                            <Button className='btn-medic' font-size="16px" className='btn' variant="contained" color="error"      size="small">
                                                    <span className='spans'>+</span> ???????????????? ??????????????
                                            </Button>
                                            </div>
                                        </div>
                                        <div className="medical-big-box medic-box2">
                                            <div className="medical-small-box1">
                                                <h4>???????????????? ??????????</h4>
                                                <div className="medical-doctor-box">
                                                    <img src="https://picsum.photos/70/70" alt="image" />
                                                    <div className="doctor-info">
                                                        <p>????????????. ???????????????? ????????????????????</p>
                                                        <p>+998 90 909 09 09</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="medical-btn-box">
                                            <Button className='btn-medic' font-size="16px" className='btn' variant="contained" color="error"      size="small">
                                                    <span className='spans'>+</span> ???????????????? ??????????????
                                            </Button>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="tabpanel" value={values} index={3}>
                                    <TableContainer className='tablecontainers' component={Paper}>
                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                            <TableHead>
                                            <TableRow className='tabrow'>
                                                <StyledTableCell className='tablesscel'>??????????????</StyledTableCell>
                                                <StyledTableCell className='tablesscel' align="right">????????????????</StyledTableCell>
                                                <StyledTableCell className='tablesscel' align="right">????????</StyledTableCell>
                                                <StyledTableCell className='tablesscel' align="right">????????????</StyledTableCell>
                                                <StyledTableCell className='tablesscel' align="right">????????????????</StyledTableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody className='tablebody'>
                                            {rowss.map((row) => (
                                                <StyledTableRow key={row.vac}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <span className="vac-span vacc-span">{row.vac}</span>
                                                    </StyledTableCell>
                                                    <StyledTableCell className='tabcells' align="right"><span className="vac-span">{row.text}</span></StyledTableCell>
                                                    <StyledTableCell className='tabcells' align="right"><span className="vac-span">{row.data}</span></StyledTableCell>
                                                    <StyledTableCell className='tabcells' align="right"><span className="vac-spans">{row.statuss}</span></StyledTableCell>
                                                    <StyledTableCell className='tabcells' align="right">
                                                        <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TabPanel>
                            </Box>
                        </div>
                    </TabPanel>
{/* =========================================================================================================================== */}
{/* ===================================================TabPanel 1======================================================================== */}
                    <TabPanel className='tabpanel' value={valueChange} index={1}>
                         <div className="data-box">
                             <div className="data-small-box">
                               <IconButton className='next-btn'> <i class='bx bx-chevron-left'></i></IconButton> <span>01 ???????????????? 2021</span> - <span>07 ???????????????? 2021</span><IconButton className='next-btn'> <i class='bx bx-chevron-right' ></i></IconButton>  
                             </div>
                         </div>
                         <div className="lesson-big-box">
                            <div className="lesson-small-box">
                                <ul className="lesson-list">
                                    <div className="title-box">
                                        <div className="divs">
                                            <h3>????</h3> 
                                            <span className='day-span'>??????????????</span>
                                        </div>
                                        <p>1 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons.map(lesson =>(
                                        <li>
                                        <div className="datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lesson-small-box">
                                <ul className="lesson-list">
                                    <div className="title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>2 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons.map(lesson =>(
                                        <li>
                                        <div className="datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lesson-small-box">
                                <ul className="lesson-list">
                                    <div className="title-boxs">
                                        <h3>??????????</h3> 
                                        <p>3 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons.map(lesson =>(
                                        <li>
                                        <div className="datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lesson-small-box">
                                <ul className="lesson-list">
                                    <div className="title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>4 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons1.map(lesson =>(
                                        <li>
                                        <div className="datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lesson-small-box">
                                <ul className="lesson-list">
                                    <div className="title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>5 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons1.map(lesson =>(
                                        <li>
                                        <div className="datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lesson-small-box">
                                <ul className="lesson-list">
                                    <div className="title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>5 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons1.map(lesson =>(
                                        <li>
                                        <div className="datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lesson-small-box">
                                <ul className="lesson-list">
                                    <div className="title-boxs">
                                        <h3>??????????????????????</h3> 
                                        <p>7 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons2.map(lesson =>(
                                        <li>
                                        <div className="datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                         </div>
                    </TabPanel>
{/* =========================================================================================================================== */}
{/* ===================================================TabPanel 2======================================================================== */}
                    <TabPanel value={valueChange} index={2}>
                    <div className="stuffEdit-big-box">
                      <div className="stuffEdit-datas-box">
                        <span><i class='bx bx-chevron-left'></i></span>
                        <h4>???????????? 2021</h4>
                        <span><i class='bx bx-chevron-right' ></i></span>
                      </div>

                      <div className="stuff-edit-box">
                       <div className="divs">
                        <div className="stuffEdit-boxs">
                            <div className="stuffEdit-box-small">
                              <p><span>9</span></p>
                            </div>
                            <h4>??????????????</h4>
                          </div>
                          <p className='reds'>?????????????????? ????????????: 1</p>
                       </div>

                      <div className="divs">
                        <div className="stuffEdit-boxs yellow-border">
                          <div className="stuffEdit-box-small yellow">
                            <p><span>9</span></p>
                          </div>
                          <h4>??????????????</h4>
                        </div>
                        <p  className='yellows'>?????????????? ???? ??????????: 3</p>
                      </div>

                      <div className="divs">
                        <div className="stuffEdit-boxs green-border">
                          <div className="stuffEdit-box-small green">
                            <p><span>70</span></p>
                          </div>
                          <h4>????????????</h4>
                        </div>
                        <p  className='greens'>???????????? ???? ??????????: 15 </p>
                      </div>
                      <div className="divs">
                        <div className="stuffEdit-boxs gray-border">
                          <div className="stuffEdit-box-small gray">
                            <p><span>18</span></p>
                          </div>
                          <h4>?????? ????????????</h4>
                        </div>
                        <p className='grays'>?????????? ?????? ??????????????: 18</p>
                      </div>
                      </div>
                    </div>
                        <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={valueTable} onChange={handleChangeTable} aria-label="basic tabs example">
                            <Tab className='stuffEdit-tabs' label="??????????????" {...a11yProps(0)} />
                            <Tab className='stuffEdit-tabs' label="??????????????????" {...a11yProps(1)} />
                        </Tabs>
                        </Box>
                        <TabPanel value={valueTable} index={0}>
                        <div className="stuffEdit-tabpanel-box">
                            {tablesData.map(elem =>(
                                <div className="stuffEdit-tables-box">
                                <h2 className='stuffEdit-tables-title'>{elem.dataName}</h2>
                                <table>
                                <tr>
                                    <th className='stuffEdit-th'>????</th>
                                    <th className='stuffEdit-th'>????</th>
                                    <th className='stuffEdit-th'>????</th>
                                    <th className='stuffEdit-th'>????</th>
                                    <th className='stuffEdit-th'>????</th>
                                </tr>
                                {tablesNumber.map(elem =>(
                                        <tr>
                                        <td className='stufEdit-td'>{elem.numbers1}</td>
                                        <td className='stufEdit-td'>{elem.numbers2}</td>
                                        <td className='stufEdit-td'>{elem.numbers3}</td>
                                        <td className='stufEdit-td'>{elem.numbers4}</td>
                                        <td className='stufEdit-td'>{elem.numbers5}</td>
                                    </tr>
                                ))}
                                    <tr>
                                        <td className='stufEdit-td'>29</td>
                                        <td className='stufEdit-td'>30</td>
                                        <td className='stufEdit-td'>31</td>
                                    </tr>
                                </table>
                                </div>
                            ))}
                        </div>
                        </TabPanel>
                        <TabPanel value={valueTable} index={1}>
                        <table className='stuffedit-tables'>
                            <tr>
                            <th className='width-table'></th>
                            {tableTh.map(elem =>(
                                <th colspan='2' className='stuffEdit-th2'>
                                    <div className="th2-box">
                                        <p>{elem.weekDay}</p>
                                        <p>{elem.date}</p>
                                    </div>
                                </th>
                            ))}
                            </tr>
                            <tr className='table-tr'>
                            <td className='bg-table-row'><span>????????</span></td>
                            <td colspan='2' className='stufEdit-td2'>
                                <div className='td2-box'>
                                ????????????????????????
                                </div>
                                </td>
                            <td colspan='2' className='stufEdit-td2'>
                                <div className='td2-box'>
                                <span className='td2-spans'><i class='bx bx-edit'></i></span>
                                ????????????????????????
                                </div>
                            </td>
                            <td colspan='2' className='stufEdit-td2'>
                            <div className='td2-box'>
                                ????????????????????????
                                </div>
                            </td>
                            <td colspan='2' className='stufEdit-td2'>
                            <div className='td2-box td2-gray'>
                                ?????? ????????????
                                </div>
                            </td>
                            <td colspan='2' className='stufEdit-td2'>
                            <div className='td2-box td2-gray'>
                                ?????? ????????????
                                </div>
                            </td>
                            </tr>
                            <tr className='table-tr tr2'>
                            <td className='bg-tableBig-row bg-tableBig-row-height'><span>??????????</span></td>
                            <td colspan='2' className='bg-tableSmall-row'>
                                <div className="rows-box">
                                {tableDatas1.map(elem =>(
                                    <div className="div-boxs div-box-color">
                                        <div className="rows-box-small">
                                        <p>{elem.class}</p>
                                        <p>{elem.lesson}</p>
                                        </div>
                                        <div className="rows-box-small">
                                        <p>{elem.clock}</p>
                                        <p>{elem.room}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </td>
                            <td colspan='2' className='bg-tableSmall-row'>
                                <div className="rows-box rows-yellow rows-red">
                                {tableDatas2.map(elem =>(
                                    <div className="div-boxs div-box-color2">
                                        <div className="rows-box-small">
                                        <p>{elem.class}</p>
                                        <p>{elem.lesson}</p>
                                        </div>
                                        <div className="rows-box-small">
                                        <p>{elem.clock}</p>
                                        <p>{elem.room}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </td>
                            <td colspan='2' className='bg-tableSmall-row'>
                                <div className="rows-box">
                                {tableDatas3.map(elem =>(
                                    <div className="div-boxs div-boxs-height">
                                        <div className="rows-box-small rows-box-margin">
                                        <p>{elem.class}</p>
                                        <p>{elem.lesson}</p>
                                        </div>
                                        <div className="rows-box-small">
                                        <p>{elem.clock}</p>
                                        <p>{elem.room}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </td>
                            <td colspan='2' className='bg-tableSmall-row'>
                                <div className="rows-box rows-yellow">
                                {tableDatas4.map(elem =>(
                                    <div className="div-boxs div-boxs-gray">
                                        <div className="rows-box-small">
                                        <p></p>
                                        <p></p>
                                        </div>
                                        <div className="rows-box-small">
                                        <p></p>
                                        <p></p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </td>
                            <td colspan='2' className='bg-tableSmall-row'>
                                <div className="rows-box rows-yellow">
                                {tableDatas4.map(elem =>(
                                    <div className="div-boxs div-boxs-gray">
                                        <div className="rows-box-small">
                                        <p></p>
                                        <p></p>
                                        </div>
                                        <div className="rows-box-small">
                                        <p></p>
                                        <p></p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </td>
                            </tr>
                            </table>
                        </TabPanel>
                    </Box>
                    </TabPanel>
{/* ================================================================================================================================== */}
{/* ===================================================TabPanel 3======================================================================== */}
                    <TabPanel className='tabpanel tablepanels' value={valueChange} index={3}>
                        <Box className='boxs-tab' sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={valueses} onChange={handleChangeses} aria-label="basic tabs example">
                                <Tab className='color-tabs' label="???? ??????????????????" {...a11yPropse(0)} />
                                <Tab className='color-tabs' label="???????????? ??????????????????" {...a11yPropse(1)} />
                                <Tab className='color-tabs' label="???????????????? ??????????????" {...a11yPropse(2)} />
                                <Tab className='color-tabs' label="????????????" {...a11yPropse(3)} />
                                <Tab className='color-tabs' label="??????????????" {...a11yPropse(4)} />
                            </Tabs>
                        </Box>
                        <TabPanel className='padding-tabpanel' value={valueses} index={0}>
                        <TableContainer className='table-container tableContainer' component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell className='table-title'>????????????????</StyledTableCell>
                                    <StyledTableCell className='table-title' align="right">????????????????????????</StyledTableCell>
                                    <StyledTableCell className='table-title' align="right">????????</StyledTableCell>
                                    <StyledTableCell className='table-title' align="right">??????????????????????????</StyledTableCell>
                                    <StyledTableCell className='table-titles table-title' align="right">????????????</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsss.map((row) => (
                                    <StyledTableRow key={row.language}>
                                    <StyledTableCell className='table-text' component="th" scope="row">
                                        {row.language}
                                    </StyledTableCell>
                                    <StyledTableCell className='table-text' align="right">{row.protsent}</StyledTableCell>
                                    <StyledTableCell className='table-text' align="right">{row.date}</StyledTableCell>
                                    <StyledTableCell className='table-text' align="right">{row.firstname}</StyledTableCell>
                                    <StyledTableCell className='table-text table-texts' align="right"><span>{row.numbers}</span> <br /> <span className="row-spans">{row.protsets}</span></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel className='padding-tabpanel position-tab' value={valueses} index={1}>
                        <Button className='dobovit-btns'><span className='dobo-spans'>????????????????</span></Button>
                            <TableContainer  className='tables-cont tableContainer'   component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                    <TableRow>
                                        <StyledTableCell className='table-title' >???????????????? <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></StyledTableCell>
                                        <StyledTableCell className='table-title' align="right">  ??????????????????  <IconButton  className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></StyledTableCell>
                                        <StyledTableCell className='table-title tables-title' align="right">????????????????</StyledTableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rowdata.map((row) => (
                                        <StyledTableRow key={row.language}>
                                        <StyledTableCell className='tables-texts' component="th" scope="row">
                                            {row.language}
                                        </StyledTableCell>
                                        <StyledTableCell className='tables-texts' align="right"><span>{row.protsent}</span> <br /><span className="date-span"> {row.date}</span></StyledTableCell>
                                        <StyledTableCell className='tab-texts' align="right">
                                        <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                        <IconButton className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                                        </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel className='padding-tabpanel position-tab' value={valueses} index={2}>
                        <Link to='/homework'><Button className='dobovit-btns'><span className='dobo-spans'>????????????????</span></Button></Link>
                            <TableContainer className='tables-cont tableContainer' component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                    <TableRow>
                                        <StyledTableCell className='table-title'>??????????????</StyledTableCell>
                                        <StyledTableCell className='table-title' align="right">????????/???????????? <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></StyledTableCell>
                                        <StyledTableCell className='table-title' align="right">???????? ??????????</StyledTableCell>
                                        <StyledTableCell className='table-title' align="right">????????????</StyledTableCell>
                                        <StyledTableCell className='table-title tables-title' align="right">????????????????</StyledTableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rowdatas.map((row) => (
                                        <StyledTableRow className='tabrow-color' key={row.language}>
                                        <StyledTableCell className='table-list tables-padding' component="th" scope="row">
                                            {row.language}
                                        </StyledTableCell>
                                        <StyledTableCell className='table-list'  align="right">{row.texts}</StyledTableCell>
                                        <StyledTableCell className='table-list'  align="right">{row.date}</StyledTableCell>
                                        <StyledTableCell className='table-list table-color'  align="right">{row.status}</StyledTableCell>
                                        <StyledTableCell className='table-btn'  align="right">
                                        <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                        <IconButton className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                                        </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel  value={valueses} index={3}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={valueses} index={4}>
                            Item Three
                        </TabPanel>
                        </Box>
                    </TabPanel>
{/* ================================================================================================================================== */}
{/* ===================================================TabPanel 4======================================================================== */}
                    <TabPanel className='padding-tabpanel padding-tabspanel' value={valueChange} index={4}>
                        <div className="character-big-box">
                            <div className="charaxter-small-box">
                                <h4 className='charaxter-title'>????????????????</h4>
                                <div className="charaxter-boxs">
                                    <select className='charaxter-select'>
                                        <option value="value1">????????????????????</option>
                                        <option value="value2">??????????????????????????</option>
                                        <option value="value3">????????????????????</option>
                                        <option value="value4">??????????????????????????????</option>
                                    </select>
                                    <div className="charaxter-protsent-box">
                                        <div className="protset-boxs">
                                          <div className="protsent-big-box">
                                            <h4>?????????????????????????? ????????????????</h4>
                                                <div className="protsent-small-box">
                                                    <h1>77.2%</h1>
                                                    <span className='protsents-span1'><i class='bx bxs-down-arrow-alt'></i> 9.4%</span>
                                                    <span className='protsents-span2'><i class='bx bx-tired'></i></span>
                                                </div>  
                                          </div>
                                          <div className="number-boxs">
                                              <p>4</p>
                                          </div>
                                        </div>
                                        <ul className="charaxter-list">
                                            {protsent.map(protsents => (
                                                <li>
                                                    <h5>{protsents.value1}</h5>
                                                    <p className='value2'>{protsents.value2}</p>
                                                    <p><i class='bx bxs-down-arrow-alt'></i><span>{protsents.value3}</span></p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="charaxter-protsent-title-box">
                                        <h4 className='charaxter-titles'>????????????????????????????</h4>
                                        <div className="charaxter-protsent-title-info">
                                            <p>Our chatting website provides free random chat rooms where you can have live chat with single girls and boys.</p>
                                        </div>
                                        <Button className='charaxter-btns'><span className='charaxter-spans'>??????????????????</span></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="charaxter-small-box">
                                <h4 className='charaxter-title'>????????????</h4>
                                <ul className="charaxter-lists">
                                    {info.map(infos =>(
                                        <li>
                                            <div className="list-item-box">
                                               <p>{infos.infoId}</p>
                                            </div>
                                            <p>{infos.infoTitle}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="charaxter-small-box">
                                <h4 className='charaxter-title'>????????????????????????????</h4>
                                <div className="charaxter-admin-box">
                                    <div className="charaxter-data">
                                        <span>2 ???????????? 2020</span>
                                    </div>
                                    <div className="admin-icon-box">
                                        <div><i class='bx bx-user'></i></div>
                                        <p>Admin Adminov</p>
                                    </div>
                                    <div className="admin-info-box">
                                        <p>Our chatting website provides free <br /> random chat rooms where you can <br /> have live chat with single girls and <br /> boys.</p>
                                         <time className='admin-time'>03:30</time>
                                    </div>
                                    <div className="charaxter-data">
                                        <span>2 ???????????? 2020</span>
                                    </div>
                                    <div className="admin-icon-box">
                                        <div><i class='bx bx-user'></i></div>
                                        <p>Admin Adminov</p>
                                    </div>
                                    <div className="admin-info-box">
                                        <p>Our chatting website provides free <br /> random chat rooms where you can <br /> have live chat with single girls and <br /> boys. Our chatting website <br /> provides free random chat rooms <br /> where you can have live chat with <br /> single girls and boys. Our chatting <br /> website provides free random chat <br /> rooms where you can have live <br /> chat with single girls and boys.</p>
                                         <time className='admin-time'>03:30</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
{/* ================================================================================================================================== */}
{/* ===================================================TabPanel 5======================================================================== */}
                    <TabPanel className=' padding-tabpanel position-tab'  value={valueChange} index={5}>
                        <div className="edit-btn-box"><Button className='edit-btn'><span className='edit-spans'>????????????????</span></Button></div>
                        <TableContainer className=' tableContainer tableShodow' component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell  className='table-title'>????????????????</StyledTableCell>
                                    <StyledTableCell  className='table-title' align="right">??????</StyledTableCell>
                                    <StyledTableCell  className='table-title' align="right">??????????</StyledTableCell>
                                    <StyledTableCell  className='table-title' align="right">??????????????????????????</StyledTableCell>
                                    <StyledTableCell  className='table-title tables-title' align="right">????????????????</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsdata.map((row) => (
                                    <StyledTableRow key={row.game}>
                                    <StyledTableCell className='table-list tables-padding' component="th" scope="row">
                                        {row.game}
                                    </StyledTableCell>
                                    <StyledTableCell className='table-list' align="right">{row.days}</StyledTableCell>
                                    <StyledTableCell className='table-list' align="right">{row.date}</StyledTableCell>
                                    <StyledTableCell className='table-list' align="right">{row.teacher}</StyledTableCell>
                                    <StyledTableCell className='table-btn' align="right">
                                        <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                        <IconButton className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                                    </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
{/* ================================================================================================================================== */}
{/* ===================================================TabPanel 5======================================================================== */}
                    <TabPanel className=' padding-tabpanel' value={valueChange} index={6}>
                        <div className="edit-btn-box">
                            <p>?????????? ??????????:<span className="moneys1"> 150.000 ??????</span></p>
                            <p>????????????????: <span className="moneys2"> 100.000 ??????</span></p>
                            <p>???? ????????????????: <span className="moneys3"> 50.000 ??????</span></p>

                                <Button onClick={handleOpen} className='edit-btn'><span className='edit-spans'>????????????????</span></Button>
                              {/* ==========================  Modal ============================================= */}
                              <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                                    <Box sx={style}>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <h4 className='modal-title'>??????????</h4>
                                        <div className="select-data-box">
                                            <select className='modal-select'>
                                                <option value="modal1">???????????????? ????????</option>
                                                <option value="modal2">????????????????????</option>
                                                <option value="modal3">Class field trip</option>
                                                <option value="modal4">AP exam</option>
                                                <option value="modal5">Yearbook</option>
                                            </select>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    value={value}
                                                    loading={isLoading}
                                                    onChange={(newValue) => {
                                                    setValue(newValue);
                                                    }}
                                                    onMonthChange={handleMonthChange}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    renderLoading={() => <CalendarPickerSkeleton />}
                                                    renderDay={(day, _value, DayComponentProps) => {
                                                    const isSelected =
                                                        !DayComponentProps.outsideCurrentMonth &&
                                                        highlightedDays.indexOf(day.getDate()) > 0;

                                                    return (
                                                        <Badge
                                                        key={day.toString()}
                                                        overlap="circular"
                                                        >
                                                        <PickersDay {...DayComponentProps} />
                                                        </Badge>
                                                    );
                                                    }}
                                                />
                                                </LocalizationProvider>
                                        </div>
                                        <div className="modal-name-box">
                                           <div className="modal-name-small-box">
                                            <img src="https://picsum.photos/40/40" alt="image" />
                                                <h4>?????????????? ??????????????????</h4>
                                           </div>
                                          <div className="checkBox">
                                          <Checkbox
                                            checked={checked}
                                            onChange={handleChangeCheck}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            <span>?????????????????????? ??????????????????</span>
                                          </div>
                                        </div>
                                        <div className="modal-input-box">
                                            <h4 className='modal-titles'>???????????????????????????? ????????</h4>
                                             <input type="text" className='modal-input' />
                                        </div>
                                       <div className="modal-btn-box">
                                        <Button  onClick={handleClose} className='edit-btns'><span className='edit-spans'>??????????</span></Button>
                                        <Button  className='edit-btns'><span className='edit-spans'>??????????????????</span></Button>
                                       </div>
                                    </Typography>
                                    </Box>
                                </Modal>
                              {/* =============================================================================== */}
                        </div>
                        <TableContainer  className=' tableContainer' component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell className='table-title'>????????????????</StyledTableCell>
                                    <StyledTableCell className='table-title' align="right">???????? ????????????????</StyledTableCell>
                                    <StyledTableCell className='table-title' align="right">??????????</StyledTableCell>
                                    <StyledTableCell className='table-title' align="right">Due date</StyledTableCell>
                                    <StyledTableCell className='table-title ' align="right">????????????</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {moneys.map((row) => (
                                    <StyledTableRow key={row.game}>
                                    <StyledTableCell className='table-flex table-list ' component="th" scope="row">
                                        <span>{row.game}</span> <IconButton > <i class='bx edit-icon bxs-edit'></i></IconButton>
                                    </StyledTableCell>
                                    <StyledTableCell className='table-list' align="right">{row.days}</StyledTableCell>
                                    <StyledTableCell className='table-list' align="right">{row.money}</StyledTableCell>
                                    <StyledTableCell className='table-list' align="right">{row.date}</StyledTableCell>
                                    <StyledTableCell className='table-list table-flexs' align="right"> <span><i class='bx bxs-check-circle' ></i> </span><span>{row.result}</span></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
{/* ================================================================================================================================== */}
                </Box>
                </div>
            </section>
        </>
    );
}

export default Edit;
