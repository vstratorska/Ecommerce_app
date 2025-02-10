import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../Authentication/AuthContext";
import logo from '../../assets/logo.png';

const Header = (props) => {
    const {logout} = useAuth();
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const {userRoles} = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <header>
            <nav className="navbar container-fluid navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <img src={logo} className="img-fluid" alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav me-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/products"} onClick={() => {
                                    props.getProducts()
                                }} className="nav-link">All Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/manufacturers"} className="nav-link">Manufacturers</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu">
                                    {props.categories.map(c => {
                                        return <li><Link onClick={() => {
                                            props.getByCat(c)
                                        }} to={"/products"} className="dropdown-item">{c}</Link></li>
                                    })}
                                </ul>
                            </li>

                        </ul>
                    </div>
                    {userRoles.includes("ROLE_USER") &&
                        <Link to={"/shoppingCart"} className="btn btn-outline-warning border-0 text-dark">
                            <i class="bi bi-cart"></i> My Shopping Cart</Link>}
                    {userRoles.includes("ROLE_ADMIN") &&
                        <Link onClick={() => props.makeOrder()} className="btn btn-outline-info border-0 text-dark "
                              to={"/orders"}>
                            <i class="bi bi-bag-heart"></i> View Orders</Link>}
                    {userRoles.includes("ROLE_USER") &&
                        <Link onClick={() => props.getOrders()} className="btn btn-outline-info border-0 text-dark"
                              to={"/orders"}>
                            <i class="bi bi-bag-heart"></i> View Your Orders</Link>}
                    <div>
                        {!isAuthenticated &&
                            <Link to={"/login"} className="btn btn-outline-primary border-0 text-dark" type="submit"><i
                                class="bi bi-person"></i>Login</Link>}
                        {isAuthenticated &&
                            <button onClick={handleLogout} className="btn btn-outline-primary border-0 text-dark">
                                <i class="bi bi-person"></i>Logout</button>}
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;