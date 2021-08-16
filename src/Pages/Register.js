import React, { Component } from 'react'
import '../Styles/RegisterStyle.css'
import { Form, Input, Button } from 'antd';
import icGoogle from '../Assets/Images/iconGoogle.svg';
import { NavLink } from 'react-router-dom'

export default class Register extends Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="register">
                <div className="register-container">
                    <h1 >
                        CREATE ACCOUNT
                    </h1>

                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
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
                            <Input.Password style={{ height: `50px` }} size="large" placeholder="Password (6 or more characters)" />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password style={{ height: `50px` }} size="large" placeholder="Confirm your password"/>
                        </Form.Item>

                        <Form.Item style={{ marginBottom: `10px` }}>
                            <Button type='primary' size="large" shape="round" htmlType="submit" style={{ width: `100%`, height: `50px` }}>
                                Sign up
                            </Button>
                        </Form.Item>

                        <Form.Item style={{ marginBottom: `10px` }}>
                            <div className="sign-in-form__or-divider">
                                <span className="sign-in-form__or-span">
                                    or
                                </span>
                            </div>
                        </Form.Item>

                        <Form.Item >
                            <Button size="large" shape="round" style={{ width: `100%`, height: `50px` }} onClick={() => this.onSignIn
                            } data-theme="dark">
                                <img className="iconGG" src={icGoogle} alt="GoogleIcon" />Sign up with Google
                            </Button>
                        </Form.Item>

                        <Form.Item style={{ marginBottom: `10px` }}>
                            <div style={{ textAlign: 'center' }}>
                                Have an account? <NavLink to="/login">Sign in</NavLink>
                            </div>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        )
    }
}
