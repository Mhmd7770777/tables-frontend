import React from "react";

import { Form, Input, Button, Select, DatePicker } from "antd";
import { StyledContainer } from "./style";

const AddArtistForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <StyledContainer>
      <h2>Add an artist</h2>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label=" name">
          <Input />
        </Form.Item>
        <Form.Item label="age">
          <Input />
        </Form.Item>
        <Form.Item label="country">
          <Select>
            <Select.Option value="es">Spain</Select.Option>
            <Select.Option value="fr">France</Select.Option>
            <Select.Option value="ge">Germany</Select.Option>
            <Select.Option value="US">United States</Select.Option>
            <Select.Option value="UK">United Kingdom</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="birthday">
          <DatePicker />
        </Form.Item>

        <Form.Item label>
          <Button type="primary" htmlType="submit">
            Add Artist
          </Button>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};

export default AddArtistForm;
