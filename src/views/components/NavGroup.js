import { animated, easings, useSpring } from '@react-spring/web'
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function NavGroup() {

    const [init, setInit] = useState(true);

    useEffect(() => {
        setInit(false);
    }, []);

    const navLinkStyle = useSpring({
        scale: init ? 0 : 1,
        config: {
            easing: easings.easeInOutExpo,
        }
    })

    const styleLinks = ({ isActive }) => ({
        height: "max-content",
        padding: "4px 8px 4px 8px",
        marginTop: 6,
        marginBottom: 6,
        borderRadius: 4,
        fontSize: 16,
        backgroundColor: "white",
        boxShadow: "0px 0px 16px 0px rgba(80, 80, 80, 0.2)",
        ...(isActive ? {
            color: "#92b535",
            fontWeight: "700",
        } : {
            color: "#222",
            fontWeight: "400",
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