import { createMuiTheme } from '@mui/material';

const arcBlack = '#3e2b47';
const arcWhite = '#EEEEEE';
export default createMuiTheme({
  palette: {
    common: {
      arcBlack: `${arcBlack}`,
      arcWhite: `${arcWhite}`,
    },
    primary: {
      main: `${arcBlack}`,
    },
    secondary: {
      main: `${arcWhite}`,
    },
  },
  typography: {
    h3: {
      fontWeight: '300',
    },
  },
});
