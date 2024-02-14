import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataArrayOutlined } from '@mui/icons-material';

export default function AlertDialogs({ resumeOpen, resumeHandleClose, resumeData, resumeHandleFormSubmit, resumeHandleFileChange }) {
    return (
        <div>
            <Dialog
                open={resumeOpen}
                onClose={resumeHandleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Upload Resume'}
                </DialogTitle>
                <DialogContent>
                    <form>
                        {/* <label>Upload Resume</label> */}
                        <input type="file" onChange={resumeHandleFileChange} />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={resumeHandleClose} color="secondary" variant="outlined">Cancel</Button>
                    <Button type="button" color="primary" variant="contained" onClick={() => resumeHandleFormSubmit()} >Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
