import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import json2mq from 'json2mq';
import { useMediaQuery } from '@mui/material';
import SpeedDialTooltipOpen from '../SpeedDialTooltipOpen/SpeedDialTooltipOpen';

export default function Contact({ id, name, number, randomColor }) {
  const mobileMedia = useMediaQuery(
    json2mq({
      maxWidth: 767,
    })
  );

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>
          <span
            className={css.iconWrapper}
            style={{ backgroundColor: `${randomColor}` }}
          >
            <FaUserAlt className={css.icon} />
          </span>
          {name}
        </p>
        <p className={css.number}>
          <span
            className={css.iconWrapper}
            style={{ backgroundColor: `${randomColor}` }}
          >
            <FaPhoneAlt className={css.icon} />
          </span>
          {number}
        </p>
      </div>
      {mobileMedia ? (
        <SpeedDialTooltipOpen id={id} name={name} number={number} />
      ) : (
        <div className={css.buttonGroup}>
          <FavoriteButton id={id} name={name} number={number} />
          <EditButton id={id} name={name} number={number} />
          <DeleteButton id={id} />
        </div>
      )}
    </div>
  );
}
