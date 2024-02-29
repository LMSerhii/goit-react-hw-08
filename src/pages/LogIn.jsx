import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/LoginForm/LoginForm';
import { Box } from '@mui/material';
import BlockHeader from '../components/BlockHeader/BlockHeader';

export default function LogIn() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        width={'80%'}
        my={4}
        mr={'auto'}
        ml={'auto'}
        bgcolor={'#0f1c2b'}
        border={'1px solid #1f262e'}
        boxShadow={'rgba(0, 0, 0, 0.4) 0px 4px 8px'}
        borderRadius={'8px'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={20}
      >
        <BlockHeader>Log In</BlockHeader>
        <LoginForm />
      </Box>
    </div>
  );
}
