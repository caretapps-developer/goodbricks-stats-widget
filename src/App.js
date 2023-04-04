import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import maTheme from './theme/styles';

import relativeTime from 'dayjs/plugin/relativeTime';
import * as dayjs from 'dayjs';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import Stats from './pages/Stats';

dayjs.extend(relativeTime);

const generateClassName = createGenerateClassName({
  seed: 'gbcpgnwgt',
});

function App({ campaign }) {
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <MuiThemeProvider theme={maTheme}>
        <Stats campaign={campaign} />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
