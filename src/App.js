import "./App.css";
import "antd/dist/antd.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Import component
// import Landing from "./component/layout/Landing";
import Auth from "./views/Auth";
import Landing from "./component/layout/Landing";
import LoginForm from "./component/auth/LoginForm";
import RegisterForm from "./component/auth/RegisterForm";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login" />}></Route>
        <Route exact path="/login" element={<LoginForm />}></Route>
        <Route exact path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
