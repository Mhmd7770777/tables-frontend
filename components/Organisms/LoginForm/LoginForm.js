import React, { useState } from "react";
import { Button, Form, Input, Checkbox } from "antd";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [logging, setLogging] = useState(true);

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {logging ? (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        ) : (
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        )}
        {logging ? (
          <Button type="primary" onClick={() => setLogging(false)}>
            Register
          </Button>
        ) : (
          <Button type="primary" onClick={() => setLogging(true)}>
            Already have an account
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
