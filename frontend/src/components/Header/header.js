import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../Authentication/AuthContext";

const Header = (props) => {
    const { logout } = useAuth();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const {userRoles} = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login"); // Redirect to login page after logout
    };
    return (
        <header>
            <nav className="navbar container navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Dressify</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className=" navbar-nav me-auto " style={{marginLeft: "400px"}}>
                            <li className="nav-item me-auto">
                                <Link to={"/home"} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item me-auto">
                                <Link to={"/products"} className="nav-link">Products</Link>
                            </li>
                            { userRoles.includes("ROLE_ADMIN") &&
                            <li className="nav-item me-auto">
                                <Link to={"/manufacturers"} className="nav-link">Manufacturers</Link>
                            </li>}
                        </ul>
                    </div>
                    { userRoles.includes("ROLE_ADMIN") &&
                        <Link onClick={() => props.makeOrder()} className="btn btn-info" to={"/orders"}>View Orders</Link>}
                    { userRoles.includes("ROLE_USER") &&
                        <Link onClick={() => props.getOrders()} className="btn btn-info" to={"/orders"}>View Your Orders</Link>}
                    <div>
                        { userRoles.includes("ROLE_USER") &&
                            <Link to={"/shoppingCart"} className="btn btn-warning">My Shopping Cart</Link>}
                        { !isAuthenticated && <Link to={"/login"} className="btn btn-outline-dark" type="submit">Login</Link>}
                        { isAuthenticated && <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;