import { Col, Row } from "antd";
import LoginForm from "../component/auth/LoginForm";
import RegisterForm from "../component/auth/RegisterForm";
import styles from "./views.css"

function Auth({ authRouter }) {

    return ( 
        <div>
            <Col span={24}>
                <Row align="middle" justify="center">
                    <Col span={24}>
                        Chào !!!
                    </Col>
                </Row>
            </Col>
        </div>
     )
}

export default Auth;