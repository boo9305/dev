import React from 'react'
import {Link} from 'react-router-dom'

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { connect } from 'react-redux'

import actions from '../store/actions/auth.js'

class NormalLoginForm extends React.Component {

    
  onFinish = values => {
      console.log('Received values of form: ', values);
      console.log(this.props)
      this.props.onAuth(values.username, values.password);
  };

    render() {
        return (
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
      );
  }
}


const mapReduxDispatchToReactProps = dispatch => {
    return {
        onAuth: (username,password) => dispatch(actions.authLogin(username,password))
    }
}

export default connect(null, mapReduxDispatchToReactProps)(NormalLoginForm)

