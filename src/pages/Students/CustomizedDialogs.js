import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { DialogActions, DialogTitle, Dialog, Button, DialogContent } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    minWidth: "600px"
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

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {

  const handleSubmit = () => {
    props.setOpen(false);
  }

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={props.open}
        onClose={() => props.setOpen(false)}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => props.setOpen(false)}>
          {props.input.type}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}