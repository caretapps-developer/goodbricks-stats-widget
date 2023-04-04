import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import SocialMediaShareLinks from './SocialMediaShareLinks';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

export default function ShareCampaign() {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid container>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Box mt={largeScreen ? 0 : 10} p={largeScreen ? 5 : 0}>
          <Box px={2} my={3}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Campaigns shared on social media raise up to 5x more
            </Typography>
          </Box>
          <Box my={3}>
            <Typography variant="body1" component="h2" gutterBottom color="textPrimary">
              Help us spread the word
            </Typography>
          </Box>
          <Box my={3}>
            <SocialMediaShareLinks />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
