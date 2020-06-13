import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { connect } from 'react-redux'

import { authLogin } from '../store/actions/auth.js'
// import actionTypes from '../store/actions/actionTypes'

class NormalLoginForm extends React.Component {
    onFinish = values => {
        console.log('Received values of form: ', values);
        console.log(values.username, values.password)
        this.props.onAuth(values.username, values.password);

        // if (this.props.error) {
        //     console.log("error ", this.props.error)
        // } else {
        //     console.log("error ", this.props.error)
        //     this.props.history.push('/')
        // }
    };
    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <div>
                {errorMessage}
                {
                    this.props.token ?

                    <p>Login success</p>

                    :

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                    </Button>
                    Or
                    <Link to='/signup/'>
                                Sign up
                    </Link>
                        </Form.Item>
                    </Form>
                }
            </div>
        );
    }
}

const mapReduxStateToReactProps = state => {
    return {
        token: state.token,
        error: state.error,
        loading: state.loading
    }
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onAuth: (username, password) => dispatch(authLogin(username, password))
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(NormalLoginForm)

