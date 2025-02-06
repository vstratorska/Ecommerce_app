import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import {Link, useNavigate} from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                username: username,
                password: password,
            });
            login(response.data); // Assuming the backend returns the JWT toke
            props.onLoginSuccess();
            navigate("/products"); // Redirect to home page after login
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <form className="container" style={{marginTop: "30px"}} onSubmit={handleSubmit}>
            <div style={{fontSize: "30px"}}>Log in</div>
            <div className="mb-3">
                <input value={username}
                       onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="Username"
                       className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <input value={password}
                       onChange={(e) => setPassword(e.target.value)} name="password" type="password"
                       placeholder="Password"
                       className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="d-grid gap-2">
                 <button type="submit" className="btn btn-primary">Sign in</button>
                 <Link to={"/register"} type="submit" className="btn btn-light">Register here</Link>

            </div>
        </form>
    );
};

export default Login;


