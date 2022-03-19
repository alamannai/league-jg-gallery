import React from 'react';
import useStyles from '../styles';
import { Typography } from '@mui/material';

const Footer = () =>  (
    <>
       <footer sx={useStyles.footer}>
              <Typography variant='h6' align='center' gutterBottom>
                Footer
              </Typography>
              <Typography variant='subtitle1' align='center' color='textSecondary'>
                Thank you for visit
              </Typography>
      </footer>
    </>   
    );

export default Footer;