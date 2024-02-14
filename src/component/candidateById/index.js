import * as React from 'react';
import { ReactDOM } from 'react';
import { useCallback, useState, useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Routes, Route } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack, CssBaseline } from '@mui/material';
import { faClose, faEdit, faTrash, faAdd, faTimes, faDeleteLeft, faDiagramNext, faBeer, faArrowAltCircleRight, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Fab from "@mui/material/Fab";
import {
    Box,
    MenuItem,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Tab,
    Tabs,
    Unstable_Grid2 as Grid,
    Typography,
    InputLabel
} from '@mui/material';
import './getidStyle.css'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { NextPlan } from '@mui/icons-material';





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const GetCadidateByID = ({ onChange, Data, insertopen, handleClose }) => {
    const [tabValue, setTabValue] = useState(0); // State to manage active tab
    const [CandidatId, setCandidateID] = React.useState(sessionStorage.getItem('CandidateId'));

    const {
        Id,
        Name,
        JobTitle,
        EmailId,
        PhoneNumber,
        DateOfApplication,
        // Co   mpanyname,
        DesignationId,
        DepartmentId,
        RoleId,
        IndustryId,

        // AnnualSalary,
        NoticePeriod,
        ResumeHeadline,
        Summary,
        // UnderGraduationdegree,

        // UGSpecialization,
        // UGUniversity,
        // UGGraduationYear,
        // PostGraduationDegree,
        // PGSpecialization,
        // PGUniversity,
        // PG_graduation_year,
        // Doctorate_degree,
        // Doctorate_specialization,
        // Doctorate_university,
        // Doctorate_graduation_year,
        Marital_Status,
        Home_Town,
        Pin_Code,
        Work_permitfor_USA,
        DateOfBirth,
        PermanentAddress,
        Gender,
        PreferredLocations,
        KeySkils,
        State_Id,
        City_Id,
        candidateEducationModels,
        // totalExperience,
        DesignationName,
        DeptName,
        RoleName,
        IndusName,
        StateName,
        CityName,
        keysName,
        // lstKeySkills,
        lstPreferredLocations,

        TotalYearsOfExperience,
        candidateEmployeeModels,
        CurrentSalary,
        ExpectedSalary,
        IsResume,
        ResumePath,
        keySkillMappings,
        files,
        CandidateKeySkills,
        empTabKeyskillModels,
        EmpId

    } = Data;

    const [tab1, setTab1] = useState('Personal Details');
    const [tab2, setTab2] = useState();
    const [tab3, setTab3] = useState();
    const [tab4, setTab4] = useState();
    const [tab5, setTab5] = useState();


    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };
    const tabLabelStyle = {
        fontSize: '15px', // Adjust the font size as needed
        marginRight: '6rem',
    };

    const handleNext = () => {
        if (tabValue === 0) {
            setTab1("")
            setTab2("Education Details")
            setTabValue(tabValue + 1);
        }
        else if (tabValue === 1) {
            setTab2("")
            setTab3("Employee Details")
            setTabValue(tabValue + 1);
        }
        else if (tabValue === 2) {
            setTab3("")
            setTab4("Official Details")
            setTabValue(tabValue + 1);
        }
        else if (tabValue === 3) {
            setTab4("")
            setTab5("Keyskill Details")
            setTabValue(tabValue + 1);
        }
        // else if (tabValue === 1) {
        //     setTabValue(tabValue + 1);
        // }
    };

    const handleBack = () => {
        if (tabValue > 0) {
            setTabValue(tabValue - 1);
            if (tabValue == 4) {
                setTab4("Official Details")
                setTab5("")
            }
            else if (tabValue == 3) {
                setTab3("Employee Details")
                setTab4("")
            }
            else if (tabValue == 2) {
                setTab2("Education Details")
                setTab3("")
            }
            else if (tabValue == 1) {
                setTab1("Personal Details")
                setTab2("")
            }
        }
    };
    useEffect(() => {
        if (Data.candidateEducationModels !== "") {
            setFormFields(Data.candidateEducationModels);
        }
    }, []);

    const [formFields, setFormFields] = useState([

        { Id: 0, DegreeName: '', DegreeSpecialization: '', UniversityName: '', GraduationYear: '', CandidateId: 0 },
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);

        Data.candidateEducationModels = data;

    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
    }

    const addFields = () => {
        let object = {
            Id: 0,
            DegreeName: '',
            DegreeSpecialization: '',
            UniversityName: '',
            GraduationYear: '',
            CandidateId: 0
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        console.log(index)
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
        // console.log(data)
        Data.candidateEducationModels = data;
    }


    //Candidate Office details
    useEffect(() => {
        if (Data.candidateEmployeeModels !== "") {
            setOfficedetail(Data.candidateEmployeeModels);
        }
    }, []);

    const [officedetail, setOfficedetail] = useState([
        { Id: 0, Companyname: '', NoOfYearsOfExperience: '', Designation: '', CandidateId: 0 },
    ])
    const handleAddOffcial = (event, index) => {
        let offdata = [...officedetail];
        offdata[index][event.target.name] = event.target.value;
        setOfficedetail(offdata);

        Data.candidateEmployeeModels = offdata;
    }

    const detailSubmit = (e) => {
        e.preventDefault();
        console.log(officedetail)
    }

    const addoffFields = () => {
        let object = {
            Id: 0,
            Companyname: '',
            NoOfYearsOfExperience: '',
            Designation: '',
            CandidateId: 0
        }

        setOfficedetail([...officedetail, object])
    }

    const removeOffFields = (index) => {
        console.log(index)
        let offdata = [...officedetail];
        offdata.splice(index, 1)
        setOfficedetail(offdata)

        Data.candidateEmployeeModels = offdata;
    }

// key

    const [selectedKeySkills1, setSelectedKeySkills1] = useState([]);
    const [selectedKeyexSkills, setSelectedKeyexSkills] = useState([]);

    useEffect(() => {
        if (Data.empTabKeyskillModels !== "" && Data.empTabKeyskillModels !== undefined ) {
            setSelectedKeySkills(Data.empTabKeyskillModels);
            var xarray = [];
            var yarray = [];
            for (let i = 0; i < Data.empTabKeyskillModels.length; i++) {
                const x = {
                    Id: Data.empTabKeyskillModels[i].KeySkillId,
                    Name: Data.empTabKeyskillModels[i].KeySkillName,
                    IsActive: Data.empTabKeyskillModels[i].IsActive,
                };
                xarray.push(x);
                const y = {
                    // Id: Data.empTabKeyskillModels[i].Experience,
                    Name: Data.empTabKeyskillModels[i].Experience,
                    IsActive: Data.empTabKeyskillModels[i].IsActive,
                }
                yarray.push(y);
            }
            setSelectedKeySkills1(xarray)
            setSelectedKeyexSkills(yarray);
        }
    }, []);
    // const lstkeySkillsexperience = { }
    const lstkeySkillsexperience = {
        // Id: Id,
        // Name: Name,
        // JobTitle: JobTitle,
        // EmailId: EmailId,
        // PhoneNumber: PhoneNumber,
        // DateOfApplication: DateOfApplication,
        // // Co   mpanyname,
        // DesignationId: DesignationId,
        // DepartmentId: DepartmentId,
        // RoleId: RoleId,
        // IndustryId: IndustryId,

        // // AnnualSalary,
        // NoticePeriod: NoticePeriod,
        // ResumeHeadline: ResumeHeadline,
        // Summary: Summary,
        // // UnderGraduationdegree,

        // // UGSpecialization,
        // // UGUniversity,
        // // UGGraduationYear,
        // // PostGraduationDegree,
        // // PGSpecialization,
        // // PGUniversity,
        // // PG_graduation_year,
        // // Doctorate_degree,
        // // Doctorate_specialization,
        // // Doctorate_university,
        // // Doctorate_graduation_year,
        // Marital_Status: Marital_Status,
        // Home_Town: Home_Town,
        // Pin_Code: Pin_Code,
        // Work_permitfor_USA: Work_permitfor_USA,
        // DateOfBirth: DateOfBirth,
        // PermanentAddress: PermanentAddress,
        // Gender: Gender,
        // PreferredLocations: PreferredLocations,
        // KeySkils: KeySkils,
        // State_Id: State_Id,
        // City_Id: City_Id,
        // candidateEducationModels: candidateEducationModels,
        // // totalExperience,
        // DesignationName: DesignationName,
        // DeptName: DeptName,
        // RoleName: RoleName,
        // IndusName: IndusName,
        // StateName: StateName,
        // CityName: CityName,
        // keysName: keysName,
        // // lstKeySkills,
        // lstPreferredLocations: lstPreferredLocations,

        // TotalYearsOfExperience: TotalYearsOfExperience,
        // candidateEmployeeModels: candidateEmployeeModels,
        // CurrentSalary: CurrentSalary,
        // ExpectedSalary: ExpectedSalary,
        // IsResume: IsResume,
        // ResumePath: ResumePath,
        // keySkillMappings: keySkillMappings,
        // files: files,
        // CandidateKeySkills: CandidateKeySkills,
        // EmpId: EmpId,
        empTabKeyskillModel: empTabKeyskillModels
    }
let obj =
    { Id: 0, KeySkillId: '', Experience: '', CandidateId: CandidatId === null ? 0 : CandidatId, IsActive: true, CreatedBy: '', UpdatedBy: '', CreatedDate: "", UpdatedDate: "" }

    const [selectedKeySkills, setSelectedKeySkills] = React.useState([obj]);





    const [dupselectedkeySkills, setDubselectedkeySkills] = React.useState([]);
    const handleAddKeys = (e, index, value) => {
        // const handleAddKeys = (e,   index, value)
        // selectedKeySkills(value);

        if (selectedKeySkills1 && selectedKeySkills1.length < index) {
            let keySk = [...selectedKeySkills1];
            keySk[index].Id = value.Id;
            keySk[index].Name = value.Name;
            setSelectedKeySkills1(keySk);
            setDubselectedkeySkills(keySk);
            // Data.CandidateKeySkills = keySk;
             Data.empTabKeyskillModels[index].KeySkillId = value.Id;
             Data.empTabKeyskillModels[index].KeySkillName = value.Name;
        }
        else {
            var keyset;
            if (selectedKeySkills1 && selectedKeySkills1.length > 0) {
                keyset = {
                    CandidateId:  Data.empTabKeyskillModels[index - 1].CandidateId === CandidatId ? CandidatId : Data.empTabKeyskillModels[index - 1].CandidateId,//lstkeySkillsexperience.empTabKeyskillModel[index - 1].CandidateId,
                    CreatedBy: "2023-11-02T05:03:57.122Z",
                    CreatedDate: "2023-11-02T05:03:57.122Z",
                    Id: 0,
                    Experience: '',
                    IsActive: true,
                    KeySkillId: value.Id,
                    KeySkillName: value.Name,
                    UpdatedBy : null,
                     UpdatedDate : null,
                } 
                Data.empTabKeyskillModels.push(keyset); 
                setSelectedKeySkills(Data.empTabKeyskillModels);
                var xarray= [];
                for (let i = 0; i < Data.empTabKeyskillModels.length; i++) {
                    const x = {
                        Id: Data.empTabKeyskillModels[i].KeySkillId,
                        Name: Data.empTabKeyskillModels[i].KeySkillName,
                        IsActive: Data.empTabKeyskillModels[i].IsActive,
                    };
                    xarray.push(x);
                    
                }
                setSelectedKeySkills1(xarray)
               
                 
            }
            else {
                keyset = {
                    CandidateId: CandidatId,
                    CreatedBy: "2023-11-02T05:03:57.122Z",
                    CreatedDate: "2023-11-02T05:03:57.122Z",
                    Id: 0,
                    Experience: '',
                    IsActive: true,
                    KeySkillId: value.Id,
                    KeySkillName: value.Name,
                    // UpdatedBy : 
                    // UpdatedDate : 
                }
                Data.empTabKeyskillModels = [keyset];
                setSelectedKeySkills(Data.empTabKeyskillModels);
                setSelectedKeySkills1(Data.empTabKeyskillModels);
            }
           
            // lstkeySkillsexperience.empTabKeyskillModel[index].KeySkillId = value.Id;
            // lstkeySkillsexperience.empTabKeyskillModel[index].KeySkillName = value.Name;
        }

        // else {
        //     setDubselectedkeySkills(value);
        // }
        // selectedKeySkills.calKeySkils=value.Name;
        // selectedKeySkills.calWexp=value.Name;
        // let keydata = [...selectedKeySkills];er
        // keydata[index][event.target.name] = event.target.value;
        // setSelectedKeySkills(keydata);
        // console.log(keydata);

        // Data.candidateKeyModels = keydata;

    };

    // const [count, setcount] = React.useState(0);
    let candidaId = sessionStorage.getItem('CandidateId');
    const handleAddKeyset = (event, index, value) => {
        if (selectedKeyexSkills && selectedKeyexSkills.length < index) {
            let keySk = [...selectedKeyexSkills];
            //  keySk[index].Id = value.Id;
            keySk[index].Name = value.Name;
            setSelectedKeyexSkills(keySk);
            // setDubselectedkeySkills(keySk);
            // Data.CandidateKeySkills = keySk;
            // lstkeySkillsexperience.empTabKeyskillModel[index].KeySkillId = value.Id;
            Data.empTabKeyskillModels[index].Experience = value.Name;
            setSelectedKeySkills(Data.empTabKeyskillModels);
            setSelectedKeyexSkills(Data.empTabKeyskillModels);

        }
        else {
            Data.empTabKeyskillModels = selectedKeySkills;
            Data.empTabKeyskillModels[index].Experience = value.Name;
            console.log(Data.empTabKeyskillModels);
            console.log(lstkeySkillsexperience);
            console.log(Data.selectedKeySkills);
            setSelectedKeySkills(Data.empTabKeyskillModels)
            
            var yarray = [];
            for (let i = 0; i < Data.empTabKeyskillModels.length; i++) {
              
                const y = {
                    // Id: Data.empTabKeyskillModels[i].Experience,
                    Name: Data.empTabKeyskillModels[i].Experience,
                    IsActive: Data.empTabKeyskillModels[i].IsActive,
                }
                yarray.push(y);
            }
            
            setSelectedKeyexSkills(yarray);

            // lstkeySkillsexperience.empTabKeyskillModel[index].KeySkillId = value.Id;
            // lstkeySkillsexperience.empTabKeyskillModel[index].Experience = value.Name;
            //  setSelectedKeySkills(lstkeySkillsexperience.empTabKeyskillModel);
            // const keyset ={
            //     CandidateId: lstkeySkillsexperience.empTabKeyskillModel[index-1].CandidateId,
            //     CreatedBy :lstkeySkillsexperience.empTabKeyskillModel[index-1].CreatedBy,
            //     CreatedDate :lstkeySkillsexperience.empTabKeyskillModel[index-1].CreatedDate,
            //     Experience : value.Name, 
            //     Id: 0, 
            //     IsActive :   true,

            //     // UpdatedBy : 
            //     // UpdatedDate : 
            // }

            // lstkeySkillsexperience.empTabKeyskillModel.push(keyset);
        }

        // if (dupselectedkeySkills && dupselectedkeySkills.Id !== "") {

        //     const x = {
        //         Id: 0,
        //         KeySkillId: dupselectedkeySkills.Id,
        //         Experience: value.Name,
        //         CandidateId: candidaId,
        //         IsActive: true,
        //         CreatedBy: "John",
        //         UpdatedBy: "John",
        //         CreatedDate: "2023-11-02T05:03:57.122Z",
        //         UpdatedDate: "2023-11-02T05:03:57.122Z"
        //     }


        //     let data = [...selectedKeySkills];
        //     // data[index]['CandidateId'] = CandidatId;
        //     // data[index]['CreatedBy'] = "John";
        //     // data[index]['UpdatedBy'] = "John";
        //     // data[index]['CreatedDate'] = "2023-11-02T05:03:57.122Z";
        //     // data[index]['UpdatedDate'] = "2023-11-02T05:03:57.122Z";

        //     data[count] = x;
        //     setSelectedKeySkills(data);
        //     Data.CandidateKeySkills = data
        // }

        // setSelectedKeySkills([x]);
        // selectedKeySkills(value);
        //  setDubselectedkeySkills(value);
        // selectedKeySkills.calWexp=value.Name;
        // let keydata = [...selectedKeySkills];
        // keydata[index][event.target.name] = event.target.value;
        // setSelectedKeySkills(keydata);
        // console.log(keydata);

        // Data.candidateKeyModels = keydata;
    };

    const addNewKeySkillField = () => {
        let object = {
            Id: 0,
            KeySkillId: '',
            Experience: '',
            CandidateId: 0,
            IsActive: true,
            CreatedBy: '',
            UpdatedBy: '',
            CreatedDate: '',
            UpdatedDate: ''
        };

        // if (selectedKeySkills.some((keySkill) => !keySkill || keySkill === ''))
        // setcount(count + 1);
        setDubselectedkeySkills([]);
        if (selectedKeySkills && selectedKeySkills.some(field =>
            !field.KeySkillId ||
            !field.Experience)) {
            toast.error('Please Fill Key Skill Details', {
                autoClose: 1000,
            });
        } else {
            setSelectedKeySkills([...selectedKeySkills, object]);
            // setSelectedKeySkills([...selectedKeySkills, '']);
        }
    };

    const removeKeyFields = (index) => {
        console.log(index)
        let keydata = [...selectedKeySkills];
        keydata.splice(index, 1)
        setSelectedKeySkills(keydata)
        Data.candidateKeyModels = keydata;
        
    }


    const keySubmit = (e) => {
        e.preventDefault();
        console.log(selectedKeySkills);
    };


    return (
        <div>
            <ToastContainer />
            <div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleChangeTab}
                            aria-label="basic tabs example"
                        >
                            <Tab
                                label={tab1}
                                value={0}
                                index={0}
                                style={tabLabelStyle}
                            ></Tab>
                            <Tab
                                label={tab2}
                                value={1}
                                index={1}
                                style={tabLabelStyle}
                            />
                            <Tab
                                label={tab3}
                                value={2}
                                index={2}
                                style={tabLabelStyle}
                            />
                            <Tab
                                label={tab4}
                                value={3}
                                index={3}
                                style={tabLabelStyle}
                            />
                            <Tab
                                label={tab5}
                                value={4}
                                index={4}
                                style={tabLabelStyle}
                            />
                        </Tabs>
                    </Box>
                </Box>
            </div>
            <div>
                {tabValue === 0 && (
                    <>
                        <div className='table-one-con'>
                            <legend class="off-detail-legend" >Personal Details</legend>
                            <table className="candidate-table-three">
                                <tbody
                                    style={{
                                        fontSize: '15px'
                                    }}
                                >
                                    <tr>
                                        <td>Candidate Name</td>
                                        <td>
                                            {Data.Name}
                                        </td>
                                        <td>Email</td>
                                        <td>
                                            {Data.EmailId}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>{Data.PhoneNumber}</td>
                                        <td>Date of Birth</td>
                                        <td>{Data.DateOfBirth.substring(0, 10)}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{Data.Gender}</td>
                                        <td>Marital Status</td>
                                        <td>{Data.Marital_Status}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="4" >Permanent Address</td>
                                        <td rowSpan="4" >{Data.PermanentAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>State Name</td>
                                        <td>{Data.StateName}</td>
                                    </tr>
                                    <tr>
                                        <td>City Name</td>
                                        <td>{Data.CityName}</td>
                                    </tr>
                                    <tr>
                                        <td>Pin Code</td>
                                        <td>{Data.Pin_Code}</td>
                                    </tr>
                                    <tr>
                                        <td>Current Location:</td>
                                        <td>{Data.Home_Town}</td>
                                        <td>Preferred Locations</td>
                                        <td>{Data.lstPreferredLocations}</td>
                                        {/* <td>{prelocnamelst}</td> */}
                                    </tr>
                                    <tr>
                                        <td>Abroad Permit</td>
                                        <td colSpan={3}>{Data.Work_permitfor_USA + " "}</td>
                                    </tr>
                                    <tr>
                                        <td>Summary</td>
                                        <td colSpan={3}>{Data.Summary}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='righ-btn'>
                            {/* <Fab
                                className="left-cell"
                                aria-label="add"
                                onClick={handleBack}
                            >
                                <FontAwesomeIcon
                                    align='left'
                                    color='white'
                                    fontSize={30}
                                    icon={faArrowCircleLeft} />
                            </Fab> */}
                            <Fab
                                className="first-right-cell"
                                aria-label="add"
                                onClick={handleNext}
                            >
                                <FontAwesomeIcon
                                    align='right'
                                    color='white'
                                    fontSize={30}
                                    icon={faArrowCircleRight} />
                            </Fab>
                        </div>
                    </>
                )}

                {tabValue === 1 && (
                    <>
                        <div className='table-two-con'>
                            <legend class="off-detail-legend" >Education details</legend>
                            <table className="candidate-table-three">
                                <tbody
                                    style={{
                                        fontSize: '15px'
                                    }}
                                >
                                    <tr>
                                        <td>DegreeName</td>
                                        <td>DegreeSpecialization</td>
                                        <td>UniversityName</td>
                                        <td>GraduationYear</td>
                                    </tr>
                                    {formFields.map((form, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td>
                                                        {formFields[index].DegreeName}

                                                    </td>
                                                    <td>{formFields[index].DegreeSpecialization}
                                                    </td>
                                                    <td>{formFields[index].UniversityName}

                                                    </td>
                                                    <td>{formFields[index].GraduationYear}

                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className='righ-btn'>
                            <Fab
                                className="left-cell"
                                aria-label="add"
                                onClick={handleBack}
                            >
                                <FontAwesomeIcon
                                    align='left'
                                    color='white'
                                    fontSize={30}
                                    icon={faArrowCircleLeft} />
                            </Fab>
                            <Fab
                                className="right-cell"
                                aria-label="add"
                                onClick={handleNext}
                            >
                                <FontAwesomeIcon
                                    align='right'
                                    color='white'
                                    fontSize={30}
                                    icon={faArrowCircleRight} />
                            </Fab>

                        </div>
                    </>

                )}

                {
                    tabValue === 2 && (
                        <>
                            <div className='table-three-con'>
                                <legend class="off-detail-legend" >Employee Details</legend>
                                <table className="candidate-table-three">
                                    <tbody
                                        style={{
                                            fontSize: '15px'
                                        }}
                                    >
                                        <tr>
                                            <td>Current Designation</td>
                                            <td>{Data.DesignationName}</td>
                                            <td>Industry Name</td>
                                            <td>{Data.IndusName}</td>
                                        </tr>
                                        <tr>
                                            <td>Department Name</td>
                                            <td>{Data.DeptName}</td>
                                            <td>Date of Applied</td>
                                            <td>{Data.DateOfApplication.substring(0, 10)}</td>
                                        </tr>
                                        <tr>
                                            <td>Applying For</td>
                                            <td>{Data.RoleName}</td>
                                            <td>Headline</td>
                                            <td>{Data.ResumeHeadline}</td>
                                        </tr>
                                        <tr>
                                            <td>Current CTC</td>
                                            <td>{Data.CurrentSalary}</td>
                                            <td>Expecting CTC</td>
                                            <td>{Data.ExpectedSalary}</td>
                                        </tr>
                                        <tr>
                                            <td>Notice Period</td>
                                            <td>{Data.NoticePeriod}</td>
                                            <td>Total Work Experience</td>
                                            <td>{Data.TotalYearsOfExperience}</td>
                                        </tr>
                                        <tr>
                                            <td>Job Title</td>
                                            <td>{Data.JobTitle}</td>
                                            <td>Resume Server Path</td>
                                            <td colSpan={3}>{Data.ResumePath}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='righ-btn'>
                                <Fab
                                    className="left-cell"
                                    aria-label="add"
                                    onClick={handleBack}
                                >
                                    <FontAwesomeIcon
                                        align='left'
                                        color='white'
                                        fontSize={30}
                                        icon={faArrowCircleLeft} />
                                </Fab>
                                <Fab
                                    className="right-cell"
                                    aria-label="add"
                                    onClick={handleNext}
                                >
                                    <FontAwesomeIcon
                                        align='right'
                                        color='white'
                                        fontSize={30}
                                        icon={faArrowCircleRight} />
                                </Fab>
                            </div>
                        </>
                    )}


                {
                    tabValue === 3 && (
                        <>
                            <div className='table-four-con'>
                                <legend class="off-detail-legend">Official details</legend>
                                <table className="candidate-table-three">
                                    <tbody
                                        style={{
                                            fontSize: '15px'
                                        }}
                                    >
                                        <tr
                                            style={{
                                                fontWeight: 'bold',
                                                // background: '#f46e00'
                                            }}
                                        >
                                            <td>Company Name</td>
                                            <td>Year of Experience</td>
                                            <td>Designation</td>
                                        </tr>
                                        {officedetail.map((form, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{officedetail[index].Companyname}</td>
                                                    <td>{officedetail[index].NoOfYearsOfExperience}</td>
                                                    <td>{officedetail[index].Designation}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className='righ-btn'>
                                <Fab
                                    className="left-cell"
                                    aria-label="add"
                                    onClick={handleBack}
                                >
                                    <FontAwesomeIcon
                                        align='left'
                                        color='white'
                                        fontSize={30}
                                        icon={faArrowCircleLeft} />
                                </Fab>
                                <Fab
                                    className="right-cell"
                                    aria-label="add"
                                    onClick={handleNext}
                                >
                                    <FontAwesomeIcon
                                        align='right'
                                        color='white'
                                        fontSize={30}
                                        icon={faArrowCircleRight} />
                                </Fab>

                            </div>
                        </>
                    )}
                {tabValue === 4 && (
                    <>
                        <div className='table-four-con'>
                            <legend class="off-detail-legend">Key Skills</legend>
                            <table className="candidate-table-three">
                                <tbody
                                    style={{
                                        fontSize: '15px'
                                    }}
                                >
                                    <tr
                                        style={{
                                            fontWeight: 'bold',
                                            // background: '#f46e00'
                                        }}
                                    >
                                        <td>Key Skills</td>
                                        <td>Working Experience</td>
                                    </tr>
                                    {selectedKeySkills.map((form, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{selectedKeySkills[index].KeySkillName}</td>
                                                <td>{selectedKeySkills[index].Experience}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className='righ-btn'>
                            <Fab
                                className="left-cell"
                                aria-label="add"
                                onClick={handleBack}
                            >
                                <FontAwesomeIcon
                                    align='left'
                                    color='white'
                                    fontSize={30}
                                    icon={faArrowCircleLeft} />
                            </Fab>
                            {/* <Fab
                                className="right-cell"
                                aria-label="add"
                                onClick={handleNext}
                            >
                                <FontAwesomeIcon
                                    align='right'
                                    color='white'
                                    fontSize={30}
                                    icon={faArrowCircleRight} />
                            </Fab> */}

                        </div>
                    </>


                )}
                <viwecandidate data={Data}></viwecandidate>
            </div>
        </div >
    )
}

export default GetCadidateByID;