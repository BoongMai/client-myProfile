import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
import Auth from "../../views/Auth";
import styles from "./Auth.css";

function LoginForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ padding: 20 }}>
      <Col span={24} className={"main__content"}>
        <Row>
          <Col
            style={{
              padding: 20,
              display: "flex",
              justifyContent: "center",
              borderRight: "1px solid #000",
            }}
            span={12}
          >
            <Auth />
          </Col>
          <Col style={{ padding: 20 }} span={12}>
            <Row>
              <Col
                style={{
                  marginLeft: 40,
                  userSelect: "none",
                  fontSize: 32,
                  fontWeight: 700,
                }}
                span={24}
              >
                Login:
              </Col>
              <Col
                style={{
                  marginLeft: 40,
                  userSelect: "none",
                  fontSize: 12,
                  fontWeight: 500,
                }}
                span={24}
              >
                Chưa có tài khoảng? <a href={"http://localhost:8080/register" || "http://127.0.0.1:8080/register"}>Đăng ký !!!</a>
              </Col>

              <Col style={{ padding: 40 }} span={24}>
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    style={{
                      userSelect: "none",
                      fontWeight: 700,
                    }}
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
                    style={{
                      userSelect: "none",
                      fontWeight: 700,
                    }}
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
                    wrapperCol={{ offset: 10, span: 16 }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: " 120px", borderRadius: "4px" }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default LoginForm;
