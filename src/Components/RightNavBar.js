import React, { useLayoutEffect } from 'react';
import { Button, Dropdown, Menu, Avatar } from 'antd';
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
                        case '3':
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
                    <Menu onClick={onClick}>
                        <Menu.Item key="0">
                            1st menu item
                        </Menu.Item>
                        <Menu.Item key="1">
                            2nd menu item
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="3">Log out</Menu.Item>
                    </Menu>
                );
                return <>

                    <Dropdown overlay={menu} >
                        <Link to='/' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {userLogin.username} {userLogin.avatar ? <Avatar src={userLogin.avatar} /> :
                                <Avatar >{userLogin.username.charAt(0).toUpperCase()}</Avatar>}
                        </Link>
                    </Dropdown>
                </>
            } else {
                return <>
                    <Button shape="round" size="large" style={{ borderColor: '#fa8914' }}>
                        <Link to="/register">Join Now</Link >
                    </Button>
                    <Button shape="round" size="large" style={{ backgroundColor: '#38b6ff', color: '#fff' }}>
                        <Link style={{ backgroundColor: '#38b6ff', color: '#fff' }} to="/login">Sign In</Link >
                    </Button>
                    <Link className={myStyles.stick} to="/login">Post A Job</Link >
                </>

            }
        }, [userLogin, dispatch, loading]);
    return (
        <div>
            {renderUser()}
        </div>
    )
}
