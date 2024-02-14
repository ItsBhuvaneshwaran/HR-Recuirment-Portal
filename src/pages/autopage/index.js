import * as React from 'react';
import { ReactDOM } from 'react';
import { useCallback, useState, useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Routes, Route } from 'react-router-dom';
// import  from '@mui/material';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete/Autocomplete';  
import Autocomplete from '@mui/material/Autocomplete';
// import { useAutocomplete } from '@mui/material';
import { Stack, CssBaseline, Chip } from '@mui/material';
import { faEdit, faTrash, faAdd, faTimes, faDeleteLeft, faClose } from '@fortawesome/free-solid-svg-icons';
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
// import './insert.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TroubleshootSharp } from '@mui/icons-material';

// import 'bootstrap/dist/css/bootstrap.min.css';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const CandidateInsert = ({ onChange, Data, insertopen, handleClose, handleClickOpen, resumeHandleFileChange }) => {
    const [tabValue, setTabValue] = useState(0);
    let candidate = sessionStorage.getItem('CandidateId'); // State to manage active tab
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
    const PersonalDetail = {
        Id: Data.Id != "" ? Id : 0,
        Name: Name,
        EmailId: EmailId,
        PhoneNumber: PhoneNumber,
        DOB: DateOfBirth,
        Gender: Gender,
        PermanentAdd: PermanentAddress,
        HomeTown: Home_Town,
        StateId: State_Id,
        CityId: City_Id,
        MaritalStatus: Marital_Status,
        Pincode: Pin_Code,
        Summary: Summary,
        AbroadPermit: Work_permitfor_USA,
        PeferLocation: PreferredLocations,
        Summary: Summary,
        IsResume: false,
        IsActive: true,
        CreatedBy: "john",
        UpdatedBy: "john",
        CreatedDate: "2023-11-01T13:06:39.961Z",
        UpdatedDate: "2023-11-01T13:06:39.961Z"
    }
    let candidat = sessionStorage.getItem('CandidateId');

    const Employeedetails = {
        Id: Data.Id == "" || undefined ? 0 : EmpId,
        DesignationId: DesignationId,
        IndustryId: IndustryId,
        DepartmentId: DepartmentId,
        DateOfApplying: DateOfApplication,
        RoleId: RoleId,
        ResumeHeadline: ResumeHeadline,
        CurrSalary: CurrentSalary,
        ExpectSalary: ExpectedSalary,
        NoticePeriod: NoticePeriod,
        OverAllExp: TotalYearsOfExperience,
        JobTitle: JobTitle,
        IsResume: IsResume,
        ResumePath: ResumePath,
        CandidateId: Data.Id == "" || undefined ? candidat : Id,
        files: files,
        IsActive: true,
        CreatedBy: "john",
        UpdatedBy: "john",
        CreatedDate: "2023-11-01T13:06:39.961Z",
        UpdatedDate: "2023-11-01T13:06:39.961Z"
    }

    const total = [
        {
            value: '0 to 1',
            label: 'NewYork'
        },
        {
            value: '0 to 2',
            label: 'USA'
        },
        {
            value: '0 to 3',
            label: 'CANADA'
        },
        {
            value: '0 to 4',
            label: 'SAS'
        }
    ];

    const [name, setName] = React.useState(Name);
    const [mail, setEmail] = React.useState(EmailId);
    const [job, setJob] = React.useState(JobTitle);
    const [ph, setPh] = React.useState(PhoneNumber);
    const [dt, setDt] = React.useState(DateOfApplication);
    const [cl, setCl] = React.useState('');
    // const [totalexpe, settotalexpe] = React.useState(TotalYearsOfExperience);
    // const [company, setCompanyname] = React.useState(Companyname);
    const [desid, setdes] = React.useState(DesignationId);
    const [DepartId, setdepart] = React.useState(DepartmentId);

    const [roles, setrole] = React.useState(RoleId);
    const [Insustryes, setIndustry] = React.useState(IndustryId);
    const [currentSal, setCurrentSal] = React.useState(CurrentSalary);
    const [expectedSal, setExpectedSal] = React.useState(ExpectedSalary);
    const [noticeperiod, setnoticeperiod] = React.useState(NoticePeriod);
    const [resumeHeadline, setResumeHeadline] = React.useState(ResumeHeadline);
    const [summary, setSummary] = React.useState(Summary);
    // const [underGraduationdegree, setUnderGraduationdegree] = React.useState(UnderGraduationdegree);
    // const [uGSpecialization, setUGSpecialization] = React.useState(UGSpecialization);
    // const [uGUniversity, setUGUniversity] = React.useState(UGUniversity);
    // const [uGGraduationYear, setUGGraduationYear] = React.useState(UGGraduationYear);
    // const [postGraduationDegree, setPostGraduationDegree] = React.useState(PostGraduationDegree);
    // const [pGSpecialization, setPGSpecialization] = React.useState(PGSpecialization);
    // const [pGUniversity, setPGUniversity] = React.useState(PGUniversity);
    // const [pG_graduation_year, setPG_graduation_year] = React.useState(PG_graduation_year);
    // const [doctorate_degree, setDoctorate_degree] = React.useState(Doctorate_degree);
    // const [doctorate_specialization, setDoctorate_specialization] = React.useState(Doctorate_specialization);
    // const [doctorate_university, setDoctorate_university] = React.useState(Doctorate_university);
    // const [doctorate_graduation_year, setDoctorate_graduation_year] = React.useState(Doctorate_graduation_year);
    const [marital_Status, setMarital_Status] = React.useState(Marital_Status);
    const [home_Town, setHome_Town] = React.useState(Home_Town);
    const [pin_Code, setPin_Code] = React.useState(Pin_Code);
    const [work_permitfor_USA, setWork_permitfor_USA] = React.useState(Work_permitfor_USA);
    const [dateOfBirth, setDateOfBirth] = React.useState(DateOfBirth);
    const [permanentAddress, setPermanentAddress] = React.useState(PermanentAddress);

    const [state_Id, setstate_Id] = React.useState(State_Id);
    const [stateName, setstateName] = React.useState([]);
    const [stateName1, setStateName1] = React.useState();
    const [city_Id, setcityId] = React.useState(City_Id);
    const [cityName, setcityName] = React.useState([]);
    const [cityName1, setcityName1] = React.useState();
    const [gender, setGender] = React.useState(Gender);
    const [prlocation, setprlocation] = React.useState(PreferredLocations);
    const [Keys, setKeyskills] = React.useState();

    const [editIndex, setEditIndex] = useState(null);

    // dropdowns

    const [descName, setDescName] = React.useState([]);
    const [descName1, setDescName1] = React.useState();

    const [roleName, setRoleName] = React.useState([]);
    const [roleName1, setRoleName1] = React.useState();

    const [deptName, setDeptName] = React.useState([]);
    const [deptName1, setDeptName1] = React.useState();

    const [indusName, setIndustryName] = React.useState([]);
    const [indusName1, setIndustryName1] = React.useState();

    const [keyName, setkeyskilssname] = React.useState([]);
    const [keyName1, setkeyskillsname1] = React.useState();

    const [totalexpe, settotalexpe] = React.useState([]);
    const [totalexpe1, settotalexpe1] = React.useState();

    const [totalExperiences, setTotalExperience] = React.useState([]);
    const [totalExperiences1, setTotalExperience1] = React.useState();

    const [dataobj, setData] = useState([]);
    const [depobj, setDept] = useState([]);
    const [roleobj, setRole] = useState([]);
    const [industryobj, setIndus] = useState([]);
    const [keyobj, setkeys] = useState([]);


    const [country_Idobj, setcountry] = useState([]);
    const [setstate_Idobj, setstate] = useState([]);
    const [setcity_Idobj, setcity] = useState([]);

    const [keySkills, setKeySkills] = useState([]);
    const [KeyskillsName, setKeyskillName] = React.useState();
    const [courelst, setCourselst] = React.useState([]);
    const [coursename, setCoursename] = React.useState([]);

    const [editkey, setEditkey] = React.useState([]);
    // const [roleid, setRoleid] = React.useState(lstKeySkills);

    const [labeloption, setLabeloption] = React.useState('');


    const [prelcationobj, setPreLocation] = useState([]);
    const [preid, setpreid] = React.useState([]);

    const [KeySkillsobj, setKeyskill] = useState([]);
    const [keyid, setkeyid] = React.useState([]);

    const [PreLocationName, setPreLocationName] = React.useState();
    const [prelocname, setPreLocName] = React.useState([]);
    const [prelocnamelst, setprelocnamelst] = React.useState([]);



    function onChangename(event) {
        Data.Name = event.target.value;
        PersonalDetail.Name = event.target.value;
        setName(event.target.value);

        if (event.target.value.trim() === '') {
            setIsNameEmpty(true);
        } else {
            setIsNameEmpty(false);
        }
    }
    function onChangejob(event) {
        Data.JobTitle = event.target.value;
        setJob(event.target.value);

        if (event.target.value.trim() === '') {
            SetIsJobTitleEmpty(true);
        } else {
            SetIsJobTitleEmpty(false);
        }
    }
    const [newemail, setNewemail] = useState('');

    const [emailError, setEmailError] = useState('');
    function onChangeMail(event) {
        const enteredEmail = event.target.value;
        PersonalDetail.EmailId = event.target.value;
        setNewemail(enteredEmail);
        Data.EmailId = event.target.value;
        setEmail(event.target.value);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(enteredEmail) || event.target.value.trim() === '') {
            setEmailError('Please enter a valid email address');
            setEmailEmpty(true)

        } else {
            setEmailError('');
            setEmailEmpty(false); // Clear the error message when email is valid
        }

    }
    function onChangeNumber(event) {
        Data.PhoneNumber = event.target.value;
        PersonalDetail.PhoneNumber = event.target.value;
        // setIsNameEmpty(true);
        // setPh(parseInt(event.target.value));
        setPh((event.target.value));


        if (event.target.value.trim() === '') {
            setIsPhoneEmpty(true);
        } else {
            setIsPhoneEmpty(false);
        }

    }
    function onChangeDate(event) {
        Data.DateOfApplication = event.target.value;
        PersonalDetail.DOB = event.target.value;
        setDt(event.target.value);
        console.log(dt);

        if (event.target.value.trim() === '') {
            setIsAppDateEmpty(true);
        } else {
            setIsAppDateEmpty(false);
        }
    }
    // const [phone, setPhone] = React.useState('');
    // const handlephone = (e) => {
    //     setPhone((e.target.value));

    // }

    function onprelocation(event) {
        Data.PreferredLocations = event.target.value;

    }


    // function ontotal(T, Tex) {
    //     T.preventDefault();
    //     setLabeloption(Tex.Value);
    //     settotalexpe(Tex.value);
    //     Data.TotalYearsOfExperience = Tex.value;
    // }
    // function ontotal(event) {
    //     Data.TotalYearsOfExperience = event.target.value;
    //     settotalexpe(event.target.value);
    // }
    function ontotal(e, exp) {
        e.preventDefault();
        setLabeloption(exp.Name);
        setTotalExperience1(exp.Name);
        // alert(Tex.value);
        Data.TotalYearsOfExperience = exp.Name;

        const exps = {
            Name: Data.TotalYearsOfExperience
        }
        setTotalExperience(exps);

        if (exp) {
            setDataExp({ ...Data, TotalYearsOfExperience: exp.Name })
            setIsTotalExperienceEmpty(false);
        } else {
            setDataExp({ ...Data, TotalYearsOfExperience: '' })
            setIsTotalExperienceEmpty(true);
        }
        // Data.TotalExperience = exp.TotalYearsOfExperience;
    }
    // function oncompanyname(event) {
    //     Data.Companyname = event.target.value;
    //     setCompanyname(event.target.value);
    // }

    function ondes(e, desc) {
        e.preventDefault();
        setLabeloption(desc.Id);
        setdes(desc.Id);
        Data.DesignationId = desc.Id;
        Data.DesignationName = desc.Name;
        Data.IsResume = false;
        Data.ResumePath = "String"

        const states = {
            Id: desc.Id,
            Name: desc.Name,
        }
        setDescName(states);

        if (desc) {
            setDataDesignation({ ...Data, DesignationName: desc.Name })
            setIsDesignationEmpty(false);
        } else {
            setDataDesignation({ ...Data, DesignationName: '' })
            setIsDesignationEmpty(true);
        }
    }
    function ondept(DE, depart) {
        DE.preventDefault();
        setLabeloption(depart.Id);
        setdepart(depart.Id);
        Data.DepartmentId = depart.Id;
        Data.DeptName = depart.DepartmentName;

        const dept = {
            Id: Data.DepartmentId,
            DepartmentName: Data.DeptName,
            Industry_ID: Data.IndustryId
        }
        setDeptName(dept);

        if (depart) {
            setDataDepartment({ ...Data, DeptName: depart.DepartmentName })
            setIsDepartmentEmpty(false);
        } else {
            setDataDepartment({ ...Data, DeptName: '' })
            setIsDepartmentEmpty(true);
        }
    }
    function onrole(r, roles) {
        r.preventDefault();
        setLabeloption(roles.Id);
        setrole(roles.Id);
        Data.RoleId = roles.Id;
        Data.RoleName = roles.Name;

        const states = {
            Id: roles.Id,
            Name: roles.Name,
        }
        setRoleName(states);

        if (roles) {
            setDataRole({ ...Data, RoleName: roles.Name })
            setIsRoleEmpty(false);
        } else {
            setDataRole({ ...Data, RoleName: '' })
            setIsRoleEmpty(true);
        }
    }
    function onIndustry(I, Indus) {
        I.preventDefault();
        setLabeloption(Indus.Id);
        setIndustry(Indus.Id);
        Data.IndustryId = Indus.Id;
        Data.IndusName = Indus.Industry_Name;
        getDept(Indus.Id);

        const ind = {
            Id: Data.IndustryId,
            Industry_Name: Data.IndusName
        }
        setIndustryName(ind);


        if (Indus) {
            setDataIndustry({ ...Data, IndusName: Indus.Industry_Name })
            setIsIndustryEmpty(false);
        } else {
            setDataIndustry({ ...Data, IndusName: '' })
            setIsIndustryEmpty(true);
        }
    }
    function onKeyskills(I, keys) {
        I.preventDefault();
        setLabeloption(keys.Id);
        setKeyskills(keys.Id);
        Data.KeySkils = keys.Id;
        Data.keysName = keys.Name;
        // getDept(keys.Id);

        const ind = {
            Id: Data.KeySkils,
            Name: Data.keysName
        }
        setkeyskilssname(ind);


        if (keys) {
            setDataKeySkills({ ...Data, keysName: keys.KeySkils_Name })
            SetIsKeySkillsEmpty(false);
        } else {
            setDataKeySkills({ ...Data, keysName: '' })
            SetIsKeySkillsEmpty(true);
        }
    }


    function onkeys(K, skills) {
        K.preventDefault();
        setLabeloption(skills.Id);
        //ssetKeyskills(skills.Id);
        Data.KeySkillsId = skills.Id;
        Data.KeyskillsName = skills.Name;
    }
    function onChangeCurrentSalary(event) {
        Data.CurrentSalary = event.target.value;
        setCurrentSal(event.target.value);


        if (event.target.value.trim() === '') {
            setIsCurrentSalaryEmpty(true);
        } else {
            setIsCurrentSalaryEmpty(false);
        }

    }
    function onChangeExpectedSalary(event) {
        Data.ExpectedSalary = event.target.value;
        setExpectedSal(event.target.value);
        if (event.target.value.trim() === '') {
            setIsExpectedSalaryEmpty(true);
        } else {
            setIsExpectedSalaryEmpty(false);
        }
    }
    function onChangenotice(event) {
        Data.NoticePeriod = event.target.value;
        setnoticeperiod(event.target.value);

        if (event.target.value.trim() === '') {
            SetIsNoticePeriodEmpty(true);
        } else {
            SetIsNoticePeriodEmpty(false);
        }
    }
    function onChangeResume(event) {
        Data.ResumeHeadline = event.target.value;
        setResumeHeadline(event.target.value);


        if (event.target.value.trim() === '') {
            setIsResumeHeadlineEmpty(true);
        } else {
            setIsResumeHeadlineEmpty(false);
        }
    }
    function onChangeSummary(event) {
        Data.Summary = event.target.value;
        PersonalDetail.Summary = event.target.value;
        setSummary(event.target.value);


        // if (event.target.value.trim() === '') {
        //     setIsSummaryEmpty(true);
        // } else {
        //     setIsSummaryEmpty(false);
        // }
    }
    // function onChangeUnderGraduationdegree(event) {
    //     Data.UnderGraduationdegree = event.target.value;
    //     setUnderGraduationdegree(event.target.value);
    // }

    // function onChangeuGSpecialization(event) {
    //     Data.UGSpecialization = event.target.value;
    //     setUGSpecialization(event.target.value);
    // }
    // function onChangeUGUniversity(event) {
    //     Data.UGUniversity = event.target.value;
    //     setUGUniversity(event.target.value);
    // }
    // function onChangeUGGraduationYeary(event) {
    //     Data.UGGraduationYear = event.target.value;
    //     setUGGraduationYear(event.target.value);
    // }
    // function onChangePostGraduationDegree(event) {
    //     Data.PostGraduationDegree = event.target.value;
    //     setPostGraduationDegree(event.target.value);
    // }
    // function onChangePGSpecialization(event) {
    //     Data.PGSpecialization = event.target.value;
    //     setPGSpecialization(event.target.value);
    // }
    // function onChangePGUniversity(event) {
    //     Data.PGUniversity = event.target.value;
    //     setPGUniversity(event.target.value);
    // }
    // function onChangePG_graduation_year(event) {
    //     Data.PG_graduation_year = event.target.value;
    //     setPG_graduation_year(event.target.value);
    // }
    // function onChangeDoctorate_degree(event) {
    //     Data.Doctorate_degree = event.target.value;
    //     setDoctorate_degree(event.target.value);
    // }
    // function onChangeDoctorate_specialization(event) {
    //     Data.Doctorate_specialization = event.target.value;
    //     setDoctorate_specialization(event.target.value);
    // }
    // function onChangeDoctorate_university(event) {
    //     Data.Doctorate_university = event.target.value;
    //     setDoctorate_university(event.target.value);
    // }
    // function onChangeDoctorate_graduation_year(event) {
    //     Data.Doctorate_graduation_year = event.target.value;
    //     setDoctorate_graduation_year(event.target.value);
    // }
    function MarritalStatusRadio(event) {
        Data.Marital_Status = event.target.value;
        PersonalDetail.MaritalStatus = event.target.value;
        setMarital_Status(event.target.value);

        setDataMaritial({ ...Data, Marital_Status: event.target.value });
        if (event.target.value === '') {
            setIsMaritialEmpty(true);
        } else {
            setIsMaritialEmpty(false);
        }
    }
    function onChangeHome_Town(event) {
        Data.Home_Town = event.target.value;
        PersonalDetail.HomeTown = event.target.value;
        setHome_Town(event.target.value);

        if (event.target.value.trim() === '') {
            setIsHomeEmpty(true);
        } else {
            setIsHomeEmpty(false);
        }
    }
    const [pincode, setPincode] = useState('');
    const [pincodeError, setPincodeError] = useState('');

    function onChangePin_Code(event) {
        Data.Pin_Code = event.target.value;
        PersonalDetail.Pincode = event.target.value;
        setPin_Code(event.target.value);
        const enteredPincode = event.target.value;
        setPincode(enteredPincode);

        // Regular expression for a 6-digit pin code
        const pincodeRegex = /^[0-9]{6}$/;

        if (!pincodeRegex.test(enteredPincode) || event.target.value.trim() === '') {
            setIsPincodeEmpty(true)
            setPincodeError('Please enter a 6-digit pin code');
        } else {
            setIsPincodeEmpty(false)
            setPincodeError(''); // Clear the error message when the pin code is valid
        }
    }
    function onChangeWork_permitfor_USA(event) {
        Data.Work_permitfor_USA = event.target.value;
        PersonalDetail.AbroadPermit = event.target.value;
        setWork_permitfor_USA(event.target.value);

        if (event.target.value.trim() === '') {
            setIsWorkPermitEmpty(true);
        } else {
            setIsWorkPermitEmpty(false);
        }
    }
    function onChangeDateOfBirth(event) {
        Data.DateOfBirth = event.target.value;
        setDateOfBirth(parseInt(event.target.value));

        if (event.target.value.trim() === '') {
            setIsDateEmpty(true);
        } else {
            setIsDateEmpty(false);
        }
    }
    function onChangePermanentAddress(event) {
        Data.PermanentAddress = event.target.value;
        PersonalDetail.PermanentAdd = event.target.value;
        setPermanentAddress((event.target.value));


        if (event.target.value.trim() === '') {
            setIsPermanentEmpty(true);
        } else {
            setIsPermanentEmpty(false);
        }
    }

    function genderRadio(e) {
        Data.Gender = e.target.value;
        PersonalDetail.Gender = e.target.value;
        setGender(e.target.value);

        setDataGender({ ...Data, Gender: e.target.value });
        if (e.target.value === '') {
            setIsGenderEmpty(true);
        } else {
            setIsGenderEmpty(false);
        }

    }
    function onStateChange(e, state) {
        e.preventDefault();
        PersonalDetail.StateId = e.target.value;
        // getid(state.id);
        setstate_Id(state.Id);
        // setState(state.id);
        Data.State_Id = state.Id;
        Data.StateName = state.Name;
        getCity(state.Id)
        //setFormData({...formData,[role]:roleId})

        const states = {
            Id: state.Id,
            Name: state.Name,
        }
        setstateName(states);

        if (state) {
            setDataState({ ...Data, StateName: state.Name })
            setIsStateEmpty(false);
        } else {
            setDataState({ ...Data, StateName: '' })
            setIsStateEmpty(true);
        }
    }


    function onCityChange(e, city) {
        e.preventDefault();
        PersonalDetail.CityId = e.target.value;
        // getid(state.id);
        Data.City_Id = city.Id;
        Data.CityName = city.Name;
        setcityId(city.Id);

        const states = {
            Id: city.Id,
            Name: city.Name
        }
        setcityName(states);

        if (city) {
            setDataCity({ ...Data, CityName: city.Name })
            setIsCityEmpty(false);
        } else {
            setDataCity({ ...Data, StateName: '' })
            setIsCityEmpty(true);
        }
    }



    function onPreLocationChange(e, role) {
        const yfilter = prelocname.map(itemy => { return itemy; })
        PersonalDetail.PeferLocation = e.target.value;
        const arr = role.filter((item, index) => !yfilter.includes(item.Name));
        if (arr && arr.length > 0) {
            e.preventDefault();
            setprelocnamelst(role)
            let ID = role.map(e => {
                return e.Id

            })
            const xID = ID.toString()
            Data.PreferredLocations = xID;

            setpreid(xID);
            var name = role.map(e => { return (e.Name) });
            const Lname = name.toString();
            Data.lstPreferredLocations = name;
            setPreLocationName(name);
            setPreLocName(name);


            if (role) {
                setDataPreferred({ ...Data, PreferredLocations: role.Name })
                setIsPreferredEmpty(false);
            } else {
                setDataPreferred({ ...Data, PreferredLocations: '' })
                setIsPreferredEmpty(true);
            }

        }
        else if (yfilter && role && yfilter.length > role.length) {
            e.preventDefault();
            setprelocnamelst(role)
            let ID = role.map(e => {
                return e.Id

            })
            const xID = ID.toString()
            Data.PreferredLocations = xID;

            setkeyid(xID);
            var name = role.map(e => { return (e.Name) });
            const Lname = name.toString();
            Data.lstPreferredLocations = name;
            setPreLocationName(name);
            setPreLocName(name);
        }
    }
    //  function onKeySkilsChange(e, role) {

    //      const yfilter = coursename.map(itemy => { return itemy; })
    //      const arr = role.filter((item, index) => !yfilter.includes(item.Name));
    //     if (arr.length > 0) {
    //         e.preventDefault();
    //         setCourselst(role)
    //         let ID = role.map(e => {
    //             return e.Id

    //         })
    //         const xID = ID.toString()
    //         Data.KeySkils = xID;

    //         setkeyid(xID);
    //         var name = role.map(e => { return (e.Name) });
    //         const Lname = name.toString();
    //         //  Data.lstKeySkills = name;
    //         setKeyskillName(name);
    //         setCoursename(name);

    //         if (role) {
    //             //setDataKeySkills({ ...Data, lstKeySkills: role.Name })
    //             SetIsKeySkillsEmpty(false);
    //         } else {
    //             // setDataKeySkills({ ...Data, lstKeySkills: '' })
    //             SetIsKeySkillsEmpty(true);
    //         }

    //     }
    //     else if (yfilter.length > role.length) {
    //         e.preventDefault();
    //         setCourselst(role)
    //         let ID = role.map(e => {
    //             return e.Id

    //         })
    //         const xID = ID.toString()
    //         Data.KeySkils = xID;

    //         setkeyid(xID);
    //         var name = role.map(e => { return (e.Name) });
    //         const Lname = name.toString();
    //         // Data.lstKeySkills = name;
    //         setKeyskillName(name);
    //         setCoursename(name);
    //      }

    // }


    const optionlabel = (option) => option.label;


    const initialValue = {
        Id: Id,
        Name: name,
        EmailId: mail,
        JobTitle: job,
        PhoneNumber: ph,
        DateOfApplication: dt,
        // PreferredLocations: prlocation,
        TotalYearsOfExperience: totalexpe,
        // Companyname: company,
        DesignationId: desid,
        DepartmentId: DepartId,
        RoleId: roles,
        IndustryId: Insustryes,
        // AnnualSalary: AnnuaSalary,
        NoticePeriod: noticeperiod,
        ResumeHeadline: resumeHeadline,
        Summary: summary,

        Marital_Status: marital_Status,
        Home_Town: home_Town,
        Pin_Code: pin_Code,
        Work_permitfor_USA: work_permitfor_USA,
        DateOfBirth: dateOfBirth,
        PermanentAddress: permanentAddress,
        // Country_Id: country_Id,
        State_Id: state_Id,
        City_Id: city_Id,
        Gender: gender,
        //  lstKeySkills: roleid,
        //KeySkils: Keys,

    }

    const [formData, setFormData] = React.useState(initialValue);

    useEffect(() => {

        // if (Data.lstKeySkills !== "") {
        // for(let i=0; i<Data.candidateEducationModels.length;i++){

        // }
        // var temp = (Data.KeySkils).toString().split(',');
        // const tex2 = Data.lstKeySkills;
        // setCoursename(tex2)
        // const temprory = temp.map((id, index) => ({ Id: id, Name: tex2[index], IsActive: true }))
        // setCourselst(temprory);
        // setstateName(Data.StateName)
        //   var st = (Data.state_Id).toString().split(',');
        //   const sN = Data.stateName;
        //   setCoursename(sN)
        //   const temprory = st.map((id, index) => ({ Id: id, Name: sN[index], IsActive: true }))
        //   setCourselst(temprory);
        //   setstateName(Data.StateName)

        if (Data.Id !== "" && Data.Id !== undefined) {
            // const data = Data.keySkillMappings;
            // const temprory = data.map((item, index) => ({ Id: item.Id, Name: item.keySkills }))
            // setlstgetKeyExp(temprory);
            //const araytemo = data.map((item, index) => ({ Id: item.Id, Name:item.keySkills }))
            //setlstgetKeyExp(temprory);
            //setSelectedOptions(temprory);
            //const temp = data.map((item, index) => ({ Id: item.Id, Name: item.KeySkills,}))
            // setlstgetKeyExp(temprory);


            if (Data.StateName !== "") {
                const state = {
                    CountryId: 1,
                    Id: Data.State_Id,
                    Name: Data.StateName,
                    // IsActive: true   
                }
                setstateName(state);
                getCity();
                if (Data.CityName !== "") {
                    const city = {
                        Id: Data.City_Id,
                        Name: Data.CityName,
                        StateId: Data.State_Id
                    }
                    setcityName(city);
                    if (Data.DesignationName !== "") {
                        const desig = {
                            Id: Data.DesignationId,
                            Name: Data.DesignationName
                        }
                        setDescName(desig);
                        if (Data.RoleName !== "") {
                            const role = {
                                Id: Data.RoleId,
                                Name: Data.RoleName
                            }
                            setRoleName(role);
                            if (Data.DepartmentName !== "") {
                                const dept = {
                                    Id: Data.DepartmentId,
                                    DepartmentName: Data.DeptName,
                                    Industry_ID: Data.IndustryId
                                }
                                setDeptName(dept);
                                if (Data.Industry_Name !== "") {
                                    const ind = {
                                        Id: Data.IndustryId,
                                        Industry_Name: Data.IndusName
                                    }
                                    setIndustryName(ind);
                                    if (Data.TotalYearsOfExperience !== "") {
                                        const exp = {
                                            Name: Data.TotalYearsOfExperience
                                        }
                                        setTotalExperience(exp);
                                        if (Data.KeySkils !== "") {
                                            const ind = {
                                                Id: Data.KeySkils,
                                                Name: Data.keysName
                                            }
                                            setkeyskilssname(ind);

                                        }

                                    }
                                }

                            }

                        }
                    }
                }
            }
        }
        fetch('http://localhost:7036/Designation/api/GetDesignation/')
            .then(response => response.json())
            .then(json => setData(json.Models))
            .catch(error => console.error(error));
    }, []);

    const getDept = (Id) => {
        fetch('http://localhost:7036/Department/api/GetDeptbyIndustryId' + `/${Id}`, { method: "Get" })
            .then(response => response.json())
            .then(json => setDept(json.departmentmodel))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch('http://localhost:7036/Role/api/GetRole/')
            .then(response => response.json())
            .then(json => setRole(json.Models))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:7036/Industry/api/Get/')
            .then(response => response.json())
            .then(json => setIndus(json.ResponseList))
            .catch(error => console.error(error));
    }, []);


    useEffect(() => {
        fetch('http://localhost:7036/KeySkills/api/getKeySkills/')
            .then(response => response.json())
            .then(json => setkeys(json.KeySkillsModels))
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        fetch('http://localhost:7036/Resume/api/getExperience/')
            .then(response => response.json())
            .then(json => settotalexpe(json.WorkResponseList))
            .catch(error => console.error(error));
    }, []);


    useEffect(() => {

        const Id = 1;
        fetch('http://localhost:7036/Location/api/getStatesByCountryId' + `/${Id}`, { method: "Get" })
            .then(response => response.json())
            .then(json => setstate(json.States))
            .catch(error => console.error(error));

    }, []);

    const getCity = (Id) => {
        if (Data.CountryId !== 0) {
            var cityID = Data.State_Id;
        }
        else {
            cityID = Id;
        }
        fetch('http://localhost:7036/Location/api/getCitiesByStateId' + `/${cityID}`, { method: "Get" })
            .then(response => response.json())
            .then(json => setcity(json.Cities))
            .catch(error => console.error(error));
    }
    useEffect(() => {

        getUsers()
    }, [])
    const getUsers = () => {
        fetch('http://localhost:7036/KeySkills/api/getKeySkills/')
            .then(response => response.json())
            .then(json => setKeySkills(json.KeySkillsModels))
            .catch(error => console.error(error))
    }

    const insertRole = (value) => {
        {
            fetch('http://localhost:7163/Candidata/api/InsertKeyMapping/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(value) })
                .then(resp => resp.json())
        }
    }
    useEffect(() => {
        if (Data.lstPreferredLocations !== "") {
            var temp = (Data.PreferredLocations).toString().split(',');
            const tex2 = Data.lstPreferredLocations;
            setPreLocName(tex2)
            const temprory = temp.map((id, index) => ({ Id: id, Name: tex2[index], IsActive: true }))
            setprelocnamelst(temprory);
        }
        fetch('http://localhost:7036/Location/api/getPreferredLocation/')
            .then(response => response.json())
            .then(json => setPreLocation(json.Models))
            .catch(error => console.error(error))
    }, []);



    // For education candidate detail set dynamic field

    useEffect(() => {
        if (Data.candidateEducationModels !== "") {
            setFormFields(Data.candidateEducationModels);
        }
    }, []);

    const personsonalData = { candidateEducationModels: candidateEducationModels }



    //let CandidatId = sessionStorage.getItem('CandidateId');
    // setCandidate(CandidatId);
    console.log(CandidatId);

    const [formFields, setFormFields] = useState([
        //    Data.candidateEducationModels
        { Id: 0, DegreeName: '', DegreeSpecialization: '', UniversityName: '', GraduationYear: '', CandidateId: CandidatId === null ? 0 : CandidatId, IsActive: true, CreatedBy: '', UpdatedBy: '', CreatedDate: "", UpdatedDate: "" },
    ])
    let caId = sessionStorage.getItem('CandidateId');
    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        data[index]['CandidateId'] = caId;
        data[index]['CreatedBy'] = "John";
        data[index]['UpdatedBy'] = "John";
        data[index]['CreatedDate'] = "2023-11-02T05:03:57.122Z";
        data[index]['UpdatedDate'] = "2023-11-02T05:03:57.122Z";
        setFormFields(data);

        Data.candidateEducationModels = data;
        // lstEducationModel.candidateEducationModels = data;

        // console.log("values" + Data.candidateEducationModels)

        if (event.target.value.trim() === '') {
            setIsDegreeEmpty(true);
        } else {
            setIsDegreeEmpty(false);
        }

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
            CandidateId: 0,
            IsActive: true,
            CreatedBy: '',
            UpdatedBy: '',
            CreatedDate: '',
            UpdatedDate: ''

        }
        if (formFields.some(field =>
            !field.DegreeName ||
            !field.DegreeSpecialization ||
            !field.UniversityName ||
            !field.GraduationYear)) {
            toast.error('Please Fill Above Education Details', {
                autoClose: 1000,
            });
        }
        else {
            setFormFields([...formFields, object])
        }

    }

    const removeFields = (index) => {
        console.log(index)
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
        // console.log(data)

        Data.candidateEducationModels = data;
    }


    //Candidate Keyskills Details
    // const [keyskil, setkeyskil] = useState([
    //     { Id: 0, KeySki: '', ToatalExpericence: '', CandidateId: 0, IsActive: true, CreatedBy: '', UpdatedBy: '', CreatedDate: "", UpdatedDate: "" },
    // ])
    // let canId = sessionStorage.getItem('CandidateId');
    // const handleAddOffcials = (event, index) => {
    //     let offdata = [...keyskil];
    //     offdata[index][event.target.name] = event.target.value;
    //     offdata[index]['CandidateId'] = canId;
    //     offdata[index]['CreatedBy'] = "John";
    //     offdata[index]['UpdatedBy'] = "John";
    //     offdata[index]['CreatedDate'] = "2023-11-02T05:03:57.122Z";
    //     offdata[index]['UpdatedDate'] = "2023-11-02T05:03:57.122Z";
    //     setOfficedetail(offdata);

    //     // Data.candidateEmployeeModels = offdata;
    // }

    // const detailSubmits = (e) => {
    //     e.preventDefault();
    //     console.log(keyskil)
    // }

    // const addFieldss = () => {
    //     let object = {
    //         Id: 0,
    //         KeySkills: '',
    //         TotalExperience: '',
    //         CandidateId: 0
    //     }

    //     if (officedetail.some(field =>
    //         !field.KeySkills ||
    //         !field.TotalExperience
    //     )) {
    //         toast.error('Please Fill Above Keyskills Details', {
    //             autoClose: 1000,
    //         });
    //     }
    //     else {

    //         setkeyskil([...keyskil, object])
    //     }
    // }

    // const removeFieldss = (index) => {
    //     console.log(index)
    //     let offdata = [...keyskil];
    //     offdata.splice(index, 1)
    //     setkeyskil(offdata)

    //     Data.candidateEmployeeModels = offdata;
    // }


    //Candidate Office details
    useEffect(() => {
        if (Data.candidateEmployeeModels !== "") {
            setOfficedetail(Data.candidateEmployeeModels);
        }
    }, []);
    const EmployeeData = { candidateEmployeeModels: candidateEmployeeModels }
    const [officedetail, setOfficedetail] = useState([
        { Id: 0, Companyname: '', NoOfYearsOfExperience: '', Designation: '', CandidateId: candidate, IsActive: true, CreatedBy: '', UpdatedBy: '', CreatedDate: "", UpdatedDate: "" },
    ])
    let cId = sessionStorage.getItem('CandidateId');
    const handleAddOffcial = (event, index) => {
        let offdata = [...officedetail];
        offdata[index][event.target.name] = event.target.value;
        offdata[index]['CandidateId'] = cId;
        offdata[index]['CreatedBy'] = "John";
        offdata[index]['UpdatedBy'] = "John";
        offdata[index]['CreatedDate'] = "2023-11-02T05:03:57.122Z";
        offdata[index]['UpdatedDate'] = "2023-11-02T05:03:57.122Z";
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
            CandidateId: 0,
            IsActive: true,
            CreatedBy: '',
            UpdatedBy: '',
            CreatedDate: '',
            UpdatedDate: ''

        }

        if (officedetail.some(field =>
            !field.Companyname ||
            !field.NoOfYearsOfExperience ||
            !field.Designation)) {
            toast.error('Please Fill Above Official Details', {
                autoClose: 1000,
            });
        }
        else {

            setOfficedetail([...officedetail, object])
        }
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
        if (Data.empTabKeyskillModels !== undefined) {
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
                    CandidateId: CandidatId,//lstkeySkillsexperience.empTabKeyskillModel[index - 1].CandidateId,
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
                Data.empTabKeyskillModels.push(keyset);
                // selectedKeySkills.push(keyset);
                setSelectedKeySkills(Data.empTabKeyskillModels);
                setSelectedKeySkills1(Data.empTabKeyskillModels);
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

    const [count, setcount] = React.useState(0);
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
            setSelectedKeyexSkills(Data.empTabKeyskillModels);

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
        setcount(count + 1);
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


    // const newkeyforValue = {
    //     Id: Data.DepartmentId,
    //     DepartmentName: Data.DeptName,
    //     Industry_ID: Data.IndustryId
    // }
    // setDeptName(dept);
    // const onRoleChange = (e, role) => {
    //     // Update the selected options
    //     setLstGetKeyExp(role);
    // };

    const handleFilterOptions = (options, { inputValue }) => {
        // Filtering out the selected options
        const filteredOptions = options.filter(option => !lstgetKeyExp.includes(option));//change
        return filteredOptions;
    }
    const handleNext = () => {

        if (tabValue === 0) {
            // if (!Data.Name || !Data.EmailId || !Data.PhoneNumber || !Data.DateOfBirth || !Data.Gender
            //     || !Data.PermanentAddress || !Data.Home_Town || !Data.PreferredLocations || !Data.Marital_Status
            //     || !Data.Pin_Code || !Data.StateName || !Data.Work_permitfor_USA || !Data.Summary || !Data.CityName) {
            //         setIsNameEmpty(true)  || setEmailEmpty(true) ||setIsPhoneEmpty(true) || setIsDateEmpty(true) || setIsPermanentEmpty(true) 
            //         ||setIsHomeEmpty(true) || setIsStateEmpty(true) || setIsGenderEmpty(true) || setIsPincodeEmpty(true)
            //         ||setIsCityEmpty(true);
            //     toast.error('Please fill all Personal Details', {
            //         autoClose: 1000,
            //     });
            if (Data.Id == 0) {
                var myHeaders = new Headers();
                myHeaders.append("Accept-Language", "application/json");
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify(PersonalDetail);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:7036/CandidatePersonal/api/InsertPersonalDetails", requestOptions)
                    .then(response => response.json())
                    .then(resp => {
                        if (resp.Response.IsSuccess) {
                            sessionStorage.setItem('CandidateId', resp.Response.Id);
                            setCandidateID(resp.Response.Id)
                            console.log(resp.Response.Id);
                        }

                    })
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            } else {
                var myHeaders = new Headers();
                myHeaders.append("Accept-Language", "application/json");
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify(PersonalDetail);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:7036/CandidatePersonal/api/UpdatePersonalDetails", requestOptions)
                    .then(response => response.json())
                    .then(resp => {
                        if (resp.Response.IsSuccess) {
                            sessionStorage.setItem('CandidateId', resp.Response.Id);
                            setCandidateID(resp.Response.Id);
                            console.log(resp.Response.Id);
                        }

                    })
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }

            if (!Data.Name) {
                setIsNameEmpty(true);
                if (!Data.EmailId) {
                    setEmailEmpty(true);
                    if (!Data.PhoneNumber) {
                        setIsPhoneEmpty(true)
                        if (!Data.PreferredLocations) {
                            setIsPreferredEmpty(true);
                            toast.error('Please Enter Required Fields', {
                                autoClose: 1000,

                            });
                        }
                    }
                }
            }
            else {
                setTabValue(tabValue + 1);
            }


        }
        else if (tabValue === 1) {
            const isAnyEducationEmpty = formFields.some((field) =>
                !field.DegreeName || !field.DegreeSpecialization || !field.UniversityName || !field.GraduationYear);
            if (isAnyEducationEmpty) {
                toast.error('Please fill all Education Details', {
                    autoClose: 1000,
                });
            } else {

                var myHeaders = new Headers();
                myHeaders.append("Accept-Language", "application/json");
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify(personsonalData);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:7036/api/CandidateEducation/api/candidateEducation", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));

                setTabValue(tabValue + 1);
            }


        }
        else if (tabValue === 2) {
            // if (!Data.DesignationId || !Data.RoleId || !Data.IndustryId || !Data.DepartmentId || !Data.KeySkils
            //     || !Data.ResumeHeadline || !Data.CurrentSalary || !Data.ExpectedSalary || !Data.NoticePeriod
            //     || !Data.TotalYearsOfExperience || !Data.JobTitle
            //     || !Data.DateOfApplication) {
            //     toast.error('Please fill all Employee Details', {
            //         autoClose: 1000,
            //     });
            if (!Data.DesignationId) {
                setIsDesignationEmpty(true);
                if (!Data.KeySkillId) {
                    isKeySkillsEmpty(true);
                    if (!Data.IndustryId) {
                        setIsIndustryEmpty(true);
                        if (!Data.DepartmentId) {
                            setIsDepartmentEmpty(true);
                            if (!Data.DateOfApplication) {
                                setIsAppDateEmpty(true);
                                if (!Data.RoleId) {
                                    setIsRoleEmpty(true);
                                    if (!Data.ResumeHeadline) {
                                        setIsResumeHeadlineEmpty(true);
                                        if (!Data.CurrentSalary) {
                                            setIsCurrentSalaryEmpty(true);

                                            if (!Data.ExpectedSalary) {
                                                setIsExpectedSalaryEmpty(true);

                                                if (!Data.NoticePeriod) {
                                                    SetIsNoticePeriodEmpty(true);
                                                    if (!Data.TotalYearsOfExperience) {
                                                        setIsTotalExperienceEmpty(true);
                                                        if (!Data.JobTitle) {
                                                            SetIsJobTitleEmpty(true);
                                                            toast.error('Please Enter Required Fields', {
                                                                autoClose: 1000,

                                                            });

                                                        }

                                                    }


                                                }
                                            }

                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            } else {
                if (Data.Id == 0) {

                    function objectToFormData(obj) {
                        const formData = new FormData();

                        Object.entries(obj).forEach(([key, value]) => {
                            formData.append(key, value);
                        });

                        return formData;
                    }

                    fetch('http://localhost:7036/Employee/api/insertEmployee/', { method: "POST", body: objectToFormData(Employeedetails) })
                        .then(resp => resp.json())
                        .then(resp => {
                            setTabValue(tabValue + 1);
                            //view                  
                        })

                }
                else {
                    function objectToFormData(obj) {
                        const formData = new FormData();

                        Object.entries(obj).forEach(([key, value]) => {
                            formData.append(key, value);
                        });

                        return formData;
                    }

                    fetch('http://localhost:7036/Employee/api/updateEmployee/', { method: "POST", body: objectToFormData(Employeedetails) })
                        .then(resp => resp.json())
                        .then(resp => {
                            setTabValue(tabValue + 1);
                            //view                  
                        })

                }
            }

        }
        else if (tabValue === 3) {
            const isAnyOfficeEmpty = officedetail.some((field) =>
                !field.Companyname || !field.NoOfYearsOfExperience || !field.Designation);
            if (isAnyOfficeEmpty) {
                toast.error('Please fill all Official Details', {
                    autoClose: 1000,
                });
            } else {

                var myHeaders = new Headers();
                myHeaders.append("Accept-Language", "application/json");
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify(EmployeeData);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:7036/CandidateEmployee/api/candidateEmployee/", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));

                setTabValue(tabValue + 1);
            }
        }
        // if (!Data.UnderGraduationdegree || !Data.UGSpecialization || !Data.UGUniversity || !Data.UGGraduationYear
        //     || !Data.PostGraduationDegree || !Data.PGSpecialization || !Data.PGUniversity || !Data.PG_graduation_year
        //     || !Data.Doctorate_degree || !Data.Doctorate_specialization || !Data.Doctorate_university || !Data.Doctorate_graduation_year
        // ) {
        //     toast.error('Please fill all fields.', {
        //         autoClose: 1000,
        //     });
        // }
        // else {
        //     setTabValue(tabValue + 1);
        // }
    };
    const HandleSubmit = () => {
        if (tabValue === 4) {

            var myHeaders = new Headers();
            myHeaders.append("Accept-Language", "application/json");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(lstkeySkillsexperience);
            console.log(raw)

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:7036/EmpTabKeyskill/api/LstKeyskilssResponse/", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .then(resp => {
                    getUsers();
                })

                .catch(error => console.log('error', error));

        }

    }
    const handleBack = () => {
        if (tabValue > 0) {
            setTabValue(tabValue - 1);
        }
    };

    const [values, setValues] = useState({
        Name: 'ragu',
        JobTitle: 'JobTitle',
        PhoneNumber: '',
        phone: '',
        state: 'los-angeles',
        country: 'USA',
        CompanyName: 'Proteam'
    });


    const [valuer, setValuer] = React.useState('female');
    const [open, setOpen] = React.useState(false);


    const labelStyle = {
        color: 'black',
        fontSize: '12px',
        margin: '0px 0px 0px -6px',     // No margin
        padding: '0',    // No padding
    };


    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };
    const tabLabelStyle = {
        fontSize: '15px', // Adjust the font size as needed
        marginRight: '8rem',
    };

    // const isNameEmpty = Data.Name === '';
    // const isPLocEmpty = prelocnamelst.length === 0;
    //Tab 1
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isEmailEmpty, setEmailEmpty] = useState(false);
    const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
    const [isDateEmpty, setIsDateEmpty] = useState(false);
    const [isGenderEmpty, setIsGenderEmpty] = useState(false);
    const [isPermanentEmpty, setIsPermanentEmpty] = useState(false);
    const [isHomeEmpty, setIsHomeEmpty] = useState(false);
    const [isStateEmpty, setIsStateEmpty] = useState(false);
    const [isPincodeEmpty, setIsPincodeEmpty] = useState(false);
    const [isCityEmpty, setIsCityEmpty] = useState(false);
    const [isPreferredEmpty, setIsPreferredEmpty] = useState(false);
    const [isWorkPermitEmpty, setIsWorkPermitEmpty] = useState(false);
    const [isMaritialEmpty, setIsMaritialEmpty] = useState(false);
    const [isSummaryEmpty, setIsSummaryEmpty] = useState(false);

    //Tab 2
    const [isDegreeEmpty, setIsDegreeEmpty] = useState(false);

    //Tab 3
    const [isDesignationEmpty, setIsDesignationEmpty] = useState(false);
    const [isIndustryEmpty, setIsIndustryEmpty] = useState(false);
    const [isDepartmentEmpty, setIsDepartmentEmpty] = useState(false);
    const [isAppDateEmpty, setIsAppDateEmpty] = useState(false);
    const [isRoleEmpty, setIsRoleEmpty] = useState(false);
    const [isResumeHeadlineEmpty, setIsResumeHeadlineEmpty] = useState(false);
    const [isCurrentSalaryEmpty, setIsCurrentSalaryEmpty] = useState(false);
    const [isExpectedSalaryEmpty, setIsExpectedSalaryEmpty] = useState(false);
    const [isNoticePeriodEmpty, SetIsNoticePeriodEmpty] = useState(false);
    const [isTotalExperienceEmpty, setIsTotalExperienceEmpty] = useState(false);
    const [isJobTitleEmpty, SetIsJobTitleEmpty] = useState(false);
    const [isKeySkillsEmpty, SetIsKeySkillsEmpty] = useState(false);





    const [dataState, setDataState] = useState('');
    const [dataGender, setDataGender] = useState('');
    const [dataCity, setDataCity] = useState('');
    const [dataPreferred, setDataPreferred] = useState('');
    const [dataMaritial, setDataMaritial] = useState('');


    const [dataDesignation, setDataDesignation] = useState('');
    const [dataIndustry, setDataIndustry] = useState('');
    const [dataDepartment, setDataDepartment] = useState('');
    const [dataRole, setDataRole] = useState('');
    const [dataExpe, setDataExp] = useState('');
    const [dataKeySkills, setDataKeySkills] = useState('');


    //file uploading


    const [selectedFile, setSelectedFile] = useState([]);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        // const formData = new FormData();
        // formData.append("files",selectedFile);
        Data.files = file;
        console.log('Selected File:', file);
    };


    const handleUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            alert('Please select a file first');
            return;
        }
        console.log('Selected Files:', selectedFile);
        const formData = new FormData();
        formData.append("files", selectedFile);
        var myHeaders = new Headers();
        myHeaders.append("Accept-Language", "multipart/form-data");



        //, "/C:/Users/Admin/Downloads/DSC_9606.jpg"

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        };

        fetch("https://localhost:7163/ResumeFile/api/UploadResumeAsync", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    // KeySkiles New From John

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [newtotalexpe, setNewtotalexpe] = useState([]);
    const [newKeySkills, setNewKeySkills] = useState([]);
    const [subOptions, setSubOptions] = useState([]);
    const [KeySkillsid, setKeySkillsid] = useState([]);
    const [Experienceid, setExperienceid] = useState([]);
    const [sValue, setsValue] = useState([]);
    const [lstKeyExp, setlstKeyExp] = useState([]);
    const [lstgetKeyExp, setlstgetKeyExp] = useState([]);
    const [lstgetExp, setlstgetExp] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7036/Resume/api/getExperience/')
            .then(response => response.json())
            .then(json => setNewtotalexpe(json.WorkResponseList))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        getUserss();
    }, []);

    const getUserss = () => {
        fetch('http://localhost:7036/KeySkills/api/getKeySkills/')
            .then(response => response.json())
            .then(json => setNewKeySkills(json.KeySkillsModels))
            .catch(error => console.error(error));
    };

    const onRoleChange = (e, role) => {

        //     if(lstgetKeyExp.length >0){

        //     const unq = role.filter(function (item, index){
        //         return role.indexOf(item) == index;
        //     })
        //     console.log(unq);

        //     const set1 = new Set(lstgetKeyExp)
        //     const f1array = role.filter(item => set1.has(item) );
        //     if(f1array.length > 0){
        //         console.log(f1array);
        //     }
        // }

        //     const fltary = role.filter((value, index, item) =>{
        //         return item.indexOf(value) === index;
        //     })
        // const xarray = role.map((item, index) => item.Name === role[index].Name);
        // const filterary = role.map((item, index)=> {
        //    if(item.Name !== role[index].Name){
        //     return item;
        //    }
        // })

        e.preventDefault();
        setSelectedOptions(role);
        let ID = role.map(e => {
            return e.Id

        })
        setKeySkillsid(ID);
        //  const temprory = role.map((item, index) => ({ Id: item.Id, Name:item.KeySkills[index] }));

        // setlstgetKeyExp(temprory);        

    };

    const handleSubOptionsChange = (option, value) => {
        const subval = value;
        sValue.push(value);
        const tempary = selectedOptions.map((option, index) => ({
            KeySkillId: option.Id,
            Id: 0,
            Experience: sValue[index],
            CandiadateId: 0,
            KeySkills: option.Name
        }));

        // setlstKeyExp(tempary);
        console.log(tempary);
        Data.keySkillMappings = tempary;
    }
    return (
        <div className='drawer-containerclasss'>
            <ToastContainer />
            <div align="right"
                style={{
                    margin: '10px 15px 0px -5rem',
                    cursor: 'pointer'
                }}  >
                <FontAwesomeIcon
                    onClick={() => handleClose()}
                    color='gray'
                    fontSize={20}
                    icon={faClose} />

            </div>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleChangeTab}
                            aria-label="basic tabs example"
                        >
                            <Tab
                                label="Personal Details"
                                value={0}
                                index={0}
                                style={tabLabelStyle}
                            ></Tab>
                            <Tab
                                label="Educational Details"
                                value={1}
                                index={1}
                                style={tabLabelStyle}
                            />
                            <Tab
                                label="Employee Details"
                                value={2}
                                index={2}
                                style={tabLabelStyle}
                            />
                            <Tab
                                label="Official Details"
                                value={3}
                                index={3}
                                style={tabLabelStyle}
                            />
                            <Tab
                                label="Keyskills Details"
                                value={4}
                                index={4}
                                style={tabLabelStyle}
                            />
                        </Tabs>

                    </Box>
                    {/* <CustomTabPanel value={value} index={0}>
                        Item One
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel> */}
                </Box>
            </div>

            <div>
                <form
                    onClose={handleClose}
                    className='form-cnr'
                    autoComplete="off"
                    noValidate
                // onSubmit={handleSubmit}
                >
                    <Card className='cart-cnr'>
                        <Typography
                            variant="h5"
                            style={{
                                fontSize: '20px',
                                margin: '20px 0px 0px 20px'
                            }}
                        >
                            Candidate Profile
                        </Typography>

                        <br />

                        <CardContent sx={{ pt: 0 }}>
                            <Box sx={{ m: -1.5 }}>
                                {tabValue === 0 && (
                                    <>
                                        <Grid className='grid-cnr-one'
                                            container
                                            rowSpacing={2}
                                        >
                                            <fieldset class="border rounded-3 p-3">
                                                <legend class="float-none w-auto px-3" >Personal Details</legend>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Name"
                                                                    type='Name'
                                                                    error={isNameEmpty}
                                                                    required
                                                                    id="Name"
                                                                    value={Data.Name}
                                                                    onChange={e => onChangename(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isNameEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="EmailId"
                                                                    type='email'
                                                                    required
                                                                    id="EmailID"
                                                                    error={!!emailError || isEmailEmpty}
                                                                    helperText={emailError}
                                                                    onChange={e => onChangeMail(e)}
                                                                    value={Data.EmailId}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isEmailEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="PhoneNumber"
                                                                    type='text'
                                                                    required
                                                                    id="PhoneNumber"
                                                                    value={Data.PhoneNumber}
                                                                    onChange={e => onChangeNumber(e)}
                                                                    error={isNaN(PhoneNumber) || isPhoneEmpty}
                                                                    helperText={isNaN(PhoneNumber) ? 'Please Enter Numbers Only' : ""}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isPhoneEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        {/* <td>
                                                            <TextField


                                                                id="filled-error"
                                                                type="text"
                                                                label="PhoneNumber"
                                                                name="PhoneNumber"
                                                                required
                                                                value={phone}
                                                                error={isNaN(phone)}
                                                                helperText={isNaN(phone) ? 'Please Enter Numbers Only' : ""}
                                                                onChange={e => handlephone(e)}

                                                            />
                                                        </td> */}
                                                        <td>
                                                            <Grid>
                                                                <InputLabel required htmlFor="DateOfBirth" style={{ fontSize: '12px', color: 'grey', margin: '-15px 0px -10px 0px' }}>
                                                                    Date of Birth
                                                                </InputLabel>
                                                                <TextField className="customTextField"
                                                                    // label="Date Of Application"
                                                                    type="date"
                                                                    id="DateOfBirth"
                                                                    value={Data.DateOfBirth.substring(0, 10)}
                                                                    // error={isDateEmpty}
                                                                    onChange={e => onChangeDateOfBirth(e)}
                                                                    fullWidth

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            padding: '15px',
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'dade-style',
                                                                            notchedOutline: isDateEmpty ? 'redBorder' : null  // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Grid container alignItems="center">
                                                                <FormLabel id="demo-radio-buttons-group-label">
                                                                    <span className="custom-label"> Gender  &nbsp;&nbsp;&nbsp;</span>
                                                                </FormLabel>
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio-buttons-group"
                                                                    value={Data.Gender}

                                                                    onChange={(e) => genderRadio(e)}
                                                                    row
                                                                >
                                                                    <FormControlLabel
                                                                        value="female"
                                                                        control={<Radio />}
                                                                        label={<span style={labelStyle}>Female</span>}
                                                                    />
                                                                    <FormControlLabel
                                                                        value="male"
                                                                        control={<Radio />}
                                                                        label={<span style={labelStyle}>Male</span>}
                                                                    />
                                                                    <FormControlLabel
                                                                        value="other"
                                                                        control={<Radio />}
                                                                        label={<span style={labelStyle}>Other</span>}
                                                                    />
                                                                </RadioGroup>
                                                                {/* {isGenderEmpty && <span style={{ color: 'red' }}>Please select a gender</span>} */}

                                                            </Grid>
                                                        </td>
                                                        <td rowSpan="2">
                                                            <TextField className="customTextField"
                                                                id="outlined-multiline-static"
                                                                label="Permanent Address"
                                                                required
                                                                value={Data.PermanentAddress}
                                                                // error={isPermanentEmpty}
                                                                onChange={e => onChangePermanentAddress(e)}
                                                                multiline
                                                                rows={6}

                                                                InputLabelProps={{
                                                                    style: {
                                                                        fontSize: '12px',
                                                                        color: 'grey',
                                                                    },
                                                                }}
                                                                InputProps={{
                                                                    classes: {
                                                                        input: 'inputTextStyle',
                                                                        notchedOutline: isPermanentEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                    },
                                                                }}

                                                            />
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Hometown"
                                                                    type='Home_Town'
                                                                    required
                                                                    id="Home_Town"
                                                                    value={Data.Home_Town}
                                                                    // error={isHomeEmpty}
                                                                    onChange={e => onChangeHome_Town(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isHomeEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <Autocomplete
                                                                    disableClearable
                                                                    options={setstate_Idobj}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    onChange={(event, Id) => onStateChange(event, Id)}

                                                                    value={Data.StateName !== "" ? stateName : stateName1}

                                                                    renderInput={(params) => (
                                                                        <TextField className="customTextField"
                                                                            {...params}
                                                                            variant="outlined"
                                                                            required
                                                                            // error={isStateEmpty}

                                                                            label="Select State"

                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        //placeholder={Data.StateName}
                                                                        // InputLabelProps={{
                                                                        //     style: {
                                                                        //         fontSize: '12px',
                                                                        //         color: 'grey',
                                                                        //     },
                                                                        // }}
                                                                        // InputProps={{
                                                                        //     classes: {
                                                                        //         input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        //     },
                                                                        // }}
                                                                        />
                                                                    )}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Grid container alignItems="center">
                                                                <FormLabel id="demo-Marital_Status-buttons-group-label">
                                                                    <span className="custom-label">Marital Status  &nbsp;&nbsp;&nbsp;</span>
                                                                </FormLabel>
                                                                <RadioGroup
                                                                    aria-labelledby="demo-Marital_Status-buttons-group-label"
                                                                    name="radio-buttons-group"
                                                                    value={Data.Marital_Status}
                                                                    onChange={(e) => MarritalStatusRadio(e)}
                                                                    row
                                                                >
                                                                    <FormControlLabel
                                                                        value="Married"
                                                                        control={<Radio />}
                                                                        label={<span style={labelStyle}>Married</span>}
                                                                    />
                                                                    <FormControlLabel
                                                                        value="UnMarried"
                                                                        control={<Radio />}
                                                                        label={<span style={labelStyle}>UnMarried</span>}
                                                                    />
                                                                </RadioGroup>
                                                                {/* {isMaritialEmpty && <span style={{ color: 'red' }}>Please select a gender</span>} */}

                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Pincode"
                                                                    type='text'
                                                                    required
                                                                    id="Pin_Code"
                                                                    // error={!!pincodeError || isPincodeEmpty}
                                                                    helperText={pincodeError}
                                                                    value={Data.Pin_Code}
                                                                    onChange={e => onChangePin_Code(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isPincodeEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <Autocomplete
                                                                    disableClearable
                                                                    options={setcity_Idobj}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    onChange={(event, Id) => onCityChange(event, Id)}
                                                                    value={Data.CityName !== "" ? cityName : cityName1}
                                                                    renderInput={(params) => (
                                                                        <TextField className="customTextField"
                                                                            {...params}
                                                                            required
                                                                            variant="outlined"
                                                                            label="Select City"
                                                                            // error={isCityEmpty}
                                                                            // placeholder={Data.CityName}
                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <Grid>
                                                                <TextField className="sumarycustomTextField"
                                                                    fullWidth
                                                                    label="Summary"
                                                                    type='Summary'
                                                                    required
                                                                    // error={isSummaryEmpty}
                                                                    id="Summary"
                                                                    value={Data.Summary}
                                                                    onChange={e => onChangeSummary(e)}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            // notchedOutline: isSummaryEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField style={{
                                                                    width: '15rem'
                                                                }}
                                                                    fullWidth
                                                                    label="Abroad Permit"
                                                                    type='Work_permitfor_USA'
                                                                    required
                                                                    id="Work_permitfor_USA"
                                                                    value={Data.Work_permitfor_USA}
                                                                    // error={isWorkPermitEmpty}
                                                                    onChange={e => onChangeWork_permitfor_USA(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isWorkPermitEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        {/* <td>
                                                            <Grid>
                                                                <Autocomplete
                                                                    multiple
                                                                    disablePortal
                                                                    id="PreferLoc"
                                                                    options={prelcationobj}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    onChange={(e, role) => onPreLocationChange(e, role)}
                                                                    fullWidth
                                                                    value={prelocnamelst}
                                                                    renderInput={(params) => (
                                                                        <TextField {...params}
                                                                            label="Choose Prefer Location Option"
                                                                            variant="outlined"
                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 13, // Adjust the input font size as needed
                                                                                },
                                                                            }}

                                                                        />
                                                                    )}
                                                                />

                                                            </Grid>
                                                        </td> */}
                                                        <td colSpan={2}>
                                                            <Grid>
                                                                <Autocomplete
                                                                    multiple
                                                                    disableClearable
                                                                    id="PreferLoc"
                                                                    options={prelcationobj}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    onChange={(e, role) => onPreLocationChange(e, role)}
                                                                    fullWidth

                                                                    value={prelocnamelst}
                                                                    renderInput={(params) => (
                                                                        <TextField
                                                                            //error={isPLocEmpty}
                                                                            required
                                                                            error={isPreferredEmpty}
                                                                            style={{
                                                                                width: '35rem',
                                                                                margin: '0px 0px 0px -10rem'
                                                                            }}
                                                                            {...params}
                                                                            label="Choose Prefer Location"
                                                                            variant="outlined"
                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12,
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12,
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        />
                                                                    )}
                                                                    renderTags={(value, getTagProps) =>
                                                                        value.map((option, index) => (
                                                                            <Chip
                                                                                key={index}
                                                                                label={option.Name}
                                                                                style={{

                                                                                    background: 'lightgray', // Background color
                                                                                    color: 'black', // Text color
                                                                                    // padding: '0px 0px', // Padding
                                                                                    fontSize: '11px', // Font size
                                                                                    borderRadius: '5px',
                                                                                    margin: '0px 4px 0px 0px',
                                                                                }}
                                                                                {...getTagProps({ index })}
                                                                            />
                                                                        ))
                                                                    }
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </fieldset>
                                        </Grid>
                                        <br />
                                        <button
                                            className='next-btn'
                                            type="button"
                                            onClick={handleNext}>
                                            Next &gt;&gt;
                                        </button>
                                    </>
                                )}

                                {tabValue === 1 && (
                                    <>
                                        <Grid className='grid-cnr-one'
                                            container
                                            rowSpacing={2}
                                        >
                                            <fieldset class="border rounded-3 p-3">
                                                <legend class="float-none w-auto px-3" >Education Details</legend>
                                                <table onSubmit={submit}>
                                                    {formFields.map((form, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="Degree"
                                                                            type='text'
                                                                            name='DegreeName'
                                                                            // error={isDegreeEmpty}
                                                                            value={formFields[index].DegreeName}
                                                                            required
                                                                            // id="degree"
                                                                            onChange={event => handleFormChange(event, index)}
                                                                            // value={Data.UnderGraduationdegree}
                                                                            // onChange={e => onChangeUnderGraduationdegree(e)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle',
                                                                                    // notchedOutline: isDegreeEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="Specilisation"
                                                                            type='text'
                                                                            name='DegreeSpecialization'
                                                                            required
                                                                            //error={isDegreeEmpty}
                                                                            // id="UGSpecialization"
                                                                            // value={Data.UGSpecialization}
                                                                            // onChange={e => onChangeuGSpecialization(e)}
                                                                            value={formFields[index].DegreeSpecialization}
                                                                            onChange={event => handleFormChange(event, index)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle',
                                                                                    //  notchedOutline: isDegreeEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="University"
                                                                            type='text'
                                                                            name='UniversityName'
                                                                            required
                                                                            // error={isDegreeEmpty}
                                                                            value={formFields[index].UniversityName}
                                                                            onChange={event => handleFormChange(event, index)}
                                                                            // id="UGUniversity"
                                                                            // value={Data.UGUniversity}
                                                                            // onChange={e => onChangeUGUniversity(e)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle',
                                                                                    //notchedOutline: isDegreeEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="YOP"
                                                                            type='text'
                                                                            name='GraduationYear'
                                                                            required
                                                                            // error={isDegreeEmpty}
                                                                            // id="UGGraduationYear"
                                                                            // value={Data.UGGraduationYear}
                                                                            // onChange={e => onChangeUGGraduationYeary(e)}
                                                                            value={formFields[index].GraduationYear}
                                                                            onChange={event => handleFormChange(event, index)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle',
                                                                                    //  notchedOutline: isDegreeEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <div>
                                                                    <Fab
                                                                        className="add-can"
                                                                        aria-label="add"
                                                                        onClick={() => removeFields(index)}
                                                                        title='Delete'
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            color='white'
                                                                            fontSize={15}
                                                                            icon={faTrash} />
                                                                    </Fab>
                                                                </ div>
                                                            </tr>
                                                        )
                                                    })}
                                                </table>
                                                <Fab
                                                    className="remove-detail"
                                                    aria-label="add"
                                                    onClick={addFields}
                                                >
                                                    <FontAwesomeIcon
                                                        color='white'
                                                        fontSize={15}
                                                        icon={faAdd} />
                                                </Fab>
                                                {/* <button type="button" className="bunt-th" onClick={addFields}>Add More...</button> */}
                                                {/* <br /> */}
                                                {/* <button type="button" className="bunt-th" onClick={submit}>Submit</button> */}
                                            </fieldset>
                                        </Grid>
                                        <button className='back-btn' type="button" onClick={handleBack}>&lt;&lt; Back </button>
                                        <button className='next-btn2' type="button" onClick={handleNext}> Next &gt;&gt;</button>
                                    </>

                                )}



                                {/* {tabValue === 1 && (
                                    <>
                                        <Grid className='grid-cnr-one'
                                            container
                                            rowSpacing={2}
                                        >
                                            <fieldset class="border rounded-3 p-3">
                                                <legend class="float-none w-auto px-3" >Education Details</legend>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="UG Degree"
                                                                    type='UnderGraduationdegree'
                                                                    required
                                                                    id="UnderGraduationdegree"
                                                                    value={Data.UnderGraduationdegree}
                                                                    onChange={e => onChangeUnderGraduationdegree(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="UG Specialization"
                                                                    type='UGSpecialization'
                                                                    required
                                                                    id="UGSpecialization" */}
                                {/* value={Data.UGSpecialization}
                                                                    onChange={e => onChangeuGSpecialization(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="UG University"
                                                                    type='UGUniversity'
                                                                    required
                                                                    id="UGUniversity"
                                                                    value={Data.UGUniversity}
                                                                    onChange={e => onChangeUGUniversity(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="UG YOP"
                                                                    type='UGGraduationYear'
                                                                    required
                                                                    id="UGGraduationYear"
                                                                    value={Data.UGGraduationYear}
                                                                    onChange={e => onChangeUGGraduationYeary(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="PG Degree"
                                                                    type='PostGraduationDegree' */}
                                {/* required
                                                                    id="PostGraduationDegree"
                                                                    value={Data.PostGraduationDegree}
                                                                    onChange={e => onChangePostGraduationDegree(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="PG Specialization"
                                                                    type='PGSpecialization'
                                                                    required
                                                                    id="PGSpecialization"
                                                                    value={Data.PGSpecialization}
                                                                    onChange={e => onChangePGSpecialization(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="PG University"
                                                                    type='PGUniversity'
                                                                    required
                                                                    id="PGUniversity"
                                                                    value={Data.PGUniversity}
                                                                    onChange={e => onChangePGUniversity(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="PG YOP"
                                                                    type='PG_graduation_year'
                                                                    required
                                                                    id="PG_graduation_year"
                                                                    value={Data.PG_graduation_year}
                                                                    onChange={e => onChangePG_graduation_year(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr> */}
                                {/* <tr>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Phd"
                                                                    type='Doctorate_degree'
                                                                    required
                                                                    id="Doctorate_degree"
                                                                    value={Data.Doctorate_degree}
                                                                    onChange={e => onChangeDoctorate_degree(e)}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Phd specialization"
                                                                    type='Doctorate_specialization'
                                                                    required
                                                                    id="Doctorate_specialization"
                                                                    value={Data.Doctorate_specialization}
                                                                    onChange={e => onChangeDoctorate_specialization(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Phd University"
                                                                    type='Doctorate_university'
                                                                    required
                                                                    id="Doctorate_university"
                                                                    value={Data.Doctorate_university}
                                                                    onChange={e => onChangeDoctorate_university(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Phd YOP"
                                                                    type='Doctorate_graduation_year'
                                                                    required
                                                                    id="Doctorate_graduation_year"
                                                                    value={Data.Doctorate_graduation_year}
                                                                    onChange={e => onChangeDoctorate_graduation_year(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr> */}
                                {/* </table>
                                            </fieldset>
                                        </Grid>
                                        <button className='back-btn' type="button" onClick={handleBack}>&lt;&lt; Back </button>
                                        <button className='next-btn' type="button" onClick={handleNext}> Next &gt;&gt;</button>
                                    </>

                                )} */}

                                {tabValue === 2 && (
                                    <>
                                        <Grid className='grid-cnr-two'
                                            container
                                            rowSpacing={2}
                                        >
                                            <fieldset class="border rounded-3 p-3">
                                                <legend class="float-none w-auto px-3" >Employee Details</legend>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <Grid>
                                                                <Autocomplete
                                                                    disableClearable
                                                                    options={dataobj}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    value={Data.DesignationId !== "" ? descName : descName1}

                                                                    //label="Enter "
                                                                    onChange={(event, Id) => ondes(event, Id)}
                                                                    renderInput={(params) =>
                                                                        <TextField className="customTextFieldEmploye"
                                                                            {...params}

                                                                            //placeholder={Data.DesignationName}
                                                                            label="Designation"
                                                                            error={isDesignationEmpty}

                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        />
                                                                    }
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <Autocomplete
                                                                    disableClearable
                                                                    options={industryobj}
                                                                    getOptionLabel={(option) => option.Industry_Name}
                                                                    value={Data.IndustryId !== "" ? indusName : indusName1}
                                                                    onChange={(event, Id) => onIndustry(event, Id)}
                                                                    renderInput={(params) =>
                                                                        <TextField className="customTextFieldEmploye"
                                                                            {...params}
                                                                            // placeholder={Data.IndusName}
                                                                            label="Industry"
                                                                            error={isIndustryEmpty}

                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        />
                                                                    }
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <Autocomplete
                                                                    disableClearable
                                                                    options={depobj}
                                                                    getOptionLabel={(option) => option.DepartmentName}
                                                                    onChange={(event, Id) => ondept(event, Id)}
                                                                    value={Data.DepartmentId !== "" ? deptName : deptName1}
                                                                    renderInput={(params) =>
                                                                        <TextField className="customTextFieldEmploye"
                                                                            {...params}
                                                                            // placeholder={Data.DeptName}
                                                                            label="Department"
                                                                            error={isDepartmentEmpty}

                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        />
                                                                    }
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <InputLabel htmlFor="DateOfApplication" style={{ fontSize: '12px', color: 'grey', margin: '-15px 0px -10px 0px' }}>
                                                                    Date of Applying
                                                                </InputLabel>
                                                                <TextField className="customTextFieldEmploye"
                                                                    // label="Date Of Application"
                                                                    type="date"
                                                                    id="DateOfApplication"
                                                                    value={Data.DateOfApplication.substring(0, 10)}
                                                                    onChange={e => onChangeDate(e)}
                                                                    error={isAppDateEmpty}
                                                                    fullWidth

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            padding: '15px',
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'dade-style', // Apply the CSS class to the input element
                                                                            notchedOutline: isAppDateEmpty ? 'redBorder' : null  // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Grid>

                                                                <Autocomplete
                                                                    disableClearable
                                                                    options={roleobj}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    // value={roleId}
                                                                    onChange={(event, Id) => onrole(event, Id)}
                                                                    value={Data.RoleId !== "" ? roleName : roleName1}
                                                                    renderInput={(params) =>
                                                                        <TextField className="customTextFieldEmploye"
                                                                            {...params}
                                                                            // placeholder={Data.RoleName}
                                                                            label="Apply Role For"
                                                                            error={isRoleEmpty}

                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                }
                                                                            }}
                                                                        />
                                                                    }
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextFieldEmploye"
                                                                    fullWidth
                                                                    label="ResumeHeadline"
                                                                    type='ResumeHeadline'
                                                                    error={isResumeHeadlineEmpty}
                                                                    required
                                                                    id="ResumeHeadline"
                                                                    value={Data.ResumeHeadline}
                                                                    onChange={e => onChangeResume(e)}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isResumeHeadlineEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextFieldEmploye"
                                                                    fullWidth
                                                                    label="CurrentSalary"
                                                                    type='text'
                                                                    error={isCurrentSalaryEmpty}
                                                                    required
                                                                    id="CurrentSalary"
                                                                    value={Data.CurrentSalary}
                                                                    onChange={e => onChangeCurrentSalary(e)}


                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isCurrentSalaryEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextFieldEmploye"
                                                                    fullWidth
                                                                    label="ExpectedSalary"
                                                                    type='text'
                                                                    error={isExpectedSalaryEmpty}
                                                                    required
                                                                    id="ExpectedSalary"
                                                                    value={Data.ExpectedSalary}
                                                                    onChange={e => onChangeExpectedSalary(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isExpectedSalaryEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextFieldEmploye"
                                                                    fullWidth
                                                                    label="NoticePeriod"
                                                                    type='NoticePeriod'
                                                                    error={isNoticePeriodEmpty}
                                                                    required
                                                                    id="NoticePeriod"
                                                                    value={Data.NoticePeriod}
                                                                    onChange={e => onChangenotice(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isNoticePeriodEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td>

                                                        {/* <td>
                                                            <Grid>
                                                                <TextField className="customTextField"
                                                                    fullWidth
                                                                    label="Total Experience"
                                                                    type='text'
                                                                    required
                                                                    id="Total Exp"
                                                                    value={Data.TotalYearsOfExperience}
                                                                    onChange={e => ontotal(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        },
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </td> */}
                                                        <td>
                                                            <Grid>
                                                                <Autocomplete
                                                                    disableClearable
                                                                    options={totalexpe}
                                                                    getOptionLabel={(option) => option.Name}

                                                                    value={Data.TotalYearsOfExperience !== "" ? totalExperiences : totalexpe1}
                                                                    onChange={(event, Id) => ontotal(event, Id)}
                                                                    // value={Data.TotalYearsOfExperience}
                                                                    renderInput={(params) =>
                                                                        <TextField className="customTextFieldEmploye"
                                                                            {...params}
                                                                            label="Choose a Total Experinces"
                                                                            error={isTotalExperienceEmpty}

                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                }
                                                                            }}
                                                                        // InputProps={{
                                                                        //     classes: {
                                                                        //         input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                        //     },
                                                                        // }}
                                                                        />
                                                                    }
                                                                />
                                                            </Grid>
                                                        </td>
                                                        {/* <td>
                                                            <Grid>
                                                                <Autocomplete

                                                                    options={total}
                                                                    getOptionLabel={(option) => option.value}
                                                                    value={Data.TotalYearsOfExperience !== "" ? totalExperiences : totalExperiences1}
                                                                    onChange={(event, value) => ontotal(event, value)}

                                                                    renderInput={(params) =>
                                                                        <TextField
                                                                            {...params}
                                                                        //placeholder={Data.TotalExperience}
                                                                        />
                                                                    }
                                                                />
                                                            </Grid>
                                                        </td> */}
                                                        <td>
                                                            <Grid>
                                                                <TextField className="customTextFieldEmploye"
                                                                    fullWidth
                                                                    label="JobTitle"
                                                                    type='JobTitle'
                                                                    error={isJobTitleEmpty}
                                                                    required
                                                                    id="JobTitle"
                                                                    value={Data.JobTitle}
                                                                    onChange={e => onChangejob(e)}

                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'grey',
                                                                        },
                                                                    }}
                                                                    InputProps={{
                                                                        classes: {
                                                                            input: 'inputTextStyle',
                                                                            notchedOutline: isJobTitleEmpty ? 'redBorder' : null // Apply the CSS class to the input element
                                                                        },
                                                                    }}

                                                                />
                                                            </Grid>
                                                        </td>
                                                        <td>
                                                            <Grid>
                                                                <input type="file" multiple onChange={handleFileChange} />
                                                                {/* <button onClick={handleUpload}>Upload</button> */}
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>
                                                            <Grid>
                                                                {/* <Autocomplete
                                                                    multiple
                                                                    disableClearable
                                                                    options={keySkills}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    // value={roleId}
                                                                    onChange={(e, role) => onKeySkilsChange(e, role)}
                                                                    value={courelst}
                                                                    renderInput={(params) => (
                                                                        <TextField
                                                                            className="listofkeySkills"
                                                                            style={{ fontSize: '16px', color: 'grey' }}
                                                                            {...params}
                                                                            label="Key Skills"
                                                                            error={isKeySkillsEmpty}
                                                                            // InputLabelProps={{
                                                                            //     style: {
                                                                            //         fontSize: '12px',  // You can also adjust the label font size here
                                                                            //         color: 'grey',
                                                                            //     },
                                                                            // }}
                                                                            // sx={{
                                                                            //     '& input': {
                                                                            //         fontSize: '18px', // Font size for the input text
                                                                            //     },
                                                                            // }}
                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12,
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12,
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        />
                                                                    )}
                                                                    renderTags={(value, getTagProps) =>
                                                                        value.map((option, index) => (
                                                                            <Chip
                                                                                key={index}
                                                                                label={option.Name}
                                                                                style={{

                                                                                    background: 'lightgray', // Background color
                                                                                    color: 'black', // Text color
                                                                                    // padding: '0px 0px', // Padding
                                                                                    fontSize: '11px', // Font size
                                                                                    borderRadius: '5px',
                                                                                    margin: '0px 4px 0px 0px',
                                                                                }}
                                                                                {...getTagProps({ index })}
                                                                            />
                                                                        ))
                                                                    }
                                                                /> */}
                                                            </Grid>
                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td colSpan={4}>
                                                            <Autocomplete
                                                                multiple
                                                                name="KeySkillId"
                                                                //id="grouped-demo"
                                                                options={newKeySkills}
                                                                //  groupBy={option => option.Name}
                                                                getOptionLabel={option => option.Name}
                                                                //value={lstgetKeyExp}
                                                                filterOptions={handleFilterOptions}//change
                                                                onChange={(e, role) => onRoleChange(e, role)}
                                                                renderInput={params => (
                                                                    <TextField
                                                                        className="listofkeySkills"
                                                                        style={{ fontSize: '16px', color: 'grey' }}
                                                                        {...params}
                                                                        label="Key Skills"
                                                                        error={isKeySkillsEmpty}
                                                                        // InputLabelProps={{
                                                                        //     style: {
                                                                        //         fontSize: '12px',  // You can also adjust the label font size here
                                                                        //         color: 'grey',
                                                                        //     },
                                                                        // }}
                                                                        // sx={{
                                                                        //     '& input': {
                                                                        //         fontSize: '18px', // Font size for the input text
                                                                        //     },
                                                                        // }}
                                                                        sx={{
                                                                            '& .MuiInputLabel-root': {
                                                                                fontSize: 12,
                                                                            },
                                                                            '& .MuiInputBase-input': {
                                                                                fontSize: 12,
                                                                            },
                                                                            '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                borderColor: 'red', // Sets the border color to red when there is an error
                                                                            },
                                                                        }}
                                                                    />
                                                                )}
                                                                renderTags={(value, getTagProps) =>
                                                                    value.map((option, index) => (
                                                                        <Chip
                                                                            key={index}
                                                                            label={option.Name}
                                                                            style={{

                                                                                background: 'lightgray', // Background color
                                                                                color: 'black', // Text color
                                                                                // padding: '0px 0px', // Padding
                                                                                fontSize: '11px', // Font size
                                                                                borderRadius: '5px',
                                                                                margin: '0px 4px 0px 0px',
                                                                            }}
                                                                            {...getTagProps({ index })}
                                                                        />
                                                                    ))
                                                                }
                                                            />
                                                        </td>
                                                    </tr> */}
                                                    {/* <tr>
                                                        <td colSpan={4}>
                                                            {selectedOptions.map(option => (
                                                                <td >
                                                                    <Autocomplete
                                                                        key={option.Id}
                                                                        name="Experience"
                                                                        options={newtotalexpe.map(exp => exp.Name)}
                                                                      // value={lstgetExp}
                                                                        onChange={(event, values) => handleSubOptionsChange(option, values)}
                                                                        renderInput={params =>
                                                                            <TextField
                                                                                className="child-skill"
                                                                                {...params} label={option.Name} />}
                                                                    />
                                                                </td>

                                                            ))}
                                                        </td>
                                                    </tr> */}
                                                </table>
                                            </fieldset>
                                        </Grid>
                                        <button className='back-btn' type="button" onClick={handleBack}>&lt;&lt; Back </button>
                                        <button className='next-btn3' type="button" onClick={handleNext}> Next &gt;&gt;</button>
                                    </>
                                )}


                                {tabValue === 3 && (
                                    <>
                                        <Grid className='grid-cnr-one'
                                            container
                                            rowSpacing={2}
                                        >
                                            <fieldset class="border rounded-3 p-3">
                                                <legend class="float-none w-auto px-3" >Office Details</legend>
                                                <table onSubmit={detailSubmit}>
                                                    {officedetail.map((form, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="CompanyName"
                                                                            type='text'
                                                                            name='Companyname'
                                                                            required
                                                                            value={officedetail[index].Companyname}
                                                                            // id="degree"
                                                                            onChange={event => handleAddOffcial(event, index)}
                                                                            // value={Data.UnderGraduationdegree}
                                                                            // onChange={e => onChangeUnderGraduationdegree(e)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="Year of Experience"
                                                                            type='text'
                                                                            name='NoOfYearsOfExperience'
                                                                            required
                                                                            value={officedetail[index].NoOfYearsOfExperience}
                                                                            // id="UGSpecialization"
                                                                            // value={Data.UGSpecialization}
                                                                            // onChange={e => onChangeuGSpecialization(e)}
                                                                            onChange={event => handleAddOffcial(event, index)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="Designation"
                                                                            type='text'
                                                                            name='Designation'
                                                                            required
                                                                            value={officedetail[index].Designation}
                                                                            onChange={event => handleAddOffcial(event, index)}
                                                                            // id="UGUniversity"
                                                                            // value={Data.UGUniversity}
                                                                            // onChange={e => onChangeUGUniversity(e)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <div>
                                                                    <Fab
                                                                        className="add-can"
                                                                        aria-label="add"
                                                                        onClick={() => removeOffFields(index)}
                                                                        title='Delete'
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            color='white'
                                                                            fontSize={15}
                                                                            icon={faTrash} />
                                                                    </Fab>
                                                                </ div>
                                                            </tr>
                                                        )
                                                    })}
                                                </table>
                                                <Fab
                                                    className="remove-offdetail"
                                                    aria-label="add"
                                                    onClick={addoffFields}
                                                >
                                                    <FontAwesomeIcon
                                                        color='white'
                                                        fontSize={15}
                                                        icon={faAdd} />
                                                </Fab>
                                                {/* <button type="button" className="bunt-th" onClick={addoffFields}>Add More...</button> */}
                                                {/* <br />
                                                <button type="button" className="bunt-th" onClick={detailSubmit}>Submit</button> */}
                                            </fieldset>
                                        </Grid>
                                        <button className='back-btn' type="button" onClick={handleBack}>&lt;&lt; Back </button>
                                        {/* <button className='next-btn4' type="button" onClick={handleNext}> Next &gt;&gt;</button> */}
                                        <Divider />
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            {/* <Button variant="contained"
                                                type="button"
                                                onClick={() => { handleClickOpen(Data) }}
                                                style={{
                                                    fontSize: '14px',
                                                    margin: '-4.5rem 1rem 5px 0px'
                                                }}
                                            >
                                                {Id ? "Update" : "Save"}
                                            </Button> */}

                                            <button className='next-btn3' type="button" onClick={handleNext}> Next &gt;&gt;</button>
                                        </CardActions>
                                    </>
                                )}
                                {/* {tabValue === 4 && (
                                    <>
                                        <Grid className='grid-cnr-one'
                                            container
                                            rowSpacing={2}
                                        >
                                            <fieldset class="border rounded-3 p-3">
                                                <legend class="float-none w-auto px-3" >Keyskills Details</legend>
                                                <table onSubmit={submit}>
                                                    {formFields.map((form, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                 <Autocomplete
                                                                    disableClearable
                                                                    options={keyobj}
                                                                    getOptionLabel={(option) => option.Name}
                                                                    value={Data.KeySkils !== "" }
                                                                    onChange={(event, Id) => onKeyskills(event, Id)}
                                                                    renderInput={(params) =>
                                                                        <TextField className="customTextFieldEmploye"
                                                                            {...params}
                                                                            // placeholder={Data.IndusName}
                                                                            label="KeySkils"
                                                                            error={isKeySkillsEmpty}

                                                                            sx={{
                                                                                '& .MuiInputLabel-root': {
                                                                                    fontSize: 12, // Adjust the label font size as needed
                                                                                    // fontWeight: 600, // You can also adjust font weight
                                                                                },
                                                                                '& .MuiInputBase-input': {
                                                                                    fontSize: 12, // Adjust the input font size as needed
                                                                                },
                                                                                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                    borderColor: 'red', // Sets the border color to red when there is an error
                                                                                },
                                                                            }}
                                                                        />
                                                                    }
                                                                />
                                                                <td>
                                                                    <Grid>
                                                                        <Autocomplete
                                                                            disableClearable
                                                                            options={totalexpe}
                                                                            getOptionLabel={(option) => option.Name}

                                                                            value={Data.TotalYearsOfExperience !== "" ? totalExperiences : totalexpe1}
                                                                            onChange={(event, Id) => ontotal(event, Id)}
                                                                            // value={Data.TotalYearsOfExperience}
                                                                            renderInput={(params) =>
                                                                                <TextField className="customTextFieldEmploye"
                                                                                    {...params}
                                                                                    label="Choose a Total Experinces"
                                                                                    error={isTotalExperienceEmpty}

                                                                                    sx={{
                                                                                        '& .MuiInputLabel-root': {
                                                                                            fontSize: 12, // Adjust the label font size as needed
                                                                                            // fontWeight: 600, // You can also adjust font weight
                                                                                        },
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: 12, // Adjust the input font size as needed
                                                                                        },
                                                                                        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                            borderColor: 'red', // Sets the border color to red when there is an error
                                                                                        }
                                                                                    }}
                                                                                // InputProps={{
                                                                                //     classes: {
                                                                                //         input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                                //     },
                                                                                // }}
                                                                                />
                                                                            }
                                                                        />
                                                                    </Grid>
                                                                </td> */}
                                {/* <td>
                                                                    <Grid>
                                                                        <TextField className="customTextField"
                                                                            fullWidth
                                                                            label="CandidateId"
                                                                            type='text'
                                                                            name='CandidateId'
                                                                            required
                                                                            // error={isDegreeEmpty}
                                                                            // id="UGGraduationYear"
                                                                            // value={Data.UGGraduationYear}
                                                                            // onChange={e => onChangeUGGraduationYeary(e)}
                                                                            value={formFields[index].CandidateId}
                                                                            onChange={event => handleFormChange(event, index)}

                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: 'grey',
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                classes: {
                                                                                    input: 'inputTextStyle',
                                                                                    //  notchedOutline: isDegreeEmpty ? 'redBorder' : null// Apply the CSS class to the input element
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </td> */}
                                {/* <div>
                                                                    <Fab
                                                                        className="add-can"
                                                                        aria-label="add"
                                                                        onClick={() => removeFieldss(index)}
                                                                        title='Delete'
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            color='white'
                                                                            fontSize={15}
                                                                            icon={faTrash} />
                                                                    </Fab>
                                                                </ div>
                                                            </tr>
                                                        )
                                                    })}
                                                </table>
                                                <Fab
                                                    className="remove-detail"
                                                    aria-label="add"
                                                    onClick={addFieldss}
                                                >
                                                    <FontAwesomeIcon
                                                        color='white'
                                                        fontSize={15}
                                                        icon={faAdd} />
                                                </Fab> */}
                                {/* <button type="button" className="bunt-th" onClick={addFields}>Add More...</button> */}
                                {/* <br /> */}
                                {/* <button type="button" className="bunt-th" onClick={submit}>Submit</button> */}
                                {/* </fieldset>
                                        </Grid>

                                        <button className='back-btn' type="button" onClick={handleBack}>&lt;&lt; Back </button>
                                        <Divider />
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button variant="contained"
                                                type="button"
                                                onClick={() => { handleClickOpen(Data) }}
                                                style={{
                                                    fontSize: '14px',
                                                    margin: '-4.5rem 1rem 5px 0px'
                                                }}
                                            >
                                                {Id ? "Update" : "Save"}
                                            </Button>
                                        </CardActions>
                                    </>

                                )} */}
                                {tabValue === 4 && (
                                    <>
                                        <Grid className='grid-cnr-one'
                                            container
                                            rowSpacing={2}
                                        >
                                            <fieldset class="border rounded-3 p-3">
                                                <legend class="float-none w-auto px-3" >Key Skills</legend>
                                                <table onSubmit={keySubmit}>
                                                    {selectedKeySkills && selectedKeySkills.map((form, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <Grid>
                                                                        <Autocomplete
                                                                            // multiple
                                                                            disableClearable
                                                                            options={keyobj}
                                                                            getOptionLabel={(option) => option.Name}
                                                                            // value={selectedKeySkills[index].KeySkillId}
                                                                            // value={dupselectedkeySkills}
                                                                            // onChange={(event, value) => handleAddKeys(event, value)}
                                                                            onChange={(e, value) => handleAddKeys(e, index, value)}
                                                                            // value={Data.empTabKeyskillModels !== ""
                                                                            //     ? selectedKeySkills[index].KeySkillId
                                                                            //     : selectedKeySkills1[index].KeySkillId
                                                                            // }
                                                                            // value={(Data.empTabKeyskillModels !== "" && selectedKeySkills) ? selectedKeySkills1 : null}
                                                                            // value={Data.empTabKeyskillModels !== "" ? selectedKeySkills1[index] : somekey}
                                                                            value={selectedKeySkills1[index]}
                                                                            // value={Data.empTabKeyskillModels !== "" ? keyName : keyName1}
                                                                            // value={selectedKeySkills[index].calKeySkils}

                                                                            // onChange={(event, value) => handleAddKeys(event, value)}
                                                                            // onChange={(event, Id) => onKeyskills(event, Id)}
                                                                            // value={selectedKeySkills[index]}
                                                                            // onChange={(event, selectedValue) => handleAddKeys(event, index, selectedValue)}
                                                                            renderInput={(params) => (
                                                                                <TextField className="keyCustomTextField"
                                                                                    {...params}
                                                                                    name='calKeySkils'
                                                                                    label="KeySkils"

                                                                                    // value={selectedKeySkills[index].calKeySkils}
                                                                                    // error={isKeySkillsEmpty}
                                                                                    sx={{
                                                                                        '& .MuiInputLabel-root': {
                                                                                            fontSize: 12, // Adjust the label font size as needed
                                                                                            // fontWeight: 600, // You can also adjust font weight
                                                                                        },
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: 12, // Adjust the input font size as needed
                                                                                        },
                                                                                        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                            borderColor: 'red', // Sets the border color to red when there is an error
                                                                                        },
                                                                                    }}
                                                                                />
                                                                            )}
                                                                        />
                                                                    </Grid>
                                                                </td>

                                                                <td>
                                                                    <Grid>
                                                                        <Autocomplete
                                                                            disableClearable
                                                                            options={totalexpe}
                                                                            getOptionLabel={(option) => option.Name}
                                                                            // value={dupselectedkeySkills}                                                                               
                                                                            // onChange={(event, value, index) => handleAddKeyset(event, value)}

                                                                            // value={
                                                                            //     editIndex === index
                                                                            //         ? dupselectedkeySkills // Set values based on editIndex
                                                                            //         : Data.TotalYearsOfExperience !== ""
                                                                            //             ? totalExperiences
                                                                            //             : totalexpe1
                                                                            // }
                                                                            onChange={(e, value) => handleAddKeyset(e, index, value)}
                                                                            value={selectedKeyexSkills[index]}
                                                                            // value={Data.TotalYearsOfExperience !== "" ? totalExperiences : totalexpe1}
                                                                            // onChange={(event, Id) => ontotal(event, Id)}
                                                                            // value={Data.TotalYearsOfExperience}
                                                                            renderInput={(params) =>
                                                                                <TextField className="keyExCustomTextField"
                                                                                    {...params}
                                                                                    name='calWexp'
                                                                                    label="Total Experinces"
                                                                                    // onChange={(event) => handleAddKeys(event, index)}
                                                                                    // value={selectedKeySkills[index].calWexp}

                                                                                    // error={isTotalExperienceEmpty}

                                                                                    sx={{
                                                                                        '& .MuiInputLabel-root': {
                                                                                            fontSize: 12, // Adjust the label font size as needed
                                                                                            // fontWeight: 600, // You can also adjust font weight
                                                                                        },
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: 12, // Adjust the input font size as needed
                                                                                        },
                                                                                        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                                                                                            borderColor: 'red', // Sets the border color to red when there is an error
                                                                                        }
                                                                                    }}
                                                                                // InputProps={{
                                                                                //     classes: {
                                                                                //         input: 'inputTextStyle', // Apply the CSS class to the input element
                                                                                //     },
                                                                                // }}
                                                                                />
                                                                            }
                                                                        />
                                                                    </Grid>
                                                                </td>
                                                                <div>
                                                                    <Fab
                                                                        className="dkey"
                                                                        aria-label="add"
                                                                        onClick={() => removeKeyFields(index)}
                                                                        title='Delete'
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            color='white'
                                                                            fontSize={15}
                                                                            icon={faTrash} />
                                                                    </Fab>
                                                                </ div>
                                                            </tr>
                                                        )
                                                    })}
                                                </table>
                                                <Fab
                                                    className="rkey"
                                                    aria-label="add"
                                                    onClick={addNewKeySkillField}
                                                >
                                                    <FontAwesomeIcon
                                                        color='white'
                                                        fontSize={15}
                                                        icon={faAdd} />
                                                </Fab>
                                                <button type="button" className="bunt-th" onClick={keySubmit}>Submit</button>
                                            </fieldset>
                                        </Grid>
                                        <button className='back-btn' type="button" onClick={handleBack}>&lt;&lt; Back </button>
                                        {/* <button className='next-btn4' type="button" onClick={handleNext}> Next &gt;&gt;</button> */}
                                        <Divider />
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button variant="contained"
                                                type="submit"
                                                // onClick={() => { handleClickOpen(Data) }}
                                                onClick={HandleSubmit}
                                                style={{
                                                    fontSize: '14px',
                                                    margin: '-4.5rem 1rem 5px 0px'
                                                }}
                                            >
                                                {Id ? "Update" : "Save"}
                                            </Button>
                                        </CardActions>
                                    </>
                                    // <>
                                    //     <Grid container spacing={2}>
                                    //         {selectedTotalExperiences.map((experience, index) => (
                                    //             <Grid item key={index}>
                                    //                 <Autocomplete
                                    //                     disableClearable
                                    //                     options={totalexpe}
                                    //                     getOptionLabel={(option) => option.Name}
                                    //                     value={Data.TotalYearsOfExperience !== "" ? totalExperiences : totalexpe1}
                                    //                     onChange={(event, newValue) => {

                                )}
                            </Box>
                        </CardContent>

                    </Card>
                </form>
                <viwecandidate data={Data}></viwecandidate>
            </div >
        </div >
    )
}

export default CandidateInsert;