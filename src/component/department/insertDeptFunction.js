import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { useEffect, useState } from "react";
import { Stack } from '@mui/material';
import './deptMain.css'

const InsertDepartment = ({ open, handleClose, data, handleFormSubmit }) => {
  const [dataobj, setData] = useState([]);
  const { Id, DepartmentName, Industry_ID, Description } = data

  const onChange = (e) => {
    const { value, id } = e.target
  }



  useEffect(() => {

    fetch('http://localhost:7036/Industry/api/Get/')
      .then(response => response.json())
      .then(json => setData(json.ResponseList))
      .catch(error => console.error(error))
    console.log(dataobj);

  }, []);

  const [DepartName, setdepart] = React.useState(DepartmentName);
  const [Industry_Name, setindustry] = React.useState(Industry_ID);
  const [Descript, setdescription] = React.useState(Description);
  const [id, setId] = React.useState('');

  const [labeloption, setLabeloption] = React.useState('');

  const initialValue = {
    DepartmentName: DepartName,
    Industry_ID: Industry_Name,
    Description: Descript,
    Id: id
  }

  function onChangedepart(event) {
    event.preventDefault();
    data.DepartmentName = event.target.value;
    setdepart(event.target.value);
  }

  function onChangedescript(event) {
    event.preventDefault();
    data.Description = event.target.value;
    setdescription(event.target.value);
  }

  function onIndustryChange(e, Industry) {
    e.preventDefault();
    setLabeloption(Industry.Id);
    setindustry(Industry.Id);
    data.Industry_ID = Industry.Id;
  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle Id="alert-dialog-title">{Id ? "Edit Department" : "Create Department"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id="DepartName"
              //required error value={data.DepartmentName}
              onChange={e => onChangedepart(e)}
              label="Department"
              variant="outlined"
              value={data.DepartmentName}
              margin='dense'
              fullWidth
              InputLabelProps={{
                style: {
                  fontSize: '12px',
                  color: 'grey',
                },
              }}
              InputProps={{
                classes: {
                  input: 'pop-class',
                },
              }}
            />


            <Stack sx={{ width: 300, margin: "8px 0px 4px 0px" }}>
              <Autocomplete
                options={dataobj}
                getOptionLabel={(option) => option.Industry_Name}
                onChange={(event, ID) => onIndustryChange(event, ID)}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Industry Name"
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        fontSize: 12, // Adjust the label font size as needed
                        // fontWeight: 600, // You can also adjust font weight
                      },
                      '& .MuiInputBase-input': {
                        fontSize: 12, // Adjust the input font size as needed
                      },
                    }}
                  />
                )}
                renderOption={(props, option) => (
                  <li {...props} style={{ fontSize: '12px' }}>
                    {option.Industry_Name}
                  </li>
                )}
              />
            </Stack>


            <TextField
              id="Description"
              value={data.Description}
              onChange={e => onChangedescript(e)}
              label="Description"
              variant="outlined"
              margin='dense'
              fullWidth
              InputLabelProps={{
                style: {
                  fontSize: '12px',
                  color: 'grey',
                },
              }}
              InputProps={{
                classes: {
                  input: 'pop-class',
                },
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary' variant='outlined'>Cancel</Button>
          <Button
            color='primary'
            variant='contained'
            type="submit"
            onClick={e => { handleFormSubmit(data) }}
          >
            {Id ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InsertDepartment;

























// <-------------Shalini code ----------------->

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { TextField } from '@mui/material';
// import {Autocomplete} from '@mui/material';
// import { useEffect ,useState } from "react";
// import {Stack} from '@mui/material';
// import { Industry } from '../Industry/Industry';
// import { useDispatch } from 'react-redux';

// export default function InsertDepartment({open,handleClose,data,handleFormSubmit}) {
//     //  const dispatch = useDispatch();
//     const [dataobj, setData] = useState([]);
//     const{Id,DepartmentName,Industry_ID,Description}=data    


//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


// const initialValue={

// DepartmentName:DepartName,
// Industry_ID:Industry_Name,
// Description:Descript
// }

// const [formData,setFormData]=React.useState(initialValue);
// const onChange = (e) => {
//   const { value, id } = e.target
// console.log(value,id)
// setFormData({ ...formData, [id]: value })
// }



// useEffect(() => {

//     fetch('http://localhost:7036/Industry/api/Get/')
//     .then(response => response.json())
//     .then(json => setData(json.ResponseList))
//     .catch(error => console.error(error))
//    console.log(dataobj);
// fetch('http://localhost:7036/Industry/api/Get/')
// .then(response => response.json())
// .then(json => setData(json.ResponseList))
// .catch(error => console.error(error))
// dispatch(getdata());
//  dispatch(loadEditData());

// if(Industry_ID>0)
// {
// setLabeloption(Industry_ID);
// setindustry(Industry_ID);
// }

// }, []);

// const [DepartName,setdepart]=React.useState(DepartmentName);
// const [Industry_Name,setindustry]=React.useState(Industry_ID);
// const [Descript,setdescription]=React.useState(Description);
// const [id,setId]=React.useState('');

// const [labeloption,setLabeloption]= React.useState('');

// const initialValue={
//   DepartmentName:DepartName,
//   Industry_ID:Industry_Name,
//   Description:Descript,
//   Id:id
// }

//  const defprops={
//    options:dataobj.map((option)=>({Industry_Name:option.Industry_Name})),
//    options:data.map((option)=>option.userName),
//    getOptionLabel:(options)=>options.Industry_Name
// }
// function onChangedepart(event){
//   event.preventDefault();
//   data.DepartmentName = event.target.value;
//   setdepart(event.target.value);
// }

// function onChangedescript(event){
//   event.preventDefault();
//   data.Description = event.target.value;
//   setdescription(event.target.value);
// }

// function onIndustryChange(e,Industry){
//   e.preventDefault();
//   setLabeloption(Industry.ID);
//   setindustry(Industry.ID);
//   alert(Industry.ID);
//   data.Industry_ID=Industry.ID;
// }
// useForm({
//   defaultValues: {
//     Industry_ID
//   }
// });
//const [formData,setFormData]=useState(initialValue);




// return ( 
//   <div>
{/* <Button variant="outlined" onClick={handleClickO,
      </Button> */}
{/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"     
      >
        <DialogTitle Id="alert-dialog-title">{Id?"Edit Department":"Create Department"}
        </DialogTitle>
        <DialogContent>
          <form>
           <TextField id="DepartName"  required error  value={data.DepartmentName} onChange={e=>onChangedepart(e)}  placeholder='Enter Department' label="Department" variant="outlined" margin='dense' fullWidth/>
           
           <Stack sx={{width:300,margin:"auto"}}>
           <Autocomplete
                             
                  options= {dataobj}
                  getOptionLabel={(option)=>option.Industry_Name}
                  value={Industry_Name}
                  onChange={(event,ID)=> onIndustryChange(event,ID)}
                                 renderInput={(params)=>(                                 
                                  <TextField fullWidth {...params}  label="Industry Name"  variant="outlined"  ></TextField>
                                 )}
                                 ></Autocomplete>
           </Stack>
                     <TextField id="Description" value={data.Description} onChange={e=>onChangedescript(e)}  placeholder='Enter Description' label="Description" variant="outlined"margin='dense' fullWidth/>
           
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary' variant='outlined'>Cancel</Button>
          <Button color='primary' variant='contained' onClick={e=>{handleFormSubmit(data)}}>
            {Id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
} */}