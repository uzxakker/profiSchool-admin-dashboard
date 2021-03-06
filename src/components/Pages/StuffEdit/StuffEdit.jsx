import * as React from 'react';
import './StuffEdit.css'
import location from '../../../img/location.png'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PickersDay from '@mui/lab/PickersDay';
import DatePicker from '@mui/lab/DatePicker';
import CalendarPickerSkeleton from '@mui/lab/CalendarPickerSkeleton';
import getDaysInMonth from 'date-fns/getDaysInMonth';

/* Modal Style css */
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  p: 2,
};
/* style css end */

/* Data Coding start */
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
/* Data Coding end */


/* ===LessonData =============================== */
const stuffLessonData = [
  {lessonNumbers:'1 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'2 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'3 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'4 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'5 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'6 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'7 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'8 ????????????', lessonInfo:'??, ??, ??' },
  {lessonNumbers:'9 ????????????', lessonInfo:'??, ??, ??' },
]

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
/* =============================================== */

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
  {class: '8??', lesson: '??????????????????', clock:'8:30', room:'??????????????: 306'},
  {class: '7??', lesson: '??????????????', clock:'8:50', room:'??????????????: 206'},
  {class: '5??', lesson: '????????????????????', clock:'9:40', room:'??????????????: 106'},
  {class: '5??', lesson: '????????????????????', clock:'11:40', room:'??????????????: 106'},
  {class: '6??', lesson: '??????????????', clock:'12:30', room:'??????????????: 106'},
]
const tableDatas2 = [
  {class: '5??', lesson: '????????????????????', clock:'8:30', room:'??????????????: 106'},
  {class: '7??', lesson: '??????????????', clock:'8:50', room:'??????????????: 206'},
  {class: '9??', lesson: '??????????????????', clock:'9:40', room:'??????????????: 306'},
  {class: '5??', lesson: '????????????????????', clock:'10:50', room:'??????????????: 106'}
]
const tableDatas3 = [
  {class: '7??', lesson: '??????????????', clock:'8:30', room:'??????????????: 206'},
  {class: '5??', lesson: '????????????????????', clock:'8:50', room:'??????????????: 106'},
  {class: '9??', lesson: '??????????????????', clock:'9:40', room:'??????????????: 306'},
  {class: '7??', lesson: '??????????????????', clock:'9:40', room:'??????????????: 306'}
]
const tableDatas4 = [
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
/* Big Tab Coding */

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

function a11yPropss(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

/* ============== */
/* Table Coding start  */
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

function createData(data, status, text, money, totalMoney) {
  return { data, status, text, money, totalMoney };
}

const rows = [
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000'),
  createData('01.12.2020', '????????????????', '???????????? ??????????????????', '800.000', '1.000.000')
];

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createDatas(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rowtable = [
  createDatas('India', 'IN', 1324171354, 3287263),
  createDatas('China', 'CN', 1403500365, 9596961),
  createDatas('Italy', 'IT', 60483973, 301340),
  createDatas('United States', 'US', 327167434, 9833520),
  createDatas('Canada', 'CA', 37602103, 9984670),
  createDatas('Australia', 'AU', 25475400, 7692024),
  createDatas('Germany', 'DE', 83019200, 357578),
  createDatas('Ireland', 'IE', 4857000, 70273),
  createDatas('Mexico', 'MX', 126577691, 1972550),
  createDatas('Japan', 'JP', 126317000, 377973),
  createDatas('France', 'FR', 67022000, 640679),
  createDatas('United Kingdom', 'GB', 67545757, 242495),
  createDatas('Russia', 'RU', 146793744, 17098246),
  createDatas('Nigeria', 'NG', 200962417, 923768),
  createDatas('Brazil', 'BR', 210147125, 8515767),
];
/* Table Coding End */
const StuffEdit = () => {

  /* Data Coding Start */
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [valueData, setValueData] = React.useState(initialValue);
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
  /* Data Coding End */

  /* Modal Coding start */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };
  /* Modal Coding end */

  /* table coding start */
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  /* table coding end   */
   /* tab coding start */
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
   const [values, setValues] = React.useState(0);

     const handleChanges = (event, newValue) => {
       setValues(newValue);
     };

     const [valueTable, setValueTable] = React.useState(0);

     const handleChangeTable = (event, newValue) => {
       setValueTable(newValue);
     };
   /* tab coding end */
   
 
    return (
        <>
          <section className="employesEdit">
            <div className="container">
               {/* Big Tab html Coding */}
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="??????????????" {...a11yProps(0)} />
                      <Tab label="??????????" {...a11yProps(1)} />
                      <Tab label="????????????????????????" {...a11yProps(2)} />
                      <Tab label="????????????????????" {...a11yProps(3)} />
                      <Tab label="?????????????? ????????" {...a11yProps(4)} />
                      <Tab label="????????????" {...a11yProps(5)} />
                    </Tabs>
                  </Box>
                  {/* Profil TabPanel Start */}
                  <TabPanel className='stuff-tabpanel' value={value} index={0}>
                  <div className="stuff-foto-box">
                            <div className="stuff-heading-box">
                                <h4>????????</h4>
                                <h4>???????????? ????????????</h4>
                            </div>
                            <hr />
                           <div className="stuff-img-big-boxs">
                              <div className="stuff-imags-boxs">
                                <img  src="https://picsum.photos/200/200" alt="images" />
                              </div>
                              <div className="stuff-imags-info-box">
                                  <ul className="stuff-info-list stuff-lists">
                                      <li><h4 className='stuff-info-text'><span className='stuff-info-spans'>??????:</span>    ?????????????? ????????????????????</h4></li>
                                      <li><p className='stuff-info-text'><span className='stuff-info-spans'>???????? ????????????????:</span>    09.09.1998</p></li>
                                      <li><p className='stuff-info-text'><span className='stuff-info-spans'>??????????????:</span>    +998 90 900 00 00</p></li>
                                      <li><p className='stuff-info-text'><span className='stuff-info-spans'>??????.??????????????:</span>  +998 90 900 00 00</p></li>
                                  </ul>
                                  <ul className='stuff-info-list2 stuff-lists'>
                                      <li><p className='stuff-info-text'><span className='stuff-info-spans'>??????:</span>   ??????????????</p></li>
                                      <li><p className='stuff-info-text'><span className='stuff-info-spans'>??????????????????????????:</span>   ??????????</p></li>
                                      <li><p className='stuff-info-text'><span className='stuff-info-spans'>??????????:</span>   Admin.adminov@gmail.com</p></li>
                                      <li><p className='stuff-info-text'><span className='stuff-info-spans'>??????????????????:</span>  ????????????</p></li>
                                  </ul>
                                 <div className="stuff-text-box">
                                    <p className='stuff-info-text  stuff-info-texts'><span className='stuff-info-spans'>??????????????????????????:</span>   ????????????????????   <IconButton className='stuff-edit-icon' > <i class='bx bxs-edit'></i></IconButton></p>
                                    <p className='stuff-info-text stuff-info-texts'><span className='stuff-info-spans'>???????????? ????????????????:</span>   ??????????????</p>
                                 </div>
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
                  </TabPanel>
                   {/* Profil TabPanel End */}

                   {/* Class Year TabPanel Start */}
                  <TabPanel value={value} index={1}>
                    <div className="stuff-class-year-box">
                      <div className="stuff-select-box">
                        <h4>?????????????? ??????</h4>
                        <select className='stuff-select'>
                          <option value="year1">2021</option>
                          <option value="year2">2020</option>
                          <option value="year3">2019</option>
                          <option value="year4">2018</option>
                          <option value="year5">2017</option>
                          <option value="year6">2016</option>
                        </select>
                      </div>
                      <div className="stuff-class-list-box">
                        <ul className="stuff-class-list">
                          {stuffLessonData.map(stuffData =>(
                                <li>
                                  <div className="stuff-postion"></div>
                                  <Link className='stuff-list-link' to='/lessons'>
                                  <h3>{stuffData.lessonNumbers}</h3>
                                  <p>{stuffData.lessonInfo}</p>
                                  </Link>
                                </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                   {/* Class Year TabPanel End */}
                  <TabPanel className='stuffEdit-tabpanel' value={value} index={2}>
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
                          <div className='td2-box'>
                              ????????????????????????
                            </div>
                          </td>
                          <td colspan='2' className='stufEdit-td2'>
                          <div className='td2-box td2-gray'>
                            ?????? ????????????
                            </div>
                          </td>
                        </tr>
                        <tr className='table-tr tr2'>
                          <td className='bg-tableBig-row'><span>??????????</span></td>
                          <td colspan='2' className='bg-tableSmall-row'>
                            <div className="rows-box">
                              {tableDatas1.map(elem =>(
                                   <div className="div-boxs">
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
                                   <div className="div-boxs">
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
                                   <div className="div-boxs">
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
                            <div className="rows-box rows-yellow">
                              {tableDatas4.map(elem =>(
                                   <div className="div-boxs">
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
                          </tr>
                        </table>
                    </TabPanel>
                  </Box>
                  </TabPanel>
                   {/* TimeTable Panel Start */}
                  <TabPanel className='stuff-tabpanel' value={value} index={3}>
                          <div className="stuff-data-box">
                             <div className="stuff-data-small-box">
                               <IconButton className='stuff-next-btn'> <i class='bx bx-chevron-left'></i></IconButton> <span>01 ???????????????? 2021</span> - <span>07 ???????????????? 2021</span><IconButton className='stuff-next-btn'> <i class='bx bx-chevron-right' ></i></IconButton>  
                             </div>
                         </div>
                         <div className="stuff-lesson-big-box">
                            <div className="stuff-lesson-small-box">
                                <ul className="stuff-lesson-list">
                                    <div className="stuff-title-box">
                                        <div className="stuff-divs">
                                            <h3>????</h3> 
                                            <span className='stuff-day-span'>??????????????</span>
                                        </div>
                                        <p>1 ???????????????? 2021</p>
                                    </div>
                                    <hr className='stuff-hr' />
                                    {lessons.map(lesson =>(
                                        <li>
                                        <div className="stuff-datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="stuff-lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="stuff-lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='stuff-door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="stuff-lesson-small-box">
                                <ul className="stuff-lesson-list">
                                    <div className="stuff-title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>2 ???????????????? 2021</p>
                                    </div>
                                    <hr className='stuff-hr' />
                                    {lessons.map(lesson =>(
                                        <li>
                                        <div className="stuff-datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="stuff-lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="stuff-lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='stuff-door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="stuff-lesson-small-box">
                                <ul className="stuff-lesson-list">
                                    <div className="stuff-title-boxs">
                                        <h3>??????????</h3> 
                                        <p>3 ???????????????? 2021</p>
                                    </div>
                                    <hr className='stuff-hr' />
                                    {lessons.map(lesson =>(
                                        <li>
                                        <div className="stuff-datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="stuff-lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="stuff-lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='stuff-door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="stuff-lesson-small-box">
                                <ul className="stuff-lesson-list">
                                    <div className="stuff-title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>4 ???????????????? 2021</p>
                                    </div>
                                    <hr className='stuff-hr' />
                                    {lessons1.map(lesson =>(
                                        <li>
                                        <div className="stuff-datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="stuff-lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="stuff-lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='stuff-door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="stuff-lesson-small-box">
                                <ul className="stuff-lesson-list">
                                    <div className="stuff-title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>5 ???????????????? 2021</p>
                                    </div>
                                    <hr className='stuff-hr' />
                                    {lessons1.map(lesson =>(
                                        <li>
                                        <div className="stuff-datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="stuff-lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="stuff-lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='stuff-door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="stuff-lesson-small-box">
                                <ul className="stuff-lesson-list">
                                    <div className="stuff-title-boxs">
                                        <h3>??????????????</h3> 
                                        <p>5 ???????????????? 2021</p>
                                    </div>
                                    <hr className='stuff-hr' />
                                    {lessons1.map(lesson =>(
                                        <li>
                                        <div className="stuff-datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="stuff-lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="stuff-lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='stuff-door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="stuff-lesson-small-box">
                                <ul className="stuff-lesson-list">
                                    <div className="stuff-title-boxs">
                                        <h3>??????????????????????</h3> 
                                        <p>7 ???????????????? 2021</p>
                                    </div>
                                    <hr className='hr' />
                                    {lessons2.map(lesson =>(
                                        <li>
                                        <div className="stuff-datas-box">
                                            <p>{lesson.oclock}</p>
                                        </div>
                                        <div className="stuff-lesson-info">
                                            <h4>{lesson.lesson}</h4>
                                            <div className="stuff-lesson-info-box">
                                                <p>{lesson.classNumber}</p>
                                                <p className='stuff-door'><i class='bx bx-door-open' ></i><span>{lesson.room}</span></p>
                                            </div>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                         </div>
                  </TabPanel>
                   {/* TimeTable Panel End */}

                   {/* Children table panle start */}
                  <TabPanel className='stuff-padding-panel' value={value} index={4}>
                    <div className="stuff-btn-box">
                    <Button onClick={handleOpen} className='stuff-btn' variant="contained">????????????????</Button>

                    {/* Modal Codes Start */}
                    <Modal className='stuff-modal' open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                           <div className="stuff-btn-modal-box">
                              <h3 className='stuff-modal-title'>???????????????? ?????????????? ????????</h3>
                              <button className='stuff-modal-btn' onClick={handleClose}><i class='bx bx-x'></i></button>
                           </div>
                           <Box className='stuff-margin-box' sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">??????????</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleSelectChange}
                              >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                          <Box className='stuff-input' sx={{width: 490,maxWidth: '100%',}}>
                            <TextField fullWidth label="????????" id="fullWidth" />
                          </Box>
                          <Box className='stuff-input' sx={{width: 490,maxWidth: '100%',}}>
                            <TextField fullWidth label="???????????????? ??????????????" id="fullWidth" />
                          </Box>
                           <div className="stuf-datas-box">
                           <LocalizationProvider  dateAdapter={AdapterDateFns}>
                              <DatePicker 
                                value={valueData}
                                loading={isLoading}
                                onChange={(newValue) => {
                                  setValueData(newValue);
                                }}
                                onMonthChange={handleMonthChange}
                                renderInput={(params) => <TextField {...params} />}
                                renderLoading={() => <CalendarPickerSkeleton />}
                                renderDay={(day, _value, DayComponentProps) => {
                                  const isSelected = !DayComponentProps.outsideCurrentMonth && highlightedDays.indexOf(day.getDate()) > 0;

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
                          <div className="stuff-data-btn-box">
                          <Button className='stuff-btn' variant="contained">????????????????</Button>
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                    {/* Modal Codes end */}
                  </div>
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={values} onChange={handleChanges} aria-label="basic tabs example">
                        <Tab className='stuff-small-tabs' label="????????????????????" {...a11yPropss(0)} />
                        <Tab className='stuff-small-tabs' label="??????????????" {...a11yPropss(1)} />
                        <Tab className='stuff-small-tabs' label="??????????????????" {...a11yPropss(2)} />
                      </Tabs>
                    </Box>
                    <TabPanel className='stuff-padding-panel' value={values} index={0}>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='stuff-padding-panel' value={values} index={1}> 
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='stuff-padding-panel' value={values} index={2}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                  </Box>
                  </TabPanel>
                   {/*  Children table panle end */}
                  <TabPanel className='stuff-tabpanel' value={value} index={5}>
                  <TableContainer className='stuff-tableContainer' component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell  className='stuff-table-title' >????????</StyledTableCell>
                            <StyledTableCell  className='stuff-table-title' align="right">????????????</StyledTableCell>
                            <StyledTableCell  className='stuff-table-title' align="right">??????????????????</StyledTableCell>
                            <StyledTableCell  className='stuff-table-title' align="right">?????????????????? </StyledTableCell>
                            <StyledTableCell  className='stuff-table-title' align="right">????????????????????</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <StyledTableRow key={row.data}>
                              <StyledTableCell className='stuff-table-texts' component="th" scope="row">
                                {row.data}
                              </StyledTableCell>
                              <StyledTableCell className='stuff-table-texts' align="right">{row.status}</StyledTableCell>
                              <StyledTableCell className='stuff-table-texts' align="right">{row.text}</StyledTableCell>
                              <StyledTableCell className='stuff-table-texts' align="right">{row.money}</StyledTableCell>
                              <StyledTableCell className='stuff-table-texts' align="right">{row.totalMoney}</StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                </Box>
               {/* =========Big Tab html Coding End========== */}
            </div>
          </section>  
        </>
    );
}

export default StuffEdit;
