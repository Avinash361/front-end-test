import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        minWidth: "300px"
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
        </DialogTitle>
    );
}
function Logout() {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
        navigate("/");
    };
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        navigate("/login");
    }
    return (
        <div className="logout">
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='text-center' onClose={handleClose} >
                </BootstrapDialogTitle>
                <DialogContent >
                    <p className='text-center text-dark'>Are you sure you want to sign out?</p>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        cancel
                    </Button>
                    <Button autoFocus onClick={logout}>
                        OK
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>

    )
}

export default Logout