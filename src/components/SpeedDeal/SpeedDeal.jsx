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

export default function BasicSpeedDial({
  setIsVisible,
  isVisible,
  setIsFavoriteVisible,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const actions = [
    { icon: <PersonAddIcon />, name: 'Add Contact', handler: openModal },
    {
      icon: <PersonSearchIcon />,
      name: 'Search Contact',
      handler: toggleVisibility,
    },
    {
      icon: <FavoriteIcon />,
      name: 'Favorite Contact',
      handler: setIsFavoriteVisible.bind(null, true),
    },
    {
      icon: <ContactsIcon />,
      name: 'All Contact',
      handler: setIsFavoriteVisible.bind(null, false),
    },
  ];

  const handleClick = action => {
    action.handler();
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
