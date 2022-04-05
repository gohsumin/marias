import './App.css';
import React from 'react';
import StaticHeader from './views/components/StaticHeader';
import NavGroup from './views/components/NavGroup';

function App() {

  return (
    <div className="App">

      {/* HEADER GRADIENT + CENTER LOGO */}
      <StaticHeader />

      {/* TOP RIGHT NAVIGATION GROUP */}
      <NavGroup />

      {/* FOOTER MENU */}


    </div>
  );
}

export default App;
