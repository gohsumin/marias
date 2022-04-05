import './App.css';
import Home from './views/Home';
import Menu from './views/Menu';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StaticHeader from './views/components/StaticHeader';
import NavGroup from './views/components/NavGroup';

function App() {

  return (
    <div className="App">

      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </div>

      {/* HEADER GRADIENT + CENTER LOGO */}
      <StaticHeader />

      {/* TOP RIGHT NAVIGATION GROUP */}
      <NavGroup />

      {/* FOOTER MENU */}
      <div className="bottom-grad" />

    </div>
  );
}

export default App;
