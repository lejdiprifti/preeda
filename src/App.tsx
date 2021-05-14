import React from 'react';
import './App.css';
import { FooterComponent } from './components/footer/FooterComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { MainView } from './views/main/MainView';

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MainView />
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
