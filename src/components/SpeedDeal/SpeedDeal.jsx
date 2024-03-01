import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddContact from '../AddContact/AddContact';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const actions = [
  { icon: <PersonAddIcon />, name: 'Add Contact' },
  { icon: <PersonSearchIcon />, name: 'Search Contact' },
];

export default function BasicSpeedDial({ setIsVisible, isVisible }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = action => {
    if (action.name === 'Add Contact') {
      openModal();
    }

    if (action.name === 'Search Contact') {
      setIsVisible(!isVisible);
    }
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', top: 0, right: 0 }}
        icon={<SpeedDialIcon />}
        direction={'left'}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action)}
          />
        ))}
      </SpeedDial>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddContact closeModal={closeModal} />
      </Modal>
    </>
  );
}
