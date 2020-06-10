import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

class MyForm extends React.Component {
  render() {
  return (
    <div>
      <Form>
        <Form.Item label="Title">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Desc">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )}
};

    
export default MyForm
