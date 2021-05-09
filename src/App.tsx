import React from 'react';
import './App.css';
import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { MainBodyComponent } from './components/MainBodyComponent';

function App() {
  return (
    <React.Fragment>
        <HeaderComponent/>
        <MainBodyComponent/>
        <FooterComponent/>
    </React.Fragment>
  );
}

export default App;
