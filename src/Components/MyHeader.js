import React from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import tt from '../Assets/Images/tt.png';
import myStyles from '../Styles/HeaderStyle.module.scss';
import RightNavBar from './RightNavBar';

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
                <NavLink exact activeClassName={myStyles.active} to="/">Home</NavLink >
                <NavLink activeClassName={myStyles.active} to="/about">About Us</NavLink >
                <NavLink activeClassName={myStyles.active} to="/contact">Contact</NavLink >
                <NavLink activeClassName={myStyles.active} to="/find-job">Find Jobs</NavLink >
                <NavLink activeClassName={myStyles.active} to="/company-review">Company Review</NavLink >
            </Col>
            <Col className={myStyles.navItemContainer} span={6}>
                <RightNavBar/>
            </Col>
        </Row>
    )
}
