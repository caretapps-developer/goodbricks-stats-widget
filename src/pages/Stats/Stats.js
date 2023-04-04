import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import NumberFormat from 'react-number-format';
import { Stop } from '@material-ui/icons';

const pledgeColor = '#f6ce95';
const useStyles = makeStyles((theme) => ({
  closeButton: {
    marginTop: theme.spacing(-0.5),
    color: theme.palette.grey[500],
    marginLeft: theme.spacing(3),
    float: 'right',
  },
  flexGrowButton: {
    flexGrow: 1,
  },
  organizationContactLink: {
    borderBottom: '1px dotted',
  },
  listItemIcon: {
    '& .gbcpgnwgt-MuiListItemIcon-root': {
      minWidth: 'none',
    },
  },
  linerProgress: {
    '& .gbcpgnwgt-MuiLinearProgress-colorPrimary': {
      backgroundColor: pledgeColor,
    },
    // "& .gbcpgnwgt-MuiLinearProgress-barColorPrimary": {
    //   backgroundColor: "#342B50"
    // },
    '& .gbcpgnwgt-MuiLinearProgress-dashedColorPrimary': {
      backgroundColor: theme.palette.grey[400],
      backgroundImage: 'none',
    },
    '& .gbcpgnwgt-MuiLinearProgress-dashed': {
      animation: 'none',
    },
  },
}));

export default function Stats(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box>
        <Typography gutterBottom variant="h4" component="span">
          <NumberFormat
            displayType="text"
            thousandSeparator={true}
            prefix={'$'}
            value={props.campaign?.raised ? props.campaign?.raised : 0}
          />
        </Typography>
        <Typography gutterBottom paragraph={true} component="span">
          {' '}
          raised of{' '}
          <NumberFormat displayType="text" thousandSeparator={true} prefix={'$'} value={props.campaign.goal} />
        </Typography>
        <LinearProgress
          variant="buffer"
          value={props.campaign.percentage}
          valueBuffer={props.campaign.pledgePercentage}
          classes={{ root: classes.linerProgress }}
        />
        <Grid container spacing={2}>
          <Grid>
            <List dense={true}>
              <ListItem disableGutters>
                <Stop color="primary" />
                <ListItemText primary="Collected" />
              </ListItem>
            </List>
          </Grid>
          <Grid>
            <List dense={true}>
              <ListItem disableGutters>
                <Stop style={{ color: pledgeColor }} />
                <ListItemText primary="Pledged" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

Stats.propTypes = {
  campaign: PropTypes.object,
};
