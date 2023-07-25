import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button, Input, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Task from "./TodoTitle";
import { postTodos, fetchTodos } from "../actions/IndexAction";

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const onFinish = (values) => {
    dispatch(
      postTodos({
        id: Math.floor(Math.random() * 100),
        title: values.usertext,
      })
    );
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <Form name="basic" onFinish={onFinish}>
        <Row gutter={16} align="middle">
          <Col sm={16}>
            <Form.Item name="usertext" rules={[{ required: true }]}>
              <Input
                placeholder="Enter task description"
                style={{ width: "500px" }}
              />
            </Form.Item>
          </Col>
          <Col sm={8}>
            <Space>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                Add Task
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
      <>
        {tasks.map((task) => (
          <Task
            completed={task.completed}
            key={task.id}
            id={task.id}
            title={[task.title]}
            style={{ marginBottom: "1rem" }}
          />
        ))}
      </>
    </div>
  );
};

export default TasksList;
