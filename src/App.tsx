import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { PreedaNavigation } from './navigation/PreedaNavigation';
import { preedaTheme } from './theme/PreedaTheme';

const App: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <ThemeProvider theme={preedaTheme}>
        <PreedaNavigation />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
