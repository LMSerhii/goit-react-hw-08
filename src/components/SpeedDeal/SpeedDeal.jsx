import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddContact from '../AddContact/AddContact';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';

const actions = [
  { icon: <PersonAddIcon />, name: 'Add Contact' },
  { icon: <PersonSearchIcon />, name: 'Search Contact' },
  { icon: <FavoriteIcon />, name: 'Favorite Contact' },
  { icon: <ContactsIcon />, name: 'All Contact' },
];

export default function BasicSpeedDial({
  setIsVisible,
  isVisible,
  setIsFavoriteVisible,
}) {
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

    if (action.name === 'Favorite Contact') {
      setIsFavoriteVisible(true);
    }

    if (action.name === 'All Contact') {
      setIsFavoriteVisible(false);
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
