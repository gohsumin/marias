import './App.css';
import Home from './views/Home';
import { Link, Routes } from 'react-router-dom';
import logo from './assets/logo.png';
import Menu from './views/Menu';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

function App() {

  const initialHeaderHeight = 250;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(initialHeaderHeight);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  {/* HEADER
      -> GROWS when:
        • scrolling above 25vh from '/'
      -> IS BIGGER when:
        • at '/' route and scroll y < 25vh
      -> SHRINKS when:
        • scrolling past 25vh from '/'
      -> IS SMALLER when:
        • scroll y > 25vh
        • not at '/'
      */}
  useEffect(() => {
    if (location.pathname === "") {
      setHeaderHeight(initialHeaderHeight - Math.min(scrollPosition, 150));
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <div className="App">

      {/* HEADER */}
      <div className="nav" style={{
        height: headerHeight,
      }}>
        <img src={logo} style={{
          aspectRatio: 1,
          height: "90%",
        }} />
      </div>

      {/* MARGIN TOP CONTAINER */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        marginTop: headerHeight,
        width: "100%",
        flex: 1,
      }} >
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
        </Routes>
      </div>

      

    </div>
  );
}

export default App;
