import React from 'react';
import { Grid } from '@material-ui/core';
import Stats from './Stats';

export default function MainContent({ campaign, onDonateClick }) {
  return (
    <React.Fragment>
      {campaign.organization.publicId && campaign.title && (
        <Grid container>
          <Grid item xs={12}>
            <Stats campaign={campaign} />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}
