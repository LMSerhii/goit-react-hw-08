import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';

export default function Contact({ id, name, number, randomColor }) {
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
      <div className={css.buttonGroup}>
        <EditButton id={id} name={name} number={number} />
        <DeleteButton id={id} />
      </div>
    </div>
  );
}
