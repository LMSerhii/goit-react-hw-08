// import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import css from './SearchBox.module.css';
import BlockHeader from '../BlockHeader/BlockHeader';
import { selectQuery } from '../../redux/filters/selectors';
import { filterContacts } from '../../redux/filters/filtersSlice';

export default function SearchBox() {
  const searchBoxId = useId();
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  return (
    <>
      <BlockHeader>Find contacts by name or phone</BlockHeader>
      <div className={css.searchBox}>
        {/* <label className={css.label} htmlFor={searchBoxId}>
        Find contacts by name or phone
      </label> */}
        <input
          className={css.input}
          type="text"
          value={query}
          id={searchBoxId}
          name="searchContact"
          placeholder="Search contact"
          onChange={evt => dispatch(filterContacts(evt.target.value))}
        />
      </div>
    </>
  );
}
