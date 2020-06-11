import React  from 'react';
import axios from "axios"
import { Form, Input, Button } from 'antd';

class MyForm extends React.Component {

    onFinish = ( values , request , postID)  => {
        console.log('Success:', values);
        console.log('Success:', values.title, values.desc, request, postID);
        const _title = values.title;
        const _desc = values.desc;

        switch(request) {
            case "post" :
                axios.post('http://3.34.100.138:8000/api/post/', {
                    title : _title, 
                    desc : _desc
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
                break;
            case "put" :
                axios.put(`http://3.34.100.138:8000/api/post/${postID}/`, {
                    title : _title, 
                    desc : _desc
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
           
        window.location.reload()
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={values => this.onFinish(values, this.props.requestType, this.props.postID)}
            onFinishFailed={this.onFinishFailed}
            >
            <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'title' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Desc"
            name="desc"
            rules={[{ required: true, message: 'desc' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item >
            <Button type="primary" htmlType="submit">
            {this.props.bntType}
            </Button>
            </Form.Item>
            </Form>
  )}
};


export default MyForm
