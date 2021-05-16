import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { FooterComponent } from './components/footer/FooterComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { reducers } from './store/reducers';
import MainView from './views/main/main.view';

const store = createStore(reducers);
function App() {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <MainView />
      <FooterComponent />
    </Provider>
  );
}

export default App;
