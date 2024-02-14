import React, { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import InsertKeySkills from './insertkeySkillFunction'
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import './keyMain.css'


const initialValue = { Id: "", Name: "", Description: "" };

const KeySkillGrid = () => {
    const [data, setData] = useState(null);
    const [grid, setGridApi] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState(initialValue);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setBackdrop(false);
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
        setBackdrop(false);
        fetch('http://localhost:7036/KeySkills/api/getKeySkills/')
            .then(response => response.json())
            .then(json => {
                setData(json.KeySkillsModels)
                console.log(data)
                // .catch(error => console.error(error))
                if (json.response.IsSuccess) {
                    toast.success(json.response.Message, {
                        autoClose: 1000,
                    });
                }
                else {
                    setBackdrop(true);
                    toast.error(json.response.Message);
                }
            })
            .catch(error => {
                setBackdrop(true);
                console.error(error);
                toast.error('Error appears through Fetching data');
            })
            .finally(() => {
                setBackdrop(false);
            });

    }
    const columns = [
        { headerName: "Name", field: 'Name', sortable: true, filter: true, flex: 1, floatingFilter: true },
        { headerName: "Description", field: 'Description', sortable: true, filter: true, flex: 1, floatingFilter: true },
        {
            //   headerName: "Actions",
            //   field: "ID",
            headerName: "Actions", field: "Id", cellRenderer: (params) => (
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
            ),
        },
    ];
    const onGridReady = (params) => {
        setGridApi(params)
    }
    const [backdrop, setBackdrop] = React.useState(false);
    const handleDelete = (id) => {
        fetch('http://localhost:7036/KeySkills/api/deletekeyskills' + `/${id}`, { method: "DELETE" })
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
                toast.error('Error deleting KeySkills');
            });
    }
    const handleEdit = (id) => {
        fetch('http://localhost:7036/KeySkills' + `/${id}`, { method: "Get" })
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
                toast.error('Error Edit data in KeySkills');
            });
    }
    const handleFormSubmit = () => {
        if (!formData.Name || !formData.Description) {
            toast.error('Please fill all fields.', {
                autoClose: 1000,
            });
            return;
        }
        if (formData.Id > 0) {
            fetch('http://localhost:7036/KeySkills/api/UpdatekeySkills/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
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
                    toast.error('Error updating KeySkills');
                });
        }
        else {
            formData.Id = 0;
            fetch('http://localhost:7036/KeySkills/api/InsertKeySkills/', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(formData) })
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
                    toast.error('Error inserting Industry');
                });
        }

    }

    return (
        <div>
            <ToastContainer />
            <div className='App'>
                <h1 className='kskills-header'>Key Skills</h1>
                <div align="right">
                    <Fab
                        className="add-kskills"
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
                    <button type="button" class="btn btn-primary" onClick={handleClickOpen}>Add KeySkills</button>
                </div> */}
                <div className="ag-theme-alpine"
                    style={{
                        height: '370px'
                    }}>
                    <AgGridReact rowData={data} columnDefs={columns} pagination={true} paginationPageSize={5}
                        onGridReady={onGridReady} />
                </div>
                <InsertKeySkills open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={backdrop}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>

        </div>
    )
}

export default KeySkillGrid;