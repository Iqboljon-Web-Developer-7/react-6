import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useUpdateUserMutation } from "@/redux/api/category-api";
import { v4 as uuid } from "uuid";

const UniModal = ({ id, user, open, SetOpen }) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const onFinish = (values) => {
    updateUser({ id: user.id, body: values });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="bg-white p-4 rounded-md w-full max-w-96"
      name="basic"
      onFinish={(values) => onFinish(values)}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="fname"
        initialValue={user.fname}
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Surname"
        name="lname"
        initialValue={user.lname}
        rules={[
          {
            required: true,
            message: "Please input your Surname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={user.job}
        label="Job"
        name="job"
        rules={[
          {
            required: true,
            message: "Please input your Job!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={user.bio}
        label="Bio"
        name="bio"
        rules={[
          {
            required: true,
            message: "Please input your Bio!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        initialValue={user.gender}
        label="Gender"
        name={"gender"}
        rules={[
          {
            required: true,
            message: "Please input your Gender",
          },
        ]}
      >
        <Select className="z-10 relative">
          <Select.Option value=""></Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value="Male">Male</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item className="flex items-center justify-center mt-10">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UniModal;
