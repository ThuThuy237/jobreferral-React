import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import tt from '../Assets/Images/tt.png'
import '../Styles/HeaderStyle.css'

export default function MyHeader(props) {
    return (
        <div id="myHeader">
            <div className="image-container">
                <div className="logo">
                <NavLink to="/">
                    <img alt="logo" src={tt} />
                </NavLink >
                </div>
            </div>
            <div className="navbar-container">
                <div className="nav-item-container" style={{visibility: props.navItem}}>
                    <NavLink to="/">Home</NavLink >
                    <NavLink to="/about">About Us</NavLink >
                    <NavLink to="/">Contact</NavLink >
                    <NavLink to="/">Find Jobs</NavLink >
                    <NavLink to="/">Company Review</NavLink >
                </div>
                <div className="user-container" style={{visibility: props.user}}>
                    <NavLink to="/register">Join Now</NavLink >
                    <Button shape="round" size="large" >
                        <NavLink to="/login">Sign In</NavLink >
                    </Button>
                    
                </div>
                <div className="hiring-container"style={{visibility: props.hiring}}>
                    <NavLink to="/login">Post A Job</NavLink >
                </div>
            </div>
        </div>
    )
}
