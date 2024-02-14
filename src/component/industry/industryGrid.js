import React, { useState, useDeepCompareEffect, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import InsertIndustry from './insertIndustryFunction';
import 'bootstrap/dist/css/bootstrap.css'
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';
import Fab from "@mui/material/Fab";
import './indMain.css'



const initialValue = { Id: "", Industry_Name: "", Description: "" };

const IndustryGrid = () => {

    const [grid, setGridApi] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState(initialValue);
    const [value, setValue] = useState();

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
    const [data, setData] = useState(null);
    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = () => {
        fetch('http://localhost:7036/Industry/api/Get/')
            .then(response => response.json())
            .then(json => {
                setData(json.ResponseList)
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
        { headerName: "Name", field: 'Industry_Name', sortable: true, filter: true, flex: 1, floatingFilter: true },
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
                        title="Edit"
                    >
                        <FontAwesomeIcon
                            color='grey'
                            icon={faEdit} />
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                        className="action-icon"
                        onClick={() => handleDelete(params.value)}
                        title="Delete"
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
        fetch('http://localhost:7036/Industry/api/deleteindustry' + `/${id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(resp => {
                getUsers()
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
                toast.error('Error deleting Industry');
            });
    }
    const handleEdit = (id) => {
        fetch('http://localhost:7036/Industry' + `/${id}`, { method: "Get" })
            .then(resp => resp.json()).then(resp => {
                setFormData(resp.ModelResponse)
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
                toast.error('Error updating Industry');
            });
    }
    const handleFormSubmit = () => {
        if (!formData.Industry_Name || !formData.Description) {
            toast.error('Please fill all fields.', {
                autoClose: 1000,
            });
            return;
        }
        if (formData.Id > 0) {
            fetch('http://localhost:7036/Industry/api/Updateindustry/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
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
                    toast.error('Error updating Industry');
                });
        }
        else {
            formData.Id = 0;
            fetch('http://localhost:7036/Industry/api/Insert/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
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
                    toast.error('Error Inserting Industry');
                });
        }

    }
    // const defaultColDef = {
    //     sortable: true, filter: true, flex: 1, floatingFilter: true
    // }
    function onaccess(data) {
        setValue(data);
    }
    return (
        <div>
            <ToastContainer />
            <div className='App'>
                <h1 className='industry-header'>Industries</h1>
                <div align="right">
                    <Fab
                        className="add-indus"
                        aria-label="add"
                        onClick={() => handleClickOpen()}
                    >
                        <FontAwesomeIcon
                            color='white'
                            fontSize={15}
                            icon={faAdd} />
                    </Fab>
                    {/* <button type="button" class="btn btn-primary" onClick={handleClickOpen}>Add Industry</button> */}
                </div>
                <div className="ag-theme-alpine"
                    style={{
                        height: '370px'
                    }}>
                    <AgGridReact rowData={data} columnDefs={columns} pagination={true} paginationPageSize={5}
                        onGridReady={onGridReady} />
                </div>
                {open && (
                    <div className="backdrop"> {/* Apply the backdrop class when 'open' is true */}
                        <InsertIndustry open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
                    </div>
                )}
            </div>
        </div>

    )
}

export default IndustryGrid;











// <----------------------shalini code------------------------------>
// import React, { useState, useEffect } from 'react';
// import './Industry.css';
// // import { Link } from 'react-router-dom';
// import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import Navbar from "../navbar/navbar";

// import 'bootstrap/dist/css/bootstrap.css';



// function Industry() {

//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch('http://localhost:7036/Industry/api/Get/')
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
//                                         <div class="card-header">Industry</div>

//                                         <div class="card-body">
//                                             <form action="" method="">
//                                                 <div class="form-group row">
//                                                     <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
//                                                     <div class="col-md-6">
//                                                         <input type="text" id="Name" class="form-control" name="name" required autofocus />
//                                                     </div>
//                                                 </div>
//                                                 <br />

//                                                 {/* <div class="form-group row">
//                                 <label for="industry" class="col-md-4 col-form-label text-md-right">Industry</label>
//                                 <div class="col-md-6">
//                                     <input type="text" id="Industry" class="form-control" name="industry" required/>
//                                 </div>
//                             </div> */}
//                                                 <div class="form-group row">
//                                                     <label for="industry" class="col-md-4 col-form-label text-md-right">Industry</label>
//                                                     <div class="col-md-6">

//                                                         <select id="country" class="form-control">

//                                                             <option>IT</option>
//                                                             <option>IT Service/Consultancy</option>
//                                                             <option>Electrical</option>
//                                                             <option>Mechanical</option>
//                                                             <option>Ecuador</option>
//                                                             <option>Communication</option>
//                                                             <option>takatak</option>
//                                                             <option>Haiti</option>

//                                                         </select>
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
//             </div>
//             <main class="login-form1">
//             <div class="container">
//                 <div class="row justify-content-center">
//                     <div class="col-md-8">
//                         <div class="card">
//                             <div className="ag-theme-alpine"
//                                 style={{
//                                     height: '250px',
//                                     width: '600px'
//                                 }}>
//                                 <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} pagination={true} paginationPageSize={2}/>
//                                 {/* <div>
//                 {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}

//                </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </main>
//         </div>

//     );
// }
// export default Industry;


// import React, { useState, useDeepCompareEffect,useEffect } from 'react';
// import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import InsertIndustry from './InsertIndustry';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
// import 'bootstrap/dist/css/bootstrap.css'
// import Navbar from '../navbar/navbar';
// import { Servicess } from './IndustryService';
// import { InitDailog } from './IndustryService';
// import{useDispatch} from 'react-redux';

// import Servicess, { IndustryService } from './IndustryService';
// import { Routes, Route, Router } from 'react-router-dom';


// const initialValue = { ID: "", Industry_Name: "", Description: "" };
// export const Industry = () => {
// export function Industry(props) {

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(InitDailog()).then(action => {
//     if (action.payload && action.payload.vpWeb_PaymentDefaultdata) {
//       setData(action.payload.vpWeb_PaymentDefaultdata)
//     }
//   });
// }, []);

// const [grid, setGridApi] = useState(null);
// const [open, setOpen] = React.useState(false);
// const [formData, setFormData] = useState(initialValue);
// const [value, setValue] = useState();

// const handleClickOpen = () => {
//   setOpen(true);
// };

// const handleClose = () => {
//   setOpen(false);
//   setFormData(initialValue)
// };
// const onChange = (e) => {
//   const { value, id } = e.target
// console.log(value,id)
//   setFormData({ ...formData, [id]: value })
// }
// const [data, setData] = useState(null);
// useEffect(() => {
//   getUsers()
// }, [])
// const getUsers = () => {
// let data1 =IndustryService.GetAllIndustries(data)
// console.log(data1);
//   fetch('http://localhost:7036/Industry/api/Get/')
//    .then(response => response.json())
//    .then(json => setData(json.ResponseList))
//    .catch(error => console.error(error))
//setData(Serveeecs());
// }


// const columns = [
// { headerName:"ID",field:'ID' },
//   { headerName: "Name", field: 'Industry_Name' },
//   { headerName: "Description", field: 'Description' },
// {headerName:"Actions",field:"id",cellRenderer: ButtonForm },
//   {
//     headerName: "Actions", field: "ID", cellRenderer: (params) => <div>
//       <button type="button" class="btn btn-primary" onClick={() => handleEdit(params.value)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
//       <button type="button" class="btn btn-primary" onClick={() => handleDelete(params.value)}>Delete</button>
//     </div>
//   }
// ]
// const onGridReady = (params) => {
//   setGridApi(params)
// }
// const handleDelete = (id) => {
//   fetch('http://localhost:7036/Industry/api/deleteindustry' + `/${id}`, { method: "DELETE" })
//     .then(resp => resp.json()).then(resp => getUsers())
// }
// const handleEdit = (id) => {
//   fetch('http://localhost:7036/Industry' + `/${id}`, { method: "Get" })
//     .then(resp => resp.json()).then(resp => {
//       setFormData(resp.ModelResponse)
//       handleClickOpen()
//     }
//     )
// }
// const handleFormSubmit = () => {
//   if (formData.ID > 0) {
//     fetch('http://localhost:7036/Industry/api/Updateindustry/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
//       .then(resp => resp.json()).then(resp => {
//         handleClose()
//         getUsers()
//         setFormData(initialValue)
//       })
//   }
//   else {
//     formData.ID = 0;
//     fetch('http://localhost:7036/Industry/api/Insert/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
//       .then(resp => resp.json()).then(resp => {
//         handleClose()
//         getUsers()
//         setFormData(initialValue)
//       })
//   }

// }
// const defaultColDef = {
//   sortable: true, filter: true, flex: 1, floatingFilter: true
// }
// function onaccess(data) {
//   setValue(data);
// }
// return (
//   <>
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <div className='App'>
//         <div align="right">
//           <button type="button" class="btn btn-primary" onClick={handleClickOpen}>Add Industry</button>
//         </div>
//         <div className="ag-theme-alpine"
//           style={{
//             height: '400px'
//           }}>

//           <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} pagination={true} paginationPageSize={5}
//             onGridReady={onGridReady} />
{/* <Servicess data={data} setData={setData}/> */ }
{/* <Servicess data={data} setData={setData} /> */ }
{/* <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
   
        </div> */}
{/* </div>
            <InsertIndustry open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
          </div>

        </div> */}
{/* <Servicess onhandleindustry={onaccess} oncopyData={data} /> */ }
{/* </>

    )
  } */}