import React, { Component } from 'react'
import '../Styles/LoginStyle.css'
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import MyHeader from '../Components/MyHeader'
import icGoogle from '../Assets/Images/iconGoogle.svg';


export default class Login extends Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="login">
                <MyHeader navItem='hidden' user='hidden' hiring='hidden' />
                <p className="...">
                    Welcome to your professional community
                </p>

                <Form
                    name="basic"
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    style={{ marginLeft: 150 }}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ height: `50px` }} size="large" placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password style={{ height: `50px` }} size="large" placeholder="Password" />
                    </Form.Item>

                    <Form.Item name="forgot" >
                        <Button type="link" style={{ padding: 0 }}>Forgot password?</Button>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: `10px`}}>
                        <Button type='primary' size="large" shape="round" htmlType="submit" style={{ width: `100%`, height: `50px` }}>
                            Sign in
                        </Button>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: `10px`}}>
                    <div className="sign-in-form__or-divider">
                        <span className="sign-in-form__or-span">
                            or
                        </span>
                    </div>
                    </Form.Item>

                    <Form.Item >
                        <Button size="large" shape="round" style={{ width: `100%`, height: `50px` }} data-theme="dark">
                            <img className="iconGG" src={icGoogle} alt="GoogleIcon"/>Sign in with Google
                        </Button>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: `10px`}}>
                    <div style={{ textAlign: 'center' }}>
                        Not a member? <NavLink to="/register">Join now</NavLink>
                    </div>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
