import React, { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import InsertDesignation from './insertDesignFunction'
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';
import './designMain.css'
import Fab from "@mui/material/Fab";



const initialValue = { Id: "", Name: "", Description: "" };

const DesignGrid = () => {
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
        fetch('http://localhost:7036/Designation/api/GetDesignation/')
            .then(response => response.json())
            .then(json => {
                setData(json.Models)
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
        { headerName: "Name", field: 'Name', sortable: true, filter: true, flex: 1, floatingFilter: true },
        { headerName: "Description", field: 'Description', sortable: true, filter: true, flex: 1, floatingFilter: true },

        {
            headerName: "Actions", field: "Id", cellRenderer: (params) =>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        }
    ]
    const onGridReady = (params) => {
        setGridApi(params)
    }
    const handleDelete = (id) => {
        fetch('http://localhost:7036/Designation/api/deletedesignation' + `/${id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(resp => {
                getUsers();
                if (resp.Response.IsSuccess) {
                    toast.success(resp.Response.Message, {
                        autoClose: 1000,
                    });
                }
                else {
                    toast.error(resp.Response.Message);
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error deleting Designation');
            });
    }
    const handleEdit = (id) => {
        fetch('http://localhost:7036/Designation' + `/${id}`, { method: "Get" })
            .then(resp => resp.json()).then(resp => {
                setFormData(resp.Model)
                handleClickOpen()
                if (resp.Response.IsSuccess) {
                    toast.success(resp.Response.Message, {
                        autoClose: 1000,
                    });
                }
                else {
                    toast.error(resp.Response.Message);
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error Edit data in designation');
            });
    }
    const handleFormSubmit = () => {
        if (!formData.Name || !formData.Description) {
            toast.error('Please fill in all fields.', {
                autoClose: 1000,
            });
            return;
        }
        if (formData.Id > 0) {
            fetch('http://localhost:7036/Designation/api/Updatedesignation/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
                .then(resp => resp.json())
                .then(resp => {
                    handleClose()
                    getUsers()
                    setFormData(initialValue)
                    if (resp.Response.IsSuccess) {
                        toast.success(resp.Response.Message, {
                            autoClose: 1000,
                        });
                    }
                    else {
                        toast.error(resp.Response.Message);
                    }
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Error updating designation');
                });
        }
        else {
            formData.Id = 0;
            fetch('http://localhost:7036/Designation/api/InsertDesign/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
                .then(resp => resp.json()).then(resp => {
                    handleClose()
                    getUsers()
                    setFormData(initialValue)
                    if (resp.Response.IsSuccess) {
                        toast.success(resp.Response.Message, {
                            autoClose: 1000,
                        });
                    }
                    else {
                        toast.error(resp.Response.Message);
                    }
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Error inserting designation');
                });
        }
    }
    return (
        <div>
            <ToastContainer />
            <div className='App'>
                <h1 className='design-header'>Designations</h1>
                <div align="right">
                    <Fab
                        className="add-design"
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
                    <button type="button" class="btn btn-primary" onClick={handleClickOpen}>Add Designation</button>
                </div> */}
                <div className="ag-theme-alpine"
                    style={{
                        height: '370px'
                    }}>
                    <AgGridReact rowData={data} columnDefs={columns} pagination={true} paginationPageSize={5}
                        onGridReady={onGridReady} />
                </div>
                <InsertDesignation open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
            </div>
        </div>
    )
}

export default DesignGrid;





// <------------------------------------------Shalini code------------------------------------------------>

// import React, { useState, useEffect } from 'react';
// import './Designation.css';
// import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';




// import 'bootstrap/dist/css/bootstrap.css';
// import Navbar from "../navbar/navbar";



// function Designation() {

//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch('http://localhost:7036/Designation/api/Get/')
//             .then(response => response.json())
//             .then(json => setData(json.ResponseList))
//             .catch(error => console.error(error));
//     }, []);

//     const columns = [
//         { headerName: "ID", field: 'ID', checkboxSelection: true },
//         { headerName: "Industry_Name", field: 'Industry_Name' },
//         { headerName: "Description", field: 'Description' },
//     ]
//     const defaultColDef = {
//         sortable: true, editable: true, filter: true
//     }

//     return (
//         <div>


//             <div>
//                 <Navbar />
//             </div>

//             <div>
//                 <body>
//                     <main class="login-form">
//                         <div class="container">

//                             <div class="row justify-content-center">
//                                 <div class="col-md-8">
//                                     <div class="card">
//                                         <div class="card-header">Designation</div>

//                                         <div class="card-body">
//                                             <form action="" method="">
//                                                 <div class="form-group row">
//                                                     <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
//                                                     <div class="col-md-6">
//                                                         <input type="text" id="Name" class="form-control" name="name" required autofocus />
//                                                     </div>
//                                                 </div>
//                                                 <br />

//                                                 <div class="form-group row">
//                                                     <label for="designation" class="col-md-4 col-form-label text-md-right">Designation</label>
//                                                     <div class="col-md-6">
//                                                         <input type="text" id="Designation" class="form-control" name="designation" required />
//                                                     </div>
//                                                 </div>
//                                                 <br />



//                                                 <div class="col-md-6 offset-md-4">
//                                                     <button type="submit" class="btn btn-primary">
//                                                         Submit
//                                                     </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                                     <button type="submit" class="btn btn-primary">
//                                                         Cancel
//                                                     </button>
//                                                     {/* <a href="#" class="btn btn-link">
//                                     Forgot Your Password?
//                                 </a> */}
//                                                 </div>

//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </main>


//                 </body>
//             </div >
//             <div class="container">
//                 <div class="row justify-content-center">
//                     <div class="col-md-8">
//                         <div class="card">
//                             <div className="ag-theme-alpine"
//                                 style={{
//                                     height: '250px',
//                                     width: '600px'
//                                 }}>
//                                 <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} pagination={true} paginationPageSize={2} />
//                                 {/* <div>
//                 {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}

//                </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }
// export default Designation;

// ---------------------------------------------------



// import React, { useState, useEffect } from 'react';
// import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import InsertDesignation from './InsertDesignation';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
// import 'bootstrap/dist/css/bootstrap.css';
// import Button from '@mui/material/Button';
// import Navbar from '../navbar/navbar';
// const initialValue = { Id: "", Name: "", Description: "" };
// export const Designation = () => {
//     const [data, setData] = useState(null);
//     const [grid, setGridApi] = useState(null);
//     const [open, setOpen] = React.useState(false);
//     const [formData, setFormData] = useState(initialValue);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setFormData(initialValue)
//     };
//     const onChange = (e) => {
//         const { value, id } = e.target
//         // console.log(value,id)
//         setFormData({ ...formData, [id]: value })
//     }
//     useEffect(() => {
//         getUsers()
//     }, [])
//     const getUsers = () => {
//         fetch('http://localhost:7036/Designation/api/GetDesignation/')
//             //  http://localhost:7036/Designation/api/GetDesignation

//             .then(response => response.json())
//             .then(json => setData(json.Models))
//             .catch(error => console.error(error))
//     }

//     const columns = [
//         // { headerName:"Id",field:'Id' },
//         { headerName: "Name", field: 'Name' },
//         { headerName: "Description", field: 'Description' },
//         // {headerName:"Actions",field:"id",cellRenderer: ButtonForm },
//         {
//             headerName: "Actions", field: "Id", cellRenderer: (params) => <div>
//                 <button type="button" class="btn btn-primary" onClick={() => handleEdit(params.value)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button type="button" class="btn btn-primary" onClick={() => handleDelete(params.value)}>Delete</button>
//             </div>
//         }
//     ]
//     const onGridReady = (params) => {
//         setGridApi(params)
//     }
//     const handleDelete = (id) => {
//         fetch('http://localhost:7036/Designation/api/deletedesignation' + `/${id}`, { method: "DELETE" })
//             .then(resp => resp.json()).then(resp => getUsers())
//     }
//     const handleEdit = (id) => {
//         fetch('http://localhost:7036/Designation' + `/${id}`, { method: "Get" })
//             .then(resp => resp.json()).then(resp => {
//                 setFormData(resp.Model)
//                 handleClickOpen()
//             }
//             )
//     }
//     const handleFormSubmit = () => {
//         if (formData.Id > 0) {
//             fetch('http://localhost:7036/Designation/api/Updatedesignation/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
//                 .then(resp => resp.json()).then(resp => {
//                     handleClose()
//                     getUsers()
//                     setFormData(initialValue)
//                 })
//         }
//         else {
//             formData.Id = 0;
//             fetch('http://localhost:7036/Designation/api/InsertDesign/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
//                 .then(resp => resp.json()).then(resp => {
//                     handleClose()
//                     getUsers()
//                     setFormData(initialValue)
//                 })
//         }

//     }
//     const defaultColDef = {
//         sortable: true, filter: true, flex: 1, floatingFilter: true
//     }
//     return (

//         <div>

//             <div>
//                 <Navbar />
//             </div>

//             <div className='App'>
//                 <div align="right">
//                     <button type="button" class="btn btn-primary" onClick={handleClickOpen}>Add Designation</button>
//                 </div>
//                 <div className="ag-theme-alpine"
//                     style={{
//                         height: '400px'
//                     }}>
//                     <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} pagination={true} paginationPageSize={5}
//                         onGridReady={onGridReady} />
{/* <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
   
        </div> */}
//                 </div>
//                 <InsertDesignation open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
//             </div>

//         </div>
//     )
// }