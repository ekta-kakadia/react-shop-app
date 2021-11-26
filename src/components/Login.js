import { Card, Col, Row, Button, Form, Input, notification } from "antd";
import { login } from "../redux/todo/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ loginAction, notificationMsg }) => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);
    loginAction(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (notificationMsg.token) {
      history.push("products");
      notification["success"]({
        message: "Login",
        description: "Logged in Successfully",
      });
    }
  }, [notificationMsg]);

  return (
    <>
      <Row className="justify-content-center">
        <Col sm="6">
          <Card body title="Login">
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
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  const { users, notificationMsg } = state.todo;
  return {
    users,
    notificationMsg,
  };
};
export default connect(mapStateToProps, {
  loginAction: login,
})(Login);
