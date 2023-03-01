import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
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

export default function CustomizedDialogs(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </BootstrapDialogTitle>
        {props.data &&
          <DialogContent dividers>
            <Typography gutterBottom>
              {props.data.questionText}
            </Typography>
            <div className="row" style={{ paddingLeft: "30px" }}>
              <div className="col">
                <Typography gutterBottom>
                  {"(A) " + props.data.optionA}
                </Typography>
              </div>
              <div className="col">
                <Typography gutterBottom>
                  {"(B) " + props.data.optionA}
                </Typography>
              </div>

            </div>
            <div className="row" style={{ paddingLeft: "30px" }}>
              <div className="col">
                <Typography gutterBottom>
                  {"(C) " + props.data.optionA}
                </Typography>
              </div>
              <div className="col">
                <Typography gutterBottom>
                  {"(D) " + props.data.optionA}
                </Typography>
              </div>
            </div>
          </DialogContent>
        }
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}