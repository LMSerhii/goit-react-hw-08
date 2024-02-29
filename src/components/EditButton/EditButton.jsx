import { useState } from 'react';
import css from './EditButton.module.css';
import { Button } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import EditContact from '../EditContact/EditContact';

export default function EditButton({ id, name, number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Button className={css.button} onClick={openModal}>
        <FaEdit size={24} color="#0072E5" />
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditContact onClose={closeModal} id={id} name={name} number={number} />
      </Modal>
    </>
  );
}
