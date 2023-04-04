import { createMuiTheme } from '@material-ui/core/styles';

import typography from './typography';
import breakpoints from './breakpoints';
import props from './props';
import shadows from './shadows';
import { red } from '@material-ui/core/colors';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import variables from './variables';

const theme = createMuiTheme({
  spacing: 8,
  breakpoints: breakpoints,
  props: props,
  typography: typography,
  shadows: shadows,
  palette: {
    primary: {
      // main: '#556cd6',
      // main: '#152542',
      // main: '#1f61dc',
      // main: '#39c38d',
      // main: '#ffa700',
      // main: '#f05537',
      // main: '#ff6961',
      // main: '#fdb933',
      // main: '#01B757',
      // main: '#03a87c',
      main: '#21ce99',
      // main: '#31bdd0',
      // main: '#c9d9f7',
      contrastText: '#ffffff',
      // contrastText: '#152542',
    },
    secondary: {
      main: '#1b1b1d',
      // main: '#21ce99',
      // contrastText:"#152542"
      // main: '#ff7c57',
      // main: '#03a87c',
      // main: '#01B757',
      // main: '#00b964',
      // main: '#00e676',
      // main: '#ffa700',
      // main: '#556cd6',
      // main: '#152542',
      // main: '#1f61dc',
      // main: '#39c38d',
      // main: '#ffa700',
      // main: '#ff6961',
      // main: '#c9d9f7',
      // main: '#f05537',
      // main: '#008145',
    },
    text: {
      // primary: '#152542'
      primary: '#1b1b1d',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  variables,
});
export default responsiveFontSizes(theme);
