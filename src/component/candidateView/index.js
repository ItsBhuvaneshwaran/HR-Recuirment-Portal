import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import EditModal from './edit';
// import DeleteConfirmation from './delete';
import CandidateInsert from '../candidateInsert'
import { Drawer, Divider, Dialog, DialogContent, } from '@mui/material';
// import { Button } from 'bootstrap';
import './viewcan.css'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faAdd, faTimes, faEye, faUpload } from '@fortawesome/free-solid-svg-icons';
import Fab from "@mui/material/Fab";
import GetCadidateByID from '../candidateById';
import { ToastContainer, toast } from 'react-toastify';
import AlertDialogs from '../candidateUploadResume';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Button from '@mui/material/Button';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';






// import EditModal from './edit';
// import DeleteConfirmation from './delete';





// export const CenteredHeader = ({ displayName }) => (
//   <div style={{ textAlign: 'center' }}>{displayName}</div>
// );




const initialValue = { Id: "", Name: "", JobTitle: "", IsResume: "", EmailId: "", PhoneNumber: "", DateOfApplication: "", TotalYearsOfExperience: "", DeptName: "", Gender: "", DesignationId: "", DepartmentId: "", RoleId: "", IndustryId: "", State_Id: "", City_Id: "", NoticePeriod: "", ResumeHeadline: "", Summary: "", Marital_Status: "", Home_Town: "", Pin_Code: "", Work_permitfor_USA: "", DateOfBirth: "", PermanentAddress: "", PreferredLocations: "", StateName: "", CityName: "", lstPreferredLocations: "", candidateEducationModels: "", candidateEmployeeModels: "", CurrentSalary: "", ExpectedSalary: "", empTabKeyskillModels: "" }

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 4),
  margin: '-10px 0px -40px 10px',
  // backgroundColor: 'yellow',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CandidateView = () => {
  const [fileOpen, setFileOpen] = useState(false);
  const [formDatas, setFormDatas] = useState();
  const [cId, setcId] = React.useState();
  const [selectedFile, setSelectedFile] = useState([]);
  const [updatedfiles, setupdatedfiles] = React.useState();
  // Initialize as an empty array
  const [file, setfiles] = useState(null);
  const theme = useTheme();
  const [Data, setData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

  const [editData, setEditData] = useState(null);


  //view Page -----------------------------------------------
  const [viewformData, setViewFormData] = useState(initialValue);
  const [viewGrid, setViewGridApi] = useState(null);
  const [viewOpen, setViewOpen] = React.useState(false);



  const resumeHandleClickOpen = (Id) => {
    setFileOpen(true);
    setcId(Id);
  }
  const viewHandleopen = () => {
    setViewOpen(true);
  }
  const viewHandleClose = () => {
    setViewOpen(false);
    setViewFormData(initialValue);
  }

  const resumeHandleClose = () => {
    setFileOpen(false);
    // setViewFormData(initialValue);
  }


  const viewHandleDrawerClose = () => {
    setViewOpen(false);
  };
  const viewOnChange = (e) => {
    const { value, id } = e.target
    // console.log(value,id)
    setViewFormData({ ...viewformData, [id]: value })
  }
  const insertopen = () => {
    setOpen(true);
  }
  //--------------------------------------------------

  // const [officedetail, setOfficedetail] = useState([
  //   { Id: 0, Companyname: '', NoOfYearsOfExperience: '', Designation: '', CandidateId: 0 },
  // ])
  // const [formFields, setFormFields] = useState([
  //   //    Data.candidateEducationModels
  //   { Id: 0, DegreeName: '', DegreeSpecialization: '', UniversityName: '', GraduationYear: '', CandidateId: 0 },
  // ])

  const [formData, setFormData] = useState(initialValue);
  const [grid, setGridApi] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleopen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
    sessionStorage.setItem("CandidateId", " ");
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    const { value, id } = e.target
    // console.log(value,id)
    setFormData({ ...formData, [id]: value })
  }

  const handleDelete = (id) => {
    fetch('http://localhost:7036/CandidatePersonal/api/delete' + `/${id}`, { method: "DELETE" })
      .then(resp => resp.json())
      .then(resp => {
        getUsers()
        if (resp.Response.IsSuccess) {
          toast.success(resp.Response.Message, {
            autoClose: 1000,
          });
        }
        // else {
        //   toast.error(resp.Response.Message);
        // }
      })
  }

  const handleEdit = (Id) => {
    fetch('http://localhost:7036/CandidatePersonal/api/getmasters' + `/${Id}`, { method: "Get" })
      .then(resp => resp.json()).then(resp => {
        setFormData(resp.objMasteModel)
        console.log(formData);
        sessionStorage.setItem("CandidateId", resp.objMasteModel.Id);
        // resp.candidatePersonalModels = resp.objCandidatesModel.candidatePersonalModels
        setOpen(true)
      })
  }
  const getCandidateByid = (Id) => {
    fetch('http://localhost:7036/CandidatePersonal/api/getmasters' + `/${Id}`, { method: "Get" })
      .then(resp => resp.json()).then(resp => {
        setViewFormData(resp.objMasteModel)
        //  resp.candidatePersonalModels = resp.objCandidatesModel.candidatePersonalModels
        setViewOpen(true)
      }
      )
  }
  const resumeHandleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log('Selected File:', file);
  };
  const resumeHandleFormSubmit = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    console.log('Selected Files:', selectedFile);
    const formData = new FormData();
    formData.append("form", selectedFile);

    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    fetch(`http://localhost:7036/Location/api/uploadResumeWithId/${cId}`, requestOptions)
      .then(response => {
        if (response.status === 200) {
          return response.json(); // Parse the response as JSON
        } else {
          throw new Error(`File upload failed with status: ${response.status}`);
        }
      })
      .then(resp => {
        resumeHandleClose();
        getUsers();
        if (resp.Response.IsSuccess) {
          toast.success('File uploaded successfully', {
            autoClose: 1000,
          });
          // toast.success(resp.Response.Message, {
          //   autoClose: 1000,
          // });
        } else {
          toast.error(resp.Response.Message);
        }
      })
      .catch(error => {
        console.log('error', error);
        toast.error('Please select a file first');
      });
  }


  const viewInsertopen = () => {
    setOpen(true);
  }
  let navigate = useNavigate();
  function navpath() {
    navigate('/insert')
  }
  const handleSaveEdit = (editedData) => {
    // Implement logic to save edited data (e.g., send a request to update the data)
    // After saving, update the grid's rowData
    // const updatedData = data.map((item) =>
    //   item.Id === editedData.Id ? editedData : item
    // );
    // setData(updatedData);
    //setIsEditModalOpen(false);
  };
  const handleCancelEdit = () => {
    //setEditModalOpen(true);
    //Set the data to be edited in the modal
    //setEditData(data);
    // setIsEditModalOpen(false);
  };
  const handleConfirmDelete = () => {

  };
  function handleaAdduser(event) {
    //  setFormData(initialValue);
    setOpen(true);


  };

  const handleCancelDelete = () => {
    // setIsDeleteConfirmationOpen(false);
  };



  //Export 


  const gridRef = useRef();

  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  // const onBtnUpdate = useCallback(() => {
  //   const csvContent = gridRef.current.api.getDataAsCsv();
  //   document.querySelector('#csvResult').value = csvContent;
  // }, []);




  useEffect(() => {
    getUsers()
  }, [])
  const getUsers = () => {

    fetch('http://localhost:7036/CandidatePersonal/api/GetPersonaldetails/')
      .then(response => response.json())
      .then(json => setData(json.candidatePersonalModels))
      .catch(error => console.error(error))
  }

  const columns = [
    // { headerName: "Id", field: 'Id' },
    // { headerName: "Job Title", field: 'JobTitle', width: '150' },
    { headerName: "Name", field: 'Name', width: '150' },
    { headerName: "EmailId", field: 'EmailId', width: '150' },
    { headerName: "PhoneNo", field: 'PhoneNumber', width: '140' },
    { headerName: "C.Location", field: 'HomeTown', width: '140' },
    // {
    //   headerName: "Resume", field: 'IsResume', width: '120', cellRenderer: function (params) {
    //     return <>{params.value == true ? "Resume Available" : "Not Available"}</>;
    //   }
    // },
    // { headerName: "Date of Application", field: 'DateOfApplication' },
    // { headerName: "CurrentLocation", field: 'CurrentLocation' },
    // { headerName: "PreferredLocations", field: 'PreferredLocations' },
    // { headerName: "Total Experience", field: 'TotalExperience' },
    // { headerName: "Company Name", field: 'Companyname' },
    // { headerName: "Designation Id", field: 'DesignationId' },
    // { headerName: "Department Id", field: 'DepartmentId' },
    // { headerName: "Role Id", field: 'RoleId' },
    // { headerName: "Industry Id", field: 'IndustryId' },
    // { headerName: "KeySkillsId", field: 'KeySkillsId' },
    // { headerName: "Annual Salary", field: 'AnnualSalary' },
    // { headerName: "Notice Period", field: 'NoticePeriod' },
    // { headerName: "Resume Headline", field: 'ResumeHeadline' },
    // { headerName: "Summary", field: 'Summary' },
    // { headerName: "Under Graduation", field: 'UnderGraduationdegree' },
    // { headerName: "UG Specialization", field: 'UGSpecialization' },
    // { headerName: "UG University", field: 'UGUniversity' },
    // { headerName: "UG YOP", field: 'UGGraduationYear' },
    // { headerName: "Post Graduation", field: 'PostGraduationDegree' },
    // { headerName: "PG Specialization", field: 'PGSpecialization' },
    // { headerName: "PG University", field: 'PGUniversity' },
    // { headerName: "PG YOP", field: 'PG_graduation_year' },
    // { headerName: "Phd", field: 'Doctorate_degree' },
    // { headerName: "Phd Specialization", field: 'Doctorate_specialization' },
    // { headerName: "Phd University", field: 'Doctorate_university' },
    // { headerName: "Phd YOP", field: 'Doctorate_graduation_year' },
    // { headerName: "Gender", field: 'Gender' },
    // { headerName: "Marital Status", field: 'Marital_Status' },
    // { headerName: "Home Town", field: 'Home_Town' },
    // { headerName: "Pin Code", field: 'Pin_Code' },
    // { headerName: "Work permitfor USA", field: 'Work_permitfor_USA' },
    // { headerName: "Date of Birth", field: 'DateOfBirth' },
    // { headerName: "Permanent Address", field: 'PermanentAddress' },
    // { headerName: "CreatedBy", field: 'CreatedBy' },
    // { headerName: "CreatedTime", field: 'CreatedTime' },
    // { headerName: "UpdatedBy", field: 'UpdatedBy' },
    // { headerName: "UpdatedTime", field: 'UpdatedTime' },
    // { headerName: "IsActive", field: 'IsActive' },

    // { headerName:"Id",field:'Id' }, 
    // { headerName: "Name", field: 'DepartmentName' },
    // { headerName: "Industry_Id", field: 'Industry_ID' },
    // // { headerName: "Industry_ID", field: 'Industry_ID' },
    // { headerName: "Description", field: 'Description' },
    {
      textAlign: 'center',
      headerName: "Resume",
      field: "IsResume",
      editable: "false",
      cellRenderer: (params) => {

        // headerName: "Actions", field: "Id", cellRenderer: (params) => 

        return <>{params.value == true ? <span
          className="action-icon"
        >
          <FontAwesomeIcon
            color='Green'
            icon={faCheck} />
        </span> : <span
          className="action-icon"
        >
          <FontAwesomeIcon

            color='Red'
            icon={faTimes} />
        </span>}</>;
      },
      pinned: "right", // Pin this column to the right
      lockPinned: true, // Ensure it remains pinned
      width: '100',


    },

    {
      textAlign: 'center',
      headerName: "Actions",
      field: "Id",
      editable: "false",
      cellRenderer: (params) => (
        // headerName: "Actions", field: "Id", cellRenderer: (params) => 
        <div className='action-cell'>
          <span
            className="action-icon"
            onClick={() => handleEdit(params.value)}
            title="Edit"

          >
            <FontAwesomeIcon

              color='grey'
              icon={faEdit} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          {/* <button type="button" class="btn btn-primary" onClick={() => handleEdit(params.value)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
          <span
            className="action-icon"
            onClick={() => handleDelete(params.value)}
            title="Delete"
          >
            <FontAwesomeIcon
              color='grey'
              icon={faTrash} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          {/* <button type="button" class="btn btn-primary" onClick={() => handleEdit(params.value)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
          <span
            className="action-icon"
            onClick={() => getCandidateByid(params.value)}
            title="View"
          >
            <FontAwesomeIcon
              color='grey'
              icon={faEye} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          {/* <button type="button" class="btn btn-primary" onClick={() => handleEdit(params.value)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
          <span
            className="action-icon"
            onClick={() => resumeHandleClickOpen(params.value)}
            title="Upload"
          >
            <FontAwesomeIcon
              fontSize='16px'
              color='grey'
              icon={faUpload} />
          </span>

        </div>
      ),
      /* <button type="button" class="btn btn-primary" onClick={() => handleDelete(params.value)}>Delete</button> */
      pinned: "right", // Pin this column to the right
      lockPinned: true, // Ensure it remains pinned
      width: '255',


    },



  ];

  //   {

  //     headerName: "Actions", field: "Id", cellRenderer: (params) => <div>
  //       <button type="button" class="btn btn-primary" onClick={() => handleEdit(params.value)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
  //       <button type="button" class="btn btn-primary" onClick={() => handleDelete(params.value)}>Delete</button>
  //     </div>
  //   }
  // ]

  const onGridReady = (params) => {
    setGridApi(params)
  }


  const defaultColDef = {
    sortable: true, filter: true, resizable: true,
  }

  const viewHandleClickOpen = (value) => {
    if (!value.Name || !value.EmailId || !value.PhoneNumber || !value.DateOfBirth || !value.Gender
      || !value.PermanentAddress || !value.Home_Town || !value.lstPreferredLocations || !value.Marital_Status
      || !value.Pin_Code || !value.StateName || !value.Work_permitfor_USA || !value.Summary || !value.CityName) {
      toast.error('Please Check Personal field.', {
        autoClose: 1000,
      });
      return;
    }
    // const isAnyEducationEmpty = formFields.some((field) =>
    //   !field.DegreeName || !field.DegreeSpecialization || !field.UniversityName || !field.GraduationYear);
    // if (isAnyEducationEmpty) {
    //   toast.error('Please check education field.', {
    //     autoClose: 1000,
    //   });
    //   return;
    // }

    const isAnyEducationEmpty = value.candidateEducationModels.some((field) =>
      !field.DegreeName || !field.DegreeSpecialization || !field.UniversityName || !field.GraduationYear);
    if (isAnyEducationEmpty) {
      toast.error('Please check education field.', {
        autoClose: 1000,
      });
      return;
    }

    // if (!value.candidateEducationModels.DegreeName || !value.candidateEducationModels.DegreeSpecialization ||
    //   !value.candidateEducationModels.UniversityName || !value.candidateEducationModels.GraduationYear) {
    //   toast.error('Please check Education field.', {
    //     autoClose: 1000,
    //   });
    //   return;
    // }

    if (!value.DesignationId || !value.RoleId || !value.IndustryId || !value.DepartmentId
      || !value.ResumeHeadline || !value.CurrentSalary || !value.ExpectedSalary || !value.NoticePeriod
      || !value.TotalYearsOfExperience || !value.JobTitle
      || !value.DateOfApplication) {
      toast.error('Please check Employee field.', {
        autoClose: 1000,
      });
      return;
    }

    // function objectToFormData(obj) {
    //   const formData = new FormData();

    //   Object.entries(obj).forEach(([key, value]) => {
    //     formData.append(key, value);
    //   });

    //   return formData;
    // }

    const isAnyOfficeEmpty = value.candidateEmployeeModels.some((field) =>
      !field.Companyname || !field.NoOfYearsOfExperience || !field.Designation);
    if (isAnyOfficeEmpty) {
      toast.error('Please check office fields.', {
        autoClose: 1000,
      });
      return;
    }


    // const isAnyOfficeEmpty = officedetail.some((field) =>
    //   !field.Companyname || !field.NoOfYearsOfExperience || !field.Designation);
    // if (isAnyOfficeEmpty) {
    //   toast.error('Please check office fields.', {
    //     autoClose: 1000,
    //   });
    //   return;
    // }

    console.log(JSON.stringify(value))

    // const fData = objectToFormData(value);
    // console.log(fData);



    const buildFormData = (formData, obj, parentKey = '') => {
      if (Array.isArray(obj)) {
        obj.forEach(element => {
          buildFormData(formData, element, parentKey);
        });
      } else if (typeof obj === 'object' && !(obj instanceof File)) {
        Object.keys(obj).forEach(key => {
          buildFormData(
            formData,
            obj[key],
            parentKey ? `${parentKey}.${key}` : key,
          );
        });
      } else {
        if (obj == null) {
          return;
        }

        const value =
          typeof obj === 'number' || typeof obj === 'boolean'
            ? obj.toString()
            : obj;
        formData.append(parentKey, value);
      }
    };

    const objectToFormData = obj => {
      const formData = new FormData();

      buildFormData(formData, obj);

      return formData;
    };

    // const employee = {
    //   id: 1,
    //   first: 'bobby',
    //   last: 'hadz',
    //   age: 30,
    //   tasks: ['develop', 'test', 'ship'],
    //   address: {
    //     country: 'Belgium',
    //     city: 'Ghent',
    //   },
    // };

    // const fData = objectToFormData(employee);

    // FormData {
    //   [Symbol(state)]: [
    //     { name: 'id', value: '1' },
    //     { name: 'first', value: 'bobby' },
    //     { name: 'last', value: 'hadz' },
    //     { name: 'age', value: '30' },
    //     { name: 'tasks', value: 'develop' },
    //     { name: 'tasks', value: 'test' },
    //     { name: 'tasks', value: 'ship' },
    //     { name: 'address.country', value: 'Belgium' },
    //     { name: 'address.city', value: 'Ghent' }
    //   ]
    // }
    // console.log(fData);

    // console.log(fData.get('first'));
    // console.log(fData.get('tasks'));




    //     var formData = new FormData();
    //formData.append("objCandidatesModel",value)
    if (value.Id > 0) {
      //for update
      fetch('http://localhost:7036/Candidate/api/insertcandidata/', { method: "POST", body: objectToFormData(value) })
        .then(resp => resp.json())
        .then(resp => {
          handleClose()

          //values stored in setFormat
          getUsers()
          setFormData(initialValue)       //view
          if (resp.objResponse.IsSuccess) {
            toast.success(resp.objResponse.Message, {
              autoClose: 1000,
            });
          }
          else {
            toast.error(resp.objResponse.Message);
          }
        })
    }
    else {
      try {
        value.Id = 0;
        // formData.Id = 0;
        fetch('http://localhost:7036/Candidate/api/insertcandidata/', { method: "POST", body: objectToFormData(value) })
          .then(resp => resp.json())
          .then(resp => {
            handleClose()
            getUsers()
            setFormData(initialValue)

            if (resp.objResponse.IsSuccess) {
              toast.success(resp.objResponse.Message, {
                autoClose: 1000,
              });
            }
            else {
              toast.error(resp.objResponse.Message);
            }
          })
      } catch (error) {

      }
    }
  }
  return (
    <div>
      <ToastContainer />
      <h1 className='candidate-header'>Candidates</h1>
      <div align="right"  >
        <Fab
          className="add-cell"
          aria-label="add"
          onClick={() => handleaAdduser()}
        >
          <FontAwesomeIcon
            color='white'
            fontSize={15}
            icon={faAdd} />
        </Fab>
        <Fab
          className="add-cell"
          aria-label="add"
          onClick={onBtnExport}
        >
          <FontAwesomeIcon
            color='white'
            fontSize={15}
            icon={faFileExport} />
        </Fab>

        {/* <Button component="label" variant="contained" startIcon={<CloudDownloadIcon />}>
          Export
        </Button> */}
      </div>
      <div className="ag-theme-alpine"
        style={{
          width: '82.9',
          height: '350px'
        }}>
        {/* <button type="button" class="button-can-insert" value="Add User" onClick={() => handleaAdduser()} > Add user </button> */}

        <AgGridReact ref={gridRef} rowData={Data} columnDefs={columns} defaultColDef={defaultColDef} pagination={true} paginationPageSize={5} onGridReady={onGridReady} />
      </div>

      <Drawer
        open={open}
        onClose={handleClose}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <br/>
        </DrawerHeader> */}
        <CandidateInsert handleClose={handleClose} Data={formData} onChange={onChange} insertopen={insertopen} handleClickOpen={viewHandleClickOpen} resumeHandleFileChange={resumeHandleFileChange} />

        {/* <GetCadidateByID handleClose={handleClose} Data={formData} onChange={onChange} insertopen={insertopen} /> */}
      </Drawer>

      <Dialog
        open={viewOpen}
        onClose={viewHandleClose}
        maxWidth='lg'
        style={{
          height: '100vh'
        }}

      >
        {/* <DrawerHeader>
          
        </DrawerHeader> */}
        {/* <CandidateInsert handleClose={handleClose} Data={formData} onChange={onChange} insertopen={insertopen} /> */}
        <DialogContent>
          <GetCadidateByID handleClose={viewHandleClose} Data={viewformData} onChange={viewOnChange} insertopen={viewInsertopen} />
        </DialogContent>
      </Dialog>
      <AlertDialogs resumeOpen={fileOpen} resumeHandleClose={resumeHandleClose} resumeData={formDatas} resumeHandleFormSubmit={resumeHandleFormSubmit} resumeHandleFileChange={resumeHandleFileChange} />
    </div>

  )
}
export default CandidateView;