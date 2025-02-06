import React, {use, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Register= (props) => {

    const navigate = useNavigate();
    const [user, setUser] = React.useState({
        username: "",
        password: "",
        repeatPassword: "",
        name: "",
        surname: ""
    })

    const handleChange = (e) =>
    {
        setUser( {
                ...user,
                [e.target.name] : e.target.value
            }

        )
    }

    const formSubmited = (e) => {
        e.preventDefault();
        const username = user.name;
        const password = user.password;
        const repeatPassword = user.repeatPassword;
        const name = user.name;
        const surname = user.surname;

        props.reg(username, password, repeatPassword, name, surname);
        navigate("/products");
    }

    return (
        <form className="container" style={{marginTop: "30px"}} onSubmit={formSubmited}>
            <div style={{fontSize: "30px"}}>Register</div>
            <div className="mb-3">
                <input onChange={handleChange} name="username" type="text" placeholder="Username" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <input onChange={handleChange} name="password" type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <input onChange={handleChange} name="repeatPassword" type="password" placeholder="Repeat Password" className="form-control"
                       id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <input onChange={handleChange} name="name" type="text" placeholder="Name" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <input onChange={handleChange} name="surname" type="text" placeholder="Surname" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
            </div>


            <div className="d-grid gap-2" style={{marginTop: "20px"}}>
                <button type="submit" className="btn btn-primary">Sign up</button>
                <Link to={"/login"} type="submit" className="btn btn-light">Already have an account? Login here!</Link>
            </div>

        </form>
    )
}

export default Register;