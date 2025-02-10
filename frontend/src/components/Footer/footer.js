import React from "react";
import {Link} from "react-router-dom";

const footer = () => {
    return (
        <footer className="text-black-50 mt-xl-5">
            <div className="container ">
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3">
                        <h5>About us</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                        <p className="mb-0">
                            At Dressify, we believe fashion is more than just clothing—it's a way to express yourself.
                            Our mission is to provide stylish, high-quality, and affordable fashion for everyone. From
                            everyday essentials to statement pieces, we curate the best trends to keep you looking and
                            feeling your best.
                        </p>
                    </div>


                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                        <h5>Quick links</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                        <ul className="list-unstyled">
                            <li><Link to={"/products"} className="link-secondary link-underline-opacity-0">Shop</Link>
                            </li>
                            <li><Link to={"/manufacturers"} className="link-secondary link-underline-opacity-0">Our
                                Manufacturers</Link></li>
                            <li><Link to={"/shoppingCart"} className="link-secondary link-underline-opacity-0">Your
                                Shopping Cart</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3">
                        <h5>Contact</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                        <ul className="list-unstyled">
                            <li>My company</li>
                            <li>email@example.com</li>
                            <li>+ 33 12 14 15 16</li>
                            <li>123 Fashion Street, Skopje, Macedonia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default footer;