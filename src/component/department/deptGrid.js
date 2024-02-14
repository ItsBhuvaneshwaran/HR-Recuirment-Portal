import React, { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import InsertDepartment from './insertDeptFunction';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../footer/footer';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';
import Fab from "@mui/material/Fab";
import './deptMain.css'


const initialValue = { Id: "", DepartmentName: "", IndustryName: "", Description: "", Industry_ID: "", };

const DepartmentGrid = () => {
    const [data, setData] = useState(null);
    const [grid, setGridApi] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState(initialValue);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
        setFormData(initialValue)
    };
    const onChange = (e) => {
        const { value, id } = e.target
        setFormData({ ...formData, [id]: value })
    }
    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = () => {
        fetch('http://localhost:7036/Department/api/GetDepartment/')
            .then(response => response.json())
            .then(json => {
                setData(json.departmentmodel)
                // .catch(error => console.error(error))
                if (json.response.IsSuccess) {
                    toast.success(json.response.Message, {
                        autoClose: 1000,
                    });
                }
                else {
                    toast.error(json.response.Message);
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error appears through Fetching data');
            });
    }

    const columns = [
        { headerName: "Name", field: 'DepartmentName', sortable: true, filter: true, flex: 1, floatingFilter: true },
        //{ headerName: "IndustryName", field: 'IndustryName', sortable: true, filter: true, flex: 1, floatingFilter: true },
        { headerName: "Description", field: 'Description', sortable: true, filter: true, flex: 1, floatingFilter: true },

        {
            headerName: "Actions", field: "Id", cellRenderer: (params) =>(
                <div
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                        className="action-icon"
                        onClick={() => handleEdit(params.value)}
                        title='Edit'
                    >
                        <FontAwesomeIcon
                            color='grey'
                            icon={faEdit} />
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                        className="action-icon"
                        onClick={() => handleDelete(params.value)}
                        title='Delete'
                    >
                        <FontAwesomeIcon
                            color='grey'
                            icon={faTrash} />
                    </span>
                </div>
            ),
        },
    ];
    const onGridReady = (params) => {
        setGridApi(params)
    }
    const handleDelete = (id) => {
        fetch('http://localhost:7036/Department/api/deletedept' + `/${id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(resp => {
                getUsers()
                if (resp.Respons.IsSuccess) {
                    toast.success(resp.Respons.Message, {
                        autoClose: 1000,
                    });
                }
                else {
                    toast.error(resp.Respons.Message);
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error deleting Department');
            });
    }
    const handleEdit = (id) => {
        fetch('http://localhost:7036/Department' + `/${id}`, { method: "Get" })
            .then(resp => resp.json()).then(resp => {
                setFormData(resp.ModelRespons)
                handleClickOpen()
                if (resp.Respons.IsSuccess) {
                    toast.success(resp.Respons.Message, {
                        autoClose: 1000,
                    });
                }
                else {
                    toast.error(resp.Respons.Message);
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error update Department');
            });
    }
    const handleFormSubmit = (value) => {
        if (!formData.DepartmentName || !formData.Description || !formData.Industry_ID) {
            toast.error('Please fill all fields.', {
                autoClose: 1000,
            });
            return;
        }
        if (formData.Id > 0) {
            fetch('http://localhost:7036/Department/api/Updatedept/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(value) })
                .then(resp => resp.json())
                .then(resp => {
                    handleClose()     //values stored in setFormat
                    getUsers()        //view
                    setFormData(initialValue)
                    if (resp.Respons.IsSuccess) {
                        toast.success(resp.Respons.Message, {
                            autoClose: 1000,
                        });
                    }
                    else {
                        toast.error(resp.Respons.Message);
                    }
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Error update Department');
                });
        }
        else {
            formData.Id = 0;
            fetch('http://localhost:7036/Department/api/insertdept/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(value) })
                .then(resp => resp.json()).then(resp => {
                    handleClose()
                    getUsers()
                    setFormData(initialValue)
                    if (resp.Respons.IsSuccess) {
                        toast.success(resp.Respons.Message, {
                            autoClose: 1000,
                        });
                    }
                    else {
                        toast.error(resp.Respons.Message);
                    }
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Error deleting Department');
                });
        }

    }

    return (
        <div>
            <ToastContainer />
            <div className='App'>
                <h1 className='dept-header'>Departments</h1>
                <div align="right">
                    <Fab
                        className="add-dept"
                        aria-label="add"
                        onClick={() => handleClickOpen()}
                    >
                        <FontAwesomeIcon
                            color='white'
                            fontSize={15}
                            icon={faAdd} />
                    </Fab>
                </div>
                {/* <div align="right">
                    <button type="button" class="btn btn-primary" onClick={handleClickOpen}>Add Department</button>
                </div> */}
                <div className="ag-theme-alpine"
                    style={{
                        height: '370px'
                    }}>
                    <AgGridReact rowData={data} columnDefs={columns} pagination={true} paginationPageSize={5}
                        onGridReady={onGridReady} />
                </div>
                <InsertDepartment open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
            </div>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default DepartmentGrid;

























// <------------------------------------------Shalini code------------------------------------------------>

// import React, { useState, useEffect } from 'react';
// import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import InsertDepartment from './InsertDept';
// import 'bootstrap/dist/css/bootstrap.css';
// import Button from '@mui/material/Button';
// import Navbar from '../navbar/navbar';
// import Footer from '../Footer/footer';


// const initialValue = { Id: "", DepartmentName: "", IndustryName: "",Description: "",Industry_ID: "", };

// export const Department = () => {
//   const [data, setData] = useState(null);
//   const [grid, setGridApi] = useState(null);
//   const [open, setOpen] = React.useState(false);
//   const [formData, setFormData] = useState(initialValue);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {

//     setOpen(false);
//     setFormData(initialValue)
//   };
//    const onChange = (e) => {
//     const { value, id } = e.target
//     // console.log(value,id)
//     setFormData({ ...formData, [id]: value })
//   }
//   useEffect(() => {
//     getUsers()
//   }, [])
//   const getUsers = () => {
//     fetch('http://localhost:7036/Department/api/GetDepartment/')
//       .then(response => response.json())
//       .then(json => setData(json.RespoList))
//       .catch(error => console.error(error))
//   }

//   const columns = [
//     // { headerName:"Id",field:'Id' },
//     { headerName: "Name", field: 'DepartmentName' },
//     { headerName: "Industry_Id", field: 'Industry_ID' },
//     // { headerName: "Industry_ID", field: 'Industry_ID' },
//     { headerName: "Description", field: 'Description' },

//     {
//       headerName: "Actions", field: "Id", cellRenderer: (params) => <div>
//         <button type="button" class="btn btn-primary" onClick={() => handleEdit(params.value)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
//         <button type="button" class="btn btn-primary" onClick={() => handleDelete(params.value)}>Delete</button>
//       </div>
//     }
//   ]
//   const onGridReady = (params) => {
//     setGridApi(params)
//   }
//   const handleDelete = (id) => {
//     fetch('http://localhost:7036/Department/api/deletedept' + `/${id}`, { method: "DELETE" })
//       .then(resp => resp.json()).then(resp => getUsers())
//   }
//   const handleEdit = (id) => {
//     // setFormData(row)
//     // handleClickOpen()
//     fetch('http://localhost:7036/Department'+`/${id}`,{ method:"Get"})
//       .then(resp => resp.json()).then(resp => {
//         setFormData(resp.ModelRespons)
//         handleClickOpen()
//       }
//       )
//   }
// const handleFormSubmit = () => {
//   if (formData.Id > 0) {
//     fetch('http://localhost:7036/Department/api/Updatedept/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
//       .then(resp => resp.json()).then(resp => {
//         handleClose()     //values stored in setFormat
//         getUsers()        //view
//         setFormData(initialValue)
//       })
//   }
//   else {
//     formData.Id = 0;
//     fetch('http://localhost:7036/Department/api/insertdept/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
//       .then(resp => resp.json()).then(resp => {
//         handleClose()
//         getUsers()
//         setFormData(initialValue)
//       })  
//   }

// }
//   const handleFormSubmit=(value)=>{
//     if (formData.Id > 0) {
//       fetch('http://localhost:7036/Department/api/Updatedept/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(value     ) })
//         .then(resp => resp.json()).then(resp => {
//           handleClose()     //values stored in setFormat
//           getUsers()        //view
//           setFormData(initialValue)
//         })
//     }
//     else {
//       formData.Id = 0;
//       fetch('http://localhost:7036/Department/api/insertdept/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(value) })
//         .then(resp => resp.json()).then(resp => {
//           handleClose()
//           getUsers()
//           setFormData(initialValue)
//         })  
//     }

//   }
//   const defaultColDef = {
//     sortable: true, filter: true, flex: 1, floatingFilter: true
//   }
//   return (
//     <div>

//       <div>
//         <Navbar />
//       </div>
//       <div className='App'>
//         <div align="right">
//           <button type="button" class="btn btn-primary" onClick={handleClickOpen}>Add Department</button>
//         </div>
//         <div className="ag-theme-alpine"
//           style={{
//             height: '400px'
//           }}>
//           <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} pagination={true} paginationPageSize={5}
//             onGridReady={onGridReady} />
{/* <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
   
        </div> */}
{/* </div>
        <InsertDepartment open={open} handleClose={handleClose}  data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
      </div>
      <div>
        <Footer />
      </div>


    </div>


  );
} */}