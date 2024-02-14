import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

const InsertIndustry = ({ open, handleClose, data, onChange, handleFormSubmit }) => {
    const { Id, Industry_Name, Description } = data
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle Id="alert-dialog-title">{Id ? "Edit Industry" : "Create Industry"}
                </DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            id="Industry_Name"
                            required error value={Industry_Name}
                            onChange={e => onChange(e)}
                            placeholder='Enter Industry'
                            label="Industry"
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
                        <TextField
                            id="Description"
                            value={Description}
                            onChange={e => onChange(e)}
                            placeholder='Enter Description'
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
                    <Button color='primary' variant='contained' onClick={() => handleFormSubmit()}>
                        {Id ? "Update" : "Submit"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default InsertIndustry;













// <---------------------------------------shalini code------------------------------------------->
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { TextField } from '@mui/material';

// export default function InsertIndustry({open,handleClose,data,onChange,handleFormSubmit}) {
//     const{ID,Industry_Name,Description}=data
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
{/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle Id="alert-dialog-title">{ID?"Edit Industry":"Create Industry"}
//         </DialogTitle>
//         <DialogContent>
//           <form>
//            <TextField id="Industry_Name"  required error  value={Industry_Name} onChange={e=>onChange(e)}  placeholder='Enter Industry' label="Industry" variant="outlined" margin='dense' fullWidth/>
//             <TextField id="Description" value={Description} onChange={e=>onChange(e)}  placeholder='Enter Description' label="Description" variant="outlined"margin='dense' fullWidth/>
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color='secondary' variant='outlined'>Cancel</Button>
//           <Button color='primary' variant='contained' onClick={()=>handleFormSubmit()}>
//             {ID?"Update":"Submit"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }