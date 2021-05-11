import React from 'react';
import './App.css';
import { FooterComponent } from './components/footer/FooterComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { MainBodyComponent } from './components/main-body/MainBodyComponent';

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MainBodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
