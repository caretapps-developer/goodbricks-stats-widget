import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box, makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import NumberFormat from 'react-number-format';

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
      backgroundColor: theme.palette.grey[400],
    },
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
          // valueBuffer={props.campaign.pledgePercentage}
          classes={{ root: classes.linerProgress }}
        />
      </Box>
    </React.Fragment>
  );
}

Stats.propTypes = {
  campaign: PropTypes.object,
};
