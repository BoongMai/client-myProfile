import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import Auth from "../../views/Auth";

function RegisterForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubSuccess = () => {
      
  }

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
                Register:
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
                Chưa có tài khoảng? <a href={"http://localhost:8080/login" || "http://127.0.0.1:8080/login"}>Đăng nhập !!!</a>
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
                    labelCol={{ span: 6 }}
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
                    labelCol={{ span: 6 }}
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
                    style={{
                      userSelect: "none",
                      fontWeight: 700,
                    }}
                    labelCol={{ span: 6 }}
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
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

                  <Form.Item wrapperCol={{ offset: 10, span: 24 }}>
                    <Button
                      style={{ width: " 120px", borderRadius: "4px" }}
                      type="primary"
                      htmlType="submit"
                      onClick={handleSubSuccess}
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

export default RegisterForm;
