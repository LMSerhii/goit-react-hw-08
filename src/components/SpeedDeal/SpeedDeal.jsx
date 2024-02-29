import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddContact from '../AddContact/AddContact';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchBox from '../SearchBox/SearchBox';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filters/filtersSlice';

const actions = [
  { icon: <PersonAddIcon />, name: 'Add Contact' },
  { icon: <PersonSearchIcon />, name: 'Search Contact' },
  { icon: <RestartAltIcon />, name: 'Reset Search' },
];

export default function BasicSpeedDial() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSearchModal = () => setSearchModalOpen(true);
  const closeSearchModal = () => setSearchModalOpen(false);

  const handleClick = action => {
    if (action.name === 'Add Contact') {
      openModal();
    }

    if (action.name === 'Search Contact') {
      openSearchModal();
    }

    if (action.name === 'Reset Search') {
      dispatch(filterContacts(''));
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
      <Modal isOpen={isSearchModalOpen} onClose={closeSearchModal}>
        <SearchBox />
      </Modal>
    </>
  );
}
