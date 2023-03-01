import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { foundError } from '../redux/action/error';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    minWidth: "350px"
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
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >

        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Dialogs(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(foundError({ value: false }));
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" className='text-center' onClose={handleClose} >
          {props.type}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <p className='text-center'>{props.type === "Error" ? <span className='text-danger'>{props.message}</span> : <span className='text-success'>{props.message}</span>}</p>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}