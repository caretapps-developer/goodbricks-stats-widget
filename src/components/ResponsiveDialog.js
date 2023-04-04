import Dialog from '@material-ui/core/Dialog/Dialog';
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { makeStyles } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    marginTop: theme.spacing(-0.5),
    color: theme.palette.grey[500],
    marginLeft: theme.spacing(3),
    float: 'right',
  },
  dialogTitle: {
    marginTop: theme.spacing(1),
  },
  dialogContent: (props) => ({
    [theme.breakpoints.up('md')]: {
      minHeight: props.minHeight ? props.minHeight : '600px',
    },
  }),
}));

export default function ResponsiveDialog(props) {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles(props);

  return (
    <Dialog
      maxWidth="sm"
      fullScreen={!largeScreen}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      open={props.open}>
      <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
        {props.title}
        <IconButton size="small" aria-label="close" className={classes.closeButton} onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>{props.content}</DialogContent>
    </Dialog>
  );
}

ResponsiveDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  content: PropTypes.object,
  title: PropTypes.string,
};
