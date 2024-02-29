import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    dispatch(deleteContact(id));
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon sx={{ color: '#5A5C60', fontSize: 28 }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ backgroundColor: '#0277EF', color: '#fff' }}
        >
          {'Do you really want to delete this contact?'}
        </DialogTitle>
        <DialogActions sx={{ backgroundColor: '#0277EF' }}>
          <Button sx={{ color: '#fff' }} onClick={handleClose}>
            Disagree
          </Button>
          <Button sx={{ color: '#fff' }} onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
