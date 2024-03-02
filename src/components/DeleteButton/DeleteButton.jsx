import { Button, Fab, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import css from './DeleteButton.module.css';
import toast from 'react-hot-toast';
import { deleteFavorite } from '../../redux/contacts/contactsSlice';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAgree = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast('Contact delete successfully!', {
          icon: '✔️',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .catch(() =>
        toast('Something went wrong!', {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      );

    dispatch(deleteFavorite(id));
    setIsModalOpen(false);
  };

  return (
    <>
      <Fab size="small" onClick={openModal} color="warning">
        <DeleteIcon color="disabled" sx={{ fontSize: 28, fill: '#fff' }} />
      </Fab>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Typography variant="body1" mb={'20px'}>
          {
            "Hey there! Just wanted to check in and see if you're absolutely certain you want to delete this contact?"
          }
        </Typography>
        <div className={css.buttonGroup}>
          <Button color="primary" variant="outlined" onClick={closeModal}>
            No
          </Button>
          <Button color="primary" variant="contained" onClick={handleAgree}>
            Yes
          </Button>
        </div>
      </Modal>
    </>
  );
}
