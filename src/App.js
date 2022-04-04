import './App.css';
import { animated, easings, useSpring } from '@react-spring/web'
import Home from './views/Home';
import { NavLink, Routes } from 'react-router-dom';
import logo from './assets/logo.jpg';
import Menu from './views/Menu';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

function App() {

  const location = useLocation();
  const [init, setInit] = useState(true);

  useEffect(() => {
    setInit(false);
  }, []);

  const logoStyle = useSpring({
    scale: init ? 0 : 1,
    width: 100,
    height: 100,
    alignSelf: "center",
    config: {
      easing: easings.easeInOutExpo,
    }
  });

  const navLinkStyle = useSpring({
    scale: init ? 0 : 1,
    config: {
      easing: easings.easeInOutExpo,
    }
  })

  const styleLinks = ({ isActive }) => ({
    height: "max-content",
    padding: "2px 6px 2px 6px",
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 4,
    fontSize: 16,
    ...(isActive ? {
      backgroundColor: "brown",
      color: "white",
      fontWeight: "700",
    } : {
      backgroundColor: "white",
      color: "#222",
      fontWeight: "400",
    })
  })

  return (
    <div className="App">

      {/* HEADER GRADIENT + CENTER LOGO */}
      <div className="top-grad">
        <animated.div style={logoStyle}>
          <NavLink to="/">
            <img src={logo} style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%"
            }} />
          </NavLink>
        </animated.div>
      </div>

      {/* NAV LINKS */}
      <div className="nav-link-group">

        <NavLink to="/menu" style={styleLinks}>
          <animated.div style={navLinkStyle}>
            Menu
          </animated.div>
        </NavLink>

        <NavLink to="/address" style={styleLinks}>
          <animated.div style={navLinkStyle}>
            Address
          </animated.div>
        </NavLink>

        <NavLink to="/hours" style={styleLinks}>
          <animated.div style={navLinkStyle}>
            Hours
          </animated.div>
        </NavLink>
      </div>

      {/* MARGIN TOP CONTAINER */}
      <div className="nav-bodies">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </div>

      {/* FOOTER MENU */}


    </div>
  );
}

export default App;
