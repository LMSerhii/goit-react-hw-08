// import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import BlockHeader from '../BlockHeader/BlockHeader';
import { selectQuery } from '../../redux/filters/selectors';
import { filterContacts } from '../../redux/filters/filtersSlice';
import { TextField } from '@mui/material';

export default function SearchBox() {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  return (
    <>
      <BlockHeader>Find contacts by name or phone</BlockHeader>
      <div className={css.searchBox}>
        <TextField
          fullWidth
          id="searchBox"
          name="searchBox"
          label="Search Contact"
          value={query}
          onChange={evt => dispatch(filterContacts(evt.target.value))}
          sx={{ marginBottom: '35px' }}
        />
      </div>
    </>
  );
}
