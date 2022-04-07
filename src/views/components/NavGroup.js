import { animated, easings, useSpring } from '@react-spring/web'
import "./nav-group.css";
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function NavGroup() {

    const [init, setInit] = useState(true);

    useEffect(() => {
        setInit(false);
    }, []);

    const navLinkStyle = useSpring({
        opacity: init ? 0 : 1,
        config: {
            easing: easings.easeInBounce,
        }
    })

    const styleLinks = ({ isActive }) => ({
        height: "max-content",
        padding: "8px 26px 8px 12px",
        marginTop: 6,
        marginBottom: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        backgroundColor: "white",
        fontSize: 16,
        color: "#222",
        fontWeight: "400",
        boxShadow: "0px 0px 16px 0px rgba(80, 80, 80, 0.2)",
        ...(isActive && {
            color: "#92b535",
            fontWeight: "800",
            fontSize: 20,
        })
    })

    return (
        <div className="nav-link-group">

            <NavLink to="/menu" style={styleLinks}>
                <animated.div style={navLinkStyle}>
                    MENU
                </animated.div>
            </NavLink>

            <NavLink to="/find_us" style={styleLinks}>
                <animated.div style={navLinkStyle}>
                    FIND US
                </animated.div>
            </NavLink>

            <NavLink to="/hours" style={styleLinks}>
                <animated.div style={navLinkStyle}>
                    HOURS
                </animated.div>
            </NavLink>

        </div>
    )
}