import React from 'react'

import { List, Avatar } from 'antd';

class MyUser extends React.Component {
    render () {
        return (

            <List
            itemLayout="horizontal"
            dataSource={this.props.data}
            renderItem={item => (
                <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href={`/${item.pk}`}>{item.title}</a>}
                description={item.desc}
                />
                </List.Item>
            )}
            />

    )

    }
}

export default MyUser
