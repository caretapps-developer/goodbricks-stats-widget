import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import MainContent from './MainContent';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5),
    },
    padding: 0,
  },
  sidebar: {
    boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.01), 0 3px 24px rgba(48, 51, 51, 0.09)',
  },
}));

function Index({ campaign }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.container}>
        <main>
          <MainContent campaign={campaign} />
        </main>
      </Container>
    </React.Fragment>
  );
}

export default Index;
