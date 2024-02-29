import { Box, Typography } from '@mui/material';

const styles = {
  container: {
    paddingTop: '185px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    maxWidth: '1060px',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  titleSpan: {
    color: 'rgb(51, 153, 255)',
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: '42px', textAlign: 'center', fontWeight: 500 }}
            gutterBottom
          >
            <span style={styles.titleSpan}>
              Don`t lose touch with those who matter to you.
            </span>
            <br />
            <span>
              Keep your contacts in one place with our app. Our app is the best
              way to organize your social life.
            </span>
            <span role="img" aria-label="Greeting icon">
              📲
            </span>
          </Typography>
        </Box>
      </div>
    </>
  );
}
