import { animated, easings, useSpring } from '@react-spring/web';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./static-header.css";
import Typist from 'react-typist';
import { useLocation } from 'react-router-dom';

export default function StaticHeader() {

    const [init, setInit] = useState(true);
    const [locTog, setLocTog] = useState(true);
    const [duration, setDuration] = useState(400);
    const [typistToggle, setTypistToggle] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setInit(false);
    }, []);

    useEffect(() => {
        if (locTog) {
            setLocTog(false);
        } else {
            // navigated!
            setDuration(0);
            setInit(true);
            setTimeout(() => {
                setDuration(400);
                setInit(false);
                setTypistToggle(!typistToggle);
            }, 100);
        }
    }, [location]);

    const logoStyle = useSpring({
        scale: init ? 0 : 1,
        width: 120,
        height: 120,
        alignSelf: "center",
        config: {
            easing: easings.easeInOutExpo,
            duration: duration
        }
    });

    return (
        <div className="top-grad">
            <animated.div style={logoStyle}>
                <NavLink to="/">
                    <img src={logo} className="top-logo" />
                </NavLink>
            </animated.div>
            <Typist key={typistToggle} cursor={{ show: false }}>
                <Typist.Delay ms={500} />
                <div style={{
                    width: "100%",
                    fontFamily: "Brush Script MT",
                    fontWeight: "200",
                    marginTop: 4,
                    fontSize: 32,
                    color: "#d0ff4d",
                    textAlign: "center"
                }}>
                    Always Fresh
                </div>
            </Typist>
        </div>

    )
}