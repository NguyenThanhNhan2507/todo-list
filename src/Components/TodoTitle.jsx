import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Modal, Checkbox } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { putTodos, deleteTodos, checkTodo } from "../actions/IndexAction";

const { confirm } = Modal;

const TodoList = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    dispatch(checkTodo(id, e.target.checked));
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure you want to delete this task?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteTodos(id));
      },
    });
  };

  const showEditModal = () => {
    confirm({
      title: "Edit task",
      content: (
        <div>
          <p>Please enter the new task description:</p>
          <input id="edit-input" defaultValue={title} />
        </div>
      ),
      okText: "Save",
      cancelText: "Cancel",
      onOk() {
        const newDesc = document.getElementById("edit-input").value;
        dispatch(
          putTodos({
            id: id,
            title: newDesc,
          })
        );
      },
    });
  };

  return (
    <Row className="mt-2">
      <Col sm={2}>
        <Checkbox checked={completed} onChange={handleCheckboxChange} />
      </Col>
      <Col sm={14}>
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {title}
        </span>
      </Col>
      <Col sm={4}>
        <Button onClick={showEditModal} icon={<EditOutlined />} size="large" />
        <Button
          onClick={showDeleteConfirm}
          icon={<DeleteOutlined />}
          size="large"
        />
      </Col>
    </Row>
  );
};

export default TodoList;
