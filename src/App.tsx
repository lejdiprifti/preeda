import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { PreedaNavigation } from './navigation/PreedaNavigation';
import { reducers } from './store/reducers';
import { preedaTheme } from './theme/PreedaTheme';

const App: React.FC = (): JSX.Element => {
  const store = createStore(reducers);
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={preedaTheme}>
          <PreedaNavigation />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
