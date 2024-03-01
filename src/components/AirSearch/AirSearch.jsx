import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuery } from '../../redux/filters/selectors';
import { filterContacts } from '../../redux/filters/filtersSlice';

export default function AirSearch({ isVisible }) {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  return (
    <Box
      width={'100%'}
      my={3}
      display={isVisible ? 'flex' : 'none'}
      alignItems="center"
      justifyContent="center"
      gap={4}
      // p={2}
      // sx={{
      //   position: 'absolute',
      //   top: '0',
      //   left: '50%',
      //   transform: 'translate(-50%, -50%)',
      // }}
    >
      <OutlinedInput
        fullWidth
        id="searchBox"
        name="searchBox"
        value={query}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
        sx={{ borderRadius: '15px' }}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon
              sx={{
                fill: '#fff',
                boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
              }}
            />
          </InputAdornment>
        }
      />
    </Box>
  );
}
