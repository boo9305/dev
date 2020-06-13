import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../css/Layout.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions  from '../store/actions/auth'


const { Header, Content, Footer } = Layout;
class MyLayout extends React.Component {
    render() {
        console.log("MyLaout")
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {
                            this.props.isAuthenticated ?
                            <Menu.Item key="2" onClick={this.props.logout}>Logout </Menu.Item>
                            :
                            <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
                        }
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

const mapReduxDispatchToReactProps = (dispatch) => {
    return {
        logout : () => {
            dispatch(actions.logout())
        }
    }
}

export default connect(null, mapReduxDispatchToReactProps)(MyLayout)
// export default MyLayout

