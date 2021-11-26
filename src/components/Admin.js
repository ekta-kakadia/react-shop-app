import { connect } from "react-redux";
import { listUsers, deleteTodo } from "../redux/todo/actions";
import { useEffect, useState } from "react";
import { DeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import { Modal, Form, Input } from "antd";

const Admin = ({ listUsersAction, users, deleteTodoAction }) => {
  useEffect(() => {
    listUsersAction();
  }, [listUsersAction]);

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const showAddModal = () => {
    setAddModalVisible(true);
  };

  const handleOk = () => {
    setAddModalVisible(false);
  };

  const handleCancel = () => {
    setAddModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    // loginAction(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showDeleteModal = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteOk = () => {
    setDeleteModalVisible(false);
    deleteTodoAction();
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  return (
    <>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>
                  {user.name.firstname} {user.name.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td className="text-center">
                  <span>
                    <DeleteOutlined onClick={showDeleteModal} />
                  </span>{" "}
                  <span>
                    <UserAddOutlined onClick={showAddModal}/>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        title="Add User"
        visible={deleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        layout="vertical"
      >
        Are you sure you want to delete this user?
      </Modal>
      <Modal
        title="Add User"
        visible={addModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        layout="vertical"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your usernmae!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="Phone"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  const { users } = state.todo;
  return {
    users,
  };
};
export default connect(mapStateToProps, {
  listUsersAction: listUsers,
  deleteTodoAction: deleteTodo
})(Admin);
