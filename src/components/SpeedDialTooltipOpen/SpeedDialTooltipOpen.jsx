import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

export default function SpeedDialTooltipOpen({ id, name, number }) {
  const actions = [
    { icon: <DeleteButton id={id} />, name: 'Delete' },
    { icon: <EditButton id={id} name={name} number={number} />, name: 'Edit' },
    {
      icon: <FavoriteButton id={id} name={name} number={number} />,
      name: 'Favorite',
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      direction="left"
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
