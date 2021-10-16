import React from 'react';
import { Button, Row, Col, } from 'antd';
import { NavLink } from 'react-router-dom';
import tt from '../Assets/Images/tt.png';
import myStyles from '../Styles/HeaderStyle.module.scss'

export default function MyHeader() {
    return (
        <Row id={myStyles.myHeader}>
            <Col className={myStyles.imageContainer} span={4}>
                <div className={myStyles.logo}>
                    <NavLink to="/">
                        <img alt="logo" src={tt} />
                    </NavLink >
                </div>
            </Col>
            <Col className={myStyles.navItemContainer} span={12}>
                <NavLink to="/">Home</NavLink >
                <NavLink to="/about">About Us</NavLink >
                <NavLink to="/contact">Contact</NavLink >
                <NavLink to="/find-job">Find Jobs</NavLink >
                <NavLink to="/company-review">Company Review</NavLink >
            </Col>
            <Col className={myStyles.navItemContainer} span={6}>
                <Button shape="round" size="large"  style={{borderColor: '#fac414'}}>
                    <NavLink to="/register">Join Now</NavLink >
                </Button>
                <Button shape="round" size="large" style={{backgroundColor: '#38b6ff', color: '#fff'}}>
                    <NavLink style={{backgroundColor: '#38b6ff', color: '#fff'}} to="/login">Sign In</NavLink >
                </Button>
                <NavLink className={myStyles.stick} to="/login">Post A Job</NavLink >
            </Col>
        </Row>
    )
}
