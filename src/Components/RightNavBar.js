import React, { useLayoutEffect } from 'react';
import { Button, Dropdown, Menu, Avatar, Row, Col } from 'antd';
import { actLogout, getUserLogin } from '../reducers/Login/action';
import myStyles from '../Styles/HeaderStyle.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function RightNavBar() {
    const { userLogin, loading } = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        const action = getUserLogin();
        dispatch(action);
    }, [dispatch]);


    const renderUser = React.useCallback(
        () => {
            if (loading) { return <></> }
            if (userLogin) {
                const onClick = ({ key }) => {
                    switch (key) {
                        case '5':
                            logout();
                            break;
                        default:
                            break;
                    }
                }

                const logout = () => {
                    const action = actLogout();
                    dispatch(action);
                }


                const menu = (
                    <Menu onClick={onClick} style={{ width: '20vw' }}>

                        <Menu.Item key="0" className={myStyles.hover}>
                            <Row style={{ alignItems: 'center' }}>
                                <Col span={6} offset={2}>{userLogin.avatar ? <Avatar size={64} src={userLogin.avatar} /> :
                                    <Avatar size={64}>{userLogin.username.charAt(0).toUpperCase()}</Avatar>}</Col>
                                <Col span={12} offset={1}>
                                    <div className={myStyles.userNameMenu}>{userLogin.username}</div>
                                    <div>{userLogin.email}</div>
                                </Col>
                            </Row>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="1" style={{ padding: '10px 40px' }}> Manage Post</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="2" style={{ padding: '10px 40px' }}> Account Settings</Menu.Item>
                        <Menu.Item key="3" style={{ padding: '10px 40px' }}> Public Profile</Menu.Item>
                        <Menu.Item key="4" style={{ padding: '10px 40px' }}> Edit Profile</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="5" style={{ padding: '10px 40px' }}>Log out</Menu.Item>
                    </Menu>
                );
                return <>

                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Link to='/' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {userLogin.username} {userLogin.avatar ? <Avatar src={userLogin.avatar} /> :
                                <Avatar >{userLogin.username.charAt(0).toUpperCase()}</Avatar>}
                        </Link>
                    </Dropdown>
                    <Link className={myStyles.stick} to="/r-register">Post A Job</Link >
                </>
            } else {
                return <>
                    <Button shape="round" size="large" style={{ borderColor: '#fa8914' }}>
                        <Link to="/register">Join Now</Link >
                    </Button>
                    <Button shape="round" size="large" style={{ backgroundColor: '#38b6ff', color: '#fff' }}>
                        <Link style={{ backgroundColor: '#38b6ff', color: '#fff' }} to="/login">Sign In</Link >
                    </Button>
                    <Link className={myStyles.stick} to="/r-register">Post A Job</Link >
                </>

            }
        }, [userLogin, dispatch, loading]);
    return (
        <div>
            {renderUser()}
        </div>
    )
}
