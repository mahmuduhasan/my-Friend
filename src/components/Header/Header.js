import React from 'react';
import logo from './logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
                <p><span className="firstPart">F.R.</span><span className="secondPart">I.E.N.</span><span className="thirdPart">D.S.</span></p>
            </div>
            <div className="friendInfo">
                <a href="/friends" className="friend">Friends</a>
                <a href="/salary" className="salary">Salary</a>
                <a href="/location" className="location">Location</a>
            </div>
        </div>
    );
};

export default Header;